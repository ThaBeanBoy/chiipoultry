import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState } from "react";

type nav = {
  path: string;
  content: string | React.ReactNode;
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
      <span className="flex items-center gap-8 rounded bg-active p-8">
        shop <Image src="/cart.svg" alt="cart" height={16} width={16} />
      </span>
    ),
  },
];

export default function Top() {
  const router = useRouter();
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <>
      <header className="top-0 sticky z-0 mx-auto flex w-full max-w-[1184px] items-center justify-between px-16 py-24">
        <Image
          src="/logo_mini_black.svg"
          className="nav-brk:hidden"
          alt="logo"
          width={32}
          height={32}
        />

        <Image
          src="/logo.svg"
          className="hidden nav-brk:block"
          alt="logo"
          width={255}
          height={64}
        />

        <Image
          src="/hamburger.svg"
          className="nav-brk:hidden"
          alt="open nav"
          width={24}
          height={16}
          onClick={() => setMobileNavOpen(true)}
        />

        <nav className="hidden items-center gap-42 nav-brk:flex">
          {navs.map(({ path, content }, indx) => {
            const onCurrentPath: boolean = path === router.pathname;

            return (
              <Link
                href={path}
                key={indx}
                className={`${onCurrentPath ? "" : "font-semibold"} capitalize`}
              >
                {content}
              </Link>
            );
          })}
        </nav>
      </header>

      {mobileNavOpen ? (
        <div
          id="mobile-nav"
          className="fixed z-10 h-screen w-screen bg-black-faded"
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
