"use client";

import Link from "next/link";
import { useState } from "react";

interface Request {
  id: string;
  name: string;
  phone: string;
  email?: string;
  message?: string;
  unit?: string;
  submitted_at: string;
  read?: boolean;
}

export default function RequestsTable({ requests }: { requests: Request[] }) {
  const [selected, setSelected] = useState<Request | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [list, setList] = useState(requests);

  async function markRead(id: string) {
    setList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, read: true } : r)),
    );
    await fetch("/api/dashboard/requests/read", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  async function deleteRequest(id: string) {
    setList((prev) => prev.filter((r) => r.id !== id));
    await fetch("/api/dashboard/requests/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
  }

  return (
    <>
      <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto">
        <table className="min-w-[900px] w-full text-sm">
          <thead className="bg-stone-50 border-b border-stone-200">
            <tr>
              {["Name", "Contact", "From", "Date", "Actions"].map((h) => (
                <th
                  key={h}
                  className="text-left px-5 py-3 text-xs font-medium text-stone-400 uppercase tracking-wider"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((req) => (
              <tr
                key={req.id}
                className={`border-b border-stone-100 transition-colors ${
                  !req.read ? "bg-[#C9A96E]/5" : "hover:bg-stone-50"
                }`}
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    {!req.read && (
                      <span className="w-2 h-2 rounded-full bg-[#C9A96E] flex-shrink-0" />
                    )}
                    <span className="font-medium text-stone-800">
                      {req.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <p className="text-stone-600">{req.phone}</p>
                  {req.email && (
                    <p className="text-stone-400 text-xs">{req.email}</p>
                  )}
                </td>
                <td className="px-5 py-4 text-stone-500">
                  <Link
                    href={`/properties/${req.unit}`}
                    target="_blank"
                    className="text-[10px] text-[#C9A96E] font-medium uppercase tracking-wide hover:underline"
                  >
                    {req.unit === "contact-page"
                      ? "Website Form"
                      : req.unit || "General enquiry"}
                  </Link>
                </td>
                <td className="px-5 py-4 text-stone-400 text-xs">
                  {new Date(req.submitted_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        setSelected(req);
                        markRead(req.id);
                      }}
                      className="text-xs font-medium text-[#1B2B3A] hover:text-[#C9A96E] transition-colors"
                    >
                      View
                    </button>
                    <a
                      href={`tel:+${req.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      className="text-xs font-medium text-emerald-600 hover:text-emerald-800 transition-colors"
                    >
                      Call
                    </a>
                    {req.email && (
                      <a
                        href={`mailto:${req.email}`}
                        target="_blank"
                        className="text-xs font-medium text-stone-400 hover:text-stone-700 transition-colors"
                      >
                        Email
                      </a>
                    )}
                    {confirmDelete === req.id ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            deleteRequest(req.id);
                            setConfirmDelete(null);
                          }}
                          className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setConfirmDelete(null)}
                          className="text-xs font-medium text-stone-400 hover:text-stone-700 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setConfirmDelete(req.id)}
                        className="text-xs font-medium text-red-400 hover:text-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {list.length === 0 && (
          <div className="text-center py-16 text-stone-400 text-sm">
            No requests yet.
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl text-stone-800">
                Request Detail
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="text-stone-400 hover:text-stone-700"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-3 text-sm">
              {[
                { label: "Name", value: selected.name },
                { label: "Phone", value: selected.phone },
                { label: "Email", value: selected.email || "—" },
                {
                  label: "From",
                  value: selected.unit || "—",
                },
                {
                  label: "Date",
                  value: new Date(selected.submitted_at).toLocaleString(),
                },
                { label: "Message", value: selected.message || "—" },
              ].map((row) => (
                <div key={row.label} className="flex gap-3">
                  <span className="text-stone-400 w-20 flex-shrink-0 text-xs uppercase tracking-wide font-medium pt-0.5">
                    {row.label}
                  </span>
                  <span className="text-stone-700 flex-1 leading-relaxed">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href={`tel:+${selected.phone.replace(/\D/g, "")}`}
                className="flex-1 py-2.5 bg-emerald-500 text-white text-xs font-medium text-center rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Call
              </a>
              {selected.email && (
                <a
                  href={`mailto:${selected.email}`}
                  className="flex-1 py-2.5 bg-[#1B2B3A] text-white text-xs font-medium text-center rounded-lg hover:bg-[#2D4258] transition-colors"
                >
                  Send Email
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
