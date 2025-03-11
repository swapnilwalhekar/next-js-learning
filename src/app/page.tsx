import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h3>Welcome Home</h3>
      <Link href='/about'>About</Link>
    </div>
  );
}
