import Image from "next/image";
import NavIcon from "../../public/assets/nav_item.png";
import HeaderImage from "../../public/assets/header_img.png";

export default function Header() {
  return (
    <>
      <div
        className={
          "px-12  h-[72px] mx-auto flex items-center border-b-2 z-index fixed  w-full justify-between"
        }
      >
        <div
          className={
            "font-futura text-xl font-bold leading-6 text-center text-[#145389]"
          }
        >
          kargakarga
        </div>
        <div className={"flex"}>
          <Image
            src={NavIcon}
            width={40}
            height={36}
            alt="nav_item"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src={NavIcon}
            width={40}
            height={36}
            alt="nav_item"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src={HeaderImage}
            width={40}
            height={36}
            alt="header_image"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
}
