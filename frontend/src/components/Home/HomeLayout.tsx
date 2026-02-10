import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function HomeLayout() {
    return (
        <main className="min-h-screen bg-gray-100">
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}