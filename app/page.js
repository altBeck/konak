import styles from './page.module.css'
import { Header, Navbar, History, Services } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Navbar />
        <Header />
        <History />
        <Services />
      </div>
    </main>
  )
}
