import { getCategoryProducts } from "@/lib/getCategoryProducts";
import { useEffect, useState } from "react";
import CategorySection from "./CategorySection";

type ProductCategories = {
    id: number;
    title: string;
    image_url: string;
    subtitle: string;
}

export default function HomeCategories () {

    const [ shoes, setShoes] = useState<ProductCategories[]>([])
    const [ beauty, setBeauty] = useState<ProductCategories[]>([])
    const [ electronics, setElectronics] = useState<ProductCategories[]>([])

    useEffect(() => {
        getCategoryProducts("Shoes").then(setShoes)
        getCategoryProducts("Beauty").then(setBeauty)
        getCategoryProducts("Electronics").then(setElectronics)
    }, [])

    return(
        <section className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-3 lg:px-3">
            <CategorySection heading="Fashion's Top Deal" items={shoes}/>
            <CategorySection heading="Hair & Skincare Essentials" items={beauty}/>
            <CategorySection heading="Best Gadgets & Appliances" items={electronics}/>
        </section>
    )
}