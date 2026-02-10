import HomeCategories from "@/components/Home/HomeCategories";
import TopDeals from "@/components/Home/TopDeals";

export default function HomePage () {
    return(
        <div className="min-h-screen bg-gray-100">
            <TopDeals />
            <HomeCategories />
        </div>
    )
}