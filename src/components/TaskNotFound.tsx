import React, { useState } from "react";
import Image from "next/image";
import Layer from "../../public/assets/Layer1.png";
import NewTask from "./NewTask";

export default function TaskNotFound() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-row items-center justify-center h-[640px]  relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={Layer} width={185} height={159} alt="Layer" />
      <div className="absolute mt-[200px]">{isHovered && <NewTask />}</div>
    </div>
  );
}
