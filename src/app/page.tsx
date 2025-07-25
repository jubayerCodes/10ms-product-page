import Hero from "@/components/Hero/Hero";
import { getProductData } from "@/lib/api";
import { Metadata } from "next";

type Props = {
  searchParams: { lang?: string }
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const lang = searchParams?.lang || 'en';
  const { data } = await getProductData(lang);

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords?.join(', '),
  };
}

export default async function HomePage({ searchParams }: Props) {
  const lang = searchParams?.lang || 'en';
  const { data } = await getProductData(lang);
  return (
    <div>
      <Hero title={data.title} description={data.description} ratings={82.6} media={data.media} />
      <main>
        {/* <Instructors sections={data.sections} /> */}
        {/* Add other sections: Features, About, Checklist etc */}
      </main>
    </div>
  );
}