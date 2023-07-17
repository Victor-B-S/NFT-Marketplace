import dbArtists from '../../data/db.json';
import css from './TopCards.module.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

function TopCards() {
    const [numCreators, setNumCreators] = useState(12);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {

        const updateStateBasedOnScreenWidth = () => {
            if (windowWidth < 480) {
                setNumCreators(5);
            } else if (windowWidth >= 480 && windowWidth <= 768) {
                setNumCreators(6);
            } else {
                setNumCreators(12);
            }
        };

        updateStateBasedOnScreenWidth();
    }, [windowWidth]);

    return (
        <div className={css.grid}>
            {dbArtists.map((item, index) => {
                return (
                    <div key={index} className={css.card} >
                        <span className={css.number}>
                            {index + 1}
                        </span>
                        <div className={css.top}>
                            <div className={css.image} style={{ backgroundImage: `url("${item.Image}")` }}></div>
                        </div>
                        <div className={css.mobile}>
                            <Link to='/artist-page'><p className={css.artist_name}>{item.Name}</p></Link>
                            <div className={css.sales}>
                                <p className={css.sales_text}>Total sales:
                                    <span className={css.sales_amount}> {item.TotalSales} ETH</span>
                                </p>
                            </div>
                        </div>
                    </div>

                )
            }).slice(0, numCreators)}
        </div>
    );
}

export default TopCards 