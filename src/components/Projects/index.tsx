import React from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-parallax-tilt';

import { Container, Link } from './styles';
import { Cta } from '../../styles/cta';

import { projectData, projectSectionTitle } from '../../source/data';

const Project: React.FC = () => {
  return (
    <Container>
      <Fade left duration={1000} delay={300} distance="30px">
        <h1>{projectSectionTitle}</h1>
      </Fade>
      {projectData.map((project) => (
        <>
          <section className="row">
            <div className="project-text">
              <Fade left duration={1000} delay={700} distance="30px">
                <h2>{project.title}</h2>
                <p>{project.description1}</p>
                <p>{project.description2}</p>
                <div>
                  {project.liveUrl && (
                    <Cta
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.liveUrl}
                    >
                      {project.liveButtonText}
                    </Cta>
                  )}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.sourceUrl}
                  >
                    {project.sourceText}
                  </Link>
                  {project.title === 'Selfolio' ? (
                    <>
                      <br />
                      <img
                        src="https://img.shields.io/github/stars/guvarallo/selfolio?style=social"
                        alt="repo stars"
                        style={{ marginRight: '10px' }}
                      />
                      <img
                        src="https://img.shields.io/github/forks/guvarallo/selfolio?style=social"
                        alt="repo forks"
                      />
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </Fade>
            </div>
            <Fade right duration={1000} delay={1100} distance="30px">
              <Tilt
                tiltMaxAngleX={0}
                tiltMaxAngleY={5}
                scale={1.15}
                tiltReverse
              >
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.sourceUrl}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={project.video.src}
                  />
                </a>
              </Tilt>
            </Fade>
          </section>
        </>
      ))}
    </Container>
  );
};

export default Project;
