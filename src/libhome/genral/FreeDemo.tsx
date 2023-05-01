import StartNow from "../custom/StartNow"
import ExperienceLivery from "../custom/ExperienceLivery"
import styles from '../../HomeStyles/genralStyle/FreeDemo.module.css'
export default function FreeDemo(){
    return(
        <section className={styles.FreeDemo}>
            <StartNow/>
            <ExperienceLivery/>
        </section>
    )
}