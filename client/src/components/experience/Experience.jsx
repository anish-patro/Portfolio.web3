import { SlCalender } from "react-icons/sl";
import "./Experience.css";
import { useState, useEffect } from "react";

const Experience = ({state}) => {
  const [educations, setEducations] = useState("");
  const [experiences, setExperiences] = useState("");

  const { contract } = state;
  useEffect(() => {
    const educationDetails = async () => {
      const educations = await contract.methods.allEducations().call();
      setEducations(educations);
    };
    const experienceDetails = async () => {
      const experiences = await contract.methods.allExperiences().call();
      setExperiences(experiences);
    };
    contract && experienceDetails();
    contract && educationDetails();
  }, [state]);

  return (
    <section className="exp-section">
      <h1 className="title">Experience & Education </h1>

      <div className="container">
        <div className="education">
          <h1 className="edu-tittle">Education</h1>
          {educations != "" &&
            educations.map((edu) => {
              return (
                <div className="edu-card">
                  <p className="card-text1">
                    <SlCalender className="icon" /> {edu.date}
                  </p>
                  <h3 className="card-text2">{edu.degree}</h3>
                  <p className="card-text3">{edu.course}</p>
                  <p className="card-text4">{edu.institutionName}</p>
                </div>
              );
            })}
        </div>

        <div className="education">
          <h1 className="edu-tittle">Experience</h1>
          {educations != "" &&
            experiences.map((exp) => {
              return (
                <div className="edu-card">
                  <p className="card-text1">
                    <SlCalender className="icon" /> {exp.date}
                  </p>
                  <h3 className="card-text2">{exp.post}</h3>
                  <p className="card-text3">{exp.skill}</p>
                  <p className="card-text4">{exp.companyName}</p>
                </div>
              );
            })}
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
