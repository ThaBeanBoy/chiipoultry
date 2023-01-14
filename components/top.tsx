import Link from 'next/link';

export default function Top() {
  return (
    <header>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/'>Drinker</Link>
        </li>
        <li>
          <Link href='/'>About Us</Link>
        </li>
        <li>
          <Link href='/'>Contact Us</Link>
        </li>
        <li>
          <Link href='/'>Shop</Link>
        </li>
      </ul>
    </header>
  );
}
