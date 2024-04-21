export function Signin(){
    return(
        <>
         <div className="mt-20 mx-auto shadow-md border-white-500 w-10/12 sm:w-7/12 md:w-5/12 lg:w-4/12 2xl:w-3/12 rounded-md">
        <div className="mt-5 text-center mb-6">
            <h1 className="font-bold text-black text-3xl">Sign In</h1>
            <p className="text-gray-500 w-2/3 mx-auto mt-3">Enter your credentials to access your account</p>
        </div>

        <div className="mx-auto w-10/12">
    
        <div className="mb-2">
            <p className="font-bold mb-2">Email</p>
            <input className="border rounded-md  w-full py-1 pl-2" name="email" type="text" placeholder="JohnDoe@gmail.com"/>
        </div>
        <div className="mb-4">
            <p className="font-bold">Password</p>
            <input className="border rounded-md  w-full py-1 pl-2" name="password" type="password" />
        </div>
        <div>
        <button className="border mb-3 bg-black text-white rounded-md  w-full py-1 pl-2">Signin</button>
        </div>
        
        </div>
    
    </div>
        </>
    )
}