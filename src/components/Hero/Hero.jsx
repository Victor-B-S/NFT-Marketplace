import { Link } from 'react-router-dom';
import css from './Hero.module.css'

function Hero() {
    return (
        <> 
            <section className={css.hero}>
                <div className={css.info}>
                    <h1 className={css.h3}>Discover digital art & Collect NFTs</h1>
                    <p className={css.text}>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                    <img className={css.mobile} src='../src/images/heroanimation.gif' />
                    <button class='btn secondary filled btn_mobile'>
                        <img src='../src/images/Icons/RocketLaunch.svg' />
                        <Link to="/create-account">Get Started!</Link>
                    </button>
                    <div className={css.data}>
                        <div className={css.data_inside}>
                            <p className={css.data_number}>240k+</p>
                            <p className={css.data_text}>Total Sales</p>
                        </div>
                        <div className={css.data_inside}>
                            <p className={css.data_number}>100k+</p>
                            <p className={css.data_text}>Auctions</p>
                        </div>
                        <div className={css.data_inside}>
                            <p className={css.data_number}>240k+</p>
                            <p className={css.data_text}>Artists</p>
                        </div>
                    </div>
                </div>
                <img className={css.web} src='../src/images/heroanimation.gif' />
            </section >
        </>
    );
}

export default Hero;