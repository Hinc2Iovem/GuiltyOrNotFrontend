import React from "react";
import { ROLES } from "../../consts/Roles";
import detective from "../../assets//shared/detectiveImage.jpg";
import guilty from "../../assets/shared/GuiltyImage.jpg";

type RolesFooterTypes = {
  role: ROLES;
  setRole: React.Dispatch<React.SetStateAction<ROLES>>;
  visible?: boolean;
  isMobile?: boolean;
};

export default function RolesFooter({
  role,
  setRole,
  visible,
  isMobile,
}: RolesFooterTypes) {
  return (
    <aside
      className={`${
        visible ? "flex" : "hidden"
      } absolute bottom-[1rem] left-[1rem] items-center gap-[1.5rem] shrink-0`}
    >
      <button onClick={() => setRole(ROLES.Detective)} type="button">
        <img
          src={detective}
          className={`${
            role === "Detective"
              ? "shadow-md shadow-black scale-[1.05] hover:scale-[1.07]"
              : ""
          } transition-all ${
            isMobile ? "w-[4rem] h-[4rem]" : "w-[5.5rem] h-[5.5rem]"
          } object-fill rounded-full hover:scale-[1.05]`}
        />
      </button>
      <button onClick={() => setRole(ROLES.Guilty)} type="button">
        <img
          src={guilty}
          className={`${
            role === "Guilty"
              ? "shadow-md shadow-black scale-[1.05] hover:scale-[1.07]"
              : ""
          } transition-all ${
            isMobile ? "w-[4rem] h-[4rem]" : "w-[5.5rem] h-[5.5rem]"
          } object-fill rounded-full hover:scale-[1.05]`}
        />
      </button>
    </aside>
  );
}
