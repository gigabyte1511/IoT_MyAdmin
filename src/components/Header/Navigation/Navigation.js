import NavigateButton from '../../buttons/NavigateButton/NavigateButton';
import styles from './styles.module.css'

import homeLogo from './img/homeLogo.svg'
import deviceLogo from './img/deviceLogo.svg'
import settingsLogo from './img/settingsLogo.svg'
import projectLogo from './img/projectLogo.svg'
import analyticsLogo from './img/analyticsLogo.svg'

function Navigation (){
    return (
        <div className = {styles.navigationContainer}>
            <NavigateButton text = "Home" image = {homeLogo}/>
            <NavigateButton text = "Analytics" image = {analyticsLogo}/>
            <NavigateButton text = "Device" image = {deviceLogo}/>
            <NavigateButton text = "Project" image = {projectLogo}/>
            <NavigateButton text = "Settings" image = {settingsLogo}/>
        </div>
    ) 
}
export default Navigation;