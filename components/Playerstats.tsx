"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type PlayerKillStat = {
  uuid: string;
  name: string;
  total_kills: number;
};

type PlayerPlaytimeStat = {
  uuid: string;
  name: string;
  total_playtime: number; // milliseconds
};

type PlayerDeathStat = {
  uuid: string;
  name: string;
  total_deaths: number;
};

export const Playerstats = () => {
  const [topKills, setTopKills] = useState<PlayerKillStat[]>([]);
  const [topPlaytime, setTopPlaytime] = useState<PlayerPlaytimeStat[]>([]);
  const [topDeaths, setTopDeaths] = useState<PlayerDeathStat[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [killsRes, playtimeRes, deathsRes] = await Promise.all([
          axios.get<PlayerKillStat[]>(
            "http://localhost:5500/api/v1/stats/stats"
          ),
          axios.get<PlayerPlaytimeStat[]>(
            "http://localhost:5500/api/v1/stats/plays"
          ),
          axios.get<PlayerDeathStat[]>(
            "http://localhost:5500/api/v1/stats/deaths"
          ),
        ]);

        setTopKills(killsRes.data);
        setTopPlaytime(playtimeRes.data);
        setTopDeaths(deathsRes.data);
      } catch (err) {
        console.error("Failed to fetch stats:", err);
      }
    };

    fetchStats();
  }, []);

  const formatPlaytime = (ms: number): string => {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="py-20 w-full text-center">
      <h1 className="heading py-4">
        KanrarSMP <span className="text-purple">Player Statistics</span>
      </h1>
      <p className="py-4 text-gray-300">Data Available from 12th July 2025</p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-12">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Top Player Kills
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Players who have secured the most kills in KanrarSMP.
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Index</th>
                <th className="px-6 py-3">Player</th>
                <th className="px-6 py-3">Total Kills</th>
              </tr>
            </thead>
            <tbody>
              {topKills.map((player, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4 text-purple-400 font-semibold flex">
                    <img
                      src={`https://crafatar.com/avatars/${player.uuid}`}
                      alt={player.name}
                      className="w-6 h-6 rounded"
                    />
                    <span className="ml-2">{player.name}</span>
                  </td>
                  <td className="px-6 py-4 text-right">{player.total_kills}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-12 text-green-100">
            Top Playtime
          </h3>
          <ul className="text-left max-w-sm mx-auto space-y-2">
            {topPlaytime.map((player, index) => (
              <li
                key={index}
                className="bg-gray-800 p-3 rounded-lg flex justify-between text-white hover:bg-gray-700 hover:scale-110 transition-colors duration-300 cursor-pointer ease-in-out"
              >
                <img
                  src={`https://crafatar.com/avatars/${player.uuid}`}
                  alt={`${player.name}'s avatar`}
                  className="w-6 h-6 rounded"
                />
                <span>{player.name}</span>
                <span className="text-purple-400">
                  {formatPlaytime(player.total_playtime)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-12 text-red-100">
            Top Player Deaths
          </h3>
          <ul className="text-left max-w-sm mx-auto space-y-2">
            {topDeaths.map((player, index) => (
              <li
                key={index}
                className="bg-gray-800 p-3 rounded-lg flex justify-between text-white hover:bg-gray-700 hover:scale-110 transition-colors duration-300 cursor-pointer ease-in-out"
              >
                <img
                  src={`https://crafatar.com/avatars/${player.uuid}`}
                  alt={`${player.name}'s avatar`}
                  className="w-6 h-6 rounded"
                />
                <span>{player.name}</span>
                <span className="text-purple-400">{player.total_deaths}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
