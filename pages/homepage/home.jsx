import Image from "next/image";

const Home = ({ title, mediaSrc, mediaType, description, buttons }) => {

  return (
    <div className="w-screen h-screen relative overflow-hidden text-center">
      <div className="w-full h-full">
        {mediaType === "video" ? (
          // video
          <video
            src={mediaSrc}
            autoPlay
            loop
            muted
            className="absolute object-cover w-full h-full"
          />
        ) : (
          // image
          <Image src={mediaSrc} alt="cover" layout="fill" objectFit="cover" />
        )}

        <div className="w-full bg-black/30 gap-5 h-full flex flex-col absolute left-0 top-0 z-20 pt-80 justify-center items-center">
          <span className="text-3xl md:text-6xl px-2 md:px-40 flex text-center text-white font-bold">
            {title}
          </span>
          {description && (
            <p className="text-sm lg:text-2xl px-3 md:px-10 lg:px-52 flex text-center text-white mt-5">
              {description}
            </p>
          )}

          <div
            className={`gap-6 sm:gap-10 flex flex-col justify-center items-center mt-10 h-10 ${
              buttons === "yes" ? "visible" : "hidden"
            }`}
          >
            <div className="flex  flex-col">
              <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white text-center">
              Elevating African Technology Talent, Virtually and Globally...              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
