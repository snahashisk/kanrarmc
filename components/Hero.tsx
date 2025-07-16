"use client";

import { useEffect, useState } from "react";
import { FaDiscord } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

type ServerStatus = {
  online: boolean;
  players?: {
    online: number;
    max: number;
    list?: string[];
  };
};

type WidgetData = {
  presence_count: number; // online members
  members: Array<{ username: string }>;
  id: string;
  name: string;
  instant_invite: string;
};

const Hero = () => {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [data, setData] = useState<WidgetData | null>(null);

  useEffect(() => {
    const getStatus = async () => {
      try {
        const res = await fetch(
          "https://api.mcsrvstat.us/3/play.kanrarsmp.fun"
        );
        const data = await res.json();
        setServerStatus(data);
      } catch (err) {
        console.error("Failed to fetch server status", err);
      }
    };

    const fetchWidget = async () => {
      try {
        const res = await fetch(
          "https://discord.com/api/guilds/1332654769118117989/widget.json"
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to load Discord widget:", err);
      }
    };

    getStatus();
    fetchWidget();
  }, []);

  const playerCount = serverStatus?.players?.online ?? null;

  return (
    <div className="pb-20 pt-36">
      {/* Spotlight Effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Best minecraft survival server
          </p>

          <TextGenerateEffect
            words="Welcome to KanrarMC the Real Survival Experience"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Snahashis, a Minecraft Server Developer based in India.
          </p>

          <div className="flex flex-col md:flex-row items-center mt-8 justify-center space-y-4 md:space-y-0 md:space-x-28">
            <a href="#about">
              <MagicButton
                title={`${playerCount} Players Online`}
                icon={<FaPlay />}
                position="left"
              />
            </a>

            <a href="#about">
              <MagicButton
                title={`${data?.presence_count} Users Online`}
                icon={<FaDiscord />}
                position="left"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
