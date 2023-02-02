import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black py-64">
      <footer className="mx-auto w-full max-w-[1184px] px-16">
        <Link href="/">
          <Image src="/logo-yellow.svg" alt="logo" width={255} height={64} />
        </Link>
      </footer>
    </div>
  );
}
