import { Link } from "react-router-dom"
import img5 from "../assets/IMAGES/img5.jpg"
export function RestrauntSection(){
   
    return(
        <div >
            <h1 id="services" className=" text-3xl mx-auto w-max font-semibold"><u>OUR SERVICES</u></h1>
        <div className="mt-10 w-11/12 mx-auto lg:flex">
        <img src={img5} className="lg:w-6/12 w-full" alt="" />
        <div className="px-4">
            <h1 className="text-2xl hidden sm:block text-gray-800">Embark on a culinary journey with our diverse selection of restaurants, where every dish tells a story of flavor and creativity. From intimate cafes to upscale dining experiences, savor exquisite cuisine crafted by talented chefs using the finest ingredients. Whether you're craving traditional favorites or bold international flavors, our restaurants promise a gastronomic adventure that delights the senses and leaves a lasting impression.</h1>
            <h1 className="text-xl font-semibold sm:hidden text-gray-800">Experience seamless restaurant bookings with just a click on our website!</h1>
        <div className="mt-6">
            <Link to="/services/restraunts" className="border-black font-semibold border px-10 py-3 hover:bg-customCream transition-all duration-300">EXPLORE RESTRAUNTS</Link>
        </div>
        </div>
        </div>
        </div>
        
    )
}