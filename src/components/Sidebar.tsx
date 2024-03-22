"use client";
import Projects from "./Projects";
import Image from "next/image";
import Button from "../../public/assets/button.png";
import { AuthService } from "../services/content/Auth/AuthService";
import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [profile, setProfile] = useState(null);

  const profileService = new AuthService();
  const fetchProfile = async () => {
    try {
      const response = await profileService.Profile();
      const profileData = response.data.data;
      setProfile(profileData);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <div
        className={
          "w-[282px] h-screen-72px  shadow-sm mt-[72px]  bg-white  flex flex-col pt-6 px-4"
        }
      >
        <div className={"flex flex-col justify-between h-full"}>
          <div>
            <div className={"text-base font-medium text-left "}>Projeler</div>
            <Projects />
          </div>
          <div className={"flex justify-between pb-8"}>
            <div>
              <div
                className={
                  "text-sm font-semibold text-left prose-sm text-[#101828]"
                }
              >
                {profile && profile.fullName}
              </div>
              <div
                className={
                  "text-sm font-normal text-left prose-sm text-[#475467]"
                }
              >
                {profile && profile.email}
              </div>
            </div>
            <div>
              <Image src={Button} width={36} height={36} alt="button_icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
