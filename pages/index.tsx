import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { H1, H2, H3, H4, Body, Small } from "../components/typography";
import Button from "../components/button";
import Video from "../components/video";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("../components/grid"), {
  ssr: false,
});

const DiscountSection = dynamic(import("../components/discount"), {
  ssr: false,
});

// import DiscountSection from "@/components/discount";

import ImageSlider from "../components/product-details/imageSlider";
import Specifications from "../components/product-details/specifications";
import ProductRange from "../components/productRange";

const afterSalesService: {
  imagePath: string;
  imageAlt: string;

  title: string;
  description: string | React.ReactNode;
}[] = [
  {
    imagePath: "/after_sales_icons/repairs.svg",
    imageAlt: "Repairs",
    title: "Repairs",
    description: (
      <Body>
        If any problems arise with our products, you can come to us for any
        repairs.
      </Body>
    ),
  },
  {
    imagePath: "/after_sales_icons/phone.svg",
    imageAlt: "Help",
    title: "Help",
    description: (
      <Body>
        You can contact us anytime if you require our assistance. You can find
        our contact details{" "}
        <Link href="/contact-us" className="font-semibold text-attention">
          here
        </Link>
        .
      </Body>
    ),
  },
  {
    imagePath: "/after_sales_icons/delivery.svg",
    imageAlt: "Delivery",
    title: "Delivery",
    description: (
      <Body>Depending on the order, we can deliver to your farm.</Body>
    ),
  },
];

const testimonals: {
  title: string;
  company: React.ReactNode;
  testimonee: string;
  CustomerImagePath: string;
  CustomerImagePathAlt: string;
}[] = [
  {
    title: "HW Chipoyera",
    company: <Body>Brandvlei Foods</Body>,
    testimonee:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet.",
    CustomerImagePath: "/users/user1.png",
    CustomerImagePathAlt: "user1",
  },
  {
    title: "User 2",
    company: (
      <Link href="" className="text-attention">
        Another Company
      </Link>
    ),
    testimonee:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet.",
    CustomerImagePath: "/users/user2.png",
    CustomerImagePathAlt: "user2",
  },
  {
    title: "User 3",
    company: (
      <Link href="" className="text-attention">
        Big Poultry
      </Link>
    ),
    testimonee:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet.",
    CustomerImagePath: "/users/user3.png",
    CustomerImagePathAlt: "user3",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home - Chiipoultry</title>
        <meta
          name="description"
          content="The best place to acquire poultry equipment & services."
        />
        <meta
          name="keywords"
          content="Poultry, Chiipoultry, Chicken Farming, Chickens, Drinkers, Bucket Drinkers"
        />
        <meta name="author" content="TG Chipoyera" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_mini.svg" />
      </Head>
      <>
        {/* Hero Section */}
        <section
          id="landing"
          className="mx-auto flex max-w-[1184px] flex-col items-center
          pb-64 pt-128 desktop:relative 
          desktop:flex-row-reverse desktop:gap-16"
        >
          <Image
            src="/hero.png"
            alt="chicken display"
            width={895}
            height={596}
            className="mb-32 w-full max-w-[584px] min-[420px]:rounded"
          />
          <div
            id="message"
            className="flex w-full flex-col items-center px-8 desktop:w-auto desktop:items-start"
          >
            <H1 className="mb-16 max-w-[584px] text-center desktop:text-left">
              Making poultry easier.
            </H1>
            <H4 className="mb-42 text-center desktop:text-left">
              & accessible to everyone
            </H4>
            <div
              id="button-container"
              className="flex w-full max-w-[518px] flex-col gap-16 min-[518px]:flex-row"
            >
              <Link href="/contact-us" className="w-full">
                <Button className="w-full">Contact Us</Button>
              </Link>
              <Link href="#product-details" scroll={false} className="w-full">
                <Button className="w-full" outlined>
                  View Drinkers
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <DiscountSection />

        <section id="product-details" className="py-64">
          <div
            id="section-container"
            className="mx-16 max-w-[1184px] desktop:mx-auto"
          >
            <H2 className="mb-64 text-center desktop:text-left">
              Product Details
            </H2>
            <div
              id="content"
              className="flex flex-col items-center justify-between 
              prod-details-brk:flex-row-reverse prod-details-brk:items-start prod-details-brk:justify-between"
            >
              <ImageSlider />
              <Specifications />
            </div>
          </div>
        </section>

        <ProductRange />

        <section id="product-videos" className="py-64">
          <div
            id="section-container"
            className="flex max-w-[1184px] flex-col items-center px-16 min-[830px]:px-0 desktop:mx-auto"
          >
            <H2 className="mb-64 w-full text-center desktop:text-left">
              Product Videos
            </H2>

            <Grid id="videos">
              <Video
                className="max-w-[386px]"
                title="Bucket Drinker"
                src="/product_videos/vid_of_drinker.mp4"
              />

              <Video
                className="max-w-[386px]"
                title="Chicks Drinking"
                src="/product_videos/chicks_drinking_water.mp4"
              />
              <Video
                className="max-w-[386px]"
                title="Chickens Drinking"
                src="/product_videos/mid_chickens_drinking.mp4"
              />
            </Grid>
          </div>
        </section>

        <section id="after-sales-service" className="py-64">
          <div
            id="section-container"
            className="mx-16 flex max-w-[1184px] flex-col items-center desktop:mx-auto"
          >
            <H2 className="mb-64 w-full text-center desktop:text-left">
              After Sales Service
            </H2>
            <Grid>
              {afterSalesService.map(
                ({ imagePath, imageAlt, title, description }, key) => (
                  <div
                    key={key}
                    className="flex max-w-[384px] flex-col items-center gap-16 rounded bg-white p-16 text-center drop-shadow-lg"
                  >
                    <Image
                      src={imagePath}
                      alt={imageAlt}
                      width={64}
                      height={64}
                    />
                    <H4>{title}</H4>
                    {description}
                  </div>
                )
              )}
            </Grid>
          </div>
        </section>
        {/* 
        <section id="testimonials" className="py-64">
          <div
            id="section-container"
            className="mx-16 flex max-w-[1184px] flex-col items-center desktop:mx-auto"
          >
            <H2 className="mb-64 w-full text-center desktop:text-left">
              Testimonials
            </H2>
            <Grid>
              {testimonals.map(
                (
                  {
                    title,
                    company,
                    testimonee,
                    CustomerImagePath,
                    CustomerImagePathAlt,
                  },
                  key
                ) => (
                  <div
                    /* Testimonial Card key={key}
                    className="flex max-w-[384px] flex-col gap-16 rounded bg-white p-16 drop-shadow-lg"
                  >
                    <Body>{testimonee}</Body>
                    <hr />
                    <div
                      /* Bottom of testimonial card className="flex gap-8"
                    >
                      <Image
                        src={CustomerImagePath}
                        alt={CustomerImagePathAlt}
                        className="mr-8 rounded-full"
                        width={48}
                        height={48}
                      />
                      <div /*User Details>
                        <Body>
                          <b>{title}</b>
                        </Body>
                        {company}
                      </div>
                    </div>
                  </div>
                )
              )}
            </Grid>
          </div>
        </section> */}
      </>
    </>
  );
}
