import { MdStar } from "react-icons/md";
export function FavouriteList({ value,setFavRestraunts,FavRestraunts}) {

    function clickHandler(id){
        let filteredArray = FavRestraunts.filter(value=>value.id!=id)
        setFavRestraunts(filteredArray)
    }
  return (
    <>
      <div className="p-3 min-h-[10vh] space-y-2 mt-1 border mx-auto w-11/12 sm:w-9/12">
        <div className="flex items-center justify-between">
          <div className="sm:flex">
            <img
              src={value.image_url}
              className="sm:w-[150px] mx-auto"
              alt=""
            />
            <div className="ml-3">
              <h1 className="font-semibold text-xl">{value.name}</h1>
              <div className="flex mt-2">
                <div className="flex items-center px-1 text-sm rounded-sm text-white space-x-1 bg-green-600 w-max">
                  <h1>{value.star_rating}</h1>
                  <MdStar />
                </div>
              </div>
                <div className="flex space-x-2 items-center">
                    <h1 className="text-gray-500 font-semibold">People Rating -</h1>
                    <h1 className="font-semibold">{value.people_rating}</h1>
                </div>
                <h1 className="font-semibold">{value.description}</h1>
                <button onClick={()=>clickHandler(value.id)} className="border px-3 py-1 bg-red-500 font-semibold text-white">REMOVE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
