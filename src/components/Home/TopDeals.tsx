import { getTopDeals } from "@/lib/getTopDeals";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import type { TopDealProduct } from "@/types/product";


export default function TopDeals() {

    const { data: topProductsQuery = [], isLoading } = useQuery<TopDealProduct[]>({
        queryKey: ["topDeals"],
        queryFn: getTopDeals,
    });

    return (
        <section className="w-full mt-3 lg:px-3">
            <div className="bg-white border border-gray-200 p-4">
                <h2 className="text-xl font-semibold mb-4">Top Deals</h2>

                <div className="relative">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent className="-ml-0">
                            {isLoading ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <CarouselItem key={i} className="pl-0 basis-[70%] sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                                        <Card className="p-4 flex flex-col items-center justify-between h-full">
                                            <Skeleton className="w-full h-60" />
                                        </Card>
                                    </CarouselItem>
                                ))
                            ) : topProductsQuery?.map((item) => (
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
                                        <p className="text-base font-semibold text-center leading-tight -mt-5">
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