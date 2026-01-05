import { useState } from "react";
import contact from "../assets/i10.jpeg";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    option: "",
    details: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.telephone || !formData.option || !formData.details) {
      alert("Please fill in all required fields.");
      return;
    }

    // emailjs
    //   .send(
    //     "service_ibtaz8m",
    //     "template_0as9mll",
    //     {
    //       name: formData.name,
    //       email: formData.email,
    //       phone: formData.phone,
    //       subject: formData.subject,
    //       message: formData.message,
    //     },
    //     "XSgISvDkBsE3gzZ5W"
    //   )
    emailjs.send(
      "service_ibtaz8m",
      "template_0as9mll",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.telephone,
        option: formData.option,
        message: formData.details,
      },
      "XSgISvDkBsE3gzZ5W"
    )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            telephone: "",
            option: "",
            details: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="lg:flex">
      <div>
        <img src={contact} alt="" />
      </div>
      <div className="lg:mt-24 lg:-ml-25 z-10 bg-white ">
        <div className="text-white bg-primary text-3xl inline-block md:text-5xl p-2 md:p-5">
          <i class="fa-regular fa-message"></i>
        </div>
        <div className="p-2 md:p-10 m-5 space-y-3">
          <p className="text-primary">CONTACT US</p>
          <h1 className="text-2xl md:text-3xl">REQUEST A FREE CALL BACK</h1>

          <form  onSubmit={handleSubmit}  className="space-y-5">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className=" w-full bg-[#f2f2f2] px-5 py-4 outline-none" />
              <input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                className=" w-full bg-[#f2f2f2] px-5 py-4 outline-none" />
            </div>
            <input
              type="text"
              name="telephone"
              placeholder="Telephone"
              value={formData.telephone}
              onChange={handleChange}
              className=" w-full bg-[#f2f2f2] px-5 py-4 outline-none" />
            {/* <select
              className="w-full border border-gray-300 px-4 py-3 
                   text-gray-700 bg-[#f2f2f2]
                   focus:outline-none focus:border-primary"
            >
              <option value="">— Please choose an option —</option>
              <option value="family-law">Family Law</option>
              <option value="marriage-agreements">Marriage Agreements</option>
              <option value="financial-settlements">Financial Settlements</option>
            </select> */}
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              className="w-full bg-[#f2f2f2] px-5 py-4 outline-none text-gray-700"
            >
              <option value="">— Please choose an option —</option>
              <option value="Family Law">Family Law</option>
              <option value="Marriage Agreements">Marriage Agreements</option>
              <option value="Financial Settlements">Financial Settlements</option>
            </select>

            <textarea
              className=" w-full bg-[#f2f2f2] px-5 py-4 outline-none"
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="details"></textarea>
            <button
              type="submit"
              className="rounded bg-[#f0cf88] hover:bg-primary text-black p-1 " >Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact
