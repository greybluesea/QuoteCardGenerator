import Image from "next/image";
import Modal from "./components/Modal";
import Link from "next/link";
import QuoteButton from "./components/QuoteButton";

export default function Home() {
  return (
    <main className=" square-in-the-center z-[2]  drop-shadow-[5px_5px_5px_5px_rgba(222,224,228,0.9)]  ">
      <h2 className="large-text">Daily Quote Card Generator</h2>
      <p
        className=" text-md sm:text-lg md:text-xl lg:text-2xl  text-center"
        style={{ marginTop: "min(5dvw, 5dvh)" }}
      >
        Looking for a splash of inspiration? Generate a quote card/image for
        today, with text provided by
        <Link
          href="https://zenquotes.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          ZenQuotes
        </Link>
        .
      </p>
      <QuoteButton />
    </main>
  );
}
