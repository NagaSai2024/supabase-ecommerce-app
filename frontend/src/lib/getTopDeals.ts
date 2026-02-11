import type { TopDealProduct } from "@/types/product"
import { delayLoading } from "./delayLoading"
import { api } from "./api"

export const getTopDeals = async (): Promise<TopDealProduct[]> => {
    await delayLoading()

    const response =  await api.get<TopDealProduct[]>("home/top-deals");

    return response.data;
}