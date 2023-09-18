import Image from "next/image";
import Modal from "./components/Modal";
import Link from "next/link";

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
  h-[63dvh] 
  min-w-[320px]

  py-[7dvh] 
  px-[7dvw]
  z-[2]
  flex flex-col items-center 
 
"
    >
      <h2 className="mt-[7vh] large-text">Inspirational Quotes Generator</h2>
      <p className=" mt-[5vh] text-md sm:text-lg md:text-xl lg:text-2xl  text-center">
        {" "}
        Looking for a splash of inspiration? Generate a quote card/image for
        today, with text provided by{" "}
        <Link
          href="https://zenquotes.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline" }}
        >
          ZenQuotes API
        </Link>
        .
      </p>
      <button className="mt-[7vh] large-text bg-orange-500/90 hover:bg-BRAND hover:text-TEXT-HIGHLIGHT px-[3dvw] py-[3dvh] rounded-lg transition duration-200 drop-shadow-[0_8px_8px_rgba(222, 224, 228, 0.9)]">
        A Quote for Today
      </button>
    </main>
  );
}
