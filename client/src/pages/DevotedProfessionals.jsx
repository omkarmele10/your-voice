// import e1 from "../assets/i6.jpeg";
// import e2 from "../assets/i7.jpeg";
// import e3 from "../assets/i8.jpeg";
// import e4 from "../assets/i9.jpeg";

// const employees = [
//     {
//         imgUrl:e1,
//         name:"CHRISTOPHER LAW",
//         position:"Founder and CEO"
//     },
//     {
//         imgUrl:e2,
//         name:"ROBERTA LAWRENCE",
//         position:"Co Founder"
//     },
//     {
//         imgUrl:e1,
//         name:"BRENDA SHAW",
//         position:"Civil Attorney"
//     },
//     {
//         imgUrl:e1,
//         name:"BERNARD ROBERST ",
//         position:"Financial Lawyer "
//     },

// ]
// const DevotedProfessionals = () => {
//   return (
//     <div>
//         employees.map((emp,index)=>{

//         })
//         <div>

//         </div>

//     </div>
//   )
// }
// export default DevotedProfessionals

import e1 from "../assets/i6.jpeg";
import e2 from "../assets/i7.jpeg";
import e3 from "../assets/i8.jpeg";
import e4 from "../assets/i9.jpeg";

const employees = [
    {
        imgUrl: e1,
        name: "CHRISTOPHER LAW",
        position: "Founder and CEO",
    },
    {
        imgUrl: e2,
        name: "ROBERTA LAWRENCE",
        position: "Co Founder",
    },
    {
        imgUrl: e3,
        name: "BRENDA SHAW",
        position: "Civil Attorney",
    },
    {
        imgUrl: e4,
        name: "BERNARD ROBERTS",
        position: "Financial Lawyer",
    },
];

const DevotedProfessionals = () => {
    return (
        <div className="mx-4 sm:mx-[10%] m-8 p-8 text-center">
            <div className="lg:flex justify-between my-3">
                <h1 className="text-3xl md:text-4xl">DEVOTED PROFESSIONALS</h1>
                {/* <p className="text-primary">---VIEW ALL</p> */}
            </div>
            <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {employees.map((emp, index) => (
                    <div key={index} className="w-full aspect-[3/4] overflow-hidden text-center">
                       
                        <img
                            src={emp.imgUrl}
                            alt={emp.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                        <div className="mt-4">
                            <h3 className="font-semibold text-primary">{emp.name}</h3>
                            <p className="text-sm text-black">{emp.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default DevotedProfessionals;
