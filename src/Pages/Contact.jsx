import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Footer } from "../Components/Footer";
export function Contact() {
  return (
    <>
    <div className="bg-customGreen py-10 text-white">
      <h1 className="text-center font-semibold text-5xl">GET IN TOUCH</h1>
      <div className="sm:flex mt-20 w-6/12 sm:max-lg:w-9/12 mx-auto justify-between">
        <div className=" text-center mb-5 sm:mb-0 space-y-1">
          <IoLocation className="text-5xl mx-auto" />
          <h1 className="font-bold text-2xl">ADDRESS</h1>
          <h1 className="text-lg">
            Heathrow Airport Terminal 4, Hillingdon, United Kingdom.
          </h1>
        </div>
        <div className=" text-center mb-5 sm:mb-0">
          <FaPhoneAlt className="text-4xl mx-auto" />
          <h1 className="font-bold mt-4 text-2xl">PHONE</h1>
          <h1 className="text-lg">
            Hilton Group Contracting 877.WEIFIELD phone
          </h1>
        </div>
        <div className="text-center space-y-1">
          <MdEmail className="text-5xl mx-auto" />
          <h1 className="font-bold text-2xl">EMAIL</h1>
          <h1 className="text-lg">
            Request for Proposal Info@hiltongroup.com
          </h1>
        </div>
      </div>
    </div>
    <div className="sm:w-9/12 w-11/12 sm:flex border-black mt-7 mb-7 mx-auto ">
        <div className="sm:w-6/12 ">
         <h1 className="text-4xl font-bold text-customBlue">Message Us</h1>
         <h1 className="text-gray-600 mt-9">If you wish to be considered for employment at HILTON, please do not send a message, here – instead, please complete Weifield’s <span className="text-blue-500">job application</span> and our Human Resources department will contact you after their review of your submitted information.</h1>
        </div>
        <div className=" pl-2 w-6/12">
            <h1 className="text-gray-600 mb-3 font-semibold">Name</h1>
            <div>
            <label className="text-sm" htmlFor="fname">FirstName : </label>
            <input type="text" id="fname" className="border mr-2 outline-none" />
            </div>
            <div className="mt-2">
            <label className="text-sm" htmlFor="fname">LastName : </label>
            <input type="text" id="fname" className="border outline-none" />
            </div>
            <h1 className="text-gray-600 mb-3 font-semibold mt-5">Email</h1>
            <input type="text" className="border outline-none"/>
            <h1 className="text-gray-600 mb-3 font-semibold mt-5">Comment</h1>
            <textarea className="border outline-none" cols="50" rows="10"></textarea>
            <div className="border w-fit px-2 py-1 font-semibold text-white bg-yellow-300">Submit</div>
        </div>
    </div>
    <Footer/>
    </>
    
  );
}
