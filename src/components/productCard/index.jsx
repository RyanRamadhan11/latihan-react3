import React from 'react'
import styles from './style.module.css'

export default function ProductCard({product}) {
  return (
    <div className={styles.container}>
        <img src={product.image} className={styles.img}/>
        <div className={styles.content}>
          <div className={styles.content_header}>
            <div>
              <p>{product.title}</p>
              <p className={styles.desc}>{product.description}</p>
            </div>
            <p>${product.price}</p>
          </div>
        </div>
    </div>
  )
}
