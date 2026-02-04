import Link from "next/link";
export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 text-2xl font-bold">
      <Link href="/one" className="underline">
        Page One
      </Link>
      <Link href="/three" className="underline">
        Page One
      </Link>
      <Link href="/three" className="underline">
        Page Three
      </Link>
    </div>
  );
}
