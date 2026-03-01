import mapImg from "../assets/mapImg.jpeg";
import logo from "../assets/icon.jpg";

const Footer = () => {
  return (
    <footer className=" text-gray-300  w-full bg-cover bg-center " style={{ backgroundImage: `url(${mapImg})` }}>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LEFT */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            <div>
              <h2 className="text-xl font-semibold tracking-widest text-white">
                GOLDENBLATT
              </h2>
              <p className="text-xs text-gray-400">
                ENGLISH AND INTERNATIONAL LAW
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <p className="flex gap-3">
              <i className="fa-solid fa-location-dot text-[#c9a27d]" />
              48-49 Russell Square, WC1B 4JP, London
            </p>
            <p className="flex gap-3">
              <i className="fa-solid fa-phone text-[#c9a27d]" />
              1 800 643 4300
            </p>
            <p className="flex gap-3">
              <i className="fa-solid fa-envelope text-[#c9a27d]" />
              info@goldenblatt.co.uk
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <span className="w-10 h-10 flex items-center justify-center bg-[#3a3a3a] hover:bg-[#c9a27d] transition cursor-pointer">
              <i className="fa-brands fa-facebook-f text-white" />
            </span>
            <span className="w-10 h-10 flex items-center justify-center bg-[#3a3a3a] hover:bg-[#c9a27d] transition cursor-pointer">
              <i className="fa-brands fa-twitter text-white" />
            </span>
            <span className="w-10 h-10 flex items-center justify-center bg-[#3a3a3a] hover:bg-[#c9a27d] transition cursor-pointer">
              <i className="fa-brands fa-linkedin-in text-white" />
            </span>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            SERVICES
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Labor and Employment",
              "Intellectual Property",
              "Property and Construction",
              "Banking and Finance",
              "Legal IT services",
            ].map((item) => (
              <li
                key={item}
                className="border-b border-gray-600 pb-2 hover:text-white cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-6 tracking-wide">
            LINKS
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Terms and Conditions",
              "Privacy Policy",
              "Cookie Policy and Data Protection",
              "Complaints Policy",
              "FAQ",
            ].map((item) => (
              <li
                key={item}
                className="border-b border-gray-600 pb-2 hover:text-white cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FREE CONSULTATION */}
        <div className="space-y-6">
          <h3 className="text-white font-semibold tracking-wide">
            FREE CONSULTATION
          </h3>

          <div className="flex items-center gap-4 border border-[#c9a27d] px-5 py-4">
            <i className="fa-solid fa-phone text-[#c9a27d] text-xl" />
            <span className="text-white font-semibold tracking-wider">
              1-800-643-4300
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Goldenblatt Law Firm SRA ref 669401. Calls may be recorded for
            quality and training purposes.
          </p>

          <p className="text-sm text-[#c9a27d]">
            Copyright © Goldenblatt 2019
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
