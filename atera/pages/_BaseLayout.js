import Head from 'next/head';

const BaseLayout = () => {
  return (
    <>
      <Head>
        <title>Atera</title>
        <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet"></link>
        <link href="/your-path-to-fontawesome/css/brands.css" rel="stylesheet"></link>
        <link href="/your-path-to-fontawesome/css/solid.css" rel="stylesheet"></link>
      </Head>
    </>
  )
}

export default BaseLayout;