import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Members from "./members";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Members settings={settings} authors={authors} />;
}

// export const revalidate = 60;
