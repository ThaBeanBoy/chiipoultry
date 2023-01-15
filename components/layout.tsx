import Top from "./top";
import Footer from "./footer";

import { Montserrat } from "@next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
});

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${mont.className} min-h-screen overflow-visible bg-white text-black`}
    >
      <Top />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
