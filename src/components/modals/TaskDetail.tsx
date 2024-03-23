"use client";
import React, { useEffect, useState } from "react";
import { Modal, Portal } from "@mui/material";
import Image from "next/image";
import BreadcrumbButtonBase from "../../../public/assets/home-line.png";
import ChevronUp from "../../../public/assets/chevron-up.png";
import Breadcrumbs from "../../../public/assets/Breadcrumbs.png";
import ChevronDown from "../../../public/assets/chevron-down.png";
import Frame from "../../../public/assets/frame.png";
import DotsHorizontal from "../../../public/assets/dots-horizontal.png";
import Icon from "../../../public/assets/Icon.png";
import Move from "../../../public/assets/move.png";
import Share from "../../../public/assets/share-03.png";
import Star from "../../../public/assets/star-01.png";
import Rectangle from "../../../public/assets/rectangle.png";
import XIcon from "../../../public/assets/x-close.png";
import TaskIcon from "../../../public/assets/tasksIcon.png";
import Button from "../../../public/assets/Button.png";
import Copy from "../../../public/assets/Copy.png";
import AvatarGroups from "../../../public/assets/avatargroups.png";
import Task_Detail_Side_Bar from "../../../public/assets/Task_Detail_Side_Bar.png";
import AvatarWraps from "../../../public/assets/Avatarwraps.png";
import Attachment from "../Attachment";
import { TasksService } from "../../services/content/Tasks/TasksService.ts";
import ActivitySearch from "../ActivitySearch";
export default function TaskDetail({
  onClose,
  task,
  boardName,
  flagColor,
  fetchBoards,
  setShowConfirmationModals,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
    setShowConfirmationModals(false);
  };
  const handleDeleteConfirmation = () => {
    setShowConfirmationModal(true);
  };
  const tasksService = new TasksService();
  const handleDeleteTask = async () => {
    try {
      console.log(task.code, "task code");
      await tasksService.deleteTasks(task.code);
      handleClose();
      fetchBoards();
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };

  return (
    <Portal>
      <Modal
        open={isOpen}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={"w-[1180px] h-[767px] bg-[white] "}>
          <div className="flex justify-between items-center px-12 border-b py-5">
            <div className="flex">
              <Image src={Frame} width={52} height={20} alt="Frame" />

              <Image
                src={Breadcrumbs}
                width={357}
                height={20}
                alt="Icon"
                className="ml-5"
              />
            </div>
            <div className="flex">
              <Image
                src={DotsHorizontal}
                width={20}
                height={20}
                alt="DotsHorizontal"
                className="mr-[20px]"
                onClick={handleDeleteConfirmation}
              />
              <Image
                src={Share}
                width={20}
                height={20}
                alt="Share"
                className="mr-[20px]"
              />
              <Image
                src={Star}
                width={20}
                height={20}
                alt="Star"
                className="mr-[20px]"
              />
              <Image
                src={XIcon}
                width={20}
                height={20}
                alt="XIcon"
                onClick={handleClose}
              />
            </div>
          </div>
          <div className="flex  justify-between ">
            <div className=" flex flex-col  w-[792px] px-12">
              <div className="flex  justify-between  w-full h-[212px] mt-12">
                <div>
                  <div className="flex items-center w-[400px] h-[102px]">
                    <div>
                      <Image
                        src={TaskIcon}
                        width={25}
                        height={25}
                        alt="TaskIcon"
                      />
                    </div>
                    <div className="pl-12 font-poppins text-xl font-bold leading-8 text-left text-[#475467]">
                      {task.name || "Task Adı yok"}
                    </div>
                  </div>
                  <div className="flex items-center font-poppins text-base font-medium leading-5 text-left text-[#98A2B3]">
                    <div>ID: #{task.id}</div>
                    <div className="pl-2">
                      <Image src={Copy} width={16} height={16} alt="Copy" />
                    </div>
                  </div>
                </div>
                <div className=" flex max-w-2xl rounded-md h-[40px] shadow-sm px-2 py-2 border border-gray-200 ">
                  <Image
                    src={Button}
                    width={20}
                    height={20}
                    alt="Button"
                    className=""
                  />
                  {task.createdAt || task.updatedAt ? (
                    <div className="text-[#475467] font-poppins text-base font-normal leading-5 text-left">
                      {task.createdAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                      <span className="px-1">-</span>
                      {task.updatedAt
                        .slice(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </div>
                  ) : (
                    <div>Tarih bilgisi yok</div>
                  )}
                </div>
              </div>
              <div className="flex">
                <div className="w-[165px] h-[80px] ">
                  <div className="font-poppins text-base font-medium leading-5 text-left text-[#475467]">
                    Task Status
                  </div>
                  <div className="pt-8">{boardName}</div>
                </div>
                <div className="w-[144px] h-[60px] ">
                  <div className="font-poppins text-base font-medium leading-5 text-left text-[#475467]">
                    Assingment
                  </div>
                  <div className="pt-8">
                    <Image
                      src={AvatarGroups}
                      width={144}
                      height={32}
                      alt="Icon"
                    />
                  </div>
                </div>
                <div className="w-[165px] h-[80px] pl-12 ">
                  <div className="font-poppins text-base font-medium leading-5 text-left text-[#475467]">
                    Priotry
                  </div>
                  <div className="pt-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill={flagColor}
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.6191 8.05667L13.2878 4.90133C13.3698 4.746 13.3644 4.55933 13.2738 4.40933C13.1838 4.25933 13.0211 4.16733 12.8458 4.16733H8.45711V3.26C8.45711 2.984 8.23311 2.76 7.95711 2.76H3.65442V2.5C3.65442 2.224 3.43042 2 3.15442 2C2.87842 2 2.65442 2.224 2.65442 2.5V14.5C2.65442 14.776 2.87842 15 3.15442 15C3.43042 15 3.65442 14.776 3.65442 14.5V10.578L7.45844 10.484V11.498C7.45844 11.6327 7.51311 11.762 7.60911 11.856C7.70511 11.95 7.81044 11.998 7.97044 11.998L12.8578 11.8787C13.0318 11.8747 13.1904 11.78 13.2778 11.6293C13.3651 11.4793 13.3684 11.294 13.2858 11.1413L11.6191 8.05667Z"
                        fill={flagColor}
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="[695px] mt-12">
                <div className="font-poppins text-base font-medium leading-5 text-left text-[#475467]">
                  Description
                </div>
                <div className="pt-4 font-poppins text-sm font-normal leading-4 text-left text-[#475467]">
                  {task.description || "Açıklama bilgisi yok"}
                </div>
              </div>
              <div>
                <Attachment />
              </div>
            </div>
            <ActivitySearch />
            <div>
              <Image
                src={Task_Detail_Side_Bar}
                width={60}
                height={60}
                alt="XIcon"
                onClick={handleClose}
              />
            </div>
          </div>
        </div>
      </Modal>
      {showConfirmationModal && (
        <Modal
          open={showConfirmationModal}
          onClose={
            (() => setShowConfirmationModal(false),
            setShowConfirmationModals(false))
          }
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => {
                  handleDeleteTask(task.code);
                  setShowConfirmationModal(false);
                  setIsOpen(false);
                }}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                onClick={() => setShowConfirmationModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Portal>
  );
}
