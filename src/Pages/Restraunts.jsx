import { Link } from "react-router-dom"
import { RestrauntList } from "../Components/RestrauntList"
import { restaurants } from "../Util/restrauntData"
export function Restraunts(){
    return(
        <div className="p-3">
            <h1 className="text-2xl sm:ml-8 ml-2 p-2 font-semibold border bg-gray-300 border-black w-fit">BEST RESTRAUNTS🔥</h1>
            {restaurants.map((value,index)=>{
                return <RestrauntList key={index} id={value.id} value={value}/>
            })}    
        </div>
    )
}