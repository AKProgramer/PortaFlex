"use client"
import Navbar from "@/components/HomePage/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import usePortfolioStore from "@/store/usePortfolioStore";
import FullPageLoader from "@/components/Loader/FullPageLoader";
import ViewTemplate from "@/components/TemplateIFramePage/ViewTemplate";
import EditNavbar from "@/components/EditTemplatePage/Forms/Navbar";
import Projects from "@/components/EditTemplatePage/Forms/Projects";
import Contact from "@/components/EditTemplatePage/Forms/Contact";
import Skills from "@/components/EditTemplatePage/Forms/Skills";
import Services from "@/components/EditTemplatePage/Forms/Services";
import Hero from "@/components/EditTemplatePage/Forms/Hero"
import About from "@/components/EditTemplatePage/About";
import Education from "@/components/EditTemplatePage/Forms/Education";
import Experience from "@/components/EditTemplatePage/Forms/Experience";


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
    <div className="h-screen flex flex-col pt-24">
      {/* Navbar */}
      <Navbar />
      {/* Stepper */}
      <div className="relative w-full flex items-center justify-center pb-6 pt-12">
        <button
          className="absolute top-4 left-32 underline text-[#1F35DA]"
          onClick={() => {
            if (activeStep > 0) setActiveStep((prev) => prev - 1);
          }}
          disabled={activeStep === 0}
          style={{ opacity: activeStep === 0 ? 0.5 : 1, cursor: activeStep === 0 ? 'not-allowed' : 'pointer' }}
        >
          Go Back
        </button>
        <div
          className="flex justify-between items-center"
          style={{ width: `${Math.max(320, sections.length * 170)}px`, transition: 'width 0.3s' }}
        >
          {sections.map((section, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;
            return (
              <div
                key={section.type || section}
                className="flex-1 flex flex-col items-center relative cursor-pointer"
              >
                {/* Connector line */}
                {index !== 0 && (
                  <div
                    className={`absolute mt-5 left-0 w-full border-t-[1px] border-black -translate-y-1/2 z-0`}
                    style={{ width: "100%", left: "-50%" }}
                  />
                )}
                {/* Step circle */}
                <div
                  className={`z-10 flex items-center justify-center rounded-full w-11 h-11 text-sm font-bold
                    ${
                      isActive || isCompleted
                        ? "bg-black text-white"
                        : "bg-white border-[1px] border-black text-black"
                    }`}
                >
                  {index + 1}
                </div>
                {/* Label */}
                <div
                  className={`mt-2 text-center text-sm ${
                    isActive || isCompleted ? "font-bold text-black" : "text-black"
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
      <div className="flex-1 flex px-10 gap-16 pb-6 min-h-0">
        {/* Show a placeholder for the section's file/component */}
        <div className="basis-1/2 overflow-y-auto">
          {/* Dynamically render the section's file/component */}
          <div className="border border-black rounded-lg">
            {(() => {
              const sectionType = (sections[activeStep]?.type || sections[activeStep] || '').toLowerCase();
              const sectionMap = {
                navbar: EditNavbar,
                projects: Projects,
                contact: Contact,
                skills: Skills,
                services: Services,
                hero: Hero,
                about: About,
                education: Education,
                experience: Experience
              };
              const SectionComponent = sectionMap[sectionType];
              return SectionComponent ? <SectionComponent /> : (
                <span>
                  No found <b>{sections[activeStep]?.type || sections[activeStep]}</b>
                </span>
              );
            })()}
          </div>
        </div>

        {/* Right side preview placeholder */}
        <div className="basis-1/2 flex flex-col">
          <div className="flex-1 overflow-y-auto">
              <ViewTemplate vercelLink={portfolio?.vercelDeploymentLink} />
          </div>
    
          {/* Buttons */}
          <div className="flex gap-6 p-3 flex-shrink-0 justify-end">
            <button className="border border-black rounded-lg w-40 h-12 text-lg font-medium hover:bg-gray-100 transition-colors">
              Preview
            </button>
            <button className="bg-black text-white rounded-lg w-40 h-12 text-lg font-medium hover:bg-black transition-colors" onClick={() => setActiveStep((prev) => (prev + 1 < sections.length ? prev + 1 : prev))}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}