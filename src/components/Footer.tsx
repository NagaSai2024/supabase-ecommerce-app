import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-10 mt-3">
            <div className="w-full max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 relative">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pr-8">
                        <div>
                            <h3 className="text-gray-500 font-semibold mb-3">ABOUT</h3>
                            <ul className="space-y-2">
                                <li>Contact Us</li>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Press</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-500 font-semibold mb-3">GROUP COMPANIES</h3>
                            <ul className="space-y-2">
                                <li>Mytra</li>
                                <li>Cleartip</li>
                                <li>Shopsy</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-500 font-semibold mb-3">HELP</h3>
                            <ul className="space-y-2">
                                <li>Payments</li>
                                <li>Shipping</li>
                                <li>Cancellations & Returns</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-gray-500 font-semibold mb-3">CONSUMER POLICY</h3>
                            <ul className="space-y-2">
                                <li>Cancellations & Returns</li>
                                <li>Terms Of Use</li>
                                <li>Security</li>
                                <li>Privacy</li>
                                <li>Sitemap</li>
                                <li>Grievance Redressal</li>
                                <li>EPR Compliance</li>
                                <li>FSSAI Food Saftey Connect App</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute left-1/2 top-0 h-full border-l border-gray-700"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-8 mt-8 lg:mt-0">
                        <div>
                            <h3 className="text-gray-500 font-semibold mb-3">Mail Us:</h3>
                            <p className="leading-relaxed">
                                Building Number: 7, Rabindra Sarani, Burrabazar, Kolkata, West Bengal - 700001
                            </p>

                            <div className="mt-4">
                                <p className="text-gray-500 mb-2">Social:</p>
                                <div className="flex gap-4">
                                    <Facebook size={18} />
                                    <Twitter size={18} />
                                    <Youtube size={18} />
                                    <Instagram size={18} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-gray-500 font-semibold mb-3">GROUP COMPANIES</h3>
                            <p className="leading-relaxed">
                                Building Number: 7, Rabindra Sarani, Burrabazar, Kolkata, West Bengal - 700001 <br />
                                Phone: +91 75 3521 5243
                            </p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700  my-8"></div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm pb-6">
                    <div className="flex gap-6 flex-wrap justify-center">
                        <span>Become a Seller</span>
                        <span>Advertise</span>
                        <span>Gift Cards</span>
                        <span>Help Center</span>
                    </div>

                    <div>© 2023–2026 Omnibazaar.com</div>
                </div>
            </div>
        </footer>
    )
}