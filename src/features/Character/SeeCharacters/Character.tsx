import DivBgColor from "../../../components/DivBgColor";
import HeaderMain from "../../shared/HeaderMain";
import CharacterMain from "./CharacterMain";

export default function Character() {
  return (
    <section className="p-[2rem] max-w-[150rem] m-auto h-full flex gap-[3rem] flex-col relative">
      <DivBgColor bgColor="bg-cyan-100" />
      <HeaderMain headerColor="bg-white" />
      <CharacterMain />
    </section>
  );
}
