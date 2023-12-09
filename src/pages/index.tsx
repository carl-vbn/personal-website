import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Block from '@/common/block'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
      const welcomeText = document.getElementById('welcome-text');
      const cursor = document.querySelector(`.${styles.cursor}`);
      if (!welcomeText) return;

      welcomeText.innerHTML = "";

      const textToWrite = "Welcome!";
      let i = 0;
      let delay = 100;

      function nextCharacter() {
        if (i >= textToWrite.length) {
          cursor?.classList.add(styles.disappear);
          clearInterval(timeout);
          return;
        }
        welcomeText!.innerHTML += textToWrite[i];
        i++;

        let t = i / textToWrite.length;

        setTimeout(nextCharacter, delay);
      }

      let timeout = setTimeout(nextCharacter, delay);
  
    return () => {
      clearInterval(timeout);
    }
  }, []);

  return (
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.column}>
          <div className={`${styles.welcomeSection} ${styles.section}`}>
            <h1><span className={styles.hiddenCursor}>|</span><span id='welcome-text'></span><span className={styles.cursor}>|</span></h1>
            <h3 className={styles.scrollMoreText}>- Scroll for more -</h3>
          </div>
          <div className={styles.section} id='namepointer'>
            <h1>
              NamePointer
            </h1>
            <h2>
              YouTube channel with a focus on experimental programming.
            </h2>
            <div className={styles.imgContainer} style={{cursor: 'pointer'}} onClick={
              () => {
                window.open('https://www.youtube.com/NamePointer', '_blank');
              }
            }>
              <img src="/projects/namepointer/screenshot.png" alt="NamePointer Channel screenshot" width={1200} />
            </div>
          </div>
        </div>
      </main>
  );
}
