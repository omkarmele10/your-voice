import gateImg from "../assets/GateImg.jpeg";
// bg-cover bg-center
const CareerPage = () => {
    return (
        <div className=" w-full h-full bg-center  text-white flex flex-col items-center justify-center space-y-3 md:space-y-6 p-8 md:p-10"
            style={{ backgroundImage: `url(${gateImg})` }}
        >
            <h1 className="text-3xl md:text-5xl"> <i class="fa-solid fa-graduation-cap"></i></h1>
            <h1 className="text-3xl md:text-4xl text-center">HIRING NEW INTERNS</h1>
            <p className="text-center max-w-2xl">We are hiring at the moment. For all our current vacancies, see lower on this page. We are always excited to speak to anyone wishing to join the firm and to provide information.</p>
            <p>----- APPLY TODAY -----</p>

        </div>
    )
}
export default CareerPage
