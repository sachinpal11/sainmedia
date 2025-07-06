import React from "react";

function Strips() {
  const text =
    "SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN SAIN ";

  return (
    <div className="relative w-full -mt-20 h-[20vh] font-clash font-medium flex flex-col justify-center space-y-4">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%) rotate(6deg);
          }
          100% {
            transform: translateX(-100%) rotate(6deg);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-100%) rotate(-6deg);
          }
          100% {
            transform: translateX(0%) rotate(-6deg);
          }
        }
      `}</style>
      {/* First Strip - Moving Left */}
      <div
        className="whitespace-nowrap bg-[#FFFC00] text-black font-bold tracking-widest text-4xl md:text-7xl"
        style={{
          animation: "scroll-left 10s linear infinite",
        }}
      >
        <span className="bg-[#FFFC00]">{text.repeat(10)}</span>
      </div>

      {/* Second Strip - Moving Right */}
      <div
        className="whitespace-nowrap bg-[#FF6B6B] text-white font-bold tracking-widest text-4xl md:text-7xl"
        style={{
          animation: "scroll-right 10s linear infinite",
        }}
      >
        <span className="bg-[#FFFC00] text-black">{text.repeat(10)}</span>
      </div>
    </div>
  );
}

export default Strips;
