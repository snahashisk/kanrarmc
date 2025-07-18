import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

type VoteEntry = {
  user_name: string;
  total_votes: number;
  uuid?: string;
};

const Voting = () => {
  const [voteData, setVoteData] = useState<VoteEntry[]>([]);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const res = await axios.get<VoteEntry[]>(
          "https://kanrarmcbackend.onrender.com/api/v1/stats/votes"
        );
        setVoteData(res.data);
      } catch (err) {
        console.error("Error fetching vote data:", err);
      }
    };

    fetchVotes();
  }, []);

  return (
    <section
      className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      id="voting"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center col-span-2 flex flex-col gap-5 items-center justify-center +">
        <h1 className="mb-4 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Support KanrarMC by <span className="text-purple">Voting</span>
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Your votes help us grow and reach more players! Vote daily to support
          the server and climb the leaderboard.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://play-minecraft-servers.com/minecraft-servers/kanrarsmp/?tab=vote"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Vote Link 1
          </a>
          <a
            href="https://minecraftservers.org/vote/674183"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Vote Link 2
          </a>
        </div>
      </div>
      <div className="col-span-1 mx-auto px-4 sm:px-6 lg:px-8">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800 text-center">
            Top Voters
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Index</th>
              <th className="px-6 py-3">Player ID</th>
              <th className="px-6 py-3">Votes</th>
            </tr>
          </thead>
          <tbody>
            {voteData.map((player, index) => (
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
                    alt={player.user_name}
                    className="w-6 h-6 rounded"
                  />
                  {player.user_name}
                </td>
                <td className="px-6 py-4 text-purple-400 font-semibold">
                  {player.total_votes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Voting;
