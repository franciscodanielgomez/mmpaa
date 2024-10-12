import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Records from "./records";

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Records settings={settings} authors={authors} />;
}

// export const revalidate = 60;
