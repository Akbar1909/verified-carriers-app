"use client";
import { FC } from "react";
import RCountUp from "react-countup";

interface CounterProps {
  end: number | string; // can be number or string
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
  className?: string;
}

const CountUp: FC<CounterProps> = ({
  end,
  start = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  className = "",
}) => {
  const parsedEnd = Number(end);

  // if end is not a valid number → return "-"
  if (isNaN(parsedEnd)) {
    return <span className={className}>-</span>;
  }

  return (
    <div className={className}>
      <RCountUp
        start={start}
        end={parsedEnd}
        duration={duration}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        separator={separator}
      />
    </div>
  );
};

export default CountUp;
