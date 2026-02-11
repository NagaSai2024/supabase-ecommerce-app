import type { CategoryProduct } from "@/types/product";
import { delayLoading } from "./delayLoading";
import { api } from "./api";

export const getCategoryProducts = async (category: string): Promise<CategoryProduct[]> => {

    await delayLoading()

    const response = await api.get<CategoryProduct[]>(`home/category/${category}`);

    return response.data;
}