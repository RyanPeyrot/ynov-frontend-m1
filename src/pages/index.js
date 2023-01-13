import TitlePage from "../components/TitlePage";
import Link from "next/link";
export default function Home() {
  return (
      <main>
          <TitlePage title="Homepage"/>
          <Link href="/register">Register !</Link>
          <Link href="/login">Login !</Link>
      </main>
  )
}
