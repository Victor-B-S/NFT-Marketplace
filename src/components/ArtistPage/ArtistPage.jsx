import Cards from "./Cards";
import CoverProfile from "./CoverProfile";
import ArtistInfo from "./ArtistInfo";
import TabBar from "./TabBar";
import classes from "./ArtistPage.module.css";

function ArtistPage() {
  return (
    <>
      <CoverProfile />
      <ArtistInfo />
      <TabBar />
      <div className={classes.container}>
        <Cards />
      </div>
      <hr className={classes.hr}/>
    </>
  );
}

export default ArtistPage;
