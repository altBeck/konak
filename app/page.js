import styles from './page.module.css'
import { Header, Navbar, History, Services, Projects, Footer } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Navbar />
        <Header />
        <History />
        <Services />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
