/* 
  # IMPORTING COMPONENT PROPERLY

  !import dynamic from "next/dynamic";
  !const Grid = dynamic(() => import("../components/grid"), {
  !  ssr: false,
  !});

  The component uses the window API, unfortunately it's only on browsers.
  If the component is being server side rendered, then it should be dynamically loaded
  on the client side. that's why it's import to import it with the code above.
*/

import useWindowDimensions from "../ts/windowDimension";

type GridProps = {
  children: any /*Is actually React.ReactNode, I just wanted typescript to shut up*/;
  id?: string;
  className?: string;
};

export default function Grid({ children, id, className }: GridProps) {
  const { width: windowWidth } = useWindowDimensions();
  const modBy: number = windowWidth <= 1218 ? 2 : 3;
  const leftOvers: number = children.length % modBy;

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
        {windowWidth < 830
          ? children
          : children.slice(0, children.length - (children.length % modBy))}
      </div>
      {
        /* Is displayd in 2 column */
        windowWidth >= 830 && children.length % modBy > 0 ? (
          <div className={`${leftOvers === 2 ? "flex" : ""}`}>
            {children.slice(children.length - (children.length % modBy))}
          </div>
        ) : (
          <></>
        )
      }
    </div>
  );
}
