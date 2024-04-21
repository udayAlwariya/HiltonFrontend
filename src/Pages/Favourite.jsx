import { useRecoilState } from "recoil";
import { favouriteRestrauntsAtom } from "../atom";
import { FavouriteList } from "../Components/FavouirteList";
import img3 from "../assets/IMAGES/3.jpg";
import { useNavigate } from "react-router-dom";
export function Favorites() {
  const navigate = useNavigate();
  const [FavRestraunts, setFavRestraunts] = useRecoilState(
    favouriteRestrauntsAtom
  );

  return (
    <>
      {FavRestraunts.length == 0 ? (
        <div>
          <img
            src={img3}
            className="sm:w-[45vw] md:max-lg:w-[30vw] lg:w-[27vw] w-[80vw] mx-auto"
            alt=""
          />
          <div className="text-center">
            <button
              onClick={() => navigate("/services/restraunts")}
              className="border border-red-600 text-red-600 px-20 mt-5  py-3"
            >
              Continue Checking
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-3xl text-gray-700 mb-5 mt-5">
            MY FAVOURITES
          </h1>
          {FavRestraunts.map((value) => {
            return (
              <FavouriteList
                setFavRestraunts={setFavRestraunts}
                FavRestraunts={FavRestraunts}
                value={value}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
