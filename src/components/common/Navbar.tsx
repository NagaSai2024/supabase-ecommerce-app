import { Heart, MoreVertical, Package, Search, ShoppingCart, User } from "lucide-react";
import logo from "../../assets/logo.png";
import { VscAccount } from "react-icons/vsc";
import { LuHeadset } from "react-icons/lu";
import { BsShopWindow } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import { IoIosTrendingUp } from "react-icons/io"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const [moreHover, setMoreHover] = useState(false)
    const [loginHover, setLoginHover] = useState(false)

    const navigate = useNavigate()
    return (
        <nav className="w-full border-b bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

                <img
                    src={logo}
                    alt="Ominbazaar"
                    className="h-10 w-auto cursor-pointer"
                    onClick={() => navigate("/")}
                />

                <div className="flex-1 max-w-xl relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search for Products, Brand and More"
                        className="pl-9"
                    />
                </div>


                <div className="flex items-center gap-2">

                    <DropdownMenu open={loginHover} onOpenChange={setLoginHover}>
                        <div
                            onMouseEnter={() => setLoginHover(true)}
                            onMouseLeave={() => setLoginHover(false)}
                        >
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="flex items-center gap-2" onClick={() => navigate("/login")}>
                                    <VscAccount />
                                    <span className="hidden md:inline">Login</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <div className="flex items-center justify-between gap-6 px-2 py-1.5">
                                    <DropdownMenuLabel className="p-0 text-sm w-auto">New Customer?</DropdownMenuLabel>
                                    <Button
                                        variant="link"
                                        className="h-auto p-0 text-sm font-medium text-blue-500"
                                        onClick={() => navigate("/register")}
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <User className="h-4 w-4" />
                                        My Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Package className="h-4 w-4" />
                                        Orders
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Heart className="h-4 w-4" />
                                        WishList
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </div>
                    </DropdownMenu>

                    <Button variant="ghost" className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="hidden md:inline">Cart</span>
                    </Button>

                    <Button>
                        <BsShopWindow />
                        <span className="hidden md:inline">Become a seller</span>
                    </Button>

                    <div className="hidden md:block">
                        <DropdownMenu open={moreHover} onOpenChange={setMoreHover}>
                            <div
                                onMouseEnter={() => setMoreHover(true)}
                                onMouseLeave={() => setMoreHover(false)}
                            >
                                <DropdownMenuTrigger>
                                    <Button variant="ghost" size="icon">
                                        <MoreVertical className="h-5 w-5" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <HiOutlineBell />
                                        Notification Preferences
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <LuHeadset />
                                        24x7 Customer Care
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <IoIosTrendingUp />
                                        Advertise
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </div>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    )
}