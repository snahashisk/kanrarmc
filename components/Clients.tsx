"use client";

import React from "react";

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Words from our <span className="text-purple">Players</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="md:h-[36rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
