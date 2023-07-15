import Cards from "./Cards";
import classes from "./CoverProfile.module.css";
// import { imagePaths } from "./UI/imagePaths";

function CoverProfile() {
  return (
    <>
    <div className={classes.container}>
      <Cards />
    </div>
    <hr className={classes.hr}/>
    </>
  );
}

export default CoverProfile;
