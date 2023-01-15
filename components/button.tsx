import { H4, Body } from "./typography";

type buttonProps = {
  children: string | React.ReactNode;
  onClick?: Function;
  className?: string;
  id?: string;
  outlined?: boolean;
  small?: boolean;
};

const buttonStyling: string = "flex  items-start justify-center gap-8";

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
      className={`${className} rounded border-2 border-solid drop-shadow-lg ${
        outlined ? "bg-white" : "bg-active"
      } border-active  p-8 hover:text-black hover:brightness-125`}
      onClick={onClick !== undefined ? () => onClick : () => {}}
    >
      {small ? (
        <Body className={buttonStyling}>{children}</Body>
      ) : (
        <H4 className={buttonStyling}>{children}</H4>
      )}
    </button>
  );
}
