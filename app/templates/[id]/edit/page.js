import Navbar from "@/components/HomePage/Navbar";
import React from "react";
import SpecficTemplatePage from "../page";

const steps = ["Navbar", "Hero", "About us", "Projects", "Contact", "Footer"];

export default function EditSingleTemplatePage() {
  const activeStep = 0;

  return (
    <div className="h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Stepper */}
      <div className="py-10 w-full flex items-center justify-center">
        <div className="w-3/5 flex justify-between items-center mb-12">
          {steps.map((label, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;

            return (
              <div
                key={label}
                className="flex-1 flex flex-col items-center relative"
              >
                {/* Connector line */}
                {index !== 0 && (
                  <div
                    className={`absolute mt-5 left-0 w-full border-t-2 ${
                      isCompleted ? "border-gray-700" : "border-gray-400"
                    } -translate-y-1/2 z-0`}
                    style={{ width: "100%", left: "-50%" }}
                  />
                )}

                {/* Step circle */}
                <div
                  className={`z-10 flex items-center justify-center rounded-full w-11 h-11 text-sm font-bold
                    ${
                      isActive
                        ? "bg-black text-white"
                        : isCompleted
                        ? "bg-gray-700 text-white"
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
                  {label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Content below stepper */}
      <div className="px-20 h-1/2 flex gap-16">
        {/* Left side content */}
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
          <div className="space-y-4">
            {["Projects", "Contact", "Skills", "Services"].map((item) => (
              <div key={item} className="flex items-center gap-5">
                <button className="border border-black rounded-lg w-36 h-9">{item}</button>
                <span className="text-black text-lg">✎</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side preview placeholder */}
        <div className="flex-1 flex-col items-center justify-center h-full">
          <SpecficTemplatePage />
          {/* Buttons */}
          <div className="flex justify-end gap-4 px-10 mt-10">
            <button className="border border-black rounded-lg w-32 h-9">
              Preview
            </button>
            <button className="bg-black text-white rounded-lg w-32 h-9">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
