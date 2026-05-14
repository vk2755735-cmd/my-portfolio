import React from "react";
import "./education.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education">
      <h5>My Journey</h5>
      <h2>Education</h2>

      <div className="container education__container">

        {/* MCA */}
        <div className="education__card" data-aos="fade-up">
          <div className="edu__badge planned">Planned</div>
          <FaGraduationCap className="edu__icon" />
          <h3>Master of Computer Applications (MCA)</h3>
          <span>2026 - 2028</span>
          <p>Lovely Professional University</p>
          <small>Specialization: Artificial Intelligence & Machine Learning</small>
          <small>Focus: Data Science, Deep Learning & Intelligent Systems</small>
        </div>

        {/* BCA */}
        <div className="education__card" data-aos="fade-up">
          <div className="edu__badge pursuing">Pursuing</div>
          <FaGraduationCap className="edu__icon" />
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <span>2023 - 2026</span>
          <p>Guru Kashi University</p>
          <small>Focus: Web Development & Programming</small>
        </div>

        {/* Diploma */}
        <div className="education__card" data-aos="fade-up">
          <div className="edu__badge completed">Completed</div>
          <FaGraduationCap className="edu__icon" />
          <h3>Advance Diploma in Computer Applications</h3>
          <span>2022 - 2023</span>
          <p>Classic Computer Institute</p>
          <small>Grade: Excellent Performance</small>
        </div>

        {/* Intermediate */}
        <div className="education__card" data-aos="fade-up">
          <div className="edu__badge completed">Completed</div>
          <FaGraduationCap className="edu__icon" />
          <h3>Intermediate (12th)</h3>
          <span>2020 - 2022</span>
          <p>Laxmi Narayan Dubey College, Motihari</p>
          <small>Stream: Science</small>
        </div>

        {/* Matric */}
        <div className="education__card" data-aos="fade-up">
          <div className="edu__badge completed">Completed</div>
          <FaGraduationCap className="edu__icon" />
          <h3>Matriculation (10th)</h3>
          <span>2019 - 2020</span>
          <p>Zila High School, Motihari</p>
          <small>Foundation Education</small>
        </div>

      </div>
    </section>
  );
};

export default Education;