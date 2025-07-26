
import { getProductData } from "@/lib/api";
import Home from "@/pages/Home/Home";
import { Metadata } from "next";

interface PageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchParams: any;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {

  const { lang = 'en' } = await searchParams
  const { data } = await getProductData(lang);

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords?.join(', '),
  };
}

export default async function HomePage({ searchParams }: PageProps) {

  const { lang = 'en' } = await searchParams

  return (
    <Home lang={lang} />
  );
}