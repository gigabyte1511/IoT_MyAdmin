import DeviceList from "./DeviceList/DeviceList";
import DeviceSettings from "./DeviceSettings/DeviceSettings";
import JsonContainer from "./JsonContainer/JsonContainer";
import styles from "./styles.module.css"

function DevicePage(){
    return(
        <div className = {styles.container}>
            <DeviceList />
            <DeviceSettings />
            <JsonContainer />
        </div>


    )
}

export default DevicePage;