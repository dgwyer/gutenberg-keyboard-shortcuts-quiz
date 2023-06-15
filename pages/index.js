import Head from 'next/head'
import { Inter } from '@next/font/google'
import Quiz from './components/Quiz';

export default function Home() {
return (
    <div>
      <Head>
        <title>Gutenberg Shortcuts Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Quiz />
      </main>
    </div>
  );
}
