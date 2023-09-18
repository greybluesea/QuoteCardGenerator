import Image from "next/image";
import Modal from "./components/Modal";
import Link from "next/link";
import QuoteButton from "./components/QuoteButton";

export default function Home() {
  return (
    <main
      className="
  fixed 
  top-[50%] 
  left-[50%]  
  translate-x-[-50%] 
  translate-y-[-50%] 

  bg-slate-800/40 
  backdrop-blur-[5px]
  rounded-lg 
  border 
  border-BGCOLOR
  drop-shadow-[5px_5px_5px_5px_rgba(222, 224, 228, 0.9)] 
   
  w-[63dvw] 
  h-[70dvh]
  md:h-[63dvh] 
  min-w-[320px]
  
  px-[7dvw]

  z-[2]
  flex flex-col items-center justify-center

 
"
    >
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
