import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { H2, H3, Body } from "./typography";
import Button from "./button";

import useDiscountPeriod from "../ts/discount";

import { useEffect } from "react";

export default function DiscountSection() {
  const { days, hours, minutes, seconds, ended } = useDiscountPeriod();

  const router = useRouter();

  return !ended ? (
    <section className="w-full bg-black">
      <div
        id="section-container"
        className="relative flex w-full max-w-[1184px] flex-col items-center px-16 py-64 text-white desktop:mx-auto"
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
          We&apos;re currently running a 10% discount until 14 February. If you
          are quick, you could get a new drinker system for a better deal.{" "}
          <b>
            You can get in contact with us{" "}
            <Link className="text-attention" href="/contact-us">
              here
            </Link>
            .
          </b>{" "}
        </Body>

        <div id="countdown-timer" className="mb-32 flex justify-center gap-8">
          <H2 className="rounded bg-white p-8 text-black">{days} days</H2>
          <H2 className="rounded bg-white p-8 text-black">
            {hours < 10 ? "0" : ""}
            {hours}
          </H2>
          <H2 className="rounded bg-white p-8 text-black">
            {minutes < 10 ? "0" : ""}
            {minutes}
          </H2>
          <H2 className="rounded bg-white p-8 text-black">
            {seconds < 10 ? "0" : ""}
            {seconds}
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
