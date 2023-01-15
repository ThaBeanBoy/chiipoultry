import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black py-64">
      <footer className="mx-auto w-full max-w-[1184px] px-16">
        <Image src="/logo-yellow.svg" alt="logo" width={255} height={64} />
      </footer>
    </div>
  );
}
