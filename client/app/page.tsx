import Image from 'next/image'
import { useState } from 'react';
import styles from './page.module.css'


export default async function Home() {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
          <h1>Hello Turbopack</h1> 
      </main>
    </div>
  )
}
