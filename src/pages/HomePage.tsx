import Footer from "@/components/Footer";
import HomeCategories from "@/components/HomeCategories";
import Navbar from "@/components/Navbar";
import TopDeals from "@/components/TopDeals";

export default function HomePage () {
    return(
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <TopDeals />
            <HomeCategories />
            <Footer />
        </div>
    )
}