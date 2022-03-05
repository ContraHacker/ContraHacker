import axios from 'axios';
import Head from 'next/head';
import { useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Footer from '../components/Footer';
import getApplicationCount from '../lib/getApplicationCount';
import styles from '../styles/Index.module.scss';

export default function Index({ count }) {

    const aboutRef = useRef(null);
    const [localCount, setLocalCount] = useState(count);

    function scroll() {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        axios.post('/api/submitForm', formData)
            .then(res => {
                console.log(res);
                alert(res.data.message);
                setLocalCount(localCount + 1);
            })
            .catch(err => {
                console.log(err);
                alert(err.response.data.message);
            });

    }

    const faq = [
        {
            question: 'How are you?',
            answer: 'I am fine, thank you!'
        },
        {
            question: 'What are you doing these days?',
            answer: 'https://ethicainvest.in',
            type: 'link',
            displayText: '🔗 Ethica Invest'
        },
        {
            question: 'How did you make this website?',
            answer: 'https://github.com/ContraHacker/ContraHacker',
            type: 'link',
            displayText: '🔗 See for yourself!'
        },
        {
            question: 'What is the purpose of this website?',
            answer: 'I dunno, was bored.'
        }
    ];

    return (
        <>
            <Head>
                <title>ContraHacker | Ibrahim Farooqui</title>
                <meta description = "Ibrahim Farooqui's personal website." />
            </Head>

            <main className = { styles.main }>

                <section className = { styles.jumbo }>
                    <div className = { styles.text }>
                        <h2>Ibrahim Farooqui</h2>
                        <h1>Contra<br />Hacker</h1>
                    </div>
                    <span onClick = { scroll } className = { styles.arrow }>
                        <FiChevronDown size = '40' color = 'white' />
                    </span>
                </section>

                <section className = { styles.about } ref = { aboutRef }>

                    <div className = { styles.textContent }>
                        <h2>👤 Who&apos;s this Dude?</h2>
                        <p>I&apos;m a person. A web developer from India.</p>
                    </div>
    
                    <div className = { styles.trivia }>
                        <h3>🆒 Fun Fact</h3>
                        <p>I have nothing to do with hacking. In Portuguese, the word &apos;Contra&apos; translates to <u>against</u>. So I&apos;m against hackers?</p>
                    </div>

                </section>

                <section className = { styles.faq }>

                    <div className = { styles.textContent }>
                        <h2>📖 FAQ</h2>
                        <p><b>F</b>ast, <b>a</b>nswer me Idiot! <b>Q</b>uickly.</p>
                    </div>

                    <div className = { styles.faqContent }>
                        <ul>
                            {
                                faq.map((item, index) => (
                                    item.type === 'link' ? (
                                        <a key = { index } href = { item.answer } target = '_blank' rel = 'noopener noreferrer'>
                                            <li>
                                                <h3>{ item.question }</h3>
                                                <p>{ item.displayText }</p>
                                            </li>
                                        </a>
                                    ) : (
                                        <li key = { index }>
                                            <h3>{ item.question }</h3>
                                            <p>{ item.answer }</p>
                                        </li>
                                    )
                                ))
                            }
                        </ul>
                    </div>

                </section>

                <section className = { styles.futureContent }>

                    <div className = { styles.textContent }>
                        <h2>What Else is there on this Website?</h2>
                        <p>I&apos;ll be adding a bunch of things here. Things like:</p>        
                    </div>

                    <div className = { styles.plannedContent }>
                        <ul>
                            <li>
                                <h3>Blog</h3>
                                <p>A place for me to vent. I don&apos;t use Twitter.</p>
                            </li>
                            <li>
                                <h3>Articles</h3>
                                <p>The serious section of the website. I&apos;ll post educational articles on whatever I feel like. These will be seroiusly search engine optimized.</p>
                            </li>
                            <li>
                                <h3>Gallery</h3>
                                <p>I have loads of artwork in physical form. Not only it deserves to be seen by people, putting it online will preserve it from damage.</p>
                            </li>
                            <li>
                                <h3>Links</h3>
                                <p>I have a list of cool online resources and videos. Very neche stuff. I&apos;ll put some of it here.</p>
                            </li>
                            <li>
                                <h3>Google Analytics</h3>
                                <p>Oh wait! Analytics are already enabled on this site!</p>
                            </li>
                            <li>
                                <h3>Site Metrics</h3>
                                <p>People will be able to see how well this site is doing, monthly visitors and stuff.</p>
                            </li>
                            <li>
                                <h3>Authorization and Login System</h3>
                                <p>I might want to keep some sensitive stuff on the site. If I let people create an account on the site, I can decide who gets to see it.</p>
                            </li>
                            <li>
                                <h3>Utilities</h3>
                                <p>If the site becomes a PWA, I can make utilities / applets that people might want to use.</p>
                            </li>
                        </ul>
                    </div>

                </section>

                <section className = { styles.contact }>

                    <div className = { styles.textContent }>
                        <h2>📢 Yell at Me</h2>
                        <p>I don&apos;t know why you would want to, but here&apos;s where you can reach me. The <i>contact</i> section... ugh.</p>
                    </div>

                    <div className = { styles.formContainer }>
                        <form onSubmit = { handleSubmit } className = { styles.form }>
                            <input name = 'name' type = 'text' placeholder = 'Your Name' />
                            <input name = 'email' type = 'text' placeholder = 'Your Email' />
                            <textarea name = 'content' placeholder = 'Message' />
                            <button type = 'submit'>Send</button>
                        </form>
                        
                        <div className = { styles.counter }>
                            <h1>{ localCount }</h1><p> messages received already... wow.</p>
                        </div>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            count: await getApplicationCount()
        },
        revalidate: 60 * 5 // 5 minutes
    };
}