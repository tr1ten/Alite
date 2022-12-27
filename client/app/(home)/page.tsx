import Hero from '../../components/Hero'
import styles from './page.module.css'

export default async function Home() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <Hero></Hero>
      </main>
    </div>
  )
}
