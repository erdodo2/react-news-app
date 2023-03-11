import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../css/carousel.css'
export default function Slider({news}) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return(
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all 1"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                news.map((item,index) => {
                    return(
                        <div className="h-96 carousel-item" style={{ backgroundImage:`url('${item.image_url}')` }}>
                            <div className="content">
                                <img src={item.image_url} />
                                <div className="flex flex-col">
                                    <h1 className="text-2xl ellipsis-2 ">{item.title}</h1>
                                    <p className="ellipsis-4">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    )
}




