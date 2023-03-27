import styles from './Spinner.module.css'

export function Spinner() {
    return <div className={styles["container"]}><div className={styles["spinner"]}>
            <div className={styles["banner"]}>
                <span>ε = 0</span>
            </div>
        </div></div>;
}