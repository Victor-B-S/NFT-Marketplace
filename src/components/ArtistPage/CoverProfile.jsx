import classes from "./CoverProfile.module.css";
// import { imagePaths } from "./UI/imagePaths";
import avatarImg from "../../images/ArtistPage/ArtistPage-avatar-placeholder.png";


function CoverProfile() {
  return (
    <>
      {/* <div className={classes.containerDesktop}> */}
        <div className={classes.containerCover}>
          <div className={classes.imageCover}></div>
          <div className={classes.imageProfile}>
            <div className={classes.avatar}>
              <div className={classes.asset}>
                <img className={classes.avatarImage} src={avatarImg} alt="Avatar Placeholder"/>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default CoverProfile;
