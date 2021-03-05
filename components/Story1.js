import styles from '../styles/Story1.module.css'
import styling from '../styles/Card.module.css'


export default function Story1(props) {
    return(
        <div className={styles.story}>
            <p className={styles.name}>{props.name}</p>
            <p className={styling.vendor}>{props.status}</p>
            <p className={styles.content}>{props.story}</p>
            
            <p className={styles.share}>SHARE YOUR OWN STORY</p>
            <svg className={styles.sharevector}width="297" height="12" viewBox="0 0 297 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125" stroke="#FF5C00"/>
            </svg>
        </div>
        
    )
}