import Card from "@/components/Card";
import Styles from "@/styles/pages/home.module.scss";
import type { ContentData } from "@/types/ContentData";

async function getContent(): Promise<ContentData> {
  // Nextjs caches results plus the api caches.
  const res = await fetch(
    `https://api.adviceslip.com/advice/${Math.floor(Math.random() * 200)}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const content = await getContent();

  return (
    <main className={Styles.root}>
      <Card data={content} />
    </main>
  );
}
