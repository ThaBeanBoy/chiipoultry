import { useState, useEffect } from "react";

export type period = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  ended?: boolean;
};

let milliConversion: period = {
  days: 86400000,
  hours: 3600000,
  minutes: 60000,
  seconds: 1000,
};

const discountEndDate: Date = new Date(2023, 1, 14, 23, 59);

function discountPeriod(): period {
  const now: Date = new Date();

  let timeLeft: number = discountEndDate.valueOf() - now.valueOf();

  const calcTime = (conversion: number): number => {
    const result: number = Math.floor(timeLeft / conversion);

    // Decreasing the timeLeft to calculate the upcoming digit
    timeLeft -= result * conversion;

    return result;
  };

  return {
    days: calcTime(milliConversion.days),
    hours: calcTime(milliConversion.hours),
    minutes: calcTime(milliConversion.minutes),
    seconds: calcTime(milliConversion.seconds),
    ended: discountEndDate.valueOf() - now.valueOf() < 0,
  };
}

export default function useDiscountPeriod(): period {
  const [discount, setDiscount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setDiscount(discountPeriod()), 1000);
  }, []);

  return discount;
}

// export { discountPeriod, useDiscountPeriod };
