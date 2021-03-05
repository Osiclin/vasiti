import styles from '../styles/Hero.module.css'


export default function Hero(){
    return(
        <div className={styles.hero}>
            <div className={styles.herotext}>
<pre className={styles.pre}>{`
Amazing
Experiences from Our
Wonderful Customers
`}</pre>
<pre className={styles.p}>{`
Here is what customers and vendors are saying about 
us, you can share your stories with us too.
`}</pre>
            </div>
            <div>
                <svg className={styles.subtract} width="711" height="517" viewBox="0 0 711 517" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M672.283 517C697.038 468.541 711 413.651 711 355.5C711 159.163 551.837 0 355.5 0C159.163 0 0 159.163 0 355.5C0 413.651 13.962 468.541 38.7166 517H672.283Z" fill="#FFF8F5"/>
                </svg>
                <div className={styles.testimonialimage1}></div>
            </div>
        </div>
    )
}