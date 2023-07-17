import { useEffect } from "react";
import classes from "./Ranking.module.css";
import RankingList from "./RankingList";
import { useState } from "react";
 
function Ranking() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={classes.rankingContainer}>
      <div className={classes.rankingDescription}>
        <h2>Top Creators</h2>
        <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </div>

      <div className={classes.rankingFilter}>
        {windowWidth < 480 ? (
          <>
            <span>1d</span>
            <span>7d</span>
            <span>30d</span>
            <span>All Time</span>
          </>
        ) : (
          <>
            <span>Today</span>
            <span>This Week</span>
            <span>This Month</span>
            <span>All Time</span>
          </>
        )}
      </div>

      <div className={classes.ranking}>
        <div className={classes.rankingListExample}>
          <div className={classes.rankingArtistExample}>
            <span>#</span>
            <span>Artist</span>
          </div>
          <div className={classes.rankingPriceExample}>
            <span>Change</span>
            <span>NFTs Sold</span>
            <span>Volume</span>
          </div>
        </div>

        <RankingList />
      </div>
    </div>
  );
}

export default Ranking;
