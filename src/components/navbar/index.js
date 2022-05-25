import React from 'react'
import styles from './style.module.css'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.container_left}>
                <img
                    className={styles.logo}
                    src={require('../../assets/logo.png')}
                />
                <div className={styles.menus}>
                    <p>Guitars</p>
                    <p>Guitars</p>
                    <p>Guitars</p>
                    <p>Guitars</p>
                    <p>Guitars</p>
                </div>
            </div>
            <div>
                <img
                    className={styles.cart_img}
                    src={require('../../assets/cart.png')}
                />
                <img
                    className={styles.cart_img}
                    src={require('../../assets/user.png')}
                />
            </div>
        </div>
    )
}
