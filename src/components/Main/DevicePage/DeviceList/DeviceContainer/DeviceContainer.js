import styles from "./styles.module.css"

function DeviceContainer(props){
    return (
        <div className={styles.container}>
            <p className = {styles.text}>{props.name}</p>
        </div>
    )
}

export default DeviceContainer;