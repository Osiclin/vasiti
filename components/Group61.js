import styles from '../styles/Group61.module.css'
import Story1 from './Story1'


export default function Group60() {
    const story = `I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!`
     
    return(
        <>
        <div className={styles.group61}>
        <svg  className={styles.ecllipse1} width="631" height="631" viewBox="0 0 631 631" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="315.5" cy="315.5" r="315.5" fill="#FF5C00" fillOpacity="0.03"/>
        </svg>

        <div className={styles.testimonialimage1}></div>
        </div>
        <Story1 name={`Josiah’s Experience`} status={`VENDOR`} story={story}/>
        </>
    )
}

const story = `I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!`
