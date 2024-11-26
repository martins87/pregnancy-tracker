"use client";

import Image from "next/image";

import Daniel from "./images/Daniel.jpg";
import Laura from "./images/Laura.jpg";

export default function Home() {
  const conceptionDate = new Date("2024-10-18"); // Set conception date
  const pregnancyDuration = 280; // Duration in days (40 weeks)

  const now = new Date();
  const timeDiff = now - conceptionDate;
  const daysPregnant = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const weeksPregnant = Math.floor(daysPregnant / 7);
  const daysToBirth = pregnancyDuration - daysPregnant;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-10 p-[20px] text-center bg-[#f9f9f9]">
      <h1 className="text-5xl font-[family-name:var(--font-shaquilla)] font-bold text-purple-500 -mb-24 z-10">
        Pregnancy Tracker
      </h1>

      <div className="w-[475px] h-[475px] flex items-center justify-center bg-green-100 rounded-full">
        <div className="flex gap-x-1 h-64">
          <div className="-rotate-[8deg]">
            <Image
              className="w-auto h-64 rounded-xl"
              src={Daniel}
              alt="Daniel as baby"
            />
          </div>
          <div className="relative w-44 h-64 rotate-[8deg] object-center overflow-hidden rounded-xl">
            <Image
              className="absolute h-[150%] inset-0 object-cover object-bottom -mt-14"
              src={Laura}
              alt="Laura as baby"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-[20px] rounded-[10px] inline-block text-left text-black -mt-24 z-10 border border-gray-200 font-[family-name:var(--font-geist-mono)]">
        <p>Conception Date: {conceptionDate.toDateString()}</p>
        <p>
          Pregnant for:{" "}
          <strong>
            {weeksPregnant} weeks and {daysPregnant % 7} days
          </strong>
        </p>
        <p>
          Days to Estimated Delivery: <strong>{daysToBirth} days</strong>
        </p>
      </div>
    </div>
  );
}
