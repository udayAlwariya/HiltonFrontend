import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../assets/IMAGES/img1.jpg"
import img2 from "../assets/IMAGES/img2.jpg"
import img3 from "../assets/IMAGES/img3.jpg"
import img4 from "../assets/IMAGES/img4.jpg"
export function Slider(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      }
      
    return(
        <div className="mt-3">
            <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile","tablet","desktop"]} showDots={false} infinite={true} transitionDuration={500} autoPlaySpeed={3000} autoPlay={true}>
                
                <img className="w-11/12 mx-auto" src={img1} alt="NO IMAGE FOUND" />
                <img className="w-11/12 mx-auto" src={img2} alt="NO IMAGE FOUND" />
                <img className="w-11/12 mx-auto" src={img3} alt="NO IMAGE FOUND" />
                <img className="w-11/12 mx-auto" src={img4} alt="NO IMAGE FOUND" />

            </Carousel>
        </div>
    )
}
