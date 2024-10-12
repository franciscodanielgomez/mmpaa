import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Faq from "./faq";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Faq settings={settings} authors={authors} />;
}

// export const revalidate = 60;
