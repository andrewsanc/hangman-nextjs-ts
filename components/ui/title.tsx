interface TitleProps {
  text: string;
}

export default function Title(props: TitleProps) {
  const { text } = props;

  return (
    <h1 className="bg-gradient-to-b from-[#67B6FF] to-[#ffffff] bg-clip-text text-transparent text-md sm:text-lg md:text-xl">
      {text}
    </h1>
  );
}
