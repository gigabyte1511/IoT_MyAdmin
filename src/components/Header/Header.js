import LogoContainer from "./LogoContainer/LogoContainer";
import Navigation from "./Navigation/Navigation";
import styles from "./styles.module.css"

function Header(){
    return(
        <header>
            <div className = {styles.header}>
                <LogoContainer />
            </div>
            <Navigation />
        </header>
    )
}

export default Header;