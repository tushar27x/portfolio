"use client";

import ExperienceCard from "./ExperienceCard";
import Reveal from "../Reveal";
import experiences from "@/app/utils/experience";

export default function ExperienceSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background Mountains */}
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <path
            d="M0,400 L200,200 L400,300 L600,150 L800,250 L1000,100 L1200,200 L1200,800 L0,800 Z"
            fill="currentColor"
            className="text-primary"
          />
          <path
            d="M0,500 L150,350 L350,400 L550,300 L750,350 L950,250 L1200,300 L1200,800 L0,800 Z"
            fill="currentColor"
            className="text-primary/60"
          />
        </svg>
      </div>

      {/* Floating Clouds */}
      <div className="absolute top-10 left-10 w-20 h-12 bg-muted/30 rounded-full animate-float"></div>
      <div
        className="absolute top-20 right-20 w-16 h-10 bg-muted/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-32 left-1/3 w-24 h-14 bg-muted/25 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="text-4xl">🏔️</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                MY JOURNEY
              </h1>
              <div className="text-4xl">🥾</div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        {/* Timeline Progress Indicator */}
        <Reveal>
          <div className="flex justify-center mb-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Aug 2024</span>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-primary font-medium">Present</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Adventure Trail Path - Ascending Timeline */}
            <svg
              viewBox="0 0 800 1200"
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ height: `${experiences.length * 400 + 200}px` }}
            >
              <defs>
                <linearGradient
                  id="trailGradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.4"
                  />
                  <stop
                    offset="50%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.6"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity="0.8"
                  />
                </linearGradient>
              </defs>
              <path
                d="M400,1150 Q300,1050 350,950 T200,850 Q100,800 150,700 T300,600 Q400,550 350,450 T500,350 Q600,300 550,200 T400,100 Q300,50 400,0"
                stroke="url(#trailGradient)"
                strokeWidth="8"
                fill="none"
                strokeDasharray="20,10"
                className="animate-pulse"
              />
            </svg>

            {experiences && experiences.length > 0 ? (
              experiences.map((experience, index) => (
                <Reveal key={index}>
                  <div
                    className={`relative mb-16 md:mb-24 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    {/* Trail Marker with Elevation */}
                    <div
                      className={`absolute ${index % 2 === 0 ? "left-8 md:left-16" : "right-8 md:right-16"} top-8`}
                    >
                      <div className="relative">
                        {/* Flag Pole */}
                        <div className="w-1 h-16 bg-gradient-to-t from-primary/60 to-primary mx-auto"></div>

                        {/* Flag with Timeline Order */}
                        <div
                          className={`absolute top-0 ${index % 2 === 0 ? "left-1" : "right-1"} w-12 h-8 bg-gradient-to-r from-primary to-primary/80 clip-path-flag shadow-lg transform hover:scale-110 transition-transform duration-200`}
                        >
                          <div className="text-primary-foreground text-xs font-bold text-center leading-8">
                            {index + 1}
                          </div>
                        </div>

                        {/* Base */}
                        <div className="w-6 h-3 bg-primary rounded-full mx-auto -mt-1"></div>
                      </div>
                    </div>

                    {/* Adventure Milestone */}
                    <div
                      className={`w-full max-w-2xl px-4 md:px-8 ${index % 2 === 0 ? "ml-16 md:ml-32" : "mr-16 md:mr-32"}`}
                    >
                      <div className="relative group">
                        {/* Adventure Badge - Different for each milestone */}
                        <div
                          className={`absolute -top-4 ${index % 2 === 0 ? "-left-4" : "-right-4"} w-12 h-12 bg-gradient-to-br from-primary/90 to-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300 z-10`}
                        >
                          <span className="text-2xl">
                            {index === 0 ? "🎯" : index === 1 ? "🏆" : "⭐"}
                          </span>
                        </div>

                        {/* Experience Card with Adventure Styling */}
                        <div className="transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                          <ExperienceCard
                            {...experience}
                            timelinePosition={index + 1}
                          />
                        </div>

                        {/* Trail Elements - Different for each position */}
                        <div
                          className={`absolute top-1/2 ${index % 2 === 0 ? "-right-8" : "-left-8"} transform -translate-y-1/2`}
                        >
                          <div
                            className="text-2xl opacity-60 animate-bounce"
                            style={{ animationDelay: `${index * 0.5}s` }}
                          >
                            {index === 0 ? "🏕️" : "⛰️"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))
            ) : (
              <Reveal>
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🗺️</div>
                  <p className="text-muted-foreground text-lg">
                    The adventure map is being drawn...
                  </p>
                </div>
              </Reveal>
            )}

            {/* Trail End - Summit */}
            <Reveal>
              <div className="flex justify-center mt-16">
                <div className="text-center">
                  <div className="relative">
                    {/* Mountain Peak */}
                    <div className="w-24 h-24 bg-gradient-to-t from-muted to-muted/50 clip-path-triangle mx-auto relative">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-background to-muted/30 clip-path-triangle"></div>
                    </div>
                    {/* Summit Flag */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-1 h-12 bg-primary"></div>
                      <div className="absolute top-0 left-1 w-8 h-6 bg-gradient-to-r from-primary to-primary/80 clip-path-flag">
                        <div className="text-primary-foreground text-xs font-bold text-center leading-6">
                          🚀
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">
                      The adventure continues...
                    </span>
                    <div className="text-lg">🌟</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .clip-path-flag {
          clip-path: polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%);
        }
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}
