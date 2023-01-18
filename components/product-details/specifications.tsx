import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/Md";

import { H3, H4, Body } from "../typography";
type detail = {
  title: string;
  description?: string;
  isHeading?: boolean;

  //From parent component
  open?: boolean;
  index?: number;
  setDetailIndexOpen?: Function;
  detailIndexOpen?: number;
};

const details: detail[] = [
  {
    title: "description",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet. Dui lobortis sit sit ornare viverra neque quisque ultricies sed. Id hac ultrices pellentesque risus pellentesque eu eget.",
  },
  {
    title: "Specifications",
    isHeading: true,
  },
  {
    title: "contains 20L",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet. Dui lobortis sit sit ornare viverra neque quisque ultricies sed. Id hac ultrices pellentesque risus pellentesque eu eget.",
  },
  {
    title: "no age range",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet. Dui lobortis sit sit ornare viverra neque quisque ultricies sed. Id hac ultrices pellentesque risus pellentesque eu eget.",
  },
  {
    title: "easy refills",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet. Dui lobortis sit sit ornare viverra neque quisque ultricies sed. Id hac ultrices pellentesque risus pellentesque eu eget.",
  },
  {
    title: "easy to load water",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet. Dui lobortis sit sit ornare viverra neque quisque ultricies sed. Id hac ultrices pellentesque risus pellentesque eu eget.",
  },
  {
    title: "minimum of 72 chickens",
    description:
      "Lorem ipsum dolor sit amet consectetur. Imperdiet nisl molestie proin nam suscipit. Eu urna aliquam metus enim egestas eget a morbi metus. Dolor elit elit tristique amet. Dui lobortis sit sit ornare viverra neque quisque ultricies sed. Id hac ultrices pellentesque risus pellentesque eu eget.",
  },
];

function Detail({
  title,
  description,
  open,
  index,
  setDetailIndexOpen,
}: detail) {
  const detailClicked: Function = () => {
    if (setDetailIndexOpen !== undefined) {
      setDetailIndexOpen(open || index === undefined ? undefined : index);
    }
  };

  return (
    <button
      onClick={() => detailClicked()}
      className={`mb-16 ${
        open ? "scale-[1.05] drop-shadow-2xl" : "drop-shadow-lg"
      } w-full rounded bg-white p-16 transition last:mb-0`}
    >
      <div id="top" className="mb-8 flex items-center gap-8">
        <MdKeyboardArrowDown
          className={`${open ? "rotate-[180deg] text-attention" : ""}`}
        />
        <H4 className={`${open ? "text-attention" : ""}`}>{title}</H4>
      </div>
      {open ? <Body className="pl-24 text-left">{description}</Body> : <></>}
    </button>
  );
}

export default function Specifications() {
  const [detailIndexOpen, setDetailIndexOpen] = useState<number | undefined>(
    undefined
  );

  return (
    <ul className="w-full max-w-[584px]">
      {details.map(({ title, description, isHeading }, key) =>
        isHeading ? (
          <H3 key={key} className="my-32 ml-[40px]">
            Specifications
          </H3>
        ) : (
          <Detail
            key={key}
            title={title}
            description={description}
            index={key}
            open={detailIndexOpen === key}
            setDetailIndexOpen={setDetailIndexOpen}
          />
        )
      )}
    </ul>
  );
}
