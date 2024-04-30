import CharacterLeftPart from "./CharacterLeftPart";
import CharacterRightPart from "./CharacterRightPart";

export default function CharacterMain() {
  return (
    <main className="flex gap-[2rem] w-full sm:flex-row flex-col">
      <CharacterLeftPart />
      <CharacterRightPart />
    </main>
  );
}
