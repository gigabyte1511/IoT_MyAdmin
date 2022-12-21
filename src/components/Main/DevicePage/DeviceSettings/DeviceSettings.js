import UsualButton from "../../../buttons/UsualButton/UsualButton";
import DefaultInput from "../../../inputs/DefaultInput/DefaultInput";
import styles from "./styles.module.css"

function DeviceSettings(){
    return (
        <div className = {styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src = "https://5.imimg.com/data5/SELLER/Default/2022/9/PX/OM/DD/43948449/esp-32-cp2102-nodemcu-based-on-esp8266-500x500.png"></img>
                <UsualButton name = {"Edit"}/>
            </div>
            <div className = {styles.inputContainer}>
                <DefaultInput name = {"Device ID"} value = {"ESP32:123124"}/>
                <DefaultInput name = {"Name"} value = {"ESP32"}/>
                <DefaultInput name = {"Registration date"} value = {"20.12.2022 19:25"}/>
                <DefaultInput name = {"Last response date "} value = {"20.12.2022 11:25"}/>
                <DefaultInput name = {"Battery voltage"} value = {"4.2"}/>
            </div>
        </div>
    )
}

export default DeviceSettings;