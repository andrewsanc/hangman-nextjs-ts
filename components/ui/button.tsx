import { VariantProps, tv } from "tailwind-variants";

const baseButton = tv({
  base: "flex items-center justify-center whitespace-nowrap font-semibold w-[260px] h-[62px] drop-shadow-lg rounded-full hover:opacity-90",
  variants: {
    color: {
      blue: "bg-[#2463FF] shadow-[inset_0px_-2px_0px_3px_#140E66,inset_0px_1px_0px_6px_#3C74FF]",
      pink: "bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-[inset_0px_-2px_0px_3px_#140E66,inset_0px_1px_0px_6px_#C642FB]",
    },
  },
});

type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;
interface ButtonProps extends BaseButtonAttributes {
  children: React.ReactNode | string;
  buttonStyle: VariantProps<typeof baseButton>;
}

export default function Button(props: ButtonProps) {
  const { children, buttonStyle } = props;

  return <button className={baseButton(buttonStyle)}>{children}</button>;
}
