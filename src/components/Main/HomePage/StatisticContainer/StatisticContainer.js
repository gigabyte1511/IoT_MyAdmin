import styles from "./styles.module.css"

function StatisticContainer(){
    return (
        <div className = {styles.container}>
            <p className = {styles.string}>{`Status: ${123}`}</p>
            <p className = {styles.string}>{`Numbers of devices: ${2}`}</p>
            <p className = {styles.string}>{`Last received information time: ${"Thu Oct 20 2022 05:30:00 "}`}</p>
            <p className = {styles.string}>{`Numbers of data strings: ${77}`}</p>
        </div>
    )
}

export default StatisticContainer;