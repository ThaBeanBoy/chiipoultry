type headingProps = {
  children: React.ReactNode;
  className?: string;
};

function H1({ children, className }: headingProps) {
  return (
    <h1 className={`${className} text-mb-h1 font-bold nav-brk:text-dsk-h1`}>
      {children}
    </h1>
  );
}

function H2({ children, className }: headingProps) {
  return (
    <h1 className={`${className} text-mb-h2 font-semibold nav-brk:text-dsk-h2`}>
      {children}
    </h1>
  );
}

function H3({ children, className }: headingProps) {
  return (
    <h1 className={`${className} text-mb-h3 font-semibold nav-brk:text-dsk-h3`}>
      {children}
    </h1>
  );
}

function H4({ children, className }: headingProps) {
  return (
    <h1 className={`${className} text-mb-h4 font-semibold nav-brk:text-dsk-h4`}>
      {children}
    </h1>
  );
}

function Body({ children, className }: headingProps) {
  return <p className={`${className} text-body`}>{children}</p>;
}

function Small({ children, className }: headingProps) {
  return <p className={`${className} text-sm`}>{children}</p>;
}

export { H1, H2, H3, H4, Body, Small };
