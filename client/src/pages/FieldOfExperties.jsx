import i3 from '../assets/i3.jpeg'
import i4 from '../assets/i4.jpeg'
import i5 from '../assets/i5.jpeg'
const arr = [
    {
        imgUrl: i3,
        title: "CORPORATE LAW",
        desc: "Objectively innovate empowered manufactured products whereas parallel platforms holisticly predominate."
    },
    {
        imgUrl: i4,
        title: "SETTLEMENTS",
        desc: "Proactively envisioned multimedia based expertise and cross-media growth strategies seamlessly visualize quality."
    },
    {
        imgUrl: i5,
        title: "EMPLOYMENT",
        desc: "Holistically pontificate installed base portals after maintainable products capital without superior collaboration and idea."
    }
]
const FieldOfExperties = () => {
    return (
        <div className=" mx-4 sm:mx-[10%] my-10 ">
            <p className=" text-primary">FIELDS OF EXPERTISE</p>
            <div className="md:flex justify-between">
                <div>
                    <h1 className="text-2xl md:4xl">ADVICE ON A FULL RANGE</h1>
                    <h1 className="text-2xl md:4xl">OF CORPORATE LAW MATTERS</h1>
                </div>

                {/* <p className="text-sm text-primary hover:text-bold cursor-pointer hover:text-black">--- VIEW ALL</p> */}
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-8">
                {arr.map((item, index) =>
                    <div className=' bg-[#353535] text-white m-5'>
                        <img src={item.imgUrl} alt="" />
                        <div className='flex  items-center md:ml-6 -mt-10  z-10 gap-2 bg-[#353535] relative'>
                            <p className='text-2x p-2 bg-primary '><i class="fa-solid fa-suitcase"></i></p>
                            <h1 className='text-center'>{item.title}</h1>
                        </div>
                        <div className='p-3 md:p-5 space-y-2 md:space-y-5'>
                            <p className="text-sm ">{item.desc}</p>
                            <p className="text-sm text-primary hover:text-bold cursor-pointer hover:text-white">--- VIEW ALL</p>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}
export default FieldOfExperties
