import React from "react";

import { FaStar, FaRegStar } from "react-icons/fa6";

export default function RateVisor({ rateNumber }) {
  const STARCOLOR = '#4169e1'
  const INACTIVESTARS = '#708090';
  const rateNumberRounded = Math.round(rateNumber);
  console.log(rateNumberRounded);

  const cantMaxStars = 5;
  const starsActiveArray = Array.from(
    { length: rateNumberRounded },
    (item) =>
      (item = <FaStar size={14} color={STARCOLOR} className="self-center" />)
  ); //el length de este viene por parametro
  const starsInactiveArray = Array.from(
    { length: cantMaxStars - rateNumberRounded },
    (item) =>
      (item = (
        <FaRegStar size={14} color={INACTIVESTARS} className="self-center" />
      ))
  ); //el 2 del length de este viene por parametro
  const starsArray = [...starsActiveArray, ...starsInactiveArray];

  return (
    <div className="flex flex-rows justify-center">
      <span className="mx-1 text-xl text-emerald-500 ">{rateNumber}</span>
      <div className="flex">
        {starsArray.map((item) => (
          <>{item}</>
        ))}
      </div>
    </div>
  );
}
