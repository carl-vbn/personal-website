import styles from '@/styles/block.module.css';

export default function Block(props: { title: string, children: React.ReactNode }) {
    return (
        <div className={styles.block}>
            <h1 className={styles.blockTitle}>{props.title}</h1>
            <div className={styles.blockContent}>
                {props.children}
            </div>
        </div>
    )
};