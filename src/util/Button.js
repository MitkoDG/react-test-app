import { useLocation } from "react-router-dom"
import classes from './Button.module.css'

function Button() {
    const location = useLocation()
    console.log(location);
    const printName = () => {
        switch (location.pathname) {
            case "/":
                console.log('This is the Home page! =>', location.pathname);
                break;
            case "/about":
                console.log('This is the About page! =>', location.pathname);
                break;
            case "/gallery":
                console.log('This is the Gallery page! =>', location.pathname);
                break;
            case "/contact":
                console.log('This is the Contact page! =>', location.pathname);
                break;
            case "/offers":
                console.log('This is the Offers page! =>', location.pathname);
                break;
            default:
                console.log('No page found', location.pathname);
                break;
        }
    }
    return (
        <div>
            <button onClick={printName} className={classes.button}>Page name</button>
        </div>
    )
}

export default Button