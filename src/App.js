import React, { useState } from "react";
import styled from "styled-components";

import { Flex, Box, Image, Text, Button } from "@blend-ui/core";

import TourContainer from "./components/TourContainer";

import background1 from "./assets/background1.png";
import background2 from "./assets/background2.png";

export const App = () => {
  const StyledBackground = styled(Box)`
    background-image: url(${background1});

    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: 0.3; */
    width: 100%;
    height: 100%;
    z-index: 2;
    border: 1px solid #f5f8f7;
  `;

  const StyledBackground2 = styled(Box)`
    background-image: url(${background2});

    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: 0.3; */
    width: 100%;
    height: 100%;
    z-index: 2;
    border: 1px solid #f5f8f7;
  `;

  const StyledBox = styled(Box)`
    border: 2px solid #00847a;
    width: 749px;
    height: 204px;
    border-radius: 20px;
  `;

  const [step, setStep] = useState(0);

  let stepProgress = 0;
  switch (step) {
    case 0:
      stepProgress = 50;
      break;
    case 1:
      stepProgress = 100;
      break;
    default:
      stepProgress = 50;
  }

  return (
    <>
      {step === 0 && (
        <StyledBackground background="red">
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              title="Welcome, Johnny"
              progress={33}
              description="New to Prifina? This is the core-platform, a dashboard containing
              your apps and more. Shall we give you a quick tour? It will only
              take a minute or two."
              onPrevious={() => {
                setStep(0);
              }}
              onNext={() => {
                setStep(1);
              }}
            />
          </Box>
        </StyledBackground>
      )}
      {step === 1 && (
        <StyledBackground2>
          <Box style={{ position: "absolute", bottom: 30, left: 30 }}>
            <TourContainer
              title="Apps"
              progress={50}
              description="Both native apps to the core-platform and third party apps you have downloaded will appear here."
              onPrevious={() => {
                setStep(0);
              }}
              onNext={() => {
                setStep(1);
              }}
            />
          </Box>
        </StyledBackground2>
      )}
    </>
  );
};
