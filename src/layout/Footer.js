import Button from '../util/Button';
import classes from './Footer.module.css'

const Footer = () => {

    return (
        <footer className={classes.site_footer}>
            <p><a href='https://dimitargegov.com/' target='_blank' rel="noreferrer">DDG Projects</a> 2022 &copy; All right reserved</p>
            <Button />
        </footer>
    )
}

export default Footer;