import styles from '../styles/Card.module.css'


export default function Card(props){
    return(
        <div>
            <img src={props.pics} alt={props.alt} />
            <p className={styles.name}>{props.name}</p>
            <p className={styles.city}>{props.city}{` `}<span className={props.styling}>{props.status}</span></p>
            <p className={styles.content}>{props.content}</p>
        </div>
    )
}