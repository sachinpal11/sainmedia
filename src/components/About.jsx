import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LetterScrollReveal({ title, description }) {
  const textRef = useRef(null);
  const originalText = description;

  useLayoutEffect(() => {
    const element = textRef.current;

    if (!element || typeof window === "undefined" || !gsap) return;

    // Clear original content
    element.innerHTML = "";

    // Split text into words
    const words = originalText.split(" ");

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.style.display = "inline-block";
      wordSpan.style.marginRight = "0.4em"; // spacing between words
      wordSpan.style.whiteSpace = "nowrap";

      // Split word into letters
      word.split("").forEach((char) => {
        const letterSpan = document.createElement("span");
        letterSpan.innerText = char;
        letterSpan.style.display = "inline-block";
        letterSpan.style.color = "#3f3f3f"; // dark start
        wordSpan.appendChild(letterSpan);
      });

      element.appendChild(wordSpan);
    });

    // Animate all letter spans (not word spans)
    const allLetters = element.querySelectorAll("span span"); // inner spans only

    gsap.to(allLetters, {
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
      },
      color: "#ffffff",
      stagger: 0.03,
      duration: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="text-white xl:h-[20vh] -mt-20 min-h-screen md:justify-start sm:gap-30 justify-center gap-10 w-full md:mt-40 md:-mb-40 pt-20 flex flex-col md:flex-row items-start p-10">
      <span className="xl:text-7xl md:text-5xl text-nowrap text-4xl font-medium relative font-clash text-[#FFFC00]">
        <div className="w-full h-[2px] -bottom-2 bg-white absolute"></div>
        {title}
      </span>
      <p
        ref={textRef}
        className="md:text-xl xl:text-3xl text-xl text-left font-outfit font-light leading-snug max-w-4xl tracking-wide"
      ></p>
    </div>
  );
}
