// import e2 from "../assets/asset 12.png";
// import e3 from "../assets/asset 13.png";
// import e4 from "../assets/asset 14.png";
// import e5 from "../assets/asset 15.png";
// import e6 from "../assets/asset 16.png";
// import e7 from "../assets/asset 17.png";
// import e8 from "../assets/asset 18.png";


// const CompanySlider = () => {
//   return (
//     <div className="mx-4 sm:mx-[10%] my-4">
//         <div className="flex">
//         <img src={e2} alt="" className="w-40" />
//         <img src={e3} alt="" className="w-40" />
//         <img src={e4} alt="" className="w-40" />
//         <img src={e5} alt="" className="w-40" />
//         <img src={e6} alt="" className="w-40"/>
//         <img src={e7} alt="" className="w-40"/>
//         <img src={e8} alt="" className="w-40" />
//         </div>
//     </div>
//   )
// }
// export default CompanySlider


import { useEffect, useRef } from "react";
import e2 from "../assets/asset 12.png";
import e3 from "../assets/asset 13.png";
import e4 from "../assets/asset 14.png";
import e5 from "../assets/asset 15.png";
import e6 from "../assets/asset 16.png";
import e7 from "../assets/asset 17.png";
import e8 from "../assets/asset 18.png";

const logos = [e2, e3, e4, e5, e6, e7, e8];

const CompanySlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!sliderRef.current) return;

            const slider = sliderRef.current;
            const firstChild = slider.children[0];

            slider.style.transition = "transform 0.6s ease";
            slider.style.transform = "translateX(-160px)";

            setTimeout(() => {
                slider.style.transition = "none";
                slider.style.transform = "translateX(0)";
                slider.appendChild(firstChild);
            }, 600);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mx-4 sm:mx-[10%] my-6 overflow-hidden">
            <div
                ref={sliderRef}
                className="flex items-center gap-6"
            >
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt="company"
                        className="w-40 flex-shrink-0 mx-auto"
                    />
                ))}
            </div>
        </div>
    );
};

export default CompanySlider;
