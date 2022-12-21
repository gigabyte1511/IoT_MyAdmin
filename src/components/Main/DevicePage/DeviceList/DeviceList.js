import UsualButton from "../../../buttons/UsualButton/UsualButton";
import styles from "./styles.module.css"

function DeviceList(){

    const DeviceComponentStyle = {
    }

    return (
        <div className={styles.container}>
            <UsualButton name = {"ESP32"} style = {DeviceComponentStyle}/>
            <UsualButton name = {"ESP32"} style = {DeviceComponentStyle}/>
            <UsualButton name = {"ESP32"} style = {DeviceComponentStyle}/>
        </div>
    )
}

export default DeviceList;