import ProfileLeftPart from "./ProfileLeftPart/ProfileLeftPart";
import ProfileRightPart from "./ProfileRightPart/ProfileRightPart";
import logout from "../../assets/shared/profile/Logout.png";

export default function ProfileMain() {
  const handleLogOut = () => {
    localStorage.setItem("username", "");
    localStorage.setItem("role", "");
  };
  return (
    <main className="flex md:flex-row flex-col w-full h-fit p-[1rem] gap-[2rem] relative">
      <ProfileLeftPart />
      <ProfileRightPart />

      <button
        onClick={handleLogOut}
        className="absolute md:top-[-2.5rem] top-[1rem] right-[0rem] w-[3.5rem] h-[3.5rem] hover:shadow-sm hover:shadow-gray-700 rounded-full hover:scale-[1.02] transition-shadow"
      >
        <img src={logout} alt="Logout" className="w-full h-full object-cover" />
      </button>
    </main>
  );
}
