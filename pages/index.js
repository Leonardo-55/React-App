import styles from './index.module.css'
import Image from 'next/image'
import Footer from '@/components/footer';
export default function Home() {
  return (
    <main className={styles.main}>
    <h1 id={styles.h1}>Hello from Next.js</h1>
    <img src="https://miro.medium.com/v2/1*1itDSqxMNCT_XMksG99r-A.png" width="700px"/>
    <Image src="/images/banner.png" width="500" height="300"/>
    {/* <Image src="next.svg" width="500" height="300"/> */}
    <p className={styles.mypara}>Next.js is an open-source React framework that enables developers to build fast, scalable, and SEO-friendly web applications. It extends the capabilities of React by providing built-in features and optimizations that streamline the development process and enhance application performance</p>
    <h2>Why Next.js over React</h2>
    <ol>
      <li>SEO Friendly</li>
      <li>Easy Routing</li>
      <li>Serverside Capabilities</li>
    </ol>
    <Footer org="Edunet Foundation"/>
    </main>
  );
}