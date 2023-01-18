type GridProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function Grid({ children, id, className }: GridProps) {
  return (
    <div
      id={id}
      className={`${className}
        mb-42 grid
        max-w-[1184px] gap-16 min-[830px]:w-[800px] min-[830px]:grid-cols-3
        min-[1218px]:w-full
        `}
    >
      {children}
    </div>
  );
}
