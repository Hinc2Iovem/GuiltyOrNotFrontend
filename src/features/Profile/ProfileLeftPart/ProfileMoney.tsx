import money from "../../../assets/shared/dollar.png";

export default function ProfileMoney() {
  return (
    <div className="w-[20rem] bg-white p-[.5rem] flex items-center justify-center gap-[.3rem] mb-[2rem]">
      <img src={money} alt="Money" className="w-[3rem] h-[3rem] object-cover" />
      <p className="text-[2rem] font-medium text-yellow-500">2017</p>
    </div>
  );
}
