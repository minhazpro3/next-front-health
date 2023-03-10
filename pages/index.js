import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "./../components/share/Navigation";
import Home_main from "@/components/content_layout/Home/Home_main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amaranth&family=Dancing+Script:wght@600&family=Darker+Grotesque&family=Great+Vibes&family=IBM+Plex+Sans:wght@500&family=Indie+Flower&family=Poppins&family=Roboto&family=Sacramento&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Navigation />
        <div className="mb-2 bg-[#fcf6ff]">
          <Home_main   />
        </div>
      </main>
    </>
  );
}
