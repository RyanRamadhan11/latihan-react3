import React from 'react'
import styles from './style.module.css'

export default function Ads() {
  return (
    <div className={styles.container}>
        <img src={require('../../assets/backgroundwide.png')} className={styles.background} />
        <div className={styles.content}>
            <p className={styles.title}>FREE GUITAR LESSONS!</p>
            <p className={styles.desc}>Purchase any guitar over $499.99 and recieve a one-hour guitar lesson free. </p>
            <div className={styles.button}>LEARN MORE</div>
        </div>
    </div>
  )
}
