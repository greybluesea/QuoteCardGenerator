import Link from "next/link";
import QuoteCardButton from "./components/QuoteCardButton";

export default function Home() {
  return (
    <main className=" square-in-the-center z-[2]  drop-shadow-[5px_5px_5px_5px_rgba(222,224,228,0.9)]  ">
      <h2 className="large-text">
        Quote Card<span className="hidden sm:inline"></span> Generator
      </h2>
      <div
        className=" text-md sm:text-lg md:text-xl lg:text-2xl  text-center"
        style={{ marginTop: "min(5dvw, 5dvh)" }}
      >
        <p>Generate a quote card(image/png) for the day today</p>
        <p>
          quote text provided by{" "}
          <Link
            href="https://zenquotes.io/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            ZenQuotes
          </Link>
        </p>
      </div>
      <QuoteCardButton />
    </main>
  );
}
