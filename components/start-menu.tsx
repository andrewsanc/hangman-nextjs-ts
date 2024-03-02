import Menu from "@/components/ui/menu";
import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";
import Link from "next/link";

export default function StartMenu() {
  return (
    <Menu additionalStyles="justify-center">
      <IconButton
        icon="play"
        additionalStlyes="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] shadow-[inset_0px_-4px_0px_5px_#243041,inset_0px_-12px_0px_11px_#9D2DF5]"
        iconHeight={62}
        iconWidth={66}
      >
        <Link href="/play" />
      </IconButton>
      <Button buttonStyle={{ color: "blue" }}>
        <Link href="/instructions">How to play</Link>
      </Button>
    </Menu>
  );
}
