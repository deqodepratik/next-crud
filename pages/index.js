import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import TodoItem from "./TodoItem";

export default function Home({ data }) {
  const [todo, setTodo] = useState([...data.todo]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next todo App</title>
        <meta name="description" content="Created by Pratik Sah" />
        <meta name="keywords" content="Todo, Todo App" />
        <meta name="author" content="Pratik Sah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {todo.length > 1
          ? todo.map((item) => <TodoItem key={item.id} {...item} />)
          : "No data in todo"}
      </main>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3300/todos`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
