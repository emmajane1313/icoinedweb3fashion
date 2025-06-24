"use client";

export default function Home() {
  return (
    <div className="relative min-h-screen flex w-full h-full items-center justify-center selection:bg-blue-700 selection:text-red-700">
      <video
        className="absolute top-0 left-0 object-cover flex w-full h-full"
        poster="/images/emmajanemackinnonlee.png"
        draggable={false}
        muted
        autoPlay
        loop
      >
        <source src="/videos/emmajanemackinnonlee.mp4" />
      </video>
      <div className="text-white relative w-fit items-center justify-center h-fit flex flex-col gap-1 text-center">
        <div className="relative w-fit h-fit text-xs gal:text-sm md:text-2xl flex font-goth pb-2">
          {" "}
          I Coined{" "}
        </div>
        <div className="w-fit h-fit text-sm gal:text-lg md:text-4xl xl:text-6xl font-glitch flex rainbow break-words">
          Web
          <span className="font-goth text-xl gal:text-2xl md:text-6xl xl:text-8xl">
            3
          </span>{" "}
          Fashion
        </div>
        <h1
          className="w-fit h-fit text-xs md:text-sm font-goth flex hover:underline cursor-pointer uppercase"
          onClick={() => window.open("https://emmajanemackinnonlee.info/")}
        >
          Digicored by Emma-Jane MacKinnon-Lee
        </h1>
      </div>
      <div
        className="w-fit h-fit text-sm absolute bottom-2 text-white right-2 font-goth flex hover:underline cursor-pointer uppercase"
        onClick={() => window.open("https://web3fashion.xyz/")}
      >
        www.web3fashion.xyz
      </div>
    </div>
  );
}
