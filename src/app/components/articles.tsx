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
    <section>
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          margin: "5",
        })}
      >
        <h1
          className={css({
            fontSize: "3xl",
            fontWeight: "bold",
          })}
        >
          News App
        </h1>
      </div>
      {articles.map((article) => {
        const time = new Date(article.publishedAt).toLocaleString();
        return (
          <a href={article.url} key={article.title}>
            <article
              className={css({
                display: "flex",
                flexDirection: "row-reverse",
                justifyContent: "start",
                padding: "12px",
                borderTop: "1px solid #f0f0f0",
              })}
            >
              <div
                className={css({
                  paddingLeft: "20px",
                })}
              >
                <h2>{article.title}</h2>
                <p>{time}</p>
              </div>
              {article.urlToImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className={css({
                    width: "80px",
                    height: "80px",
                  })}
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
