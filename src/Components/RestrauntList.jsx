import { useState, useEffect } from "react";
import { MdStar } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoHeartFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { favouriteRestrauntsAtom } from "../atom";
import { restaurants } from "../Util/restrauntData";
import { toast } from "react-toastify";

export function RestrauntList({ value, id }) {
  const [FavRestraunts, setFavRestraunts] = useRecoilState(
    favouriteRestrauntsAtom
  );

  let Details = restaurants.filter((value) => value.id == id)[0];

 useEffect(()=>{
    let restrauntLiked = FavRestraunts.find(value=>value.id == id)
    if(restrauntLiked){
        setLike(true)
    }
 },[])

  const [like, setLike] = useState(false);

  function clickHandler(id) {
    setLike((prev) => !prev);
    if (!like) {
      toast.success('ADDED SUCCESSFULLY', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setFavRestraunts((prev) => [...prev, Details]);
    } else {
      toast.success('REMOVED SUCCESSFULLY', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      let itemExists = FavRestraunts.find((value) => value.id == id);
      if (itemExists) {
        let filteredArray = FavRestraunts.filter((value) => value.id != id);
        setFavRestraunts(filteredArray);
      }
    }
    console.log(id);
  }
  return (
    <div className="sm:w-9/12 mt-5 sm:flex justify-between sm:ml-8 border rounded-md">
      <div className="sm:flex">
        <Link className="flex" to={`/restraunt/${value.id}`}>
          <img src={value.image_url} className="md:w-[250px] md:h-[250px] md:max-lg:w-[450px] w-full" alt="" />
        </Link>

        <div className="ml-2">
          <h1 className="text-2xl font-semibold">{value.name}</h1>
          <h1 className="mt-3 font-semibold text-gray-800">
            {value.description}
          </h1>

          <div className="flex mt-2 space-x-3">
            <div className="flex items-center px-1 rounded-md text-white space-x-1 bg-green-600 w-max">
              <h1>{value.star_rating}</h1>
              <MdStar />
            </div>
            <h1 className="text-gray-500">{value.people_rating} Rating</h1>
          </div>
          <div className="flex space-x-3 mt-2">
            {value.food_types.map((val) => (
              <h1 className=" px-2 rounded-md bg-gray-100">{val}</h1>
            ))}
          </div>
        </div>

      </div>
      <div className="flex justify-end mt-5 mr-2">
        {like ? (
          <GoHeartFill
            onClick={() => clickHandler(id)}
            className={`text-3xl cursor-pointer text-red-500`}
          />
        ) : (
          <IoMdHeartEmpty
            className={`text-3xl cursor-pointer`}
            onClick={() => clickHandler(id)}
          />
        )}
      </div>
    </div>
  );
}
