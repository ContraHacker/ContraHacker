import Head from 'next/head';
import styles from '../styles/Index.module.scss';
import { FiChevronDown } from 'react-icons/fi';
import { useRef } from 'react';
import Footer from '../components/Footer';

export default function Index() {

    const aboutRef = useRef(null);

    function scroll() {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const faq = [
        {
            question: 'How are you?',
            answer: 'I am fine, thank you!'
        },
        {
            question: 'What is the purpose of this website?',
            answer: 'I dunno, was bored.'
        },
        {
            question: 'Are you a cat person, or a dog person?',
            answer: 'I am a cat person! 😺'
        },
        {
            question: 'What is your favorite food?',
            answer: 'Yes.'
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
        }
    ];

    return (
        <>
            <Head>
                <title>ContraHacker | Ibrahim Farooqui</title>
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
                        <p>I&apos;m a person; web developer from India. Gen-Y with the mentality of a Boomer. Scored 95% introverted on the MBTI test.</p>
                    </div>
    
                    <div className = { styles.trivia }>
                        <h3>🆒 Fun Fact</h3>
                        <p>I have nothing to do with hacking. The word &apos;Contra&apos; translates to againts, so I&apos;m against hackers?</p>
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

                <section className = { styles.contact }>

                    <div className = { styles.textContent }>
                        <h2>📢 Yell at Me</h2>
                        <p>I don&apos; know why you would want to, but here&apos;s where you can reach me. The <i>contact</i> section... ugh.</p>
                    </div>

                    <div className = { styles.formContainer }>
                        <form onSubmit = { handleSubmit } className = { styles.form }>
                            <input type = 'text' placeholder = 'Your Name' />
                            <input type = 'email' placeholder = 'Email' />
                            <textarea placeholder = 'Message' />
                            <button type = 'submit'>Send</button>
                        </form>
                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}
