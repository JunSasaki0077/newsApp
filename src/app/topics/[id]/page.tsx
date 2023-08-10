import { Articles } from "@/app/components/articles";


type Props = {
    id:string;
}


async function getPost(params: Props) {
  const API = process.env.NEWS_API;
  const topicRes = await fetch(
    `https://newsapi.org/v2/top-headlines?country=jp&pageSize=5&category=${params.id}&country=jp&apiKey=${API}`
  );
  const topicJson = await topicRes.json();
  const topicArticles = await topicJson.articles;

  return topicArticles;
}

async function Topic({ params }: {params: Props}) {
  const title = await getPost(params);
  return (
    <div>
      <Articles  articles={title} />
    </div>
  );
}

export default Topic;