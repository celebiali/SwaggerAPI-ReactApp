import Image from "next/image";
import LeftNavIcon from "../../public/assets/bell-01.png";
import LeftNavIcons from "../../public/assets/nav_item2.png";
import LeftHeaderImage from "../../public/assets/Avatar.png";

export default function LeftNavigation() {
  return (
    <>
      <div
        className={
          "w-[72px]  mt-[72px] h-screen-72px   bg-[#363F72] flex flex-col justify-between"
        }
      >
        <div className={"flex items-center justify-center flex-col mt-4"}>
          <Image
            src={LeftNavIcons}
            width={48}
            height={48}
            alt="nav_item"
            style={{ width: "auto", height: "auto" }}
            className={"mt-4"}
          />
          <Image
            src={LeftNavIcon}
            width={24}
            height={24}
            alt="nav_item"
            style={{ width: "auto", height: "auto" }}
            className={"mt-4"}
          />
          <Image
            src={LeftNavIcon}
            width={24}
            height={24}
            alt="nav_item"
            style={{ width: "auto", height: "auto" }}
            className={"mt-4"}
          />
          <Image
            src={LeftNavIcon}
            width={24}
            height={24}
            alt="nav_item"
            style={{ width: "auto", height: "auto" }}
            className={"mt-6"}
          />
        </div>
        <div className={"flex items-center justify-center flex-col mb-6"}>
          <Image
            src={LeftNavIcon}
            width={24}
            height={24}
            alt="nav_item"
            style={{ width: "auto", height: "auto" }}
            className={"mb-6"}
          />
          <Image
            src={LeftNavIcon}
            width={24}
            height={24}
            alt="nav_item"
            style={{ width: "auto", height: "auto" }}
            className={"mb-6"}
          />
          <Image
            src={LeftNavIcon}
            width={24}
            height={24}
            alt="nav_item"
            style={{ width: "auto", height: "auto" }}
            className={"mb-6"}
          />
          <Image
            src={LeftNavIcon}
            width={24}
            height={24}
            alt="nav_item"
            style={{ width: "auto", height: "auto" }}
            className={"mb-6"}
          />

          <Image
            src={LeftHeaderImage}
            width={40}
            height={36}
            alt="header_image"
            className={"mb-3"}
          />
        </div>
      </div>
    </>
  );
}
