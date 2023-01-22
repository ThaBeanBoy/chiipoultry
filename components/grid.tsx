import useWindowDimensions from "../ts/windowDimension";

type GridProps = {
  children: any /*Is actually React.ReactNode, I just wanted typescript to shut up*/;
  id?: string;
  className?: string;
};

export default function Grid({ children, id, className }: GridProps) {
  const isEven: boolean = children.length % 2 == 0;
  const threeColumnLeftOvers: number = children.length % 3;
  const { width } = useWindowDimensions();

  return (
    <div className="mb-42 flex flex-col items-center gap-16">
      <div
        id={id}
        className={`${className}
        grid
        max-w-[1184px] gap-16 min-[830px]:w-[800px] min-[830px]:grid-cols-3
        min-[1218px]:w-full
        `}
      >
        {/* {isEven ? children : children.slice(0, children.length - 1)} */}
        {width < 830
          ? children //this is a single column
          : 830 <= width && width <= 1218
          ? isEven // this is 2 column section
            ? children
            : children.slice(0, children.length - 1)
          : children}
      </div>
      {
        /* Is displayd in 2 column */
        !isEven && 830 <= width && width <= 1218 ? (
          <div className="hidden grid-2-col-screen:block grid-3-col-screen:hidden">
            {children[children.length - 1]}
          </div>
        ) : (
          <></>
        )
      }
    </div>
  );
}
