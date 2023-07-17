import classes from "./RankingList.module.css";
import dbArtists from "../data/db.json";
import { Link } from 'react-router-dom';
 
function RankingList() {
  return (
    <ul>
      {dbArtists.map((item, index) => {

        return (
          <li key={index} className={classes.rankingList} >
            <div className={classes.rankingArtist}>
              <span>{index + 1}</span>
              <Link to='/artist-page'>
                <div className={classes.rankingArtistName}>
                  <img src={item.Image} alt="" />
                  <h4> {item.Name}</h4>
                </div>
              </Link>
            </div>
            <div className={classes.rankingPrice}>
              <span>+{item.Change}%</span>
              <span>{item.Sold} ETH</span>
              <span>{item.Volume} ETH</span>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export default RankingList;
