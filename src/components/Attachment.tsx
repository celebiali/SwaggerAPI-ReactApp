import React, { useState } from "react";
import Image from "next/image";
import AvatarWrap from "../../public/assets/Avatarwrap.png";
export default function Attachment() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="max-w-2xl rounded-md mt-6 shadow-sm border border-gray-200 w-[696px] bg-[#EAECF0]">
      <div className="flex mx-auto h-[38px] w-full bg-transparent border-b border-gray-200">
        {/* Tab 1 */}
        {[1, 2, 3].map((tab) => (
          <div
            key={tab}
            className={`flex items-center justify-center w-[200px] cursor-pointer`}
            onClick={() => handleTabClick(tab)}
          >
            <div
              className={`flex items-center justify-center h-[24px] cursor-pointer`}
            >
              <div
                className={`flex items-center justify-center h-[24px] cursor-pointer ${
                  activeTab === tab
                    ? "text-[#145389] font-bold text-center leading-tight"
                    : "text-xs font-normal text-center leading-tight"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill={activeTab === tab ? "#145389" : "#98A2B3"}
                >
                  <path
                    d="M14.1017 7.26634L8.09133 13.2768C6.72449 14.6436 4.50842 14.6436 3.14158 13.2768C1.77475 11.9099 1.77475 9.69384 3.14158 8.327L9.15199 2.3166C10.0632 1.40537 11.5406 1.40537 12.4518 2.3166C13.363 3.22782 13.363 4.7052 12.4518 5.61643L6.67711 11.3911C6.2215 11.8467 5.48281 11.8467 5.0272 11.3911C4.57159 10.9355 4.57159 10.1968 5.0272 9.74122L10.0948 4.67362"
                    stroke="#98A2B3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {tab === 1 && "Attachment"}
                {tab === 2 && "Sub Task"}
                {tab === 3 && "Comment"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Kart İçerikleri */}
      <div className="flex justify-center w-full">
        {/* Kart 1 İçeriği */}
        {activeTab === 1 && (
          <div className="flex w-full p-4 bg-white overflow-y-scroll overflow-visible">
            <div className={"h-[150px] "}>
              <Image
                src={AvatarWrap}
                width={32}
                height={116}
                alt="button_icon"
              />
              <Image
                src={AvatarWrap}
                width={32}
                height={116}
                alt="button_icon"
              />
            </div>
            <div></div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="w-full p-4 bg-white">
            <div className={"h-[150px] "}> Sub Task İçeriği </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="w-full p-4 bg-white">
            <div className={"h-[150px] "}>Comment İçeriği</div>
          </div>
        )}
      </div>
    </div>
  );
}
