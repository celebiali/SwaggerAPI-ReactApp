"use client";
import React from "react";
import Header from "@/components/Header";
import LeftNavigation from "@/components/LeftNavigation";
import Sidebar from "@/components/Sidebar";
import DashboardButtons from "@/components/DashboardButtons";
import Board from "@/components/Board";
import Image from "next/image";
import FilterIcon from "../../../public/assets/filter.png";
import { AuthService } from "@/services/content/Auth/AuthService";
import { useEffect, useState } from "react";
import { BoardService } from "@/services/content/Board/BoardService.ts";
const Dashboard = () => {
  const [board, setBoard] = useState([]);
  const boardService = new BoardService();

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

  return (
    <>
      <Header />
      <div className={"flex h-screen overflow-hidden"}>
        <LeftNavigation />
        <Sidebar />
        <div className={"flex-1 h-full mt-[72px] bg-[#F3F6FD]"}>
          <div className={"flex px-12 pt-6 justify-between"}>
            <div
              className={
                "text-[#145389] text-lg font-semibold text-left leading-8 text-poppins"
              }
            >
              Frontend Case
            </div>
            <div>
              <Image
                src={FilterIcon}
                width={20}
                height={20}
                alt="filter_icon"
              />
            </div>
          </div>
          <DashboardButtons />
          <div className={"h-[720px] flex w-[319px]"}>
            <Board board={board} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
