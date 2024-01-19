/* eslint-disable jsx-a11y/anchor-is-valid */
const Body = () => {
  return (
    <main className="container  md:mx-auto mt-10 md:flex md:items-center md:flex-row-reverse h-[800px] ">
      <section className="relative min-h-96 lg:min-h-[600px] md:flex-1">
        <img
          src="images/illustration-devices.svg"
          alt="devices"
          className=" absolute w-[500px] md:w-[570px] lg:w-[710px] xl:w-[1150px] max-w-none right-[-175px] lg:right-[-200px] xl:right-[-440px]"
          rel="preload"
        />
      </section>
      <section className="p-8 max-w-[400px] lg:max-w-[700PX]">
        <p className="text-[#a0a1ac] uppercase tracking-wider lg:text-lg">
          <span className="bg-[#242942] mr-3 rounded-full py-1 text-center w-14 inline-block font-bold text-white ">
            New
          </span>
          Monograph Dashboard
        </p>
        <h1 className="my-4 lg:text-5xl xl:text-6xl max-w-[400px] xl:max-w-[700px] text-[#242942] text-3xl uppercase font-bold">
          Powerful insights into your team
        </h1>
        <p className="text-[#5b5f71] text-lg md:text-2xl    ">
          Project planning and time tracking for agile teams
        </p>
        <div className="uppercase my-5 flex items-center text-xs lg:text-lg">
          <a
            href="#"
            className="bg-[#ff5c5c] rounded-md text-white font-bold mr-3 p-3 px-5 lg:p-4 lg:px-6"
          >
            Schedule a demo
          </a>
          <p className="text-[#a0a1ac]">to see a live preview</p>
        </div>
      </section>
    </main>
  );
};

export default Body;
