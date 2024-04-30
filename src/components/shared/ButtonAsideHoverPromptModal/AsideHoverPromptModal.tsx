import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { hidePromptModal } from "./ButtonHoverPromptModal";

const AsideHoverPromptModalStyles = cva(
  [
    "z-[1000] text-[1.5rem] transition-all w-fit absolute bottom-[-3.5rem] py-[.5rem] px-[1rem] whitespace-nowrap",
  ],
  {
    variants: {
      variant: {
        squareModalPromptWithShadow:
          "rounded-md shadow-sm shadow-black bg-white font-medium",
      },
    },
    defaultVariants: {
      variant: "squareModalPromptWithShadow",
    },
  }
);

interface AsidePromptModal extends hidePromptModal {
  showAsidePrompt: boolean;
}

type AsideHoverPromptModalProps = VariantProps<
  typeof AsideHoverPromptModalStyles
> &
  ComponentProps<"aside"> &
  AsidePromptModal;

export default function AsideHoverPromptModal({
  contentName,
  variant,
  className,
  hideModal,
  showAsidePrompt,
  positionByAbscissa,
  asideClasses,
  ...props
}: AsideHoverPromptModalProps) {
  const clickToOpenModal = hideModal ? "hidden" : "block";
  const hoverOnButtonToOpenAsideModal = showAsidePrompt ? "block" : "hidden";
  const asideClass = asideClasses;
  const currentPositionX = `${positionByAbscissa}-0`;

  return (
    <aside
      {...props}
      className={twMerge(
        AsideHoverPromptModalStyles({ variant }),
        className,
        clickToOpenModal,
        hoverOnButtonToOpenAsideModal,
        currentPositionX,
        asideClass
      )}
    >
      {contentName}
    </aside>
  );
}
