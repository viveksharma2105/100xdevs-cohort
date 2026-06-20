import Link from "next/link"
export default function Home() {
  return (
    <div className="flex justify-center h-screen w-screen items-center text-4xl">
      Todo  Application

      {/* Link tag  is similar to   a tag in  html */}
      <Link href='/signin' >Sign in to Todo app</Link>
      <Link href='/signup' >Sign up to Todo app</Link>
    </div>
  )
}