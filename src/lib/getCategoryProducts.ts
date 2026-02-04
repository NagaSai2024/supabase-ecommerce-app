import type { CategoryProduct } from "@/types/product";
import { supabase } from "./supabase";

export const getCategoryProducts = async (category: string): Promise<CategoryProduct[]> => {
    const { data, error } = await supabase
        .from("products")
        .select("id, title, image_url, root_bs_rank, discount_percent")
        .filter("categories", "cs", `{${category}}`)
        .limit(4)

    if(error) {
        console.log("Error:", error);
        return []
    }

    return data.map((item) => {
        let subtitle = "Special Offer"

        if(item.discount_percent != null && item.discount_percent >= 30){
            subtitle = "Min. 30% Off"
        }
        else if(item.root_bs_rank != null && item.root_bs_rank <= 300){
            subtitle = "Top Picks"
        }

        return {
            id: item.id,
            title: item.title,
            image_url: item.image_url,
            subtitle,
        }
    })
}