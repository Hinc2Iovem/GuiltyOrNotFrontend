import ProfileCompletedMissions from "./ProfileCompletedMissions";
import ProfileCreatedCharacters from "./ProfileCreatedCharacters";
import ProfileCreatedMissions from "./ProfileCreatedMissions";

export default function ProfileRightPart() {
  return (
    <div className="flex flex-col overflow-x-hidden gap-[2rem] w-full ">
      <ProfileCompletedMissions />
      <ProfileCreatedMissions />
      <ProfileCreatedCharacters />
    </div>
  );
}
