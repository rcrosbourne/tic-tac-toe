import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tic Tac Toe - Landing</title>
        <meta
          name="description"
          content="Landing page for Tic Tac Toe Challenge"
        />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <main>
        <h1>Home page</h1>
      </main>

      <footer>author: Rainaldo F Crosbourne</footer>
    </div>
  );
};

export default Home;
