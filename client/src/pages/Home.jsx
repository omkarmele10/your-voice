import { useEffect, useState } from "react";
import home from "../assets/home.jpg";

const slides = [
  {
    tag: "CORPORATE LAW",
    title: "MARKET LEADER",
    subtitle: "SINCE 1954",
  },
  {
    tag: "LEGAL STRATEGY",
    title: "PROTECTING",
    subtitle: "YOUR BUSINESS",
  },
  {
    tag: "GLOBAL EXPERTISE",
    title: "TRUSTED BY",
    subtitle: "INDUSTRY LEADERS",
  },
];

const Home = () => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((active + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [active]);

  const changeSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setActive(index);
      setFade(true);
    }, 300);
  };

  return (
    <div
      id="home"
      className="md:h-screen w-full bg-cover bg-center relative text-white scroll-mt-[100px]"
      style={{ backgroundImage: `url(${home})` }}
    >
      {/* CONTENT */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <div
            className={`transition-all duration-500 ${fade
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
              }`}
          >
            <p className="tracking-[3px]  text-yellow-500 mb-4">
              {slides[active].tag}
            </p>

            <h1 className="text-2xl md:text-5xl font-serif leading-tight">
              {slides[active].title}
              <br />
              {slides[active].subtitle}
            </h1>

            <p className="mt-6 tracking-widest text-yellow-500 ">
              — VIEW MORE
            </p>

            {/* INDICATOR (MOBILE: BELOW TEXT) */}
            <div className="mb-2 flex gap-4 md:hidden">
              {slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => changeSlide(i)}
                  className={`cursor-pointer w-10 h-1 transition-all duration-300 ${active === i
                      ? "bg-white"
                      : "bg-gray-400 hover:bg-white"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* INDICATOR (DESKTOP: RIGHT SIDE) */}
      <div className="hidden md:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-4">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => changeSlide(i)}
            className={`cursor-pointer w-1 h-10 transition-all duration-300 ${active === i
                ? "bg-white"
                : "bg-gray-400 hover:bg-white"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
