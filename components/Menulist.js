import styles from '../styles/Menulist.module.css'

export default function Menulist() {
    return(
        <div>
        <ul className={styles.menulist}>
            <li>ABOUT US</li>
            <li>STORIES</li>
            <li>CONTACT</li>
            <li>LOG IN</li>
        </ul>
        </div>
    )
}