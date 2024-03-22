import Image from "next/image";
import Layer from "../../public/assets/Layer1.png";

export default function TaskNotFound() {
  return (
    <>
      <div className={"flex items-center justify-center h-[640px]"}>
        <Image src={Layer} width={185} height={159} alt="Layer" />
      </div>
    </>
  );
}
