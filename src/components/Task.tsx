"use client";
import Image from "next/image";
import AvatarGroup from "../../public/assets/avatargroup.png";
import Calendar from "../../public/assets/calendar.png";
import Flag from "../../public/assets/Flag.png";
import TaskDetail from "../components/modals/TaskDetail";
import Rectangle from "../../public/assets/rectangle.png";
import React, { useEffect, useState } from "react";
import { FlagsService } from "../services/content/Commons/FlagsService";
import { TasksService } from "../services/content/Tasks/TasksService.ts";
import { Modal, Portal } from "@mui/material";

export default function Task({ item, fetchBoards }) {
  const tasks = item.tasks;
  const boardName = item.name;
  const [showConfirmation, setShowConfirmationModals] = useState(false);

  const [flags, setFlags] = useState([]);
  const flagsService = new FlagsService();
  const [isTaskDetailOpen, setIsTaskDetailOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  useEffect(() => {
    fetchFlags();
  }, []);
  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setIsTaskDetailOpen(true);
  };

  const handleCreateConfirmation = () => {
    setShowConfirmationModals(true);
  };

  const handleBoardClick = () => {
    setShowConfirmationModals(true);
  };
  const fetchFlags = async () => {
    try {
      const response = await flagsService.getFlags();
      const flagsData = response.data.data;
      setFlags(flagsData);
    } catch (error) {
      console.error("Error fetching flags:", error);
    }
  };
  const tasksService = new TasksService();
  const handleCreateTask = async () => {
    try {
      const taskData = {
        name: name,
        description: description,
        boardId: board.id,
        flagId: flagId,
        startDate: startDate,
        endDate: endDate,
      };
      await tasksService.createTasks(taskData); // Yeni görev oluştur
      handleClose(); // Modalı kapat
      fetchBoards(); // Board verilerini güncelle
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };
  const getFlagNameById = (flagId) => {
    const flag = flags.find((flag) => flag.id === flagId);
    return flag ? flag.name : "Flag bilgisi yok";
  };
  const getFlagColorById = (flagId) => {
    const flag = flags.find((flag) => flag.id === flagId);

    return flag?.color;
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} onClick={() => handleTaskClick(task)}>
          <div className="items-center mx-auto w-[300px] rounded-lg shadow-sm border border-gray-300 mt-[4px] px-3 py-3">
            <div className="text-sm font-medium text-left leading-4.5 text-poppins text-[#F38744]">
              {task.name}
            </div>
            <div className="flex pt-2 justify-between">
              <div className="text-sm font-medium text-left leading-4.5 text-poppins text-[#475467]">
                {task.description || "Açıklama bilgisi yok"}
              </div>
              <div>
                <Image
                  src={AvatarGroup}
                  width={44}
                  height={24}
                  alt="avatar_group"
                />
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div>
                <Image
                  src={Calendar}
                  width={16}
                  height={16}
                  alt="calendar_icon"
                />
              </div>
              <div className="text-[#98A2B3] text-xs font-normal text-left leading-tight tracking-tighter text-poppins pl-2">
                {task.createdAt || task.updatedAt ? (
                  <div>
                    {task.createdAt.slice(0, 10).split("-").reverse().join("-")}
                    <span className="px-1">-</span>
                    {task.updatedAt.slice(0, 10).split("-").reverse().join("-")}
                  </div>
                ) : (
                  <div>Tarih bilgisi yok</div>
                )}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <div>
                <Image
                  src={Rectangle}
                  width={10}
                  height={10}
                  alt="rectangle_icon"
                />
              </div>
              <div className="text-[#98A2B3] text-xs font-normal text-left leading-tight tracking-tighter text-poppins pl-2">
                {getFlagNameById(task.flagId)}
              </div>
              <div className="pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill={getFlagColorById(task.flagId)}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.6191 8.05667L13.2878 4.90133C13.3698 4.746 13.3644 4.55933 13.2738 4.40933C13.1838 4.25933 13.0211 4.16733 12.8458 4.16733H8.45711V3.26C8.45711 2.984 8.23311 2.76 7.95711 2.76H3.65442V2.5C3.65442 2.224 3.43042 2 3.15442 2C2.87842 2 2.65442 2.224 2.65442 2.5V14.5C2.65442 14.776 2.87842 15 3.15442 15C3.43042 15 3.65442 14.776 3.65442 14.5V10.578L7.45844 10.484V11.498C7.45844 11.6327 7.51311 11.762 7.60911 11.856C7.70511 11.95 7.81044 11.998 7.97044 11.998L12.8578 11.8787C13.0318 11.8747 13.1904 11.78 13.2778 11.6293C13.3651 11.4793 13.3684 11.294 13.2858 11.1413L11.6191 8.05667Z"
                    fill={getFlagColorById(task.flagId)}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
      {isTaskDetailOpen && (
        <TaskDetail
          onClose={() => setIsTaskDetailOpen(false)}
          setShowConfirmationModals={setShowConfirmationModals}
          task={selectedTask}
          boardName={boardName}
          fetchBoards={fetchBoards}
          flagColor={getFlagColorById(selectedTask.flagId)}
        />
      )}
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
