import { Tab, TabList, TabPanel, TabPanels, Tabs, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Flight from "../Flight/Flight";
import FlightOneway from "./FlightOneway";
import FlightReturn from "./FlightReturn";
import Navbar from "./Navbar";
import styles from "../Styles/Navbar.module.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    originCity: "",
    destinationCity: "",
    price: "",
    departureDate: "",
    returnDate: "",
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  }

  useEffect(() => {
    fetch(`http://localhost:8000/FlightData?originCity=${inputData.originCity}&destinationCity=${inputData.destinationCity}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [handleSubmit]);

  return (
    <>
      <Navbar />
      <Tabs
        w={{ base: "100%", sm: "250px", md: "310px", lg: "370px", xl: "100%" }}
        m={{ base: "auto", sm: "auto", md: "auto", lg: "auto", xl: "auto" }}
        border="1px solid lightgray"
        borderRadius="15px"
        p="0px 30px"
      >
        <TabList>
          <Tab>Return</Tab>
          <Tab>One-way</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <FlightReturn handleChange={handleChange} handleSubmit={handleSubmit} inputData={inputData} />
          </TabPanel>
          <TabPanel>
            <FlightOneway handleChange={handleChange} handleSubmit={handleSubmit} inputData={inputData} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box>{data && data.map((el) => <Flight key={el.id} el={el} />)}</Box>
    </>
  );
};

export default Home;
