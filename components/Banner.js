import styles from '../styles/Banner.module.css'

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.bannerin}>
        <div className={styles.subscribe}>

        </div>
        <div className={styles.subscribeform}>
            <p className={styles.title}>Be a member <br />of our community 🎉</p>
            <p className={styles.para}>We’d make sure you’re always first to know what’s <br />happening on Vasiti—thus, the world.</p>
            <input className={styles.input} type="email" placeholder="enter your email address"/> <button className={styles.button}>SUBSCRIBE</button>
        </div>
        </div>
        </div>
    )
}