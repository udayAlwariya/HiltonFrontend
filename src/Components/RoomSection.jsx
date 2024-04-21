import img6 from "../assets/IMAGES/img6.jpg"
export function RoomSection(){
    return(
        <>
        <div className="mt-20 w-11/12 mb-2 mx-auto flex flex-col-reverse lg:flex lg:flex-row">
        <div className="px-4">
        <h1 className="text-2xl hidden sm:block text-gray-800">Experience the epitome of comfort and style in our hotel rooms. Thoughtfully curated with modern elegance and cozy charm, each space offers a serene retreat for weary travelers and discerning guests. Enjoy luxurious amenities, plush bedding, and breathtaking views, ensuring a restful stay that rejuvenates the body and nourishes the soul. Whether for business or leisure, our hotel rooms invite you to unwind, recharge, and create cherished memories.</h1>
        <h1 className="text-2xl sm:hidden text-gray-800">Secure your stay effortlessly with our streamlined room booking process!</h1>
        <div className="mt-3">
            <button className="border-black font-semibold border px-10 py-3 hover:bg-customCream transition-all duration-300">EXPLORE ROOMS</button>
        </div>
        </div>
        <img src={img6} className="lg:w-6/12" alt="" />
        
        </div>
        </>
    )
}