import styles from "./styles.module.css"

function UsualButton(props){

    return(
        <div className={styles.container} style = {props.style}>
        <p className = {styles.text}>{props.name}</p>
    </div>
    )
}

export default UsualButton;