import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex-1 py-24">
      <div className="z-10 mx-auto max-w-3xl flex flex-col w-full px-4">
      <h1 className="text-4xl font-semibold tracking-tight">
          Hello, I&apos;m Öznur {""}
          <span className="animate-wiggle inline-block">👋</span>
        </h1>
        <p className="mt-5 text-lg">
          {`
          I'm a frontend developer...`}
        </p>
      </div>
    </main>
  )
}
