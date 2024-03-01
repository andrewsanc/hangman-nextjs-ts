import Menu from "@/components/ui/menu";
import IconButton from "@/components/ui/icon-button";
import Button from "@/components/ui/button";

export default function StartMenu() {
  return (
    <Menu>
      <IconButton
        icon="play"
        width={200}
        height={200}
        iconHeight={62}
        iconWidth={66}
      />
      <Button buttonStyle={{ color: "blue" }}>How to play</Button>
    </Menu>
  );
}
