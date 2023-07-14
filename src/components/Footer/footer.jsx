import footer from './footer.module.css';

function Footer() {
    return (
        <footer>
            <div className={footer.container}>
                <div className={footer.left}>
                    <div className={footer.logo}>
                        <div className='storefront'></div>
                        <h5>NFT Marketplace</h5>
                    </div>
                    <div className={footer.footer_intro}>
                        <p>NFT marketplace UI created with Anima for Figma.</p>
                        <p>Join our community</p>
                        <div className={footer.community}>
                            <div className={footer.community_item}><img src="../src/images/DiscordLogo.svg" className={footer.iconerede} /></div>
                            <div className={footer.community_item}><img src="../src/images/YoutubeLogo.svg" className={footer.iconerede} /></div>
                            <div className={footer.community_item}><img src="../src/images/TwitterLogo.svg" className={footer.iconerede} /></div>
                            <div className={footer.community_item}><img src="../src/images/InstagramLogo.svg" className={footer.iconerede} /></div>
                        </div>
                    </div>
                </div>
                <div className={footer.middle}>
                    <h5>Explore</h5>
                    <div className={footer.footer_explorep}>
                        <p>Marketplace</p>
                        <p>Rankings</p>
                        <p>Connect a wallet</p>
                    </div>
                </div>
                <div className={footer.right}>
                    <h5>Join our weekly digest</h5>
                    <div className={footer.input_footer}>
                        <div className={footer.footer_input_header}>
                            <p>Get exclusive promotions & updates straight to your inbox.</p>
                        </div>
                        <div className={footer.footer_input_container}>
                            <input type="email" className='base' placeholder="Enter your email here" />
                            <div className={footer.footer_input_btn}>
                                <div className={footer.footer_input_btn_font}>Subscribe</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={footer.bottom}>
                <p>© NFT Market. Use this template freely.</p>
            </div>
        </footer>
    )
}

export default Footer