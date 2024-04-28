import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import AsideHoverPromptModal from "./AsideHoverPromptModal";

const ButtonHoverPromptModalStyles = cva(
  ["z-[999] transition-all hover:scale-[1.03] outline-none w-fit"],
  {
    variants: {
      variant: {
        icon: ["bg-white rounded-full"],
        iconWithShadow: ["hover:shadow-black hover:shadow-sm rounded-full"],
        rectangle: ["py-[.5rem] px-[2rem] rounded-md"],
        rectangleWithShadow: [
          "hover:shadow-black py-[.5rem] px-[2rem] rounded-md",
        ],
      },
    },
    defaultVariants: {
      variant: "iconWithShadow",
    },
  }
);

export interface hidePromptModal {
  hideModal?: boolean;
  contentName: string;
  positionByAbscissa: "left" | "right";
  asideClasses?: string;
  classesOnUpperDiv?: string;
  upperDivRelative?: boolean;
}

type ButtonHoverPromptModalProps = VariantProps<
  typeof ButtonHoverPromptModalStyles
> &
  ComponentProps<"button"> &
  hidePromptModal;

export default function ButtonHoverPromptModal({
  variant,
  className,
  contentName,
  hideModal = false,
  positionByAbscissa = "right",
  asideClasses,
  classesOnUpperDiv = "",
  upperDivRelative = true,
  ...props
}: ButtonHoverPromptModalProps) {
  const [showAsidePrompt, setShowAsidePrompt] = useState(false);

  return (
    <div
      className={`${upperDivRelative ? "relative" : ""}  ${classesOnUpperDiv}`}
    >
      <button
        {...props}
        className={twMerge(
          ButtonHoverPromptModalStyles({ variant }),
          className
        )}
        onMouseOver={() => setShowAsidePrompt(true)}
        onMouseOut={() => setShowAsidePrompt(false)}
      ></button>
      {hideModal === false ? (
        <AsideHoverPromptModal
          contentName={contentName}
          hideModal={hideModal}
          showAsidePrompt={showAsidePrompt}
          positionByAbscissa={positionByAbscissa}
          asideClasses={asideClasses}
        />
      ) : (
        ""
      )}
    </div>
  );
}
