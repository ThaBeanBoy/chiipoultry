import { H4, Body } from "./typography";

type buttonProps = {
  children: string | React.ReactNode;
  onClick?: Function;
  className?: string;
  id?: string;
  outlined?: boolean;
  small?: boolean;
};

const buttonStyling: string = "flex  items-center justify-center gap-8";

export default function Button({
  children,
  onClick,
  className,
  id,
  outlined,
  small,
}: buttonProps) {
  return (
    <button
      id={id}
      className={`
        ${className}
        ${outlined ? "bg-white" : "bg-active"}
        rounded border-2 border-solid border-active p-8 drop-shadow-lg transition
        hover:scale-[1.05]  hover:text-black hover:brightness-125 hover:drop-shadow-2xl
        active:scale-[0.95] active:brightness-[.95] active:drop-shadow-md`}
      onClick={onClick !== undefined ? () => onClick() : () => {}}
    >
      {small ? (
        <Body className={buttonStyling}>{children}</Body>
      ) : (
        <H4 className={buttonStyling}>{children}</H4>
      )}
    </button>
  );
}
