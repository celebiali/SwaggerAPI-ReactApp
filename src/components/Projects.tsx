import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import DotIcon from "../../public/assets/dot.png";
import ChevronDown from "../../public/assets/chevron-down.png";
import BarChart from "../../public/assets/bar-chart-01.png";

export default function Projects() {
  return (
    <>
      <div className={"flex justify-between mt-4 bg-[#F3F6FD] py-2"}>
        <div className={"flex items-center justify-center "}>
          <div className={"pl-2"}>
            <Image src={DotIcon} width={10} height={10} alt="dot_icon" />
          </div>
          <div className={"pl-4 font-semibold text-[#145389]"}>
            Proje İsim 1
          </div>
        </div>
        <div className={"pr-2"}>
          <Image
            src={ChevronDown}
            width={20}
            height={20}
            alt="chevrondown_icon"
          />
        </div>
      </div>
      <div className={"flex  items-center mt-4"}>
        <div>
          <Image src={BarChart} width={24} height={24} alt="bar-chart" />
        </div>
        <div
          className={
            "text-[#98A2B3] pl-3 text-sm font-normal text-left prose-sm"
          }
        >
          Proje Oluştur
        </div>
      </div>
    </>
  );
}
