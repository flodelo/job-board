import React from 'react'
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[url('/hero.png')] h-screen relative w-full bg-cover mt-[-70px]"
    >
      <div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
        <div className="text-center flex flex-col gap-3">
          <h1 className="text-6xl font-extrabold text-black">
            Trouvez{" "}
            <span className="text-purple-600 font-extrabold">
              Le Job
            </span>
            , Que Vous Méritez
          </h1>
          <span className="font-thin">
            100 offres premium, le job de vos rêves vous attend !
          </span>
        </div>
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;