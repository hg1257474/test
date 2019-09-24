import React, { useState } from "react";
export default ({ endDate }: { endDate: string }) => {
  const [remainingTime, setRemainingTime] = useState([0, 0, 0, 0]);
  setInterval(() => {
    let remainingSeconds = Math.floor(
      (new Date(endDate).getTime() - new Date().getTime()) / 1000
    );
    const days = Math.floor(remainingSeconds / (3600 * 24));
    const hours = Math.floor((remainingSeconds -= 3600 * 24 * days) / 3600);
    const minutes = Math.floor((remainingSeconds -= 3600 * hours) / 60);
    const seconds = remainingSeconds - 60 * minutes;
    setRemainingTime([days, hours, minutes, seconds]);
  }, 1000);
  return (
    <time dateTime={endDate} className="count-down">
      <p>距离拼团结束还剩:</p>
      <span >{remainingTime[0].toString().padStart(2, "0")}</span>天
      <span>{remainingTime[1].toString().padStart(2, "0")}</span>:
      <span>{remainingTime[2].toString().padStart(2, "0")}</span>:
      <span>{remainingTime[3].toString().padStart(2, "0")}</span>
    </time>
  );
};
