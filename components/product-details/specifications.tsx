import Link from "next/link";

import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/Md";

import { H3, H4, Body } from "../typography";

import useDiscountPeriod from "@/ts/discount";

type detail = {
  title: string;
  description?: string | React.ReactNode;
  isHeading?: boolean;

  //From parent component
  open?: boolean;
  index?: number;
  setDetailIndexOpen?: Function;
  detailIndexOpen?: number;
};

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
      } w-full rounded bg-white p-24 text-left transition last:mb-0`}
    >
      <div id="top" className="mb-8 flex items-center gap-8">
        <MdKeyboardArrowDown
          className={`${open ? "rotate-[180deg] text-attention" : ""}`}
        />
        <H4 className={`${open ? "text-attention" : ""} capitalize`}>
          {title}
        </H4>
      </div>
      {open ? description : <></>}
    </button>
  );
}

export default function Specifications() {
  const [detailIndexOpen, setDetailIndexOpen] = useState<number | undefined>(0);

  const { ended } = useDiscountPeriod();
  const details: detail[] = [
    {
      title: "description",
      description: (
        <>
          <Body className="mb-16">
            Chicken drinker made with{" "}
            <span className="font-semibold">ease of use in mind</span>. compared
            to fountain drinkers, this drinker doesn&apos;t require a lot of
            physical labour.
          </Body>

          <ol className="mb-16 list-decimal">
            <li>Place an empty drinker in the position you want.</li>
            <li>Insert medicine (optional).</li>
            <li>
              Put water in using a hose pipe, bucket or carry the water, your
              choice.
            </li>
          </ol>

          <Body className="mb-16 font-semibold">
            There is no back-breaking labour required.
          </Body>

          <Body className="mb-16">
            The drinkers with a drainage pipe are{" "}
            {ended ? (
              "R270"
            ) : (
              <>
                <span className="line-through">R270</span>{" "}
                <span>R243 (Price Down Discount)</span>
              </>
            )}
            .{" "}
            <span className="font-semibold">
              The drainage pipes allow you to completely drain water out of the
              drinker without dismantling the pipes.
            </span>
          </Body>
          <Body>
            <Link className="font-semibold text-attention" href="/contact-us">
              Contact Us Here.
            </Link>
          </Body>
        </>
      ),
    },
    {
      title: "Specifications",
      isHeading: true,
    },
    {
      title: "contains 20L",
      description: (
        <Body>
          The drinker contains full 20 litres of water. That&apos;s a lot
          compared to the usual manual drinkers. With the right amount of
          buckets,{" "}
          <span className="font-semibold">
            you can fill your drinkers and return the following day.
          </span>{" "}
          You can rest easy knowing that your chickens have all the water they
          need. This gives you the time to focus on other aspects of your
          poultry business.
        </Body>
      ),
    },
    {
      title: "no age range",
      description: (
        <>
          <Body className="mb-16">
            A common annoyance is that some drinkers have a certain age range.
            Some are for chicks, some are for chickens between a certain age
            range. This problem is solved, from chicks to maturity, you
            don&apos;t have to stress about interchanging different drinkers.
          </Body>
          <Body>
            <span className="font-semibold">
              These drinkers are for all chickens, no matter the age range
            </span>{" "}
            The only thing you have to do is adjust the height & viola, your
            chickens&apos; water system is done being set up.
          </Body>
        </>
      ),
    },
    {
      title: "easy to load water",
      description: (
        <>
          <Body className="mb-16">
            The dreaded ways of flipping your drinker and exhausting yourself
            are over. Filling/refilling water now becomes less of a chore.
          </Body>
          <Body>
            Because it&apos;s a bucket,{" "}
            <span className="font-semibold">
              you can easily open the top and fill the drinker.
            </span>{" "}
            The way you choose to fill is up to you. On the Brandvlei Foods
            farm, a hosepipe is used.
          </Body>
        </>
      ),
    },
    {
      title: "96 chickens (broiler)",
      description: (
        <Body>
          1 nipple is rated for 10-12 chickens (broilers), & there are 8 nipples
          on 1 drinker. 1 bucket is rated for 80-96 broiler chickens
        </Body>
      ),
    },
    {
      title: "dimensions",
      description: (
        <Body>
          Length : 0.47m <br />
          Height : 0.47m <br />
          Width : 0.35m
        </Body>
      ),
    },
  ];

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
