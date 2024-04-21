export function Footer(){
    return(
        <div className=" w-full bg-black py-12">
              <div className="flex justify-around text-[12px] sm:w-6/12 w-9/12 mx-auto text-white space-x-2">
            <div className="flex flex-col">
                <p>Hotel Rooms</p>
                <p>Restraunt Booking</p>
                <p>Explore</p>
            </div>
            <div className="flex flex-col">
            <p>Forum</p>
                <p>Support</p>
                <p>Recent Posts</p>
            </div>
            <div className="flex flex-col">
            <p>Privacy Policy</p>
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Terms of Service</p>
            </div>
        </div>
        <div className="text-center mt-5 text-sm text-white">All rights reserved @Hilton 2024</div>
        </div>
    )
      
    }