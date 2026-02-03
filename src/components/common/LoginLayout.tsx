import { Outlet } from "react-router-dom";
import DoubleNavbar from "./DoubleNavbar";
import Footer from "./Footer";

export default function LoginLayout() {
    return (
        <main className="min-h-screen bg-gray-100">
            <DoubleNavbar />
            <Outlet />
            <Footer />
        </main>
    )
}