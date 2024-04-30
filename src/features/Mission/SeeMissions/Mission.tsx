import DivBgColor from "../../../components/DivBgColor";
import HeaderMain from "../../shared/HeaderMain";
import MissionMain from "./MissionMain";

export default function Mission() {
  return (
    <section className="p-[2rem] max-w-[150rem] m-auto h-full flex gap-[3rem] flex-col relative">
      <DivBgColor bgColor="bg-cyan-100" />
      <HeaderMain headerColor="bg-white" />
      <MissionMain />
    </section>
  );
}
