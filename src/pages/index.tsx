import React from 'react';
import Head from 'next/head';

import LabEducacionalLogo from '../assets/labeducacional.svg';
import NavMenu from '../components/NavMenu/index';

const Home : React.FC = () => {
  return (
    <div>
      <Head>
        <title>Lab Educacional - </title>

      </Head>

      <main >
        <NavMenu/>
        <LabEducacionalLogo/>
        <h1> Hello World</h1>

      </main>

      <footer>
      </footer>
    </div>
  )
}


export default Home
