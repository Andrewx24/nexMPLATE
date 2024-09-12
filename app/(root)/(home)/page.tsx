import Link from 'next/link';
import ButtonTheme from '@/components/ButtonTheme';


export default async function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h1>Next.js here we come</h1>
      <Link href="/apiexample">API EXAMPLE</Link>
      <Link href='/form'> Forms DB</Link>

      <main className="flex items-center justify-center h-screen flex-col">
        <h2 className="text-4xl sm:text-6xl md:text-9xl text-center text-gray-800">LIGHT MODE</h2>
        <h2 className="text-4xl sm:text-6xl md:text-9xl text-center text-white">DARK MODE</h2>
        <ButtonTheme />
        
      </main>
    </div>
  );
}
