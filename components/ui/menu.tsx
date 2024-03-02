import Image from "next/image";

interface MenuProps {
  children: React.ReactNode;
  logo?: boolean;
  headerText?: string;
  additionalStyles?: string;
}

export default function Menu(props: MenuProps) {
  const { children, headerText, logo = true, additionalStyles } = props;

  return (
    <div
      className={`relative flex flex-col items-center bg-gradient-to-b from-[#344ABA] to-[#001479] w-[324px] h-[531px] md:w-[592px] md:h-[500px] rounded-[76px] shadow-[inset_0px_6px_0px_8px_#2463FF,inset_0px_-8px_0px_4px_#140E66] opacity-90`}
    >
      {logo && (
        <Image
          src="/assets/logo.svg"
          alt="hangman logo"
          width={373}
          height={185}
          className="absolute -top-12 md:-top-20 w-[263px] h-[130px] md:w-[373px] md:h-[185px]"
        />
      )}
      <div
        className={`flex flex-col items-center h-full w-full gap-6 ${additionalStyles}`}
      >
        {children}
      </div>
    </div>
  );
}
