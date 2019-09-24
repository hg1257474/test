import React from "react";
// import "./App.css";
import Header from "./components/Header";
const x =
  "https://hbimg.huabanimg.com/a24a98b4fea00bae48f47205888908aa105ed98c20cf4-PkSrf2_fw236";
const asd: {
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
} = {
  participantTotal: 12,
  endDate: "2019-10-01",
  quota: 4,
  originalPrice: "29.00",
  presentPrice: "139.00",
  headerImg: x,
  teamTotal: 10,
  visitTotal: 123,
  teamMembers: Array.from<[string, string]>({ length: 2 }).fill(["张三", x]),
  participants: Array.from<[string, string]>({ length: 20 }).fill(["张三", x])
};
const App: React.FC = () => {
  return (
    <article>
      <Header {...asd} />
    </article>
  );
};

export default App;
