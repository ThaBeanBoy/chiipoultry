import { H4 } from "./typography";

type videoProps = {
  title: string;
  src: string;

  className?: string;
  id?: string;
};

export default function Video({ title, src, className, id }: videoProps) {
  return (
    <div id={id} className={`${className} rounded bg-white p-16 shadow-lg`}>
      <video className="mb-16 rounded" src={src} controls />
      <H4>{title}</H4>
    </div>
  );
}
