/* eslint-disable implicit-arrow-linebreak */
import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuestion } from 'react-icons/fa';

import ButtonRed from '../../components/ButtonRed';

import * as content from '../../utils/text';

import {
  sectionFadeTimeout,
  Header,
  Container,
  SectionContainer,
  StyledSection,
  QuoteBox,
  MyChevron,
} from './styles';

import observationsImg from '../../assets/observations.svg';
import typeofProffesionalImg from '../../assets/typeof-proffesional.svg';
import ideasImg from '../../assets/ideas.svg';

const Landing: React.FC = () => {
  const [showSection, setShowSection] = useState([0, 1]);
  const [sectionContent, setSectionContent] = useState(1);

  // prettier-ignore
  const handleChevron = useCallback((direction) => {
    setShowSection(direction === 'back'
      ? [sectionContent, sectionContent - 1]
      : [sectionContent, sectionContent + 1]);

    setTimeout(() => {
      setSectionContent((section) =>
        (direction === 'back' ? section - 1 : section + 1));
    }, sectionFadeTimeout);
  }, [sectionContent]);

  useEffect(() => {
    setShowSection([1, 1]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowSection([sectionContent, sectionContent]);
    }, sectionFadeTimeout);
  }, [sectionContent]);

  useEffect(() => {
    console.log(showSection);
    console.log(sectionContent);
  }, [showSection, sectionContent]);

  return (
    <Container section={sectionContent}>
      <Header section={sectionContent}>
        <p>Soft Skills</p>
      </Header>
      <SectionContainer>
        {/* prettier-ignore */}
        <MyChevron
          section={sectionContent}
          onClick={() => sectionContent > 1 && handleChevron('back')}
        >
          <FiChevronLeft size={40} color="#e63946" />
        </MyChevron>
        {sectionContent === 1 && (
          <StyledSection
            $show={showSection[0] === showSection[1]}
            className="section-1"
          >
            <img src={observationsImg} alt="Observations" />
            <p>{content.contentOne}</p>
            <QuoteBox>
              {content.contentTwo.split('\n').map((str) => (
                <p>{str}</p>
              ))}
            </QuoteBox>
          </StyledSection>
        )}
        {sectionContent === 2 && (
          <StyledSection
            $show={showSection[0] === showSection[1]}
            className="section-2"
          >
            <p style={{ position: 'relative' }}>
              <div>
                <FaQuestion
                  size={25}
                  color="#f1faee"
                  style={{ position: 'absolute' }}
                />
              </div>
              {content.contentTwoTwo.split('\n').map((str) => (
                <p>{str}</p>
              ))}
            </p>
            <div>
              <ButtonRed>Artigo 1</ButtonRed>
              <ButtonRed>Artigo 2</ButtonRed>
              <ButtonRed>Artigo 3</ButtonRed>
            </div>
          </StyledSection>
        )}
        {sectionContent === 3 && (
          <StyledSection
            $show={showSection[0] === showSection[1]}
            className="section-3"
          >
            <div>
              <p>{content.contentThree}</p>
              <img src={typeofProffesionalImg} alt="Type of Proffesional" />
            </div>
          </StyledSection>
        )}
        {sectionContent === 4 && (
          <StyledSection
            $show={showSection[0] === showSection[1]}
            className="section-4"
          >
            <h1>There is a best one?</h1>
            <div>
              <img src={ideasImg} alt="My Idea" />
              <p>{content.contentFour}</p>
            </div>
          </StyledSection>
        )}
        {sectionContent === 5 && (
          <StyledSection
            $show={showSection[0] === showSection[1]}
            className="section-5"
          >
            <h1>Why focus & adaptability?</h1>
            <ul>
              <li>
                <span>Motive 01</span>
              </li>
              <li>
                <span>Motive 02</span>
              </li>
              <li>
                <span>Motive 03</span>
              </li>
            </ul>
            <div>
              <img src={ideasImg} alt="My Idea" />
              <p>{content.contentFour}</p>
            </div>
          </StyledSection>
        )}
        {/* prettier-ignore */}
        <MyChevron
          section={sectionContent}
          onClick={() => sectionContent < 5 && handleChevron('next')}
        >
          <FiChevronRight size={40} color="#e63946" />
        </MyChevron>
      </SectionContainer>
    </Container>
  );
};

export default Landing;
