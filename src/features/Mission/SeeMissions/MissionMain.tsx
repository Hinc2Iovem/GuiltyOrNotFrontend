import MissionLeftPart from "./MissionLeftPart";
import MissionRightPart from "./MissionRightPart";

export default function MissionMain() {
  return (
    <main className="flex gap-[2rem] w-full sm:flex-row flex-col">
      <MissionLeftPart />
      <MissionRightPart />
    </main>
  );
}
