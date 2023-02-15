import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Setya",
  lastName: "Seng",
  bithday: "09.19.1995",
  address: "Houston, Texas, USA",
  phn: "+1 (281)740-4312",
  email: "setoseng@gmail.com",
  serviceLists: [
    "Website Development",
    "Web/Mobile App Development",
    "Software Design and Integration",
    "Web Hosting and Deployment",
  ],
  skills: {
    programming: [
      { name: "JavaScript", value: "95" },
      { name: "HTML/CSS", value: "95" },
      { name: "React", value: "90" },
      { name: "Redux", value: "90" },
      { name: "React Native", value: "90" },
      { name: "Python", value: "80" },

    ],
    language: [
      { name: "English", value: "95" },
      { name: "Russian", value: "80" },
      { name: "Arabic", value: "90" },
    ],
  },
  education: [
    { year: "2014 - 2016", unv: "Oxford Univercity", degree: "Master Degree" },
    { year: "2010 - 2014", unv: "Texas Univercity", degree: "Bachelor Degree" },
    { year: "2008 - 2010", unv: "Simone College", degree: "Associate Degree" },
  ],
  working: [
    {
      year: "Jul 2021 - Nov 2022",
      company: "Donut World",
      deg: "Co-Owner",
    },
    { year: "Jan 2019 - Jul 2021",
      company: "RiverKids Pediatrics",
      deg: "Software Developer",
    },
    { year: "Jan 2018 - Jan 2019",
      company: "RiverKids Pediatrics",
      deg: "IT Desktop Support" 
    },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/me/me.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                <p>
                  Hi, I'm <span>Setya Seng</span>, a software developer with focus on Front End Web Development.
                  I'm passionate about creating innovative, user-friendly software that 
                  solves real-world problems. With my technical expertise and drive to 
                  learn and stay up-to-date on the latest developments in the field, 
                  I'm confident in my ability to tackle any challenge that comes my way.
                  If you're looking for a motivated, skilled software developer to help 
                  bring your next project to life, I'd love to hear from you.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
