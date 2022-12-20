import styles from "./styles.module.css"
import globus from './globus.png'


function GlobusContainer(){
    return (
        <div className = {styles.container}>
            <img className = {styles.img} src = {globus} alt = "123"></img>
        </div>
    )
}

export default GlobusContainer;