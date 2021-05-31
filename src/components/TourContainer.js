import React from "react";
import styled from "styled-components";

import { Flex, Box, Image, Text, Button } from "@blend-ui/core";
import { CircularProgress, CircularProgressLabel } from "@blend-ui/progress";

import { ReactComponent as PrifinaLogo } from "../assets/prifina.svg";

import tutorialIntro from "../assets/intro.png";

const TourContainer = ({
  onPrevious,
  onNext,
  progress,
  title,
  description,
}) => {
  const StyledBox = styled(Box)`
    border: 2px solid #00847a;
    width: 749px;
    height: 204px;
    border-radius: 20px;

    display: flex;
  `;

  return (
    <>
      <StyledBox background="#F5F8F7">
        <Box
          width="100%"
          style={{
            position: "absolute",
            right: -726,
            top: -25,
          }}
        >
          <CircularProgress value={progress} size={46}>
            <CircularProgressLabel>
              <PrifinaLogo />
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box
          width="100%"
          background="#D9EAE8"
          borderTopLeftRadius="20px"
          borderBottomLeftRadius="20px"
        >
          <Image src={tutorialIntro} />
        </Box>
        <Box ml={36} mt={20} mr={36}>
          <Text fontSize={18} bold>
            {title}
          </Text>
          <Box mt={12}>
            <Text fontSize={16}>{description}</Text>
          </Box>
          <Flex mt={26} justifyContent="space-between">
            <Button variation="outline" onClick={onPrevious}>
              No, thanks
            </Button>
            <Button onClick={onNext}>Let's go</Button>
          </Flex>
        </Box>
      </StyledBox>
    </>
  );
};

export default TourContainer;
