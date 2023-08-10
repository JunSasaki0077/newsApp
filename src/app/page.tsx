import { Articles } from "./components/articles";

export default async function Home() {
  const API = process.env.NEWS_API;
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=5&apiKey=${API}`, { next: { revalidate: 60 * 10 } }
  );
  const json = await res.json();
  const articles = json?.articles;

  return <Articles articles={articles}  />;
}
