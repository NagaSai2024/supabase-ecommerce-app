import { IoIosArrowDroprightCircle } from "react-icons/io";

type Item = {
    id: number;
    title: string;
    image_url: string;
    subtitle: string;
}

type ProductCategoryProps = {
    heading: string;
    items: Item[];
}

export default function CategorySection({ heading, items }: ProductCategoryProps) {
    return (
        <div className="bg-white p-4">

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{heading}</h2>
                <div>
                    <IoIosArrowDroprightCircle className="text-2xl text-blue-700 mr-2 cursor-pointer" />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="border rounded-md p-3 hover:shadow-sm transition">
                        <div className="h-28 flex items-center justify-center overflow-hidden">
                            <img
                                src={item.image_url}
                                alt={item.title}
                                className="max-h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <p className="mt-3 text-sm line-clamp-1">{item.title}</p>
                        <p className="text-green-600 font-semibold text-sm">{item.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}