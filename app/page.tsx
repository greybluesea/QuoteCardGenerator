import Image from "next/image";
import Modal from "./components/Modal";
import Link from "next/link";
import QuoteCardButton from "./components/QuoteCardButton";

export default function Home() {
  return (
    <main className=" square-in-the-center z-[2]  drop-shadow-[5px_5px_5px_5px_rgba(222,224,228,0.9)]  ">
      <h2 className="large-text">
        Quote Card<span className="hidden sm:inline"></span> Generator
      </h2>
      <div className=" medium-text" style={{ marginTop: "min(5dvw, 5dvh)" }}>
        <p>
          Looking for a splash of inspiration? Generate a quote card (image/png)
          for the day
          {/*  , with quote text
          provided by{" "}
          <Link
            href="https://zenquotes.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            ZenQuotes
          </Link> */}
          .
        </p>
        <p></p>
      </div>
      <QuoteCardButton />
    </main>
  );
}
