import styles from '@/styles/navbar.module.css';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Navbar() {
    return (
        <>
            <div className={styles.navbarBlur} />
            <div className={`${styles.navbar} ${inter.className}`}>
                <div>
                    <Image src="/logo_nobg.png" alt="Logo" width={20} height={20} />
                    <a href='#' className={styles.title}>carl-vbn</a>
                    <div className={styles.socials}>
                        <a href='https://twitter.com/carl_vbn' target='_blank'><i className="fa fa-twitter"></i> / carl-vbn</a>
                        <a href='https://github.com/carl-vbn' target='_blank'><i className="fa fa-github"></i> / carl-vbn</a>
                        <a href='https://linkedin.com/in/carl-von-bonin' target='_blank'><i className="fa fa-linkedin"></i> / carl-von-bonin</a>
                    </div>
                </div>
                <div>
                    <a href='#namepointer'>NamePointer</a>
                    <a href='#namepointer'>CX9</a>
                    <a href='#namepointer'>Anisotropic</a>
                    <a href='#namepointer'>Projects</a>
                </div>
            </div>
        </>
    );
}