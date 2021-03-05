import styles from '../styles/Subnavbar.module.css'

export default function Subnavbar() {
    return(
        <div className={styles.subnavbar}>
            <ul className={styles.group1}>
                <li>MARKETPLACE</li>
                <li>WHOLESALE CENTER</li>
                <li>SELLER CENTER</li>
                <li>SERVICES</li>
                <li>INTERNSHIPS</li>
                <li>EVENTS</li>
            </ul>
        </div>
    )
}