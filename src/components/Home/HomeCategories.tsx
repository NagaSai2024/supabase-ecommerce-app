import { getCategoryProducts } from "@/lib/getCategoryProducts";
import CategorySection from "./CategorySection";
import { useQuery } from "@tanstack/react-query";


export default function HomeCategories () {

    const shoesQuery = useQuery({
        queryKey: ["catergoryProducts", "Shoes"],
        queryFn: () => getCategoryProducts("Shoes")
    });

    const beautyQuery = useQuery({
        queryKey: ["categoryProducts", "Beauty"],
        queryFn: () => getCategoryProducts("Beauty")
    });

    const electronicsQuery = useQuery({
        queryKey: ["categoryProducts", "Electronics"],
        queryFn: () => getCategoryProducts("Electronics")
    });

    return(
        <section className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:px-3">
            <CategorySection heading="Fashion's Top Deal" items={shoesQuery.data ?? []}/>
            <CategorySection heading="Hair & Skincare Essentials" items={beautyQuery.data ?? []}/>
            <CategorySection heading="Best Gadgets & Appliances" items={electronicsQuery.data ?? []}/>
        </section>
    )
}