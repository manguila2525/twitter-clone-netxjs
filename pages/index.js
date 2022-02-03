import Head from 'next/head'
import Link from 'next/link';
import StyleGlobal from '../components/StyleGlobal';
export default function Home() {
  return (
    <>

      <Head>
        <title>First app Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyleGlobal>

        <h1>This is page Home</h1>
        <Link href="dashboard">
          <a>Este es el dasshboard</a>
        </Link>

      </StyleGlobal>

    </>


  )
}
