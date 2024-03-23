import React, { useEffect, useState } from "react";
import { BoardService } from "../services/content/Board/BoardService.ts";
import Image from "next/image";
import PlusIcon from "../../public/assets/plus.png";
import MoreCircleIcon from "../../public/assets/morecircle.png";
import Task from "./Task";
import TaskNotFound from "./TaskNotFound";
import NewTask from "./NewTask";
import { Modal, Portal } from "@mui/material";

export default function Board() {
  const [board, setBoard] = useState([]);
  const [showConfirmation, setShowConfirmationModals] = useState(false);
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
  const handleCreateConfirmation = () => {
    setShowConfirmationModals(true);
  };

  const handleBoardClick = () => {
    setShowConfirmationModals(true);
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
        <div key={item.id} onClick={handleBoardClick}>
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
              <Task
                item={item}
                fetchBoards={fetchBoards}
                setShowConfirmationModals={setShowConfirmationModals}
              />
              {item.tasks.length === 0 && <TaskNotFound />}
              {hoveredIds.includes(item.id) && item.tasks.length > 0 && (
                <NewTask />
              )}
            </div>
          </div>
        </div>
      ))}
      <Portal>
        {showConfirmation && (
          <Modal
            open={showConfirmation}
            onClose={() => setShowConfirmationModals(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="bg-white p-8 rounded-md ">
              <form>
                <div>
                  <label for="name">Adı:</label>
                  <input
                    style={{
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      padding: "8px",
                      width: "100%",
                    }}
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label for="description">Açıklama:</label>
                  <textarea
                    style={{
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      padding: "8px",
                      width: "100%",
                    }}
                    id="description"
                    name="description"
                    // value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label for="boardId">Kart ID:</label>
                  <select
                    id="boardId"
                    name="boardId"
                    // value={boardId}
                    onChange={(e) => setBoardId(e.target.value)}
                    required
                  >
                    <option value="">Seçiniz...</option>
                    <option value="1">Kart 1</option>
                    <option value="2">Kart 2</option>
                  </select>
                </div>
                <div>
                  <label for="flagId">Bayrak ID:</label>
                  <select
                    id="flagId"
                    name="flagId"
                    // value={flagId}
                    onChange={(e) => setFlagId(e.target.value)}
                    required
                  >
                    <option value="">Seçiniz...</option>
                    <option value="1">Bayrak 1</option>
                    <option value="2">Bayrak 2</option>
                  </select>
                </div>
                <div>
                  <label for="startDate">Başlangıç Tarihi:</label>
                  <input
                    style={{
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      padding: "8px",
                      width: "100%",
                    }}
                    type="date"
                    id="startDate"
                    name="startDate"
                    // value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />

                  <label for="endDate">Bitiş Tarihi:</label>
                  <input
                    style={{
                      border: "1px solid #D1D5DB",
                      borderRadius: "8px",
                      padding: "8px",
                      width: "100%",
                    }}
                    type="date"
                    id="endDate"
                    name="endDate"
                    // value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>
              </form>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 mt-4"
                  onClick={() => {
                    handleCreateTask(task.code);
                    setShowConfirmationModals(false);
                  }}
                >
                  EKLE
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mt-4"
                  onClick={() => setShowConfirmationModals(false)}
                >
                  İPTAL
                </button>
              </div>
            </div>
          </Modal>
        )}
      </Portal>
    </div>
  );
}
