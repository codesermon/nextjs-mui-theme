"use client";
import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import MediaCard from "./MediaCard";
import { faker } from '@faker-js/faker';

const Homepage = () => {
    const data = Array.from({length: 24}).map(() => ({
        id: faker.string.uuid(), 
        title: faker.lorem.lines(1),
        content: faker.lorem.sentences(4), 
        src: faker.image.urlPicsumPhotos({width: 1200, height: 1200}) }))
  return (
    <Box sx={[theme => ({
        backgroundColor: theme.vars.palette.grey[100],
        ...theme.applyStyles("dark", {
            backgroundColor: theme.vars.palette.grey[900]
        })
      })]}>
    <Container maxWidth="xl" sx={{mt: 9, pt: 2}}>
        <Grid2 container spacing={2}>
        {data.map((item, key) => 
        <Grid2 key={key}  size={{lg: 3, md: 4, sm: 12, xs: 12}}><MediaCard {...item} /></Grid2> )}
        </Grid2>
    </Container>
    </Box>
  );
};

export default Homepage;
