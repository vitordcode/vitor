import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vitor de Paula</title>
        <meta name="description" content="Meu portfolio pessoal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-blue-700 min-h-screen'>
        <h1>Ola mundo</h1>
      </main>
    </>
  )
}
