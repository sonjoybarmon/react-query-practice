import { Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const SuperHeros = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [superHeros, setSuperHeros] = React.useState([]);
  const [error, setError] = React.useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((response) => {
        setSuperHeros(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container>
      <h1>super heros page</h1>

      {superHeros.map((superHero) => (
        <div key={superHero.id}>
          <Typography variant="h6">{superHero.name}</Typography>
        </div>
      ))}
    </Container>
  );
};

export default SuperHeros;
