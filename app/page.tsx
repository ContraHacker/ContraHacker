import Image from 'next/image';

export default function Home() {
  return (
    <main className = 'min-h-screen p-24 grid place-items-center text-center'>
      <Image src = '/logo.svg' width = { 400 } height = { 400 } alt = 'Temporary Logo' />
      <div>
        <h1 className = 'text-6xl font-bold mb-2'>ContraHacker</h1>
        <p className = 'text-xl'>This is the beginning of the website.</p>
      </div>
    </main>
  );
}
