import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Slider = ({ sliderList }) => {
    return (
        <Carousel>
            <CarouselContent>
                {sliderList.map((slider, index) => (
                    <CarouselItem>
                        <Image
                            src={
                                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                                slider.attributes?.image?.data[0]?.attributes.url
                            }
                            url={
                                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                                slider.attributes?.image.data?.attributes.url
                            }
                            unoptimized={true}
                            width={1000}
                            height={400}
                            alt="Slider"
                            className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default Slider;
