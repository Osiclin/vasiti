import styles from '../styles/Group60.module.css'
import Story from './Story'

export default function Group60() {
    const story = `I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!`

    return(
        <div className={styles.group60}>
            <div>
        <svg className={styles.ecllipse8} width="631" height="631" viewBox="0 0 631 631" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="315.5" cy="315.5" r="315.5" fill="#2E2E2E"/>
        </svg>

            <div className={styles.testimonialimage2}></div>
            </div>
            <Story name={`Tolu & Joy’s Experience`} status={`CUSTOMER`} story={story}/>
        </div>
    )
}

