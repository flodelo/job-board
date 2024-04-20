import React from 'react'
import SearchForm from "./SearchForm";

const Hero = ({jobs}:any) => {
  return (
    <div
      id="home"
      className="bg-[url('/hero.png')] h-screen relative w-full bg-cover mt-[-70px]"
    >
      <div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-extrabold text-black">
            Trouve{" "}
            <span className="text-purple-600 font-extrabold">
            Le Job
            </span>
              , Qui Te Correspond
          </h1>
          <span className="text-3xl font-thin">
            100 offres premium - le job de tes rêves t'attend !
          </span>
        </div>
        <SearchForm jobs={jobs} />
      </div>
    </div>
  );
};

export default Hero;