import { FC } from "react";
import { css } from "../../../styled-system/css";

type Props = {
  articles: [
    article: {
      author: string;
      title: string;
      publishedAt: string;
      url: string;
      urlToImage: string;
    }
  ];
};

export const Articles: FC<Props> = ({ articles }) => {
  return (
    <section className={css({})}>
      {articles.map((article) => {
        const time = new Date(article.publishedAt).toLocaleString();
        return (
          <a href={article.url} key={article.title}>
            <article
              className={css({
                display: "flex",
                height: "40px",
              })}
            >
              <div>
                <h2>{article.title}</h2>
                <p>{time}</p>
              </div>
              {article.urlToImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={article.title}
                  src={article.urlToImage}
                  alt={`${article.title} image`}
                />
              )}
            </article>
          </a>
        );
      })}
    </section>
  );
};
