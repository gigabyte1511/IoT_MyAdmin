import DevicePage from "./DevicePage/DevicePage";
import HomePage from "./HomePage/HomePage";
import styles from "./styles.module.css"


function Main(){
    return(
        <main className = {styles.container}>
            {/* <HomePage /> */}
            <DevicePage />
        </main>
    )
}
export default Main;