import { useParams } from "react-router-dom";
import { restaurants } from "../Util/restrauntData";
import { MdStar } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Menu } from "../Components/Menu";
import { RestrauntInfo } from "../Components/RestrauntInfo";

export function RestrauntDetails() {
  const { id } = useParams();
  let Details = restaurants.filter((value) => value.id == id)[0];

  return (
    <div className="px-3">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:space-x-16 sm:justify-around mt-5">
        <img
          src={Details.image_url}
          className="md:w-[48vw] mx-auto "
          alt=""
        />
        <div className="ml-2 mt-2">
          <h1 className="text-4xl font-semibold">{Details.name}</h1>
          <div className="flex mt-2 space-x-3">
            <div className="flex items-center px-1 rounded-md text-white space-x-1 bg-green-600 w-max">
              <h1>{Details.star_rating}</h1>
              <MdStar />
            </div>
            <h1 className="text-gray-500">{Details.people_rating} Rating</h1>
          </div>
          <div className="flex font-semibold mt-2 items-center">
            <h1>
              <CiLocationOn className="text-2xl " />
            </h1>
            <h1 className="text-lg">{Details.address}</h1>
          </div>
          <h1 className="mt-2">
            <span className="text-green-600 font-semibold mr-2">Opens At</span>
            {Details.opening_time}
          </h1>
          <Menu Details={Details} />
        </div>
        <RestrauntInfo Details={Details}/>
      </div>
    </div>
  );
}
