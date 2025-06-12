import React from 'react'
import styles from "./Layoute.module.css"
import Link from 'next/link'

function Layoute({ children }) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/">
                        FoodApp
                    </Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu">Menu</Link>
                    <Link href="/categories">Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a href='https://github.com/Mani-Jebraeily' target='_blank' rel='noreferrer'>
                    Mani Jebraeily | Food App &copy;
                </a>

            </footer>
        </>
    )
}

export default Layoute