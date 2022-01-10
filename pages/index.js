import Head from 'next/head';
import styles from '../styles/Index.module.scss';

export default function Index() {

    return (
        <>
            <Head>
                <title>ContraHacker | Ibrahim Farooqui</title>
            </Head>
            <main className = { styles.main }>

                <div className = { styles.jumbo }>
                    <p>Ibrahim Farooqui</p>
                    <h1>Contra<br />Hacker</h1>
                </div>

            </main>
        </>
    );
}
