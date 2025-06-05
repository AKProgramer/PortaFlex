"use client"
import Navbar from "@/components/HomePage/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import usePortfolioStore from "@/store/usePortfolioStore";
import FullPageLoader from "@/components/Loader/FullPageLoader";
import ViewTemplate from "@/components/TemplateIFramePage/ViewTemplate";

export default function EditSingleTemplatePage() {
  const params = useParams();
  const { portfolio, fetchPortfolioById, loading } = usePortfolioStore();
  const [activeStep, setActiveStep] = useState(0);
   useEffect(() => {
    if (params.id) {
      fetchPortfolioById(params.id);
    }
  }, [params.id, fetchPortfolioById]);
  
  // Use sections from the fetched portfolio (or fallback)
  const sections = portfolio?.sections || [];
  if(loading)
  {
    return <FullPageLoader/>
  }
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Stepper */}
      <div className="py-10 w-full flex items-center justify-center">
        <div className="w-3/5 flex justify-between items-center mb-12">
          {sections.map((section, index) => {
            const isActive = index === activeStep;
            return (
              <div
                key={section.type || section}
                className="flex-1 flex flex-col items-center relative cursor-pointer"
              >
                {/* Connector line */}
                {index !== 0 && (
                  <div
                    className={`absolute mt-5 left-0 w-full border-t-2 border-gray-400 -translate-y-1/2 z-0`}
                    style={{ width: "100%", left: "-50%" }}
                  />
                )}
                {/* Step circle */}
                <div
                  className={`z-10 flex items-center justify-center rounded-full w-11 h-11 text-sm font-bold
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white border-2 border-gray-400 text-black"
                    }`}
                >
                  {index + 1}
                </div>
                {/* Label */}
                <div
                  className={`mt-2 text-center text-sm ${
                    isActive ? "font-bold text-black" : "text-gray-600"
                  }`}
                >
                  {(section.type ? section.type.charAt(0).toUpperCase() + section.type.slice(1) : section)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Content below stepper */}
      <div className="px-20 h-1/2 flex gap-16">
        {/* Left side content (commented out, will show its own file/component) */}
        {/* {false && (
          <div className="flex-2">
            <h2 className="text-2xl font-semibold mb-2">
              What options would you like to include in Navbar?
            </h2>
            <p className="text-gray-500 mb-8">
              Include essential sections in your Navbar based on your needs.
              <br /> You can customize these options anytime to best fit your
              website.
            </p>
            {/* Option buttons */}
            {/* <div className="space-y-4">
              {['Projects', 'Contact', 'Skills', 'Services'].map((item) => (
                <div key={item} className="flex items-center gap-5">
                  <button className="border border-black rounded-lg w-36 h-9">{item}</button>
                  <span className="text-black text-lg">✎</span>
                </div>
              ))}
            </div>
          </div>
        )}  */}

        {/* Show a placeholder for the section's file/component */}
        <div className="basis-1/2">
          {/* TODO: Replace with dynamic import or render of the section's file/component */}
          <div className="border border-dashed border-gray-400 rounded-lg p-8 text-center text-gray-500">
            <span>
              This area will render the file/component for section: <b>{sections[activeStep]?.type || sections[activeStep]}</b>
              <br />
              {/* File: Section_{sections[activeStep]?.type || sections[activeStep] || 'Unknown'}.js */}
            </span>
          </div>
        </div>

        {/* Right side preview placeholder */}
        <div className="basis-1/2 flex flex-col items-center justify-center h-full">
          <ViewTemplate vercelLink={portfolio?.vercelDeploymentLink || ""}/>
          {/* Buttons */}
          <div className="flex justify-end gap-4 px-10 mt-10">
            <button className="border border-black rounded-lg w-32 h-9">
              Preview
            </button>
            <button className="bg-black text-white rounded-lg w-32 h-9" onClick={() => setActiveStep((prev) => (prev + 1 < sections.length ? prev + 1 : prev))}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
