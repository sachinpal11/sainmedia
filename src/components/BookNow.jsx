import { Phone } from "lucide-react";
import React from "react";
import { InlineWidget } from "react-calendly";

function BookNow() {
  const bookCall = () => {
    window.open("https://calendly.com/sachinraja709/new-meeting");
  };
  return (
    <section className=" flex flex-col items-center p-10 mt-20 sm:rounded-4xl">
      <h1 className="md:text-6xl text-center text-3xl mb-10 text-[#fffb00] font-clash font-medium">
        Book Your Session Now
        <div className="w-full h-1 mt-3 rounded-3xl bg-white"></div>
      </h1>
      <button
        className="text-xl hover:bg-[#fffc00] flex items-center font-outfit font-medium px-6 gap-2 py-3 rounded-xl bg-white "
        onClick={bookCall}
      >
        <Phone /> Book A Free Call
      </button>
    </section>
  );
}

export default BookNow;
