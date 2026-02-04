import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-xl">
      <Link href="/one" className="underline">
        One
      </Link>
      <Link href="/two" className="underline">
        Two
      </Link>
      <Link href="/three" className="underline">
        Three
      </Link>
    </div>
  );
}
