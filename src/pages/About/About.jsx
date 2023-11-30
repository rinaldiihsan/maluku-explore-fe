import React from 'react';
import bannerAbout from '../../assets/banner-about.png';

const About = () => {
  return (
    <section className="font-poppins flex flex-col justify-center items-center gap-y-8">
      <h1 className="font-clashDisplay text-3xl font-semibold">Who we are?</h1>
      <p className="text-center">
        Maluku Explorer is your reliable source for information about the natural beauty and culture of the Maluku Islands. We provide in-depth articles about the history and unique cultural aspects of the region, along with practical
        travel guides, including options for purchasing tickets to tourist destinations. With user-friendly search and booking features, we make it easy for travelers to plan unforgettable adventures in the Maluku Islands. Welcome to Maluku
        Explorer, your travel companion!
      </p>
      <img src={bannerAbout} alt="Banner About" />
    </section>
  );
};

export default About;
