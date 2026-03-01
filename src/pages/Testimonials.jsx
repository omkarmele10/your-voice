// import testimonialsBG from "../assets/TestimonialsBG.jpeg";
// import { useEffect, useState } from "react";
// import client from "../assets/i7.jpeg";
// const testimonials = [
//   {
//     title: `FINALLY I CAN GET MY 
//     BUSINESS RUNNING`,
//     desc: `Their knowledge, expertise, advice and confidence gave me courage
// belief and strength needed to help me go through my divorce.
// I have been totally impressed by the professional services.
//     `,
//     name: "ANETTE FLEMMING",
//   },
//   {
//     title: `BEST LEGAL SERVICE
// I RECEIVED `,
//     desc: `As far as this work was concerned, I can say that my wife
// and I
// have been extremely impressed with the efficiency and
// professionalism.
// I felt that they really understood not only the pure legal
// side.`,
//     name: "ANTHONY JOHNSON",
//   },
//   {
//     title: `THEY HELPED
// THROUGH
// HARD TIMES`,
//     desc: `The level of service I received from GoldenBlatt Law was
// incredible,
// through a particularly difficult chapter. They are
// exceptional advocates.
// I didn't feel like just another client on a conveyor belt.`,
//     name: "JENNIFER DOE",
//   },
// ];
// const Testimonials = () => {
//   const [active, setActive] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       changeSlide((active + 1) % slides.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [active]);

//   const changeSlide = (index) => {
//     setFade(false);
//     setTimeout(() => {
//       setActive(index);
//       setFade(true);
//     }, 300);
//   };

//   return (
//     <div className="md:flex">
//       <div className="h-screen w-full flex items-end flex-col md:-mr-29 z-10 bg-white md:mt-29">
//         <p className="text-white bg-primary text-4xl md:text-6xl p-2 md:p-5">
//           <i class="fa-solid fa-quote-right"></i>
//         </p>
//         <div className="space-y-2 md:space-y-5 mt-29 flex flex-col items-end mr-2 md:mr-16 ">
//           <p className="whitespace-pre-line text-end ">
//             {testimonials[0].title}
//           </p>
//           <p className="whitespace-pre-line text-end">
//             {testimonials[0].desc}
//           </p>
//           <div className="flex items-end">
//             {/* left */}
//             <div className="mr-2 md:mr-5">
//               <p className=" text-end text-primary ">{testimonials[0].name}</p>
//               <p className=" text-end ">client</p>
//             </div>
//             {/* right photo */}
//             <img src={client} alt="" className="w-16 hidden md:block" />
//           </div>
//         </div>
//       </div>

//       {/* <div
//         className="h-screen w-full bg-center  text-white grid md:grid-cols-2 "
//         style={{ backgroundImage: `url(${testimonialsBG})` }}>
//         <div>
//           <h1> <i class="fa-solid fa-file"></i></h1>
//           <p>5678</p>
//           <p>SOLVED CASES</p>
//         </div>

//          <div>
//           <h1> <i class="fa-solid fa-building-columns"></i> </h1>
//           <p>25</p>
//           <p>PARTNER</p>
//         </div>

//          <div>
//           <h1><i class="fa-solid fa-scale-balanced"></i> </h1>
//           <p>20</p>
//           <p>STAFF MEMBERS</p>
//         </div>

//          <div>
//           <h1><i class="fa-solid fa-gavel"></i></h1>
//           <p>50</p>
//           <p>TOP 50 LAW</p>
//         </div>

//       </div> */}
//       <div
//         className="w-full bg-cover bg-center py-24 flex justify-center"
//         style={{ backgroundImage: `url(${testimonialsBG})` }}
//       >
//         {/* INNER WRAPPER */}
//         <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 text-white">

//           {/* Horizontal divider */}
//           <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/30"></div>

//           {/* Vertical divider */}
//           <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-white/30"></div>

//           {/* ITEM 1 */}
//           <div className="flex flex-col items-center justify-center py-3 md:py-8  gap-2 text-center">
//             <i className="fa-solid fa-file text-primary text-3xl"></i>
//             <h1 className="text-5xl font-light">5678</h1>
//             <p className="text-xs tracking-[0.3em]">SOLVED CASES</p>
//           </div>

//           {/* ITEM 2 */}
//           <div className="flex flex-col items-center justify-center py-3 md:py-8  gap-2 text-center">
//             <i className="fa-solid fa-building-columns text-primary text-3xl"></i>
//             <h1 className="text-5xl font-light">25</h1>
//             <p className="text-xs tracking-[0.3em]">PARTNERS</p>
//           </div>

//           {/* ITEM 3 */}
//           <div className="flex flex-col items-center justify-center py-3 md:py-8  gap-2 text-center">
//             <i className="fa-solid fa-scale-balanced text-primary text-3xl"></i>
//             <h1 className="text-5xl font-light">20</h1>
//             <p className="text-xs tracking-[0.3em]">STAFF MEMBERS</p>
//           </div>

//           {/* ITEM 4 */}
//           <div className="flex flex-col items-center justify-center py-3 md:py-8  gap-2 text-center">
//             <i className="fa-solid fa-gavel text-primary text-3xl"></i>
//             <h1 className="text-5xl font-light">50</h1>
//             <p className="text-xs tracking-[0.3em]">TOP 50 LAW</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };
// export default Testimonials;


import testimonialsBG from "../assets/TestimonialsBG.jpeg";
import { useEffect, useState } from "react";
import client from "../assets/i7.jpeg";

const testimonials = [
  {
    title: `FINALLY I CAN GET MY 
BUSINESS RUNNING`,
    desc: `Their knowledge, expertise, advice and confidence gave me courage
belief and strength needed to help me go through my divorce.
I have been totally impressed by the professional services.`,
    name: "ANETTE FLEMMING",
  },
  {
    title: `BEST LEGAL SERVICE
I RECEIVED`,
    desc: `As far as this work was concerned, I can say that my wife
and I have been extremely impressed with the efficiency and
professionalism.`,
    name: "ANTHONY JOHNSON",
  },
  {
    title: `THEY HELPED
THROUGH
HARD TIMES`,
    desc: `The level of service I received from GoldenBlatt Law was
incredible through a particularly difficult chapter.`,
    name: "JENNIFER DOE",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  // SAME LOGIC AS 1st CODE
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((active + 1) % testimonials.length);
    }, 3000);

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
    <div id="testimonials" className="lg:flex lg:items-center relative scroll-mt-[100px] px-10 md:px-43">

      {/* LEFT : TESTIMONIAL */}
      <div className="mb-15 lg:mb-0 w-full flex items-end flex-col lg:-mr-29 z-10 bg-white lg: relative">

        {/* DESKTOP INDICATOR (LEFT SIDE) */}
        <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col gap-4">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => changeSlide(i)}
              className={`w-1 h-10 cursor-pointer transition-all duration-300 ${active === i ? "bg-primary" : "bg-gray-300"
                }`}
            />
          ))}
        </div>

        <p className="text-white bg-primary text-4xl md:text-6xl p-2 md:p-5 mb-10">
          <i className="fa-solid fa-quote-right"></i>
        </p>

        <div
          className={`space-y-2 md:space-y-4  md:mt-10 flex flex-col items-end mr-2 md:mr-16 md:mb-10
          transition-all duration-500 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <p className="whitespace-pre-line text-end">
            {testimonials[active].title}
          </p>

          <p className="whitespace-pre-line text-end">
            {testimonials[active].desc}
          </p>

          <div className="flex items-end">
            <div className="mr-2 md:mr-5">
              <p className="text-end text-primary">
                {testimonials[active].name}
              </p>
              <p className="text-end">client</p>
            </div>
            {/* <img src={client} alt="" className="w-16 hidden md:block" /> */}
           <p className="hidden text-3xl md:block"> <i class="fa-regular fa-user"></i></p>
          </div>
          {/* MOBILE INDICATOR (BOTTOM) */}
          <div className="flex md:hidden justify-center gap-4 py-4 bg-white w-full">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => changeSlide(i)}
                className={`w-10 h-1 cursor-pointer transition-all duration-300 ${active === i ? "bg-primary" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* RIGHT : STATS (UNCHANGED) */}
      {/* <div
        className="w-full bg-cover bg-center p-4 text-center  flex justify-center"
        style={{ backgroundImage: `url(${testimonialsBG})` }}
      >
        <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 text-white ">

          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/30"></div>
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-white/30"></div>

          <div className="flex flex-col items-center justify-center py-3 md:py-8 gap-2">
            <i className="fa-solid fa-file text-primary text-3xl"></i>
            <h1 className="text-5xl font-light">5678</h1>
            <p className="text-xs tracking-[0.3em]">SOLVED CASES</p>
          </div>

          <div className="flex flex-col items-center justify-center py-3 md:py-8 gap-2">
            <i className="fa-solid fa-building-columns text-primary text-3xl"></i>
            <h1 className="text-5xl font-light">25</h1>
            <p className="text-xs tracking-[0.3em]">PARTNERS</p>
          </div>

          <div className="flex flex-col items-center justify-center py-3 md:py-8 gap-2">
            <i className="fa-solid fa-scale-balanced text-primary text-3xl"></i>
            <h1 className="text-5xl font-light">20</h1>
            <p className="text-xs tracking-[0.3em]">STAFF MEMBERS</p>
          </div>

          <div className="flex flex-col items-center justify-center py-3 md:py-8 gap-2">
            <i className="fa-solid fa-gavel text-primary text-3xl"></i>
            <h1 className="text-5xl font-light">50</h1>
            <p className="text-xs tracking-[0.3em]">TOP 50 LAW</p>
          </div>

        </div>
      </div> */}
    </div>
  );
};

export default Testimonials;
