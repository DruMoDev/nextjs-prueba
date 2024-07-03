import { Inter } from "next/font/google";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center container mx-auto pt-36 ${inter.className}`}>
      <h1 className="text-5xl font-bold">Welcome to this App</h1>
      <div className="flex mt-24 gap-20 ">
        <Link
          href="/login"
          className="py-3 bg-teal-500 font-bold  text-white text-3xl px-6 rounded hover:bg-teal-600 transition-all">
          Log in
        </Link>
        <Link
          href="/signup"
          className="py-3 bg-teal-500 font-bold  text-white text-3xl px-6 rounded hover:bg-teal-600 transition-all">
          Sign up
        </Link>
      </div>
    </main>
  );
}
