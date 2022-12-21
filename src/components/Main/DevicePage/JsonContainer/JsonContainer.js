import styles from "./styles.module.css"

function JsonContainer(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Data from device</p>
            </div>
            <div className={styles.body}>
                <p className={styles.text}>{`{"clientID":"ArduinoUno","date":"2022-09-04T02:35:00.000Z","value":"9","measureType":"Wind","voltage":"4.0","gps":"54.3 33.4","comment":"Test POST Write module","place":"Moscow"}`}</p>
                <p className={styles.text}>{`{"clientID":"ArduinoUno","date":"2022-09-04T02:35:00.000Z","value":"9","measureType":"Wind","voltage":"4.0","gps":"54.3 33.4","comment":"Test POST Write module","place":"Moscow"}`}</p>
            </div>
        </div>
    )
}
export default JsonContainer;