import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function DoubleNavbar () {

    const nagivate = useNavigate()
    return (
        <div className="w-full bg-white shadow-sm px-6 py-3 flex items-center">
            <img 
            src={logo}
            alt="Omnibazaar"
            className="h-8 cursor-pointer"
            onClick={() => nagivate('/')}
            />
        </div>
    )
}