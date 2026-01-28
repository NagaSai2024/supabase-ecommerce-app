import { getTopDeals } from "@/lib/getTopDeals";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card } from "./ui/card";

type Product = {
    id: number;
    root_bs_rank: number;
    title: string;
    image_url: string;
    final_price: number;
}

export default function TopDeals() {

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getTopDeals().then(setProducts)
    }, []);

    return (
        <section className="w-full mt-3">
            <div className="bg-white border border-gray-200 p-4">
                <h2 className="text-xl font-semibold mb-4">Top Deals</h2>

                <div className="relative">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent className="-ml-0">
                            {products.map((item) => (
                                <CarouselItem
                                    key={item.id}
                                    className="pl-0 basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                                >
                                    <Card className="p-4 flex flex-col items-center justify-between h-full hover:shadow-md transition">

                                        <div className="w-full h-40 flex items-center justify-center overflow-hidden">
                                            <img
                                                src={item.image_url}
                                                alt="product"
                                                className="max-h-full object-contain transition-transfrom duration-300 hover:scale-105"
                                            />
                                        </div>

                                        <p className="mt-2 text-sm font-medium text-gray-600 line-clamp-1 text-center leading-tight">
                                            {item.title}
                                        </p>
                                        <p className="text-base font-semibold text-center leading tight -mt-5">
                                            From ${item.final_price}
                                        </p>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="left-0" />
                        <CarouselNext className="right-0" />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}