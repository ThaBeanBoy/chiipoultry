import Top from './top';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='bg-white min-h-screen text-black'>
      <Top />
      <main>{children}</main>
    </div>
  );
}
