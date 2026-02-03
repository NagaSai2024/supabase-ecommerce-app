import { CircleQuestionMark, Facebook, Gift, Instagram, Twitter, Youtube } from "lucide-react";
import { PiShootingStarBold } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import payments from "../../assets/payments.png"

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-10 mt-3 hidden sm:block">
            <div className="w-full max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 relative gap-y-8">

                    <div className="order-1 md:col-span-1 lg:pl-8">
                        <h3 className="text-gray-500 font-semibold mb-1">ABOUT</h3>
                        <ul className="space-y-1 text-xs">
                            <li className="font-semibold hover:underline cursor-pointer">Contact Us</li>
                            <li className="font-semibold hover:underline cursor-pointer">About Us</li>
                            <li className="font-semibold hover:underline cursor-pointer">Careers</li>
                            <li className="font-semibold hover:underline cursor-pointer">Press</li>
                        </ul>
                    </div>
                    <div className="order-2 md:col-span-1 lg:pl-8">
                        <h3 className="text-gray-500 font-semibold mb-1">GROUP COMPANIES</h3>
                        <ul className="space-y-1 text-xs">
                            <li className="font-semibold hover:underline cursor-pointer">Mytra</li>
                            <li className="font-semibold hover:underline cursor-pointer">Cleartip</li>
                            <li className="font-semibold hover:underline cursor-pointer">Shopsy</li>
                        </ul>
                    </div>
                    <div className="order-3 md:col-span-1 lg:pl-8">
                        <h3 className="text-gray-500 font-semibold mb-1">HELP</h3>
                        <ul className="space-y-1 text-xs">
                            <li className="font-semibold hover:underline cursor-pointer">Payments</li>
                            <li className="font-semibold hover:underline cursor-pointer">Shipping</li>
                            <li className="font-semibold hover:underline cursor-pointer">Cancellations & Returns</li>
                            <li className="font-semibold hover:underline cursor-pointer">FAQ</li>
                        </ul>
                    </div>
                    <div className="order-4 md:col-span-1 lg:pl-8">
                        <h3 className="text-gray-500 font-semibold mb-1">CONSUMER POLICY</h3>
                        <ul className="space-y-1 text-xs">
                            <li className="font-semibold hover:underline cursor-pointer">Cancellations & Returns</li>
                            <li className="font-semibold hover:underline cursor-pointer">Terms Of Use</li>
                            <li className="font-semibold hover:underline cursor-pointer">Security</li>
                            <li className="font-semibold hover:underline cursor-pointer">Privacy</li>
                            <li className="font-semibold hover:underline cursor-pointer">Sitemap</li>
                            <li className="font-semibold hover:underline cursor-pointer">Grievance Redressal</li>
                            <li className="font-semibold hover:underline cursor-pointer">EPR Compliance</li>
                            <li className="font-semibold hover:underline cursor-pointer">FSSAI Food Saftey Connect App</li>
                        </ul>
                    </div>

                    <div className="order-5 md:col-span-1 lg:pl-8">
                        <h3 className="text-gray-500 font-semibold mb-3">Mail Us:</h3>
                        <p className="leading-relaxed text-sn">
                            Building Number: 7, Rabindra Sarani, Burrabazar, Kolkata, West Bengal - 700001
                        </p>

                        <div className="mt-4">
                            <p className="text-gray-500 mb-2 text-sm">Social:</p>
                            <div className="flex gap-4">
                                <Facebook size={18} className="cursor-pointer" />
                                <Twitter size={18} className="cursor-pointer" />
                                <Youtube size={18} className="cursor-pointer" />
                                <Instagram size={18} className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="order-6 md:col-span-1 lg:pl-8">
                        <h3 className="text-gray-500 font-semibold mb-3">Registered Office Address:</h3>
                        <p className="leading-relaxed text-sm">
                            Building Number: 7, Rabindra Sarani, Burrabazar, Kolkata, West Bengal - 700001 <br />
                            Phone: <span className="text-blue-700 hover:underline cursor-pointer">+91 75 3521 5243</span>
                        </p>
                    </div>

                    <div className="hidden lg:block absolute left-1/2 top-0 h-full border-l border-gray-700"></div>

                </div>

                <div className="border-t border-gray-700  my-8"></div>

                {/* { Bottom of the Footer} */}
                <div className="flex items-center justify-between gap-6 text-sm pb-6 overflow-hidden whitespace-nowrap">

                    <span className="flex items-center gap-2 hover:underline cursor-pointer shrink-0">
                        <BsShopWindow className="text-yellow-400 w-3 h-3 shrink-0" />
                        <span className="hidden lg:inline">Become a Seller</span>
                    </span>
                    <span className="flex items-center gap-2 hover:underline cursor-pointer shrink-0">
                        <PiShootingStarBold className="text-yellow-500 w-3 h-3 shrink-0" />
                        <span className="hidden lg:inline">Advertise</span>
                    </span>
                    <span className="flex items-center gap-2 hover:underline cursor-pointer shrink-0">
                        <Gift className="text-yellow-500 w-3 h-3 shrink-0" />
                        <span className="hidden lg:inline">Gift Cards</span>
                    </span>
                    <span className="flex items-center gap-2 hover:underline cursor-pointer shrink-0">
                        <CircleQuestionMark className="text-yellow-400 w-3 h-3 shrink-0" />
                        <span className="hidden lg:inline">Help Center</span>
                    </span>

                    <span className="shrink-0">© 2023–2026 Omnibazaar.com</span>

                    <img
                        src={payments}
                        alt="Payments methods"
                        className="h-6 md:h-7 object-contain shrink-0"
                    />
                </div>
            </div>
        </footer>
    )
}