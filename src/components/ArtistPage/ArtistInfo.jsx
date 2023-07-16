import classes from "./ArtistInfo.module.css";

function ArtistInfo() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.artist_info}>
          <div className={classes.artist_info_section}>
            <div className={classes.artist_name_button}>
              <div className={classes.artist_info2}>
                <div className={classes.artist_name}>Animakid</div>
                <div className={classes.stats}>
                  <div className={classes.total_sale}>
                    <div className={classes.x240k}>250k+</div>
                    <div className={classes.total_sale2}>Volume</div>
                  </div>
                  <div className={classes.auctions}>
                    <div className={classes.x100k}>50+</div>
                    <div className={classes.auctions2}>Nfts Sold</div>
                  </div>
                  <div className={classes.artists}>
                    <div className={classes.x240k}>3000+</div>
                    <div className={classes.artists2}>Followers</div>
                  </div>
                </div>
                <div className={classes.bio}>
                  <div className={classes.bio2}>Bio</div>
                  <p className={classes.the_internets}>The Internet&apos;s Friendliest Designer Kid.</p>
                </div>
                <div className={classes.web_links}>
                  <div className={[classes.bio2, classes.links].join(' ')}>Links</div>
                  <div className={classes.icons_links}>
                    <a href="#" target="_blank">
                      <img className={classes.icon_social_media} src="/src/images/web_globo.svg" alt="icon-globe"/></a>
                    <a href="#" target="_blank">
                      <img className={classes.icon_social_media} src="/src/images/DiscordLogo.svg" alt="DiscordLogo"/></a>
                    <a href="#" target="_blank">
                      <img className={classes.icon_social_media} src="/src/images/YoutubeLogo.svg" alt="YoutubeLogo"/></a>
                    <a href="#" target="_blank">
                      <img className={classes.icon_social_media} src="/src/images/TwitterLogo.svg" alt="icon-twitter"/></a>
                    <a href="#" target="_blank">
                      <img className={classes.icon_social_media} src="/src/images/InstagramLogo.svg" alt="icon-instagram"/></a>
                  </div>
                </div>
              </div>
              <div className={classes.ct_as}>
                <div className={classes.btn_copy}>
                  <img className={classes.icon_copy} src="/src/images/copy_icon.svg" alt="icon-copy"/>
                  <div className={classes.btn_copy_text}>0xc0E3...B79C</div>
                </div>
                <div className={classes.btn_plus}>
                  <img className={classes.icon_plus} src="/src/images/plus_icon.svg" alt="Plus"/>
                  <div className={classes.btn_plus_text}>Follow</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistInfo;
