import DoubleNavbar from "@/components/DoubleNavbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export default function RegisterEmailPage() {

    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-100 overflow-x-auto">
            <DoubleNavbar />

            <div className="flex justify-center items-center py-10 min-w-[900px]">
                <div className="bg-white shadow-md flex w-[800px]">

                    <div className="flex-[1] bg-blue-600 text-white p-8">
                        <h2 className="text-3xl font-semibold mb-4">Looks like you're new here!</h2>
                        <p className="text-gray-300 mb-90">Sign up with your email address to get started</p>
                    </div>

                    <div className="flex-[1.7] p-8 flex flex-col gap-5">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="border-b outline-none py-2"
                        />
                        <p className="text-xs text-gray-500">
                            By countinuing, you agree to Omnibazaar's 
                            <span className="text-blue-600 cursor-pointer"> Terms of Use</span> and 
                            <span className="text-blue-600 cursor-pointer"> Privacy Policy.</span>
                        </p>
                        <button
                            className="bg-orange-500 text-white py-2 rounded"
                            onClick={() => navigate("/register/otp")}
                        >
                            Request OTP
                        </button>
                        <button
                            className="bg-white text-blue-600 py-2 rounded shadow-md"
                            onClick={() => navigate("/login")}
                        >
                            Existing User? Log in
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}