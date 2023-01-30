import Image from "next/image";
import { useRouter } from "next/router";

import useDiscountPeriod from "../ts/discount";

// import Grid from "./grid";
import { H2, H4, Body, Small } from "./typography";
import Button from "./button";

import dynamic from "next/dynamic";

const Grid = dynamic(() => import("./grid"), {
  ssr: false,
});

type productProps = {
  title: string;
  description: string;
  price: number;
  discounted?: boolean;

  imgPath: string;
  imgAlt: string;
};

const products: productProps[] = [
  {
    title: "Standard",
    description: "Standard Edition paragraph.",
    price: 250,
    imgPath: "/product_range/standard.png",
    imgAlt: "Drinker Standard Edition",
  },
  {
    title: "Drainage",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet.",
    price: 270,
    imgPath: "/product_range/drainage.png",
    imgAlt: "Drinker Drainage Edition",
  },
];

function ProductTag({
  title,
  description,
  price,
  discounted,
  imgPath,
  imgAlt,
}: productProps) {
  return (
    <div
      id="product-tag"
      className="flex max-w-[384px] flex-col gap-16 rounded bg-white p-16 drop-shadow-lg"
    >
      {discounted ? (
        <Small className="absolute top-0 right-16 translate-y-[-50%] rounded bg-attention p-8">
          <b>Currently R{price * 0.9}</b>
        </Small>
      ) : (
        <></>
      )}

      <Image src={imgPath} alt={imgAlt} width={352} height={424} />

      <div className="flex justify-between">
        <H4>{title}</H4>
        <H4 className={`text-attention ${discounted ? "line-through" : ""}`}>
          {price}
        </H4>
      </div>
      <hr />
      <Body>{description}</Body>
    </div>
  );
}

export default function ProductRange() {
  let discount = useDiscountPeriod();

  const router = useRouter();

  return (
    <section className="py-64">
      <div
        id="section-container"
        className="mx-auto flex max-w-[1184px] flex-col items-center px-16 min-[830px]:px-0"
      >
        <H2 className="mb-64 w-full text-center desktop:text-left">
          Product Range
        </H2>
        <Grid id="products">
          {products.map((props, key) => (
            <ProductTag key={key} {...props} discounted={!discount.ended} />
          ))}
          <div
            id="coming-soon"
            className="flex min-h-[135px] items-center justify-center rounded bg-white p-16 drop-shadow-lg"
          >
            <H4>More products coming soon</H4>
          </div>
        </Grid>
        <Button
          className="w-full max-w-[384px]"
          onClick={() => router.push("/contact-us")}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
