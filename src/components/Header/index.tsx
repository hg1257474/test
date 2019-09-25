import React, { useState } from "react";
import CountDown from "./CountDown";
import "./index.css";
import Team from "./team.svg";
export default ({
  participantTotal,
  endDate,
  quota,
  originalPrice,
  presentPrice,
  headerImg,
  teamTotal,
  visitTotal,
  teamMembers,
  participants
}: {
  participantTotal: number;
  endDate: string;
  quota: number;
  originalPrice: string;
  presentPrice: string;
  headerImg: string;
  teamTotal: number;
  visitTotal: number;
  teamMembers: [string, string][];
  participants: [string, string][];
}) => {
  return (
    <header>
      <img src={headerImg} className={"full-size"} />
      <div className="clear-float">
        <span style={{ marginTop: "1em", border: "1px solid white" }}>
          <Team />
          {quota}人团
        </span>
        <span style={{ marginTop: "0.8em" }}>
          ￥<span style={{ fontSize: "22px" }}>{presentPrice}</span>
        </span>
        <span style={{ textDecoration: "line-through", marginTop: "1.3em" }}>
          ￥{originalPrice}
        </span>
        <CountDown endDate={endDate} />
      </div>
      <div>
        已有
        {participantTotal
          .toString()
          .split("")
          .map((item, index) => (
            <span key={index}>{item}</span>
          ))}{" "}
        人参加团购
      </div>
      <div>
        {participants.map((item, index) => (
          <span key={index}>
            <img src={item[1]} />
            {item[0]}
          </span>
        ))}{" "}
      </div>
      <div>
        <span>已有{teamTotal}团</span>
        浏览量：{visitTotal}
      </div>
      <div>
        {teamMembers.map((item, index) => (
          <img src={item[1]} />
        ))}
        <p>
          {quota === teamMembers.length
            ? "此图案以拼团成功"
            : `还差${teamMembers.length - quota}人拼团成功`}
        </p>
      </div>
    </header>
  );
};
