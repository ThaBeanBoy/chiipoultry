import Image from "next/image";

import { useState, useEffect } from "react";

import { H2, Body } from "./typography";

type period = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  ended?: boolean;
};

let milliConversion: period = {
  days: 86400000,
  hours: 3600000,
  minutes: 60000,
  seconds: 1000,
};

const discountEndDate: Date = new Date(2023, 0, 31, 23, 59);

function discountPeriod(): period {
  const now: Date = new Date();

  let timeLeft: number = discountEndDate.valueOf() - now.valueOf();

  const calcTime = (conversion: number): number => {
    const result: number = Math.floor(timeLeft / conversion);

    // Decreasing the timeLeft to calculate the upcoming digit
    timeLeft -= result * conversion;

    return result;
  };

  return {
    days: calcTime(milliConversion.days),
    hours: calcTime(milliConversion.hours),
    minutes: calcTime(milliConversion.minutes),
    seconds: calcTime(milliConversion.seconds),
    ended: discountEndDate.valueOf() - now.valueOf() < 0,
  };
}

export default function DiscountSection() {
  const [timeLeft, setTimeLeft] = useState<period>(discountPeriod());

  setInterval(() => setTimeLeft(discountPeriod()), 1000);

  return !timeLeft.ended ? (
    <section className="bg-black">
      <div
        id="section-container"
        className="static mx-16 flex flex-col items-center py-64 text-white"
      >
        <Image
          src="/discount_sticker.png"
          alt="discount sticker"
          className="mb-48 rotate-[-20deg] min-[920px]:absolute  min-[920px]:left-16"
          width={150}
          height={150}
        />

        <H2 className="mb-16 text-center">
          Price Down <b>Discount</b>
        </H2>

        <Body className="mb-48 max-w-[584px] text-center">
          Lorem ipsum dolor sit amet consectetur. Tincidunt magna auctor rutrum
          egestas mattis convallis aliquam erat consectetur. Scelerisque ac
          adipiscing amet mauris bibendum. 123456789
        </Body>

        <div id="countdown-timer" className="flex gap-8">
          <H2 className="rounded bg-white p-8 text-black">
            {timeLeft.days} days
          </H2>
          <H2 className="rounded bg-white p-8 text-black">
            {timeLeft.hours < 10 ? "0" : ""} {timeLeft.hours}
          </H2>
          <H2 className="rounded bg-white p-8 text-black">
            {timeLeft.minutes < 10 ? "0" : ""}
            {timeLeft.minutes}
          </H2>
          <H2 className="rounded bg-white p-8 text-black">
            {timeLeft.seconds < 10 ? "0" : ""}
            {timeLeft.seconds}
          </H2>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}
