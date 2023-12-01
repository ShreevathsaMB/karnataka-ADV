import React from "react";
import "./TourStyles.css";
import TourData from "./TourData";
import Tour1 from "../Assets/sydney.jpeg";
import Tour2 from "../Assets/rome.jpg";
import Tour3 from "../Assets/abu.webp";

const Tour = () => {
  return (
    <>
      <div className="tour d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Top....!</h1>
        <p className="font-sofias tagline">
           One Journey at a Time!
        </p>
        <div className="tourCard">
          <TourData
            image={Tour1}
            heading="Bandipur National Park"
            text="Bandipur National Park is one of the most popular wildlife sanctuaries in India, home to a variety of animals, including elephants, tigers, leopards, and deer."
           
          />
          <TourData
            image={Tour2}
            heading="Rockclimbing Ramanagara"
            text=" Ramanagara is a popular destination for rock climbing, with over 100 different climbing routes. "
            
          />
          <TourData
            image={Tour3}
            heading="Paragliding in Nandi Hills"
            text="Nandi Hills is a popular spot for paragliding, with stunning views of the surrounding countryside."
            
          />
        </div>
      </div>
    </>
  );
};

export default Tour;
