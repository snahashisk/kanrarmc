"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaExclamation } from "react-icons/fa6";

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
            "https://kanrarmcbackend.onrender.com/api/v1/stats/stats"
          ),
          axios.get<PlayerPlaytimeStat[]>(
            "https://kanrarmcbackend.onrender.com/api/v1/stats/plays"
          ),
          axios.get<PlayerDeathStat[]>(
            "https://kanrarmcbackend.onrender.com/api/v1/stats/deaths"
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
    return `${h}h ${m}m`;
  };

  return (
    <div className="py-20 w-full text-center">
      <h1 className="heading py-4">
        KanrarSMP <span className="text-purple">Player Statistics</span>
      </h1>
      <p className="py-4 text-gray-300 flex items-center justify-center text-lg">
        <FaExclamation className="text-red-500" /> Data Available from 12th July
        2025
      </p>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-12">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400 text-center">
            <caption className="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 text-center">
              Top Player Kills
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Players who have secured the most kills in KanrarSMP.
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Index</th>
                <th className="px-6 py-3">Player ID</th>
                <th className="px-6 py-3">Kills</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {topKills.map((player, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3">
                    <img
                      src={`https://crafatar.com/avatars/${player.uuid}`}
                      alt={player.name}
                      onError={(e) => {
                        e.target.onerror = null; // prevent infinite loop
                        e.target.src =
                          "https://crafatar.com/avatars/bb371f15-02a8-31d8-9660-3d29d41040d2";
                      }}
                      className="w-6 h-6 rounded"
                    />
                    {player.name}
                  </td>
                  <td className="px-6 py-4 text-purple-400 font-semibold">
                    {player.total_kills}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 text-center">
              Top Playtime
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Players who have spent the most time playing on KanrarSMP.
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Index</th>
                <th className="px-6 py-3">Player ID</th>
                <th className="px-6 py-3">Playtime</th>
              </tr>
            </thead>
            <tbody>
              {topPlaytime.map((player, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3">
                    <img
                      src={`https://crafatar.com/avatars/${player.uuid}`}
                      alt={player.name}
                      onError={(e) => {
                        e.target.onerror = null; // prevent infinite loop
                        e.target.src =
                          "https://crafatar.com/avatars/bb371f15-02a8-31d8-9660-3d29d41040d2";
                      }}
                      className="w-6 h-6 rounded"
                    />
                    {player.name}
                  </td>
                  <td className="px-6 py-4 text-purple-400 font-semibold">
                    {formatPlaytime(player.total_playtime)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative overflow-hidden shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 text-center">
              Top Player Deaths
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                Players who have faced the most deaths in KanrarSMP.
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Index</th>
                <th className="px-6 py-3">Player ID</th>
                <th className="px-6 py-3">Deaths</th>
              </tr>
            </thead>
            <tbody>
              {topDeaths.map((player, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-3">
                    <img
                      src={`https://crafatar.com/avatars/${player.uuid}`}
                      alt={player.name}
                      onError={(e) => {
                        e.target.onerror = null; // prevent infinite loop
                        e.target.src =
                          "https://crafatar.com/avatars/bb371f15-02a8-31d8-9660-3d29d41040d2";
                      }}
                      className="w-6 h-6 rounded"
                    />
                    {player.name}
                  </td>
                  <td className="px-6 py-4 text-purple-400 font-semibold">
                    {player.total_deaths}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
