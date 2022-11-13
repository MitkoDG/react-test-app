import React from 'react'
import OfferCard from '../component/OfferCard/OfferCard'
import classes from './Offers.module.css'
const Offers = () => {
    return (
        <>
            <div>
                <h1>This is the offers page</h1>
            </div>
            <div className={classes.offers}>
                <OfferCard />
                <OfferCard />
                <OfferCard />
            </div>
        </>
    )
}

export default Offers