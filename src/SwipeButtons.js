import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import ClearIcon from "@material-ui/icons/Clear";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon className="swipeButtons__repeat" fontSize="large" />
      </IconButton>
      <IconButton>
        <ClearIcon className="swipeButtons__left" fontSize="large" />
      </IconButton>
      <IconButton>
        <StarIcon className="swipeButtons__star" fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteIcon className="swipeButtons__right" fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOnIcon className="swipeButtons__lightning" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
