"use client";

import { useState } from "react";

interface ArrayFieldProps {
  label: string;
  values: string[];
  onChange: (vals: string[]) => void;
  placeholder?: string;
  max?: number;
}

export default function ArrayField({
  label,
  values,
  onChange,
  placeholder = "Add item...",
  max = 10,
}: ArrayFieldProps) {
  const [inputVal, setInputVal] = useState("");

  const handleAdd = () => {
    const clean = inputVal.trim();
    if (!clean || values.includes(clean) || values.length >= max) return;

    onChange([...values, clean]);
    setInputVal("");
  };

  const remove = (i: number) => onChange(values.filter((_, idx) => idx !== i));

  const update = (i: number, val: string) =>
    onChange(values.map((v, idx) => (idx === i ? val : v)));

  const isLimitReached = values.length >= max;

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-xs font-medium text-stone-400 uppercase tracking-wide">
          {label}
          <span
            className={`ml-2 font-normal normal-case ${
              isLimitReached ? "text-red-500 font-bold" : "text-stone-300"
            }`}
          >
            ({values.length}/{max})
          </span>
        </label>
      </div>

      {/* List of already added items */}
      <div className="space-y-2 mb-2">
        {values.map((v, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="text"
              value={v}
              onChange={(e) => update(i, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#C9A96E] transition bg-white hover:border-stone-300"
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

      {/* The "Add New" section*/}
      {!isLimitReached ? (
        <div className="flex gap-2">
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#C9A96E] transition bg-white hover:border-stone-300"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAdd();
              }
            }}
          />
          <button
            type="button"
            onClick={handleAdd}
            disabled={!inputVal.trim()} // Disable if input is empty
            className="px-4 py-2 bg-stone-100 text-stone-600 text-xs font-medium rounded-lg hover:bg-stone-200 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              width="12"
              height="12"
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
            Add
          </button>
        </div>
      ) : (
        <div className="text-center p-2 bg-stone-50 rounded-lg border border-stone-200">
          <p className="text-stone-400 text-[10px] font-medium italic">
            Maximum limit of {max} items reached. Remove an item to add a new
            one.
          </p>
        </div>
      )}
    </div>
  );
}
