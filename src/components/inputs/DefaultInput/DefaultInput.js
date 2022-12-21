import styles from "./styles.module.css"

function DefaultInput(props){

    return(
        <div className={styles.container}>
            <p className={styles.name}>{props.name}</p>
            <input className = {styles.input} value={props.value}></input>
        </div>
    )
}

export default DefaultInput;