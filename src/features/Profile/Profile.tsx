import DivBgColor from "../../components/DivBgColor";
import HeaderMain from "../shared/HeaderMain";
import ProfileMain from "./ProfileMain";

export default function Profile() {
  return (
    <section className="p-[2rem] max-w-[150rem] m-auto h-full flex gap-0 md:gap-[3rem] flex-col relative">
      <DivBgColor bgColor="bg-cyan-100" />
      <HeaderMain headerColor="bg-white" />
      <ProfileMain />
    </section>
  );
}
