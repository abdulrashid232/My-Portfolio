/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mypic2.jpg";

const imageAltText = "A pic of me at my desk ";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Build  A Telegram Bot  🎉",
    description:
      "A Telegram bot for movies infomation and download link",
    url: "https://web.telegram.org/k/#@abdelMovie_bot",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Web Development for Beginners on Youtube and WhataApp.",
    url: "https://www.youtube.com/channel/UCk3WosVrrmVEsvg7vUaPdmg",
  },
  {
    title: "An EduTech Website",
    description:
      "Created a sample online platform for educations and hosting online courses.",
    url: "https://akadami.netlify.app/home",
  },
  {
    title: "An Ecommerce Site",
    description:
      "A sample online store.",
    url: "https://abdulrashid232.github.io/Ecommerce/",
  },
  {
    title: "Build A Memory Game",
    description:
      "Created a a memory game with vanila JavaScript.",
    url: "https://abdulrashid232.github.io/Memory-game/",
  },
  {
    title: "Build A RockPaperScissor Game",
    description:
      "Created a RockPaperScissor game with vanila JavaScript.",
    url: "https://abdulrashid232.github.io/RockPaperGame/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
