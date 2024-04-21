import { Description } from "../Components/Description"
import { Footer } from "../Components/Footer"
import { RestrauntSection } from "../Components/RestrauntSection"
import { RoomSection } from "../Components/RoomSection"
import { Slider } from "../Components/Slider"
export function Home(){
    
    return(
        <div>
        <Slider/>
        <Description/>
        <RestrauntSection/>
        <RoomSection/>
        <Footer/>
        </div>
    
    )
}