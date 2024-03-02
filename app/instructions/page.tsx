import IconButton from "@/components/ui/icon-button";
import Title from "@/components/ui/title";
import { Instructions } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-10 gap-8">
      <div className="flex items-center justify-center">
        <Link href="/" className="absolute left-10 ">
          <IconButton
            icon="back"
            iconWidth={41}
            iconHeight={38}
            additionalStlyes="w-[40px] h-[40px] sm:w-[64px] sm:h-[64px] md:w-[94px] md:h-[94px] shadow-[inset_0px_-4px_0px_1px_#243041,inset_0px_-6px_0px_7px_#9D2DF5/.25]"
          />
        </Link>
        <Title text="How to play" />
      </div>
      <div className="flex flex-col items-center xl:flex-row gap-4">
        {Instructions.map(({ description, title }, i) => {
          return (
            <div
              key={i}
              className="bg-white rounded-[40px] w-[324px] h-[185px] sm:w-[680px] sm:h-[200px] xl:w-[384px] xl:h-[550px] flex flex-col xl:flex-row items-center gap-4 p-4"
            >
              <div className="sm:hidden flex flex-col">
                <div className="flex items-center px-6 gap-4">
                  <h1 className="text-xs text-[#2463FF]">{i + 1}</h1>
                  <h3 className="text-xs text-[#261676]">{title}</h3>
                </div>
                <p className="text-[20px] text-[#887DC0] text-center">
                  {description}
                </p>
              </div>
              <div className="hidden xl:hidden sm:flex items-center">
                <h1 className="text-lg text-[#2463FF] mx-10">{i + 1}</h1>
                <div className="flex flex-col">
                  <h3 className="text-sm text-[#261676]">{title}</h3>
                  <p className="text-xs text-[#887DC0]">{description}</p>
                </div>
              </div>
              <div className="hidden xl:flex xl:flex-col items-center gap-4">
                <h1 className="text-lg text-[#2463FF]">{i + 1}</h1>
                <h3 className="text-md text-[#261676]">{title}</h3>
                <p className="text-xs text-[#887DC0] text-center">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
