import Link from "next/link";

export default function Abc() {
  return (
    <div>
      <h1>abc 페이지에올</h1>
      <Link href="/abc/def">def로 이동</Link>
    </div>
  );
};