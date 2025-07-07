import React from "react";
import { InlineWidget } from "react-calendly";

function BookNow() {
  return (
    <section className="bg-neutral-800 border-[#FFFC00] border-b-2 border-r-2 p-10 pb-0 mt-20 rounded-4xl">
      <h1 className="md:text-6xl text-3xl mb-10 text-white font-clash font-medium">
        Book Your Session Now
        <div className="w-full h-1 mt-3 rounded-3xl bg-[#FFFC00]"></div>
      </h1>
      <div className="w-full h-[700px] my-10">
        <InlineWidget url="https://calendly.com/sachinraja709/new-meeting" />
      </div>
    </section>
  );
}

export default BookNow;
