import React from "react";

const About = () => {
  return (
    <div className="about-section">
      <div className="about-creators">
        <h2>Created by:</h2>
        <div className="profile-pictures--mask">
          <img
            className="profile-pictures"
            src="https://media.licdn.com/dms/image/D4E03AQGrYzlRThAprA/profile-displayphoto-shrink_800_800/0/1669053364376?e=2147483647&v=beta&t=pQFbjDUEh2hl14Jds3ZpXMOK3m1FaowZqTjn8h2oMQI"
            alt="Reyna"
          />
        </div>
        <div className="profile-pictures--mask">
          <img
            className="profile-pictures"
            src="https://media.licdn.com/dms/image/D4E03AQFjECC795-j2Q/profile-displayphoto-shrink_800_800/0/1674169767617?e=1681344000&v=beta&t=JW_RJWRtAcP0EE7xMI2DvZDhlPRqfNH70iaGNS3LGcI"
            alt="Misha"
          />
        </div>
        <div>
          <p>
            <a href="https://www.linkedin.com/in/reyna-diaz/">Reyna </a> and{" "}
            <a href="https://www.linkedin.com/in/misha-craddock/">Misha</a>
          </p>
          <p>
            <a href="https://adadevelopersacademy.org/">
              Ada Developers Academy
            </a>{" "}
            Cohort 18
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
