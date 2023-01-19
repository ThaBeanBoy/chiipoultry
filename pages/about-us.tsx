import Head from "next/head";

import { H2, Body } from "../components/typography";

export default function aboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Chiipoultry</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_mini.svg" />
      </Head>
      <section className="flex flex-col items-center px-16">
        <H2 className="mt-64 mb-32">About Us</H2>

        <div
          id="text-container"
          className="mb-64 flex max-w-[480px] flex-col gap-24 min-[480px]:text-justify"
        >
          <Body>
            Lorem ipsum dolor sit amet consectetur. Duis sit in urna elementum
            arcu enim. Suscipit cras feugiat leo integer morbi lectus nibh
            facilisis. Accumsan eu mauris sed nunc ut dolor nisl. Nibh bibendum
            facilisis ut aliquet aenean eu nulla sit.
          </Body>
          <Body>
            Nibh nibh leo praesent cras nec quam sit praesent. Parturient mauris
            praesent nunc lectus quis. Orci vel vestibulum tellus nec magna in
            praesent. Nunc tincidunt integer purus id volutpat interdum.
            Faucibus ultricies fames adipiscing sem nisl aliquet. Ut proin
            tristique sed in. Nisl sit iaculis maecenas sed in. Quis nec in
            molestie maecenas. Lectus integer vulputate aliquet scelerisque
            aliquet diam. Vulputate risus non faucibus non ornare sit ipsum sed
            elementum. Libero in massa egestas pretium suspendisse tellus donec
            lacus risus. Praesent quis potenti id cursus tincidunt est tortor.
          </Body>
          <Body>
            Ipsum enim nunc nisl dictumst odio suspendisse lacus vel. Tortor
            orci diam sit orci ornare arcu. Nunc mattis commodo tellus quis in
            non scelerisque tincidunt. Velit tincidunt vitae eget aliquam
            malesuada sagittis varius eget in. Tortor luctus egestas mattis
            senectus commodo eget dui. Sed pharetra enim ultrices ornare eget
            lacus ultricies.
          </Body>
        </div>
      </section>
    </>
  );
}