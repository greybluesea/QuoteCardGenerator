import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quote Generator",
  description: "AWS( GraphQL API + Lambda/node.js + DynamoDB ) + Next.js",
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
          " w-[100dvw] h-[100dvh] p-24 bg-gradient-to-br from-BGCOLOR-SECONDARY to-BGCOLOR bg-[size:200%_160%] animate-weather backdrop-blur-[80px] "
        }
      >
        <div className="fixed left-[8dvw] top-[2.5dvh] w-[130px] aspect-square sm:w-[200px] md:w-[270px] lg:w-[320px] ">
          <Image
            src={"/img/cloud-and-thunder.png"}
            fill
            alt="cloud-and-thunder"
          />
        </div>

        {children}

        <div className="fixed right-[2.5dvw] bottom-[3.5dvh] w-[200px] aspect-[2/1] sm:w-[320px] md:w-[440px] lg:w-[520px] ">
          <Image src={"/img/cloud-and-sun.png"} fill alt="cloud-and-sun" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
