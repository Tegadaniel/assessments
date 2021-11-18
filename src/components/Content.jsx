import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Api } from "../Api/Api";
import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";

function Content() {
  const [image, setImage] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Api().then((data) => {
      console.log(data.results[0].user.name);
      setImage(data.results);
      setLoading(false);
    });
  }, []);
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log("search here: ", search);
  };

  const filterResult = image.filter((data) =>
    data.user.name.toLowerCase().includes(search.toLowerCase()) ||
     data.user.location && data.user.location.toLowerCase().includes(search.toLowerCase()) ||
     data.user.twitter_username && data.user.twitter_username.toLowerCase().includes(search.toLowerCase()) 
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  if (loading)
    return (
      <Box as="div" pos="relative" ml="300px" mt="20px">
        LOADING....
      </Box>
    );
  return (
    <>
      <Header
        onchange={handleChange}
        initValue={search}
        onsubmit={handleSubmit}
      />
      <Box as="div" pos="relative" ml="280px" mt="20px">
        <SimpleGrid p="5" columns={(5, 3)} spacing={10}>
          {filterResult.map((data, index) => (
            <div key={index}>
              <Box pos="relative" overflow="hidden">
                <Image
                  width="400"
                  height="250"
                  rounded="0.5rem"
                  src={data.urls.small}
                  alt={data.alt_description}
                  cursor="pointer"
                />
                <Text as="span" mt="1" color="gray.600" fontSize="sm">
                  Name: {data.user.name}
                </Text>
                <br />
                <Text as="span" mt="1" color="gray.600" fontSize="sm">
                  Location: {data.user.location}
                </Text>
                <br />
                <Text as="span" mt="1" color="gray.600" fontSize="sm">
                  Twitter Username: {data.user.twitter_username}
                </Text>
                <br />
                <Text as="span" mt="1" color="gray.600" fontSize="sm">
                  Total Likes: {data.user.total_likes}
                </Text>
                <br />
                <Text as="span" mt="1" color="gray.600" fontSize="sm">
                  Total Photos: {data.user.total_photos}
                </Text>
              </Box>
            </div>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Content;
