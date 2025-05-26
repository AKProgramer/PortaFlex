"use client";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import Link from "next/link";

const templates = [
  { id: 1, title: "Template 1", image: "/images/download.png" },
  { id: 2, title: "Template 2", image: "/images/download.png" },
  { id: 3, title: "Template 3", image: "/images/download.png" },
  { id: 4, title: "Template 4", image: "/images/download.png" },
  { id: 5, title: "Template 5", image: "/images/download.png" },
  { id: 6, title: "Template 6", image: "/images/download.png" },
];

export default function TemplateSection() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="border rounded-xl shadow-lg cursor-pointer overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-2 text-sm font-neueMontreal tracking-widest font-bold">
              <span className="flex">
                <GoArrowDownRight size={20} />
                <h3 className="ml-1">{template.title}</h3>
              </span>
              <p>Minimalistic</p>
            </div>

            {/* Image Wrapper */}
            <div className="relative group">
                <img
                  src={`${template.image}`}
                  alt={template.title}
                  className="w-full rounded-md"
                />

                {/* Hover Effect - Buttons (Only on Image) */}
                <div className="absolute inset-0 mb-1  bg-black/40 flex flex-col items-center justify-end gap-5 pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <Link 
                  href={`/templates/${template.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                   className="bg-white text-black px-4 py-2 rounded-xl shadow-lg hover:underline">
                    View
                  </Link>
                  <Link 
                   href={`/templates/${template.id}/edit`}
                  className="bg-white text-black px-4 py-2 rounded-xl shadow-lg hover:underline">
                  Use Template
                  </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
