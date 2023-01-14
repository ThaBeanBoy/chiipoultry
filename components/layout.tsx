import Top from './top';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Top />
      <main>{children}</main>
    </>
  );
}
