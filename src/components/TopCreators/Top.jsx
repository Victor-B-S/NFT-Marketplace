import css from './Top.module.css'
import { Link } from 'react-router-dom';
import TopCards from './TopCards'

function Top() {
    return (
        <>
            <section className={css.tops}>
                <div className={css.head_line}>
                    <div className={css.left}>
                        <h3 className={css.h3}>Top Creators</h3>
                        <p className={css.desc}>Checkout Top Rated Creators on the NFT Marketplace</p>
                    </div>
                    <button className='btn outlined secondary'>
                        <img src='../src/images/Icons/RocketLaunchpurple.svg' />
                        <Link to='/ranking'>View Rankings</Link>
                    </button>
                </div>
                <TopCards />
            </section>
        </>
    )
}

export default Top;