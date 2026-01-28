import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopDeals from "@/components/TopDeals";

export default function HomePage () {
    return(
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <TopDeals />
            <Footer />
        </div>
    )
}