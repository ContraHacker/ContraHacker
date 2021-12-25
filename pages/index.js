import Head from 'next/head';
import styles from '../styles/Index.module.scss';

export default function Index() {

  return (
    <>
    <Head>
      <title>ContraHacker | Ibrahim Farooqui</title>
    </Head>
    <main className = { styles.main }>
      <h1 className = { styles.jumbo } >Website Coming Soon</h1>
    </main>
    </>
  )
}
