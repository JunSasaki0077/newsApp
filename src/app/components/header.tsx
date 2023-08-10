import Link from "next/link";
import { FC } from "react";
import { css } from "../../../styled-system/css";

const TOPICS = [
  {
    path: "/",
    title: "Top stories",
  },
  {
    path: "/topics/business",
    title: "Business",
  },
  {
    path: "/topics/technology",
    title: "Techonology",
  },
  {
    path: "/topics/entertainment",
    title: "Entertainment",
  },
  {
    path: "/topics/sports",
    title: "Sports",
  },
  {
    path: "/topics/science",
    title: "Science",
  },
  {
    path: "/topics/general",
    title: "general",
  },
];

export const Header: FC = () => {
  return (
    <section className={css({
      height:"56px",
      backgroundColor: "#93C5FD",
    })}>
      <ul className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        height: "100%",
      })}>
        {TOPICS.map((topic, index) => (
          <li key={index}>
            <Link href={`${topic.path}`}>
              <span>{topic.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};