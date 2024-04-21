import { Link } from "react-router-dom";

export function Register(){
    return(
        <>
         <form className="mt-10 mx-auto sm:border-2 sm:shadow-md border-white-500 sm:w-7/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 rounded-md">
            <div className="mt-5 text-center mb-6">
                <h1 className="font-bold text-black text-3xl">Register</h1>
                <p className="text-gray-500 w-2/3 mx-auto mt-3">Enter your information to create an account</p>
            </div>

            <div className="mx-auto w-10/12">
            <div className="mb-2">
                <p className="font-bold mb-2">First Name</p>
                <input className="border rounded-md  w-full py-1 pl-2" name="firstName" type="text" placeholder="John"/>
            </div>
            <div className="mb-2">
                <p className="font-bold mb-2">Last Name</p>
                <input className="border rounded-md w-full py-1 pl-2" name="lastName" type="text" placeholder="Doe"/>
            </div>
            <div className="mb-2">
                <p className="font-bold mb-2">Email</p>
                <input className="border rounded-md  w-full py-1 pl-2" name="email" type="text" placeholder="JohnDoe@gmail.com"/>
            </div>
            <div className="mb-4">
                <p className="font-bold">Password</p>
                <input className="border rounded-md  w-full py-1 pl-2" name="password" type="password" />
            </div>
            <div>
            <button className="border bg-black mb-3 text-white rounded-md  w-full py-1 pl-2">Signup</button>
            </div>
            
            </div>
        
        </form>
        </>
    )
}