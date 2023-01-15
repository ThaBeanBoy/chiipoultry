type headingProps = {
  children: React.ReactNode;
  className?: string;
};

function H1({ children, className }: headingProps) {
  return (
    <h1
      className={`${className} text-mb-h1 font-bold oldstyle-nums nav-brk:text-dsk-h1`}
    >
      {children}
    </h1>
  );
}

function H2({ children, className }: headingProps) {
  return (
    <h2
      className={`${className} text-mb-h2 font-semibold oldstyle-nums nav-brk:text-dsk-h2`}
    >
      {children}
    </h2>
  );
}

function H3({ children, className }: headingProps) {
  return (
    <h3
      className={`${className} text-mb-h3 font-semibold oldstyle-nums nav-brk:text-dsk-h3`}
    >
      {children}
    </h3>
  );
}

function H4({ children, className }: headingProps) {
  return (
    <h4
      className={`${className} text-mb-h4 font-semibold oldstyle-nums nav-brk:text-dsk-h4`}
    >
      {children}
    </h4>
  );
}

function Body({ children, className }: headingProps) {
  return (
    <p className={`${className} text-body proportional-nums`}>{children}</p>
  );
}

function Small({ children, className }: headingProps) {
  return <p className={`${className} text-sm oldstyle-nums`}>{children}</p>;
}

export { H1, H2, H3, H4, Body, Small };
