import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

import Button from "./button";

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
  {
    path: "/contact-us",
    content: (
      <Button className="text-body" small>
        shop <Image src="/cart.svg" alt="cart" height={16} width={16} />
      </Button>
    ),
  },
];

export default function Top() {
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const Nav = ({ routerPath, className }: NavProps) => (
    <nav className={className !== undefined ? className : ""}>
      {navs.map(({ path, content }, indx) => {
        const onCurrentPath: boolean = path === routerPath;

        return (
          <Link
            href={path}
            key={indx}
            className={`${
              onCurrentPath ? "" : "font-semibold"
            } capitalize hover:text-attention`}
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
    </nav>
  );

  return (
    <>
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
              className="justifycenter flex h-32 w-32 items-center rounded-tr-lg rounded-br-lg bg-white"
              onClick={() => setMobileNavOpen(false)}
            >
              <Image src="/cancel.svg" alt="close" width={12.2} height={12.2} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <header className="sticky z-0 mx-auto flex w-full max-w-[1184px] items-center justify-between bg-white px-16 py-16 nav-brk:py-24">
        <Link href="/" className="nav-brk:hidden">
          <Image src="/logo_mini_black.svg" alt="logo" width={32} height={32} />
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
    </>
  );
}
