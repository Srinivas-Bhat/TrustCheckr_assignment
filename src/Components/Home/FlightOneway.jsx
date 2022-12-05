import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  WrapItem,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { MdOutlineToday } from "react-icons/md";

const FlightOneway = ({ handleChange, handleSubmit, inputData }) => {
  return (
    <>
      <Flex
        spacing={4}
        w="80%"
        m="auto"
        mt="50px"
        justify="center"
        align="center"
      >
        <Flex
          gap="20px"
          align="center"
          m="auto"
          flexDirection={{ sm: "column", lg: "column", xl: "row" }}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.5rem"
              children={<HiLocationMarker fontSize="25px" color="gray" />}
            />
            <Input
              type="text"
              placeholder="Leaving from"
              id="stay-card-input"
              h="50px"
              name="originCity"
              value={inputData.originCity}
              onChange={handleChange}
              w={{
                base: "350px",
                sm: "240px",
                md: "300px",
                lg: "350px",
                xl: "300px",
              }}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="1.5rem"
              children={<HiLocationMarker fontSize="25px" color="gray" />}
            />
            <Input
              type="text"
              placeholder="Going to"
              id="stay-card-input"
              h="50px"
              name="destinationCity"
              value={inputData.destinationCity}
              onChange={handleChange}
              w={{
                base: "350px",
                sm: "240px",
                md: "300px",
                lg: "350px",
                xl: "300px",
              }}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              fontSize="22px"
              children={<MdOutlineToday />}
            />
            <Input
              placeholder="Departing"
              id="stay-card-input"
              h="50px"
              type="date"
              name="departureDate"
              value={inputData.departureDate}
              onChange={handleChange}
            />
          </InputGroup>

          <WrapItem className="stay-search-button-wrap">
            <Button
              // colorScheme="messenger"
              bg="#3662D8"
              color="white"
              fontSize="16px"
              fontWeight="500"
              className="stay-search-button"
              h="48px"
              p="4px 25px"
              w="100px"
              _hover={{ bg: "blue.600" }}
            >
              Search
            </Button>
          </WrapItem>
        </Flex>
      </Flex>
    </>
  );
};

export default FlightOneway;
