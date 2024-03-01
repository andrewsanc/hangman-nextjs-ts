import Image from "next/image";
import IconBack from "@/public/assets/icon-back.svg";
import IconHeart from "@/public/assets/icon-heart.svg";
import IconPlay from "@/public/assets/icon-play.svg";
import IconMenu from "@/public/assets/icon-menu.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { VariantProps, tv } from "tailwind-variants";

interface IconButtonProps {
  icon: "heart" | "play" | "menu" | "back";
  width?: number;
  height?: number;
  iconWidth?: number;
  iconHeight?: number;
}

const IconMap = new Map<string, StaticImport>([
  ["heart", IconHeart],
  ["play", IconPlay],
]);

export default function IconButton(props: IconButtonProps) {
  const {
    icon,
    width = 64,
    height = 64,
    iconWidth = 17,
    iconHeight = 16,
  } = props;
  const getIcon = IconMap.get(icon)!;

  return (
    <div
      className={`rounded-full shadow-[inset_0px_-4px_0px_5px_#243041,inset_0px_-12px_0px_11px_#9D2DF5] cursor-pointer bg-gradient-to-b from-[#FE71FE] w-[${width}px] h-[${height}px] flex justify-center items-center to-[#7199FF] hover:opacity-90`}
    >
      <Image
        src={getIcon}
        alt="icon button"
        width={iconWidth}
        height={iconHeight}
      />
    </div>
  );
}
