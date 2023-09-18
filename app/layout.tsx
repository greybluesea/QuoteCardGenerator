import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "AWS(Lambda+DynamoDB) + GraphQL + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " w-[100dvw] h-[100dvh] p-24 bg-gradient-to-br from-slate-800 to-sky-700 bg-[size:200%_160%] animate-weather backdrop-blur-[80px] "
        }
      >
        <div className="fixed left-[0.5dvw] top-0 w-[130px] aspect-square sm:left-12 sm:w-[200px]  md:left-14 md:w-[270px] lg:left-16 lg:w-[320px] ">
          <Image
            src={"/img/cloud-and-thunder.png"}
            fill
            alt="cloud-and-thunder"
          />
        </div>

        {children}

        <div className="fixed right-0 bottom-5 w-[200px] aspect-[2/1] sm:w-[320px] md:w-[440px] lg:w-[520px] my-4 ">
          <Image src={"/img/cloudy-weather.png"} fill alt="cloud-and-thunder" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
