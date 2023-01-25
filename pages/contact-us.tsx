import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { H2, H4, Body } from "../components/typography";
// import Grid from "../components/grid";

import dynamic from "next/dynamic";

const Grid = dynamic(() => import("../components/grid"), {
  ssr: false,
});

const contactPoints: {
  imgPath: string;
  imgAlt: string;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    imgPath: "/contact-icons/facebook.svg",
    imgAlt: "facebook",
    title: "Our Facebook Page",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim",

    href: "",
  },
  {
    imgPath: "/contact-icons/phone.svg",
    imgAlt: "Phone",
    title: "+27 67 952 7480",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim",
    href: "tel:+27679527480",
  },
  {
    imgPath: "/contact-icons/gmail.svg",
    imgAlt: "Email",
    title: "chiipoultry@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim",
    href: "mailto:chiipoultry@gmail.com",
  },
];

export default function contactUs() {
  return (
    <>
      <Head>
        <title>Contact Chiipoultry</title>
        <meta
          name="description"
          content="Contact Chiipoultry for products & services"
        />
        <meta
          name="keywords"
          content="Poultry, Chiipoultry, Chicken Farming, Chickens, Drinkers, Bucket Drinkers"
        />
        <meta name="author" content="TG Chipoyera" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_mini.svg" />
      </Head>
      <section className="flex flex-col items-center">
        <H2 className="mt-64 mb-32">Contact Us</H2>
        <Grid>
          {contactPoints.map(
            ({ imgPath, imgAlt, title, description, href }, key) => (
              <Link
                href={href}
                key={key}
                className="round flex max-w-[384px] flex-col items-center gap-16 bg-white p-16 shadow-lg"
              >
                <Image src={imgPath} alt={imgAlt} width={64} height={64} />
                <H4>{title}</H4>
                <Body className="text-center">{description}</Body>
              </Link>
            )
          )}
        </Grid>
      </section>
    </>
  );
}
