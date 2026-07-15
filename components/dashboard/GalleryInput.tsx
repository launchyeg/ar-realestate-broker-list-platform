"use client";

import { useState, useRef } from "react";

interface Props {
  images: string[];
  onChange: (imgs: string[]) => void;
}

export default function GalleryInput({ images, onChange }: Props) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File) {
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok || !data.url) throw new Error(data.error || "Upload failed");

      onChange([...images, data.url]);
    } catch (err: any) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    // ── Upload multiple files in sequence ──────────────────
    setUploading(true);
    setError("");
    const newUrls: string[] = [];
    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (data.url) newUrls.push(data.url);
      }
      onChange([...images, ...newUrls]);
    } catch (err: any) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function addUrl(url: string) {
    const clean = url.trim();
    if (!clean || images.includes(clean)) return;
    onChange([...images, clean]);
    setInputVal("");
  }

  function remove(i: number) {
    onChange(images.filter((_, idx) => idx !== i));
  }

  function updateUrl(i: number, val: string) {
    onChange(images.map((img, idx) => (idx === i ? val : img)));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-medium text-stone-400 uppercase tracking-wide">
          Gallery Images
          <span className="ml-2 text-stone-300 font-normal normal-case">
            ({images.length} images)
          </span>
        </label>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="text-xs text-[#C9A96E] font-medium hover:underline flex items-center gap-1"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Upload images
        </button>
      </div>

      {/* Drop zone */}
      <div
        onClick={() => images.length === 0 && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          // ── Accept dropped file OR dropped URL ────────────
          const text = e.dataTransfer.getData("text");
          if (text) {
            addUrl(text);
            return;
          }
          handleFiles(e.dataTransfer.files);
        }}
        className={`border-2 border-dashed rounded-xl p-3 transition-all duration-200 mb-3 min-h-[100px] ${
          dragging
            ? "border-[#C9A96E] bg-[#C9A96E]/5 scale-[1.01]"
            : "border-stone-200 bg-stone-50 hover:border-[#C9A96E]/50"
        } ${images.length === 0 ? "cursor-pointer" : ""}`}
      >
        {uploading ? (
          <div className="text-center py-6">
            <div className="w-6 h-6 border-2 border-[#C9A96E] border-t-transparent rounded-full animate-spin mx-auto mb-2" />
            <p className="text-stone-400 text-xs">Uploading...</p>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-4">
            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-stone-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                />
              </svg>
            </div>
            <p className="text-stone-500 text-xs font-medium mb-0.5">
              Drop images here or click to upload
            </p>
            <p className="text-stone-300 text-[10px]">
              Select multiple files at once — JPG, PNG, WEBP up to 5MB each
            </p>
          </div>
        ) : (
          /* Thumbnail grid */
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, i) => (
              <div key={i} className="relative group">
                <div
                  className="h-20 rounded-lg bg-cover bg-center bg-stone-200"
                  style={{ backgroundImage: `url(${img})` }}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(i);
                  }}
                  className="absolute top-1 right-1 w-5 h-5 bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[10px] hover:bg-red-500"
                >
                  ✕
                </button>
              </div>
            ))}
            {/* Add more button inside grid */}
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="h-20 rounded-lg border-2 border-dashed border-stone-200 hover:border-[#C9A96E] flex items-center justify-center transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-stone-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Hidden file input — multiple */}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* URL inputs list */}
      {images.length > 0 && (
        <div className="space-y-2 mb-2">
          {images.map((img, i) => (
            <div key={i} className="flex gap-2">
              <input
                type="text"
                value={img}
                onChange={(e) => updateUrl(i, e.target.value)}
                placeholder="Image URL"
                className="flex-1 px-3 py-2 border border-stone-200 rounded-lg text-xs focus:outline-none focus:border-[#C9A96E] transition bg-white"
              />
              <button
                type="button"
                onClick={() => remove(i)}
                className="p-2 text-stone-300 hover:text-red-400 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 12H4"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Add URL input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Or paste image URL and press Add"
          className="flex-1 px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#C9A96E] transition bg-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addUrl(inputVal);
            }
          }}
        />
        <button
          type="button"
          onClick={() => addUrl(inputVal)}
          className="px-4 py-2 bg-stone-100 text-stone-600 text-xs font-medium rounded-lg hover:bg-stone-200 transition-colors"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
