import Logo from './Logo'
import Menulist from './Menulist'
import Signup from './Signup'
import styles from '../styles/Headercontent.module.css'

export default function Headercontent() {
    return (
        <div className={styles.headercontent}>
            <Logo />
            <div className={styles.side}>
                <Menulist />
                <Signup />
            </div>
        </div>
    )
}