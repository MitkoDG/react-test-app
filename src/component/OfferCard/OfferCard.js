import classes from './OfferCard.module.css'

const OfferCard = (props) => {

    return (
        <div className={classes.card}>
            <div className={classes.card_header}>
                <img src='https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='Special deal'></img>
                {/* <h4 className={classes.header_title}>NEW</h4> */}
            </div>
            <div className={classes.card_body}>
                <p className={classes.date}>Special deal end soon</p>
                <h2 className={[classes.offer_name, classes.hover_underline_animation].join(' ') }>{props.name}</h2>
                <p className={classes.offer_body}>{props.description}</p>
                <button>Buy NOW</button>
            </div>
        </div>
    )
}

export default OfferCard;