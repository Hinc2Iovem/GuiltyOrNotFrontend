import DivBgColor from "../../../components/DivBgColor";
import HeaderMain from "../../shared/HeaderMain";
import CreateCharacterMain from "./CreateCharacterMain";

export default function CreateCharacter() {
  return (
    <section className="p-[2rem] max-w-[150rem] m-auto h-full flex gap-[5.5rem] flex-col relative">
      <DivBgColor bgColor="bg-cyan-100" />
      <HeaderMain headerColor="bg-white" />
      <CreateCharacterMain />
    </section>
  );
}
