import Cards from "./Cards";
import CoverProfile from "./CoverProfile";
import classes from "./ArtistPage.module.css";

function ArtistPage() {
  return (
    <>
      <div className={classes.container}>
        <CoverProfile />
        <Cards />
      </div>
      <hr className={classes.hr}/>
    </>
  );
}

export default ArtistPage;
