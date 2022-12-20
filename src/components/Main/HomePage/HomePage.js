import GlobusContainer from "./GlobusContainer/GlobusContainer";
import StatisticContainer from "./StatisticContainer/StatisticContainer";
import styles from "./styles.module.css"
function HomePage(){
    return(
        <div className = {styles.container}>
            <StatisticContainer />
            <GlobusContainer />
        </div>
    )
}
export default HomePage;