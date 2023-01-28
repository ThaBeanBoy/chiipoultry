import Image from "next/image";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";

import { H2, H3, Body } from "./typography";
import Button from "./button";

import useDiscountPeriod from "../ts/discount";

export default function DiscountSection() {
  const timeLeft = useDiscountPeriod();
  const router = useRouter();

  return !timeLeft.ended ? (
    <section className="w-full bg-black">
      <div
        id="section-container"
        className="static flex w-full max-w-[1184px] flex-col items-center px-16 py-64 text-white desktop:mx-auto"
      >
        <Image
          src="/discount_sticker.png"
          alt="discount sticker"
          className="mb-48 rotate-[-20deg] min-[920px]:absolute min-[920px]:left-16"
          width={150}
          height={150}
        />

        <H2 className=" mb-16 text-center">
          Price Down <b>Discount</b>
        </H2>

        <Body className="mb-48 max-w-[584px] text-center">
          Lorem ipsum dolor sit amet consectetur. Tincidunt magna auctor rutrum
          egestas mattis convallis aliquam erat consectetur. Scelerisque ac
          adipiscing amet mauris bibendum.
        </Body>

        <div id="countdown-timer" className="mb-32 flex justify-center gap-8">
          <H2 className="rounded bg-white p-8 text-black">
            {timeLeft.days} days
          </H2>
          <H2 className="rounded bg-white p-8 text-black">
            {timeLeft.hours < 10 ? "0" : ""}
            {timeLeft.hours}
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

        <Button
          className="w-full max-w-[445px] text-black"
          onClick={() => router.push("/contact-us")}
        >
          Contact Us
        </Button>
      </div>
    </section>
  ) : (
    <></>
  );
}
