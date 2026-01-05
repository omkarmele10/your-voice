import i2 from '../assets/i2.jpeg'

const OurMission = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className='w-full h-full  '> <img src={i2} alt="img" className="w-full h-full object-cover block" /></div>

            <div className='flex flex-col text-start space-y-2 lg:space-y-4 w-full z-10 bg-white lg:mt-23 lg:-ml-23'>
                <div className="inline-block self-start text-white  bg-primary text-2xl md:text-4xl p-4 lg:p-6"> <i class="fa-solid fa-bullseye"></i></div>
                <p className='text-primary ml-4 lg:ml-20'>OUR MISSION</p>
                <h1 className='text-2xl md:text-3xl ml-4 md:ml-20'>AT GOLDENBLATT, WE ARE DRIVEN</h1>
                <h1 className='text-2xl md:text-3xl ml-4 md:ml-20'>BY THE SHARED VISION OF</h1>
                <h1 className='text-2xl md:text-3xl ml-4 md:ml-20'>SUCCESS, NOT FEES.</h1>
                {/* <p className='text-sm text-primary ml-2 md:ml-20'>------- VIEW MORE</p> */}
            </ div>
        </div>
    )
}
export default OurMission



