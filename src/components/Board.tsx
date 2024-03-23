import React, { useEffect, useState } from "react";
import { BoardService } from "../services/content/Board/BoardService.ts";
import Image from "next/image";
import PlusIcon from "../../public/assets/plus.png";
import MoreCircleIcon from "../../public/assets/morecircle.png";
import Task from "./Task";
import TaskNotFound from "./TaskNotFound";
import NewTask from "./NewTask";

export default function Board() {
  const [board, setBoard] = useState([]);
  const boardService = new BoardService();
  const [hoveredIds, setHoveredIds] = useState([]);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await boardService.getBoard();
      const boardsData = response.data.data;
      setBoard(boardsData);
    } catch (error) {
      console.error("Error fetching flags:", error);
    }
  };

  const handleMouseEnter = (id) => {
    setHoveredIds((prevIds) => [...prevIds, id]);
  };

  const handleMouseLeave = (id) => {
    setHoveredIds((prevIds) => prevIds.filter((prevId) => prevId !== id));
  };

  return (
    <div className="flex">
      {board?.map((item) => (
        <div key={item.id}>
          <div
            className={`h-[700px] shadow-sm rounded-xl border border-t-0 bg-[white]   ${
              item.id === 1 ? "ml-12" : "ml-3"
            } border-gray-300  mt-6`}
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            <div className="w-[319px] h-[60px] flex justify-between items-center px-[16px] py-[18px] rounded-t-12 rounded-b-none border border-b-gray-300">
              <div className="justify-between px-2 flex w-[95px]">
                <div className="text-poppins text-base font-normal leading-6 text-left text-[#4E5BA6]">
                  {item.name}
                </div>
                <div className="flex justify-center rounded-full bg-[#B2DDFF] text-[#175CD3] w-[24px] h-[24px] ">
                  {item.tasks.length}
                </div>
              </div>
              <div className="justify-between px-2 flex">
                <div className="pr-2">
                  <Image
                    src={PlusIcon}
                    width={24}
                    height={24}
                    alt="plus_icon"
                  />
                </div>
                <div>
                  <Image
                    src={MoreCircleIcon}
                    width={24}
                    height={24}
                    alt="morecircle_icon"
                  />
                </div>
              </div>
            </div>
            <div>
              <Task item={item} fetchBoards={fetchBoards} />
              {item.tasks.length === 0 && <TaskNotFound />}
              {hoveredIds.includes(item.id) && item.tasks.length > 0 && (
                <NewTask />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
