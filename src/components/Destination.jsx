import React from "react";
import "./Destination.css";
import parisPic1 from "../Assets/paris1.jpeg";
import parisPic2 from "../Assets/paris2.jpg";
import italy1 from "../Assets/italy1.jpg";
import italy2 from "../Assets/italy2.jpg";
import maldivs1 from "../Assets/maldivs1.jpeg";
import maldivs2 from "../Assets/maldivs2.jpeg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination d-flex justify-conetnt-center align-items-center flex-column">
        <h1 className="fw-bold">Popular Destination</h1>
        <p className="font-sofias tagline">
          Where adventure awaits at every turn!
        </p>
        <DestinationData
          heading="Mullayanagiri: The Majestic Peak of Karnataka"
          text="Perched atop the Western Ghats, Mullayanagiri reigns supreme as Karnataka's highest peak, reaching an elevation of 1,930 meters. Named after the sage Mullappa Swamy, who meditated in nearby caves, the peak exudes an aura of spiritual serenity. The trek to Mullayanagiri is an exhilarating adventure, rewarding climbers with breathtaking vistas of lush greenery and cascading waterfalls. The path snakes through dense forests and rocky outcrops, testing both endurance and determination. A haven for nature enthusiasts, Mullayanagiri harbors a rich biodiversity of flora and fauna, including the endemic Neelakurinji, which blooms in a mesmerizing spectacle of blue every 12 years. Atop the peak, a small temple dedicated to Lord Shiva offers a tranquil sanctuary for pilgrims seeking blessings. Panoramic views of the Karnataka countryside unfold from the summit, leaving visitors awestruck by the beauty that surrounds them."
          img1={parisPic1}
          img2={parisPic2}
          className="first-desc"
          
        />
        <DestinationData
        heading="Dandeli: A Serene Haven in the Heart of Karnataka"
        text="Nestled amidst the enchanting Western Ghats, Dandeli beckons travelers seeking an escape into the embrace of nature. This idyllic town offers a harmonious blend of wildlife encounters, adventure activities, and tranquil riverside retreats.Dandeli Wildlife Sanctuary is a haven for wildlife enthusiasts, boasting a diverse array of flora and fauna. The sanctuary is home to endangered species like tigers, elephants, leopards, sloth bears, and a plethora of birdlife. Embark on thrilling wildlife safaris through the dense forests, hoping to catch a glimpse of these majestic creatures in their natural habitat."
          
          img1={italy1}
          img2={italy2}
          className="first-desc-reverse"
          
        />
        <DestinationData
        heading="Hampi: A Journey Through Time"
        text="Hampi, an UNESCO World Heritage Site, is a mesmerizing blend of history, culture, and natural beauty. Located in the Indian state of Karnataka, Hampi was once the flourishing capital of the Vijayanagara Empire, a powerful kingdom that ruled over South India from the 14th to the 16th centuries. Today, Hampi stands as a testament to the empire's grandeur, its ruins scattered across a vast landscape dotted with temples, palaces, forts, and fortified walls."
          
          img1={maldivs1}
          img2={maldivs2}
          className="first-desc"
          
        />
      </div>
    </>
  );
};

export default Destination;
