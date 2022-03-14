import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import Navigation from '../components/Navigation';
import styles from '../styles/Links.module.scss';

export default function Links() {

    const [sidebarActive, setSidebarActivity] = useState(false);
    const [currentCatagory, setCurrentCatagory] = useState('Web Development');

    const links = {
        'Web Development': [
            { name: 'ContraHacker', url: 'https://www.contrahacker.com' },
            { name: 'Sentiment Analysis Dashboard', url: 'https://monkeylearn.com/blog/sentiment-analysis-dashboard' },
        ],
        'NPM Packages': [
            { name: 'exec-string', url: 'https://www.npmjs.com/package/exec-string' }
        ],
        'Cryptography': [],
        'Mathematics': [
            { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com' },
            { name: 'MathJax', url: 'https://www.mathjax.org' },
        ],
        'Design': [
            { name: 'Figma', url: 'https://www.figma.com' },
        ],
        'Gaming': [
            { 'name': 'Tetr.io', url: 'https://tetr.io' }
        ],
        'Utilities': [
            { name: 'Alternate to Speedtest', url: 'https://www.fast.com' }
        ],
        'Miscellaneous': [
            { name: 'Ethica Invest', url: 'https://ethicainvest.in' },
        ]
    };

    function handleClick(catagory) {
        setCurrentCatagory(catagory);
        setSidebarActivity(false);
    }

    return (
        <>
            <Navigation />

            <div className = { styles.container }>

                <nav className = { styles.sidebar } style = { sidebarActive ? { marginLeft: 0 } : null } >

                    <h3>Catagories</h3>

                    {
                        Object.keys(links).map(catagory => {
                            return <button key = { catagory } onClick = { () => handleClick(catagory) }>{catagory}</button>;
                        })
                    }

                </nav>

                <main className = { styles.main }>

                    <h1>Bookmarked List of Links</h1>

                    <h2>{currentCatagory}</h2>

                    <div className = { styles.links }>
                        {
                            links[currentCatagory]?.map(
                                link => <Link key = { link.url } href = { link.url }>
                                    <a>
                                        <h3>{link.name}</h3>
                                        <p>{link.url}</p>
                                    </a>
                                </Link>
                            )
                        }
                    </div>

                </main>

                
                <button onClick = { () => setSidebarActivity(!sidebarActive) } className = { styles.sidebarActivator }>
                    { sidebarActive ? <AiOutlineDoubleLeft size = { 24 } /> : <AiOutlineDoubleRight size = { 24 } /> }
                </button>

            </div>
        </>
    );
}