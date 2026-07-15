"use client";

import { useState, useRef } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}

export default function ImageInput({
  label,
  value,
  onChange,
  required,
}: Props) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
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

      onChange(data.url);
    } catch (err: any) {
      setError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    uploadFile(files[0]);
  }

  return (
    <div>
      <label className="block text-xs font-medium text-stone-400 mb-1 uppercase tracking-wide">
        {label}
      </label>

      {/* Drop zone */}
      <div
        onClick={() => !value && inputRef.current?.click()}
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
            onChange(text);
            return;
          }
          handleFiles(e.dataTransfer.files);
        }}
        className={`relative border-2 border-dashed rounded-xl transition-all duration-200 ${
          dragging
            ? "border-[#C9A96E] bg-[#C9A96E]/5 scale-[1.01]"
            : value
              ? "border-stone-200"
              : "border-stone-200 bg-stone-50 hover:border-[#C9A96E]/50 cursor-pointer"
        }`}
      >
        {uploading ? (
          /* Uploading state */
          <div className="py-10 text-center">
            <div className="w-8 h-8 border-2 border-[#C9A96E] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-stone-400 text-xs">Uploading...</p>
          </div>
        ) : value ? (
          /* Preview */
          <div className="relative group">
            <div
              className="h-44 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${value})` }}
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  inputRef.current?.click();
                }}
                className="px-3 py-1.5 bg-white text-stone-800 text-xs font-medium rounded-lg hover:bg-stone-100 transition-colors"
              >
                Replace
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange("");
                }}
                className="px-3 py-1.5 bg-red-500 text-white text-xs font-medium rounded-lg hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          /* Empty state */
          <div className="py-8 text-center px-4">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-stone-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
            </div>
            <p className="text-stone-600 text-sm font-medium mb-1">
              Drop image here or click to upload
            </p>
            <p className="text-stone-400 text-xs mb-2">
              JPG, PNG, WEBP up to 5MB
            </p>
            <p className="text-stone-300 text-[10px]">
              or paste a URL in the field below
            </p>
          </div>
        )}
      </div>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        required={required && !value}
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* URL fallback input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Or paste image URL directly..."
        className="mt-2 w-full px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#C9A96E] transition bg-white"
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
