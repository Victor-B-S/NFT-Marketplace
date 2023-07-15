import classes from "./CoverProfile.module.css";
// import { imagePaths } from "./UI/imagePaths";
import avatarImg from "../../images/ArtistPage/ArtistPage-avatar-placeholder.png";
import { useEffect, useState } from "react";


function CoverProfile() {

  const [imgBg, setImgBg] = useState('/src/images/ArtistPage/ArtistPage-image-placeholder-1.png');


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setImgBg('/src/images/ArtistPage/ArtistPage-image-placeholder-3.png');
      }else if((window.innerWidth <= 768) && (window.innerWidth > 480)) {
        setImgBg('/src/images/ArtistPage/ArtistPage-image-placeholder-2.png');
      }else{
        setImgBg('/src/images/ArtistPage/ArtistPage-image-placeholder-1.png');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={classes.container}>
        <img className={classes.imageCover} src={imgBg} alt="Image Background Placeholder"/>
        <div className={classes.imageProfile}>
          <div className={classes.avatar}>
            <div className={classes.asset}>
              <img className={classes.avatarImage} src={avatarImg} alt="Avatar Placeholder"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoverProfile;
