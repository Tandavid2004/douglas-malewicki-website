import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="light-mode-background bg-[var(--bg)] min-h-screen">
      <header>
        <div className="">
          <div >

          </div>
          <div>
            <nav className="nav-bar h-[35px] sm:h-20 md:h-[125px]">
              yes
            </nav>
          </div>
          <div>

          </div>

        </div>
      </header>
      <main>
        

      </main>
      <footer>

      </footer>
    </div>
  );
}
