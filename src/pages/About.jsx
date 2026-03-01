import i1 from '../assets/i1.jpeg'
const About = () => {
  return (
    <div id="about" className='flex flex-col lg:flex-row scroll-mt-25'>
      <div className='mb-10 lg:mb-0 flex flex-col text-end space-y-4 lg:space-y-4 w-full z-10 bg-white'>
        <div className="inline-block self-end text-white p-4 lg:p-6 bg-primary text-3xl md:text-4xl"><i class="fa-solid fa-building-columns"></i></div>
        <p className='text-primary mr-2 md:mr-20'>About</p>
        <h1 className='text-3xl mr-2 md:mr-20'>ADVICE ON A FULL RANGE</h1>
        <h1 className='text-3xl mr-2 md:mr-20'>OF CORPORATE LAW MATTERS</h1>
        <p className='text-sm mr-2 md:mr-20'>
          Bring to the table win-win survival strategies to ensure proactive domination. At the<br />
          end of the day, going forward, a new normal that has evolved from generation X is on <br />
          the runway heading towards a streamlined cloud solution. User generated content in <br />
          real-time will have multiple touchpoints for offshoring.</p>
        <p className='text-sm text-primary mr-2 md:mr-20'>------- REQUEST FREE CONSULTATION</p>
      </ div>
      <div className='w-full h-full lg:-mt-23 lg:-ml-23 z-0 '> <img src={i1} alt="img" className="w-full h-full object-cover block" /></div>
    </div>

  )
}
export default About

