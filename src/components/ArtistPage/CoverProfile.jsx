import classes from "./CoverProfile.module.css";
import { useEffect, useState } from "react";
import ArtistPageAva from "/src/images/ArtistPage/ArtistPage-avatar-placeholder.png";

function CoverProfile() {

  const pathImageBackground = '/src/images/ArtistPage/ArtistPage-image-placeholder-1.png';

  const [imageBackground, setImageBackground] = useState(pathImageBackground);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setImageBackground('/src/images/ArtistPage/ArtistPage-image-placeholder-3.png');
      } else if ((window.innerWidth <= 768) && (window.innerWidth > 480)) {
        setImageBackground('/src/images/ArtistPage/ArtistPage-image-placeholder-2.png');
      } else {
        setImageBackground(pathImageBackground);
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
      <div className={classes.cover_image}>
        <img className={classes.image_place_holder} src={imageBackground} alt="Image PlaceHolder"/>
        <div className={classes.profile_image}>
          <div className={classes.avatar}>
            <div className={classes.asset}>
              <img className={classes.avatar_placeholder} src={ArtistPageAva} alt="Avatar Placeholder"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoverProfile;
