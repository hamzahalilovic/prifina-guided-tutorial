/* eslint-disable */

import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Box } from "@blend-ui/core";

import TourContainer from "./components/TourContainer";

import intro from "./assets/intro.svg";
import apps from "./assets/apps.png";
import display from "./assets/display.png";
import dataCloud from "./assets/dataCloud.png";
import settings from "./assets/settings.png";
import appMarket from "./assets/appMarket.png";
import userMenu from "./assets/userMenu.png";
import last from "./assets/last.svg";

import backgroundIntro from "./assets/backgroundIntro.png";
import backgroundApps from "./assets/backgroundApps.png";
import backgroundDisplay from "./assets/backgroundDisplay.png";
import backgroundDataCloud from "./assets/backgroundDataCloud.png";
import backgroundSettings from "./assets/backgroundSettings.png";
import backgroundAppMarket from "./assets/backgroundAppMarket.png";
import backgroundUserMenu from "./assets/backgroundUserMenu.png";
import backgroundLast from "./assets/backgroundLast.png";
import backgroundDefault from "./assets/backgroundDefault.png";
import { height, size, width } from "styled-system";

const App = () => {
  const StyledBackground = styled(Box)`
    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: 0.3; */
  `;

  const [step, setStep] = useState(0);

  let stepProgress = 0;
  let stepValue = 100 / 7;
  switch (step) {
    case 0:
      break;
    case 1:
      stepProgress = stepValue;
      break;
    case 2:
      stepProgress = stepValue * 2;
      break;
    case 3:
      stepProgress = stepValue * 3;
      break;
    case 4:
      stepProgress = stepValue * 4;
      break;
    case 5:
      stepProgress = stepValue * 5;
      break;
    case 6:
      stepProgress = stepValue * 6;
      break;
    case 7:
      stepProgress = stepValue * 7;
      break;
    default:
      stepProgress = 0;
  }

  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  return (
    <>
      {step === 0 && (
        <StyledBackground>
          <img
            src={backgroundIntro}
            // width={useWindowSize()}
            width="100%"
            height={useWindowSize()}
          />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              src={intro}
              title="Welcome, Johnny"
              description="New to Prifina? This is the core-platform, a dashboard containing
              your apps and more. Shall we give you a quick tour? It will only
              take a minute or two."
              onPrevious={() => {
                setStep(8);
              }}
              onNext={() => {
                setStep(1);
              }}
              button1="No, thanks"
              button2="Let’s go"
            />
          </Box>
        </StyledBackground>
      )}
      {step === 1 && (
        <StyledBackground>
          <img src={backgroundApps} width="100%" height={useWindowSize()} />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              src={apps}
              title="Apps"
              progress
              value={stepProgress}
              description="Both native apps to the core-platform and third party apps you have downloaded will appear here."
              onPrevious={() => {
                setStep(0);
              }}
              onNext={() => {
                setStep(2);
              }}
              endTourButton
              onEndTour={() => {
                setStep(8);
              }}
            />
          </Box>
        </StyledBackground>
      )}
      {step === 2 && (
        <StyledBackground>
          <img src={backgroundDisplay} width="100%" height={useWindowSize()} />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              src={display}
              title="Display"
              progress
              value={stepProgress}
              description="With the Display, you can see metrics and get insights from both your local and third party apps."
              onPrevious={() => {
                setStep(1);
              }}
              onNext={() => {
                setStep(3);
              }}
              endTourButton
              onEndTour={() => {
                setStep(8);
              }}
            />
          </Box>
        </StyledBackground>
      )}
      {step === 3 && (
        <StyledBackground>
          <img
            src={backgroundDataCloud}
            width="100%"
            height={useWindowSize()}
          />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              src={dataCloud}
              title="Data Cloud"
              progress
              value={stepProgress}
              description="The Data Cloud is where your data is: uploaded, stored and managed."
              onPrevious={() => {
                setStep(2);
              }}
              onNext={() => {
                setStep(4);
              }}
              endTourButton
              onEndTour={() => {
                setStep(8);
              }}
            />
          </Box>
        </StyledBackground>
      )}
      {step === 4 && (
        <StyledBackground>
          <img src={backgroundSettings} width="100%" height={useWindowSize()} />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              src={settings}
              title="Settings"
              progress
              value={stepProgress}
              description="Settings is where your core-platform details such as: cloud plan subscription, avatar, email, password and more - are managed."
              onPrevious={() => {
                setStep(3);
              }}
              onNext={() => {
                setStep(5);
              }}
              endTourButton
              onEndTour={() => {
                setStep(8);
              }}
            />
          </Box>
        </StyledBackground>
      )}
      {step === 5 && (
        <StyledBackground>
          <img
            src={backgroundAppMarket}
            width="100%"
            height={useWindowSize()}
          />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              src={appMarket}
              title="App Market"
              progress
              value={stepProgress}
              description="The App Market is a marketplace you can find a variety of apps created by developers to give you value and insights from the data in your cloud."
              onPrevious={() => {
                setStep(4);
              }}
              onNext={() => {
                setStep(6);
              }}
              endTourButton
              onEndTour={() => {
                setStep(8);
              }}
            />
          </Box>
        </StyledBackground>
      )}
      {step === 6 && (
        <StyledBackground>
          <img src={backgroundUserMenu} width="100%" height={useWindowSize()} />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              src={userMenu}
              title="User Menu"
              progress
              value={stepProgress}
              description="Your notifications and apps can be accessed globally across any native and third-party application – no matter where you are on Prifina."
              onPrevious={() => {
                setStep(5);
              }}
              onNext={() => {
                setStep(7);
              }}
              endTourButton
              onEndTour={() => {
                setStep(8);
              }}
            />
          </Box>
        </StyledBackground>
      )}
      {step === 7 && (
        <StyledBackground>
          <img src={backgroundLast} width="100%" height={useWindowSize()} />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              src={last}
              title="That’s it!"
              progress
              value={stepProgress}
              description="You’re all finished the tour and are ready to start harnessing your data in new ways."
              onPrevious={() => {
                setStep(6);
              }}
              onNext={() => {
                setStep(8);
              }}
              button1="Back"
              button2="Close"
            />
          </Box>
        </StyledBackground>
      )}
      {step === 8 && (
        <StyledBackground>
          <img src={backgroundDefault} width="100%" height={useWindowSize()} />
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}></Box>
        </StyledBackground>
      )}
    </>
  );
};

export default App;
