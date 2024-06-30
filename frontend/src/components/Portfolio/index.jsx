import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import portfolioData from '../../data/portfolio.json';
import professionalWorkData from '../../data/professionalPort.json';
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    const [professionalWork, setProfessionalWork] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        setProfessionalWork(professionalWorkData.portfolio)
        setPortfolio(portfolioData.portfolio);
    }, []);

    const renderPortfolio = (projects) => {
        return (
          <div className="images-container">
              {
                  projects.map((port, idx) => {
                      return (
                        <ProjectCard port={port} idx={idx} />
                      )
                  })
              }
          </div>
        );
    }

    return (
      <>
          <div className="container portfolio-page">
              <h1 className="page-title">
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15}
                  />
              </h1>

              <h2>Professional Work</h2>
              <div>{renderPortfolio(professionalWork)}</div>

              <h2>Personal Projects</h2>
              <div>{renderPortfolio(portfolio)}</div>
          </div>
          <Loader type="pacman" />
      </>
    );
}

export default Portfolio;
