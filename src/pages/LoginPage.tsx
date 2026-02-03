import { useNavigate } from "react-router-dom";
import login_img from "../assets/login-bg.png"

export default function LoginPage() {

    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-100 overflow-x-auto">

            <div className="flex justify-center items-center py-10 min-w-[900px]">
                <div className="bg-white shadow-md flex w-[800px]">

                    <div className="flex-[1] bg-blue-600 text-white p-8">
                        <h2 className="text-3xl font-semibold mb-4">Login</h2>
                        <p className="text-gray-300">Get access to your orders, Wishlist and Recommendations</p>

                        <img
                            src={login_img}
                            alt="login_image"
                            className="mt-50"
                        />
                    </div>

                    <div className="flex-[1.7] p-8 flex flex-col gap-5">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="border-b outline-none py-2"
                        />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="border-b outline-none py-2"
                        />
                        <p className="text-xs text-gray-500">
                            By countinuing, you agree to Omnibazaar's
                            <span className="text-blue-600 cursor-pointer"> Terms of Use</span> and
                            <span className="text-blue-600 cursor-pointer"> Privacy Policy.</span>
                        </p>
                        <button className="bg-orange-500 text-white py-2 rounded" onClick={() => navigate("/")}>Login</button>
                        <p className="text-sm text-center mt-60">
                            New to Omnibazaar?{" "}
                            <span
                                className="text-blue-600 cursor-pointer hover:underline"
                                onClick={() => navigate("/register")}
                            >
                                Create an account
                            </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}