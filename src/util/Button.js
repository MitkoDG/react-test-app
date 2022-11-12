import { useLocation } from "react-router-dom"
import classes from './Button.module.css'

function Button() {
    const location = useLocation()
    
    const printName = () => {
        console.log(location.pathname);
    }
    return (
        <div>
            <button onClick={printName} className={classes.button}>Page name</button>
        </div>
    )
}

export default Button