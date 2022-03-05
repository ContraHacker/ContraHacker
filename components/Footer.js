import styles from './Footer.module.scss';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import { FaSteam } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className = { styles.footer }>
            <div className = { styles.credits }>ContraHacker - Ibrahim Farooqui | 02/02/2022</div>
            <div className = { styles.clickys }>
                <h2>Links</h2>
                <div className = { styles.links }>
                    <span>
                        <Image alt = 'Ethica Invest - Logo' src = '/EI.svg' width = { 30 } height = { 30 } />
                        <a rel = 'noreferrer' target = '_blank' href = 'https://ethicainvest.in/'>Ethica</a>
                    </span>
                    <span>
                        <AiOutlineLinkedin size = '30' />
                        <a rel = 'noreferrer' target = '_blank' href = 'https://www.linkedin.com/in/ibrahimfarooqui/'>LinkedIn</a>
                    </span>
                    <span>
                        <FaSteam size = '30' />
                        <a rel = 'noreferrer' target = '_blank' href = 'https://steamcommunity.com/id/iContra/'>Steam</a>
                    </span>
                    <span>
                        <AiOutlineGithub size = '30' />
                        <a rel = 'noreferrer' target = '_blank' href = 'https://github.com/ContraHacker'>Github</a>
                    </span>
                    <span>
                        <AiOutlineMail size = '30' />
                        <a rel = 'noreferrer' target = '_blank' href = 'mailto:ai.ibrahimfarooqui@gmail.com'>Email</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}