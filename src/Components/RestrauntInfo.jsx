export function RestrauntInfo({Details}){
    return(
        <>
        <div className="mt-4 md:mt-0 h-fit  py-2 border">
          <h1 className="text-center text-xl font-semibold pt-2">
            Quick Information
          </h1>
          <div className="space-y-4 ">
            <div className="flex items-center ml-2 mt-3 space-x-2">
              <h1 className="font-semibold text-gray-500 text-lg">Cuisines:</h1>
              {Details.food_types.map((val) => (
                <h1 className="border border-black p-1">{val}</h1>
              ))}
            </div>
            <div className="ml-2 space-y-1">
            <h1 className="font-semibold  text-gray-500 text-lg">Timings</h1>
            {Details.timings.map(val=><div className="flex space-x-2 items-center">
                <h1 className="font-semibold">{val.day}</h1>
                <h1>{val.hours}</h1>
            </div>)}
            </div>
            <div className="flex items-center ml-2 space-x-2">
              <h1 className="font-semibold text-gray-500 text-lg">Services</h1>
              {Details.services.map((val) => (
                <h1 className="border border-black p-1">{val}</h1>
              ))}
            </div>
            <div className="flex ml-2 items-center space-x-2">
            <h1 className="font-semibold text-gray-500 text-lg">Year of Establishment</h1>
            <h1>{Details.year_of_establishment}</h1>
            </div>
          </div>
        </div>
        </>
    )
}