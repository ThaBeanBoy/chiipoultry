import Image from "next/image";

import { discountPeriod } from "../ts/discount";

import Grid from "./grid";
import { H2, H4, Body, Small } from "./typography";
import Button from "./button";

type productProps = {
  title: string;
  description: string;
  price: number;
  discounted: boolean | undefined;

  imgPath: string;
  imgAlt: string;
};

const products: productProps[] = [
  {
    title: "Standard",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet.",
    price: 250,
    discounted: !discountPeriod().ended,
    imgPath: "/product_range/standard.png",
    imgAlt: "Drinker Standard Edition",
  },
  {
    title: "Drainage",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet.",
    price: 270,
    discounted: !discountPeriod().ended,
    imgPath: "/product_range/standard.png",
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
  return (
    <section className="py-64">
      <div id="section-container" className="flex flex-col items-center px-16">
        <H2 className="mb-64 text-center">Product Range</H2>
        {/* <div id="products" className="flex flex-col items-center"> */}
        <Grid id="products">
          {products.map((props, key) => (
            <ProductTag key={key} {...props} />
          ))}
          <div
            id="coming-soon"
            className="flex min-h-[135px] items-center justify-center rounded bg-white p-16 drop-shadow-lg"
          >
            <H4>More products coming soon</H4>
          </div>
        </Grid>
        <Button className="w-full max-w-[384px]">Contact Us</Button>
      </div>
    </section>
  );
}