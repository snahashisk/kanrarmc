import React from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const Unstep = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start line-through">
      <UncheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const UncheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-red-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0-.432.002-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579c-.005.098-.01.198-.013.299l-.017.616l-.004.318l-.001.324c0 .218.002.432.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034c.098.005.198.01.299.013l.616.017l.642.005l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579c.005-.098.01-.198.013-.299l.017-.616l.005-.642l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004l-.324-.001zm2.121 6.464a1 1 0 0 1 0 1.414L13.414 12l.707.707a1 1 0 0 1-1.414 1.414L12 13.414l-.707.707a1 1 0 0 1-1.414-1.414L10.586 12l-.707-.707a1 1 0 0 1 1.414-1.414L12 10.586l.707-.707a1 1 0 0 1 1.414 0z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Buy <span className="text-purple">Ranks</span>
      </h1>
      <div className="mt-20 mb-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <CardSpotlight>
          <p className="text-2xl font-bold relative z-20 mt-2 text-pink-600">
            BOOSTER
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <p className="mt-2 text-gray-400">Rank Price:</p>
            <ul className="list-none  mt-2">
              <li className="flex items-center gap-2">
                <FaMoneyCheckDollar className="text-yellow-500" />
                <span className="text-white">2 Boosts</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-green-500" />
                <span className="text-white">Till the boost is Active</span>
              </li>
            </ul>
            <p className="mt-2 text-gray-400">Rank Perks:</p>
            <ul className="list-none  mt-2">
              <Step title="Booster Prefix" />
              <Step title="Access To Booster Kit" />
              <Step title="7 Sethome Access" />
              <Step title="10 Auction House Listing" />
              <Step title="5 Epic Keys" />
            </ul>
            <p className="mt-2 text-gray-400">Commands Access:</p>
            <ul className="list-none  mt-2">
              <Step title="Access to /craft" />
              <Step title="Access to /anvil" />
              <Unstep title="Access to /disposal" />
              <Unstep title="Access to /grindstone" />
              <Unstep title="Access to /hat" />
              <Unstep title="Access to /smithingtable" />
              <Unstep title="Access to /stonecutter" />
              <Unstep title="Access to /loom" />
            </ul>
            <p className="mt-2 text-gray-400">Others:</p>
            <ul className="list-none  mt-2">
              <Step title="300k in Game Money" />
              <Step title="400 Coins" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Join our Discord server and create a ticket to purchase a rank. UPI
            payments only accepted.
          </p>
        </CardSpotlight>
        <CardSpotlight>
          <p className="text-2xl font-bold relative z-20 mt-2 text-yellow-500">
            SLAYER
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <p className="mt-2 text-gray-400">Rank Price:</p>
            <ul className="list-none  mt-2">
              <li className="flex items-center gap-2">
                <FaMoneyCheckDollar className="text-yellow-500" />
                <span className="text-white">75 INR / 0.88 USD</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-green-500" />
                <span className="text-white">Valid For 1 Season</span>
              </li>
            </ul>
            <p className="mt-2 text-gray-400">Rank Perks:</p>
            <ul className="list-none  mt-2">
              <Step title="Slayer Prefix" />
              <Step title="Access To Slayer Kit" />
              <Step title="5 Sethome Access" />
              <Step title="8 Auction House Listing" />
              <Step title="2 Epic Keys" />
            </ul>
            <p className="mt-2 text-gray-400">Commands Access:</p>
            <ul className="list-none  mt-2">
              <Step title="Access to /craft" />
              <Unstep title="Access to /anvil" />
              <Unstep title="Access to /disposal" />
              <Unstep title="Access to /grindstone" />
              <Unstep title="Access to /hat" />
              <Unstep title="Access to /smithingtable" />
              <Unstep title="Access to /stonecutter" />
              <Unstep title="Access to /loom" />
            </ul>
            <p className="mt-2 text-gray-400">Others:</p>
            <ul className="list-none  mt-2">
              <Step title="200k in Game Money" />
              <Step title="300 Coins" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Join our Discord server and create a ticket to purchase a rank. UPI
            payments only accepted.
          </p>
        </CardSpotlight>
        <CardSpotlight>
          <p className="text-2xl font-bold relative z-20 mt-2 text-cyan-400">
            GLADIATOR
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <p className="mt-2 text-gray-400">Rank Price:</p>
            <ul className="list-none  mt-2">
              <li className="flex items-center gap-2">
                <FaMoneyCheckDollar className="text-yellow-500" />
                <span className="text-white">149 INR / 1.74 USD</span>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-green-500" />
                <span className="text-white">Valid For 1 Season</span>
              </li>
            </ul>
            <p className="mt-2 text-gray-400">Rank Perks:</p>
            <ul className="list-none  mt-2">
              <Step title="Gladiator Prefix" />
              <Step title="Access To Gladiator Kit" />
              <Step title="7 Sethome Access" />
              <Step title="10 Auction House Listing" />
              <Step title="5 Epic Keys" />
            </ul>
            <p className="mt-2 text-gray-400">Commands Access:</p>
            <ul className="list-none  mt-2">
              <Step title="Access to /craft" />
              <Step title="Access to /anvil" />
              <Unstep title="Access to /disposal" />
              <Unstep title="Access to /grindstone" />
              <Unstep title="Access to /hat" />
              <Unstep title="Access to /smithingtable" />
              <Unstep title="Access to /stonecutter" />
              <Unstep title="Access to /loom" />
            </ul>
            <p className="mt-2 text-gray-400">Others:</p>
            <ul className="list-none  mt-2">
              <Step title="400k in Game Money" />
              <Step title="600 Coins" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Join our Discord server and create a ticket to purchase a rank. UPI
            payments only accepted.
          </p>
        </CardSpotlight>
      </div>
      <div className="my-10 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <CardSpotlight>
          <p className="text-2xl font-bold relative z-20 mt-2 text-blue-500">
            VANGUARD
          </p>
          <p className="mt-2 text-gray-400">Rank Price:</p>
          <ul className="list-none  mt-2">
            <li className="flex items-center gap-2">
              <FaMoneyCheckDollar className="text-yellow-500" />
              <span className="text-white">299 INR / 3.50 USD</span>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-green-500" />
              <span className="text-white">Valid For 1 Season</span>
            </li>
          </ul>
          <div className="text-neutral-200 mt-4 relative z-20">
            <p className="mt-2 text-gray-400">Rank Perks:</p>
            <ul className="list-none  mt-2">
              <Step title="Vanguard Prefix" />
              <Step title="Access To Vanguard Kit" />
              <Step title="10 Sethome Access" />
              <Step title="14 Auction House Listing" />
              <Step title="2 Legendary Keys" />
            </ul>
            <p className="mt-2 text-gray-400">Commands Access:</p>
            <ul className="list-none  mt-2">
              <Step title="Access to /craft" />
              <Step title="Access to /anvil" />
              <Step title="Access to /disposal" />
              <Step title="Access to /grindstone" />
              <Step title="Access to /hat" />
              <Unstep title="Access to /smithingtable" />
              <Unstep title="Access to /stonecutter" />
              <Unstep title="Access to /loom" />
            </ul>
            <p className="mt-2 text-gray-400">Others:</p>
            <ul className="list-none  mt-2">
              <Step title="600k in Game Money" />
              <Step title="800 Coins" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Join our Discord server and create a ticket to purchase a rank. UPI
            payments only accepted.
          </p>
        </CardSpotlight>
        <CardSpotlight>
          <p className="text-2xl font-bold relative z-20 mt-2 text-fuchsia-600">
            LEGEND
          </p>
          <p className="mt-2 text-gray-400">Rank Price:</p>
          <ul className="list-none  mt-2">
            <li className="flex items-center gap-2">
              <FaMoneyCheckDollar className="text-yellow-500" />
              <span className="text-white">499 INR / 5.84 USD</span>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-green-500" />
              <span className="text-white">Valid For 1 Season</span>
            </li>
          </ul>
          <div className="text-neutral-200 mt-4 relative z-20">
            <p className="mt-2 text-gray-400">Rank Perks:</p>
            <ul className="list-none  mt-2">
              <Step title="Legend Prefix" />
              <Step title="Access To Legend Kit" />
              <Step title="15 Sethome Access" />
              <Step title="20 Auction House Listing" />
              <Step title="5 Legendary Keys" />
            </ul>
            <p className="mt-2 text-gray-400">Commands Access:</p>
            <ul className="list-none  mt-2">
              <Step title="Access to /craft" />
              <Step title="Access to /anvil" />
              <Step title="Access to /disposal" />
              <Step title="Access to /grindstone" />
              <Step title="Access to /hat" />
              <Step title="Access to /smithingtable" />
              <Step title="Access to /stonecutter" />
              <Unstep title="Access to /loom" />
            </ul>
            <p className="mt-2 text-gray-400">Others:</p>
            <ul className="list-none  mt-2">
              <Step title="800k in Game Money" />
              <Step title="1000 Coins" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Join our Discord server and create a ticket to purchase a rank. UPI
            payments only accepted.
          </p>
        </CardSpotlight>
        <CardSpotlight>
          <p className="text-2xl font-bold relative z-20 mt-2 text-red-600">
            PRIVATE
          </p>
          <p className="mt-2 text-gray-400">Rank Price:</p>
          <ul className="list-none  mt-2">
            <li className="flex items-center gap-2">
              <FaMoneyCheckDollar className="text-yellow-500" />
              <span className="text-white">2000 INR / 23.29 USD</span>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-green-500" />
              <span className="text-white">Valid For 1 Season</span>
            </li>
          </ul>
          <div className="text-neutral-200 mt-4 relative z-20">
            <p className="mt-2 text-gray-400">Rank Perks:</p>
            <ul className="list-none  mt-2">
              <Step title="Decide Your Own Prefix" />
              <Step title="Access To Private Kit" />
              <Step title="20 Sethome Access" />
              <Step title="40 Auction House Listing" />
              <Step title="7 Legendary Keys" />
            </ul>
            <p className="mt-2 text-gray-400">Commands Access:</p>
            <ul className="list-none  mt-2">
              <Step title="Access to /craft" />
              <Step title="Access to /anvil" />
              <Step title="Access to /disposal" />
              <Step title="Access to /grindstone" />
              <Step title="Access to /hat" />
              <Step title="Access to /smithingtable" />
              <Step title="Access to /stonecutter" />
              <Step title="Access to /loom" />
            </ul>
            <p className="mt-2 text-gray-400">Others:</p>
            <ul className="list-none  mt-2">
              <Step title="2 Million in Game Money" />
              <Step title="2000 Coins" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Join our Discord server and create a ticket to purchase a rank. UPI
            payments only accepted.
          </p>
        </CardSpotlight>
      </div>
    </section>
  );
};

export default Approach;

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
