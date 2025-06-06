"use client";
import React, { useEffect, useState } from "react";
import { GoArrowDownRight } from "react-icons/go";
import Link from "next/link";
import usePortfolioStore from "@/store/usePortfolioStore";
import FullPageLoader from "../Loader/FullPageLoader";

export default function TemplateSection() {
  const { portfolios, fetchPortfolios, loading } = usePortfolioStore();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetchPortfolios();
  }, [fetchPortfolios]);

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {loading && <FullPageLoader/>}
        {portfolios &&
          portfolios.map((template) => (
            <div
              key={template._id}
              className="border rounded-xl  cursor-pointer overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-2 text-sm font-neueMontreal tracking-widest font-bold">
                <span className="flex">
                  <GoArrowDownRight size={20} />
                  <h3 className="ml-1">{template.title}</h3>
                </span>
                <div className="flex flex-col items-end ">
                  <p>{template.category} </p>
                </div>
              </div>

              {/* Image Wrapper */}
              <div className="relative group">
                <img
                  src={template.imageUrl}
                  alt={template.title}
                  className="w-full rounded-md"
                />

                {/* Hover Effect - Buttons (Only on Image) */}
                <div className="absolute inset-0 mb-1 flex flex-col items-center justify-end gap-5 pb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <Link
                  href={`/templates/${template._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                    onClick={() => setSelected(template)}
                    className="bg-white text-black px-4 py-2 rounded-xl  hover:underline"
                  >
                    View
                  </Link>
                  <Link
                    href={`/templates/${template._id}/edit`}
                    className="bg-white text-black px-4 py-2 rounded-xl hover:underline"
                  >
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
