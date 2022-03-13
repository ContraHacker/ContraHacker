import styles from './Navigation.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

export default function Navigation() {

    const [activeState, setActiveState] = useState(false);

    return (
        <>
            <nav role = 'navigation' className = { styles.navigation } style = { activeState ? { marginTop: 0 } : null }>
                <Link href = '/'>
                    <a>Home</a>
                </Link>
                <Link href = '/articles'>
                    <a>Articles</a>
                </Link>
                <Link href = '/blog'>
                    <a>Blog</a>
                </Link>
                <Link href = '/gallery'>
                    <a>Gallery</a>
                </Link>
                <Link href = '/links'>
                    <a>Links</a>
                </Link>
                <div className = { styles.triangle } />
            </nav>
            <button className = { styles.navActivator } onClick = { () => setActiveState(!activeState) }>
                <FiMenu color = 'white' size = { 24 } />
            </button>
        </>
    );
}