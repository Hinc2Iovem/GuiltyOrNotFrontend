import DivBgColor from "../../components/DivBgColor";
import HeaderMain from "../shared/HeaderMain";
import DetectiveMain from "./DetectiveMain";

export default function Detective() {
  return (
    <section className="p-[2rem] overflow-y-hidden max-w-[150rem] m-auto h-full flex gap-[3rem] lg:gap-[10rem] flex-col relative">
      <DivBgColor bgColor="bg-cyan-100" />
      <HeaderMain headerColor="bg-white" />
      <DetectiveMain />
    </section>
  );
}
