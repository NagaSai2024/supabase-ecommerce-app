import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import { useState } from 'react'
import { Button } from '../ui/button'

export default function DoubleNavbar() {

    const [moreHover, setMoreHover] = useState(false)
    const [loginHover, setLoginHover] = useState(false)

    const nagivate = useNavigate()
    return (
        <div className="w-full">
            {/* Top Navbar */}
            <div className="bg-purple-200">
                <div className="max-w-7xl mx-auto px-20 py-3 flex items-center gap-4">

                    <img
                        src={logo}
                        alt="Omnibazaar"
                        className="h-8 cursor-pointer"
                        onClick={() => nagivate('/')}
                    />

                    <div className="flex-1 max-w-xl relative">
                        <Input
                            placeholder="Search for products, brands and more"
                            className="pl-3 bg-white rounded-none"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer hover:blue-300"/>
                    </div>

                    <div>
                        <DropdownMenu>
                            <div>
                                <DropdownMenuTrigger asChild>
                                    <Button className="text-purple-300 bg-white rounded-none hover:bg-gray-100">Login</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <div>
                                        <DropdownMenuLabel>New Customer?</DropdownMenuLabel>
                                    </div>
                                </DropdownMenuContent>
                            </div>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            {/* Bottom Navbar */}
            <div className="bg-white">
                <p>TV</p>
            </div>
        </div>
    )
}