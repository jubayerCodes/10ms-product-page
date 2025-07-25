import { IResponse } from "@/types/types";

export async function getProductData(lang = 'en'): Promise<IResponse> {
    const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
        headers: {
            'X-TENMS-SOURCE-PLATFORM': 'web',
            'Accept': 'application/json'
        },
        next: { revalidate: 60 }
    });
    if (!res.ok) throw new Error('Failed to fetch product data');
    return res.json();
}