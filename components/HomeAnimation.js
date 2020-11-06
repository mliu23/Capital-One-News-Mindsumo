import React from "react";
import navStyle from "../styles/navStyle";

// spinning globe animation in the background of the homepage

const HomeAnimation = () =>{
  
  // styles from navStyle file

  const classes = navStyle();

  return (
    <div className={classes.animation}>
      <video 
        className = {classes.video} 
        src="../newsestVideo.mp4" 
        autoPlay 
        loop 
        muted/>
    </div>
  );
}

export default HomeAnimation;
