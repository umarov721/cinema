import SwiperComponent from "./swiper";

const HomePage = () => {
  return (
    <>
      <div>
        <img
          className="w-[1200px] mx-14 m-6"
          src="/images/panda.png"
          alt="smth"
        />
      </div>

      <SwiperComponent />
      <div className="flex justify-between my-14">
        <h1>На неделе</h1>
        <h1 className="text-red-500">Показать все</h1>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-[280px] h-[400px] bg-slate-800"></div>
          <h1 className="mt-2 text-center">Kung Fu Panda 4<br />ENGLISH</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[280px] h-[400px] bg-slate-800"></div>
          <h1 className="mt-2 text-center">Dune 2 – EN</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[280px] h-[400px] bg-slate-800"></div>
          <h1 className="mt-2 text-center">Дюна – RU</h1>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[280px] h-[400px] bg-slate-800"></div>
          <h1 className="mt-2 text-center">Kung Fu Panda 4<br />RUSSIAN</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;

