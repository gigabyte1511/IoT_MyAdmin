import styles from "./styles.module.css"

function NavigateButton(props){
    return(
        <div className = {styles.container}>
            <img src = {props.image}></img>
            <p className = {styles.text}>{props.text}</p>
        </div>
    )
}
export default NavigateButton;
