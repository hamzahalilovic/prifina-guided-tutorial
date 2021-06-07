import React from "react";
import styled from "styled-components";

import { Flex, Box, Image, Text, Button } from "@blend-ui/core";
import { CircularProgress, CircularProgressLabel } from "@blend-ui/progress";

import { ReactComponent as PrifinaLogo } from "../assets/prifina.svg";

const TourContainer = ({
  onPrevious,
  onNext,
  progress,
  title,
  description,
  src,
  value,
  button1,
  button2,
  onEndTour,
  endTourButton,
}) => {
  const StyledBox = styled(Box)`
    border: 2px solid #00847a;
    border-radius: 20px;
    display: flex;
  `;

  return (
    <>
      <StyledBox background="#F5F8F7" justifyContent="flex-start" width="749px">
        {progress ? (
          <Box
            width="100%"
            style={{
              position: "absolute",
              right: -726,
              top: -25,
            }}
          >
            <CircularProgress value={value} size={46}>
              <CircularProgressLabel>
                <PrifinaLogo />
              </CircularProgressLabel>
            </CircularProgress>
          </Box>
        ) : null}
        <Flex
          background="#D9EAE8"
          borderTopLeftRadius="20px"
          borderBottomLeftRadius="20px"
          paddingTop="24px"
          paddingBottom="24px"
          paddingRight="46px"
          paddingLeft="46px"
        >
          <Image src={src} style={{ maxWidth: 200 }} />
        </Flex>
        <Box ml={36} mt={20} mr={36}>
          <Box mb={12}>
            <Text fontSize={18} bold>
              {title}
            </Text>
          </Box>
          <Box mb={26}>
            <Text fontSize={16}>{description}</Text>
          </Box>
          {endTourButton ? (
            <Flex mb={20} justifyContent="space-between">
              <Button
                style={{
                  background: "transparent",
                  color: "grey",
                  border: 0,
                  padding: 0,
                  display: "flex",
                }}
                onClick={onEndTour}
              >
                End Tour
              </Button>
              <Flex>
                <Button
                  variation="outline"
                  fontSize="12px"
                  size="xs"
                  onClick={onPrevious}
                >
                  Back
                </Button>
                <Button size="xs" fontSize="12px" onClick={onNext} ml="8px">
                  Next
                </Button>
              </Flex>
            </Flex>
          ) : (
            <Flex mb={20} justifyContent="space-between">
              <Button variation="outline" onClick={onPrevious}>
                {button1}
              </Button>
              <Button onClick={onNext}>{button2}</Button>
            </Flex>
          )}
        </Box>
      </StyledBox>
    </>
  );
};

export default TourContainer;
