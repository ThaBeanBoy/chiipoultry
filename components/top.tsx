import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

import { IoMdClose } from "react-icons/Io";

import Button from "./button";
import { H3, Body } from "./typography";

type nav = {
  path: string;
  content: string | React.ReactNode;
};

type NavProps = {
  routerPath: string;
  className?: string;
  navClick?: Function;
};

const navs: nav[] = [
  {
    path: "/",
    content: "home",
  },
  {
    path: "/",
    content: "drinker",
  },
  {
    path: "/about-us",
    content: "about us",
  },
  {
    path: "/contact-us",
    content: "contact us",
  },
];

export default function Top() {
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [alertBoxOpen, setAlertBoxOpen] = useState<boolean>(false);
  const [shopButtonClicked, setShopButtonClicked] = useState<boolean>(false);

  const Nav = ({ routerPath, className }: NavProps) => (
    <nav className={className !== undefined ? className : ""}>
      {navs.map(({ path, content }, indx) => {
        const onCurrentPath: boolean = path === routerPath;

        return (
          <Link
            href={path}
            key={indx}
            className={`
            ${onCurrentPath ? "" : "font-semibold hover:text-attention"} 
            capitalize transition
            ${indx === navs.length - 1 ? "w-full nav-brk:w-auto" : ""}
            `}
            onClick={(e) => {
              //prevening default
              e.preventDefault();

              //closing the mobile nav
              setMobileNavOpen(false);

              //changing the route
              router.push(path);
            }}
          >
            {content}
          </Link>
        );
      })}
      <Button
        className="text-body font-semibold"
        small
        onClick={() => {
          // closing the mobile navigation
          setMobileNavOpen(false);

          // disabling the pulse of the shop button
          setShopButtonClicked(true);
          console.log("danko", shopButtonClicked);

          //alerting the user of the current stauts of the online shop
          setAlertBoxOpen(true);
        }}
      >
        shop <Image src="/cart.svg" alt="cart" height={16} width={16} />
        {!shopButtonClicked ? (
          <span className="absolute top-0 right-0 flex h-8 w-8 translate-y-[-4px] translate-x-[4px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-attention opacity-75"></span>
            <span className="relative inline-flex h-8 w-8 rounded-full bg-attention"></span>
          </span>
        ) : (
          <></>
        )}
      </Button>
    </nav>
  );

  return (
    <>
      {alertBoxOpen ? (
        <div
          id="alert-bg"
          className="fixed top-0 left-0 z-[1000] flex h-screen w-screen flex-col items-center justify-center gap-8 bg-black-faded px-16"
        >
          <div
            id="alert"
            className="flex w-full max-w-[384px] flex-col items-end justify-center gap-8"
          >
            <Button onClick={() => setAlertBoxOpen(false)}>
              <IoMdClose />
            </Button>

            <div
              id="container"
              className="flex w-full flex-col items-center gap-8 rounded bg-white p-16"
            >
              <Image
                src="/after_sales_icons/repairs.svg"
                alt="under construction"
                width={64}
                height={64}
              />
              <H3>Under Construction</H3>
              <hr className="w-full" />
              <Body className="text-center">
                <b>Chiipoultry online store is still under construction. </b>
                The store will be launched soon & users/customers will be
                notified then.
              </Body>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {mobileNavOpen ? (
        <div
          id="mobile-nav"
          className="fixed top-0 left-0 z-10 flex h-screen w-screen justify-end bg-black-faded"
        >
          <div className="flex h-screen  items-start p-16">
            <Nav
              className="flex h-full flex-col items-end gap-32 rounded-tl-lg rounded-br-lg rounded-bl-lg bg-white p-16"
              routerPath={router.pathname}
            />
            <div
              id="close"
              className="flex h-32 w-32 items-center justify-center rounded-tr-lg rounded-br-lg bg-white"
              onClick={() => setMobileNavOpen(false)}
            >
              <IoMdClose />
              {/* <Image src="/cancel.svg" alt="close" width={12.2} height={12.2} /> */}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div
        id="header-container"
        className="fixed top-0 z-[5] w-full bg-white-faded shadow-md"
      >
        <header className="mx-auto flex w-full max-w-[1184px] items-center justify-between px-16 py-16 nav-brk:py-24">
          <Link href="/" className="nav-brk:hidden">
            <Image
              src="/logo_mini_black.svg"
              alt="logo"
              width={32}
              height={32}
            />
          </Link>

          <Link href="/" className="hidden nav-brk:block">
            <Image src="/logo.svg" alt="logo" width={255} height={64} />
          </Link>

          <Image
            src="/hamburger.svg"
            className="nav-brk:hidden"
            alt="open nav"
            width={24}
            height={16}
            onClick={() => setMobileNavOpen(true)}
          />

          <Nav
            className="hidden items-center gap-42 nav-brk:flex"
            routerPath={router.pathname}
          />
        </header>
      </div>
    </>
  );
}
