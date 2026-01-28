import { supabase } from "./supabase"

export const getTopDeals = async () => {
    const { data, error } = await supabase
        .from("products")
        .select("id, root_bs_rank, title, image_url, final_price")
        .order("root_bs_rank", { ascending: true })
        .limit(10)

    if (error) {
        console.log("Error:", error)
        return []
    }

    return data
}