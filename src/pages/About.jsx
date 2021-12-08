import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl mb-4">GitHub Finder</h2>
      <p className="text-xl mb-6 font-light">
        A React App for Finding GitHub Profile and Their Repositories
      </p>
      <div>
        <strong>version: </strong>1.0.0
      </div>
      <div>
        <strong>repository: </strong>
        <a className="text-blue-300" href="#" target="_blank">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
