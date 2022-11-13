import React from 'react'
import OfferCard from '../component/OfferCard/OfferCard'
import classes from './Offers.module.css'
import deals from '../assets/data/deals.json'

const Offers = () => {

    return (
        <>
            <div className={classes.head_container}>
                <h1>Premium Service Improves Customer Experience For All</h1>
            </div>
            <div className={classes.offers}>
            {deals
                .map(deal => <OfferCard key={deal.id} name={deal.name} description={deal.description} />)}
            </div>
        </>
    )
}

export default Offers