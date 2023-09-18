import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

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
          " w-[100dvw] h-[100dvh] p-24 text-TEXT bg-gradient-to-br from-slate-800 to-sky-600 bg-[size:160%_120%] animate-weather backdrop-blur-[80px] "
        }
      >
        <div className="fixed left-6 top-0 w-[130px] h-[130px] sm:left-12 sm:top-0 sm:w-[200px] sm:h-[200px] md:left-14 md:top-0 md:w-[270px] md:h-[270px] lg:left-16 lg:top-0 lg:w-[320px] lg:h-[320px] m-4 mx-2 ">
          <Image
            src={"/img/cloud-and-thunder.png"}
            fill
            alt="cloud-and-thunder"
          />
        </div>

        {children}
        <div className="fixed right-0 bottom-3 w-[200px] h-[100px] sm:right-0 sm:bottom-4 sm:w-[320px] sm:h-[160px] md:right-0 md:bottom-5 md:w-[440px] md:h-[220px] lg:right-0 lg:bottom-5 lg:w-[520px] lg:h-[260px] my-4 ">
          <Image src={"/img/cloudy-weather.png"} fill alt="cloud-and-thunder" />
        </div>
      </body>
    </html>
  );
}
