import css from './Discover.module.css'
import { Link } from 'react-router-dom';

function Discover() {
    return (
        <>
            <section className={css.discover}>
                <div className={css.head_line}>
                    <div className={css.left}>
                        <h3 className={css.h3}>Discover More NFTs</h3>
                        <p className={css.desc}>Explore new trending NFTs</p>
                    </div>
                    <div className={css.btn_show}>
                        <button className='btn outlined secondary'>
                            <img src='../src/images/Icons/EyePurple.svg' />
                            <Link to='/nft-page'>See All</Link>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discover
