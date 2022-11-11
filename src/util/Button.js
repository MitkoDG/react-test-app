import { useLocation } from "react-router-dom"

function Button() {
    const location = useLocation()
    
    const printName = () => {
        console.log(location.pathname);
    }
    return (
        <div>
            <button onClick={printName}>Page name</button>
        </div>
    )
}

export default Button