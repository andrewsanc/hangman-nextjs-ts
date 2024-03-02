import Image from "next/image";
import IconBack from "@/public/assets/icon-back.svg";
import IconHeart from "@/public/assets/icon-heart.svg";
import IconPlay from "@/public/assets/icon-play.svg";
import IconMenu from "@/public/assets/icon-menu.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { VariantProps, tv } from "tailwind-variants";

interface IconButtonProps {
  icon: "heart" | "play" | "menu" | "back";
  additionalStlyes?: string;
  iconWidth?: number;
  iconHeight?: number;
  children?: React.ReactNode;
}

const IconMap = new Map<string, StaticImport>([
  ["heart", IconHeart],
  ["play", IconPlay],
  ["back", IconBack],
  ["menu", IconMenu],
]);

export default function IconButton(props: IconButtonProps) {
  const {
    icon,
    iconWidth = 17,
    iconHeight = 16,
    additionalStlyes,
    children,
  } = props;
  const getIcon = IconMap.get(icon)!;

  return (
    <div
      className={`rounded-full ${additionalStlyes} cursor-pointer bg-gradient-to-b from-[#FE71FE] flex justify-center items-center to-[#7199FF] hover:opacity-90`}
    >
      <Image
        src={getIcon}
        alt="icon button"
        width={iconWidth}
        height={iconHeight}
        className="w-[17px] h-[17px] sm:w-[27px] sm:h-[25px] md:w-[41px] md:h-[38px]"
      />
      {children}
    </div>
  );
}
