import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LetterScrollReveal() {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    const text = element.innerText;
    element.innerText = "";

    // Create span for each letter
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      element.appendChild(span);
    });

    gsap.to(element.children, {
      scrollTrigger: {
        trigger: element,
        start: "top 95%",
        end: "bottom 50%",
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      stagger: 0.03,
      duration: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-neutral-950 text-white xl:h-[20vh] min-h-screen xl:justify-evenly justify-center gap-10 w-full md:mt-40 md:-mb-40 pt-20 flex flex-col md:flex-row items-start p-10">
      <span className="xl:text-7xl md:text-5xl text-nowrap text-5xl font-medium relative font-clash text-[#FFFC00]">
        <div className="w-full h-[2px] -bottom-2 bg-white absolute"></div> About
        Us
      </span>
      <p
        ref={textRef}
        className="md:text-3xl text-xl font-outfit font-light leading-snug max-w-4xl tracking-wide"
      >
        Sain Agency is a creative powerhouse specializing in graphic design,
        website development, and video editing. We craft bold, impactful digital
        experiences that elevate brands and drive real engagement across all
        platforms.
      </p>
    </div>
  );
}
