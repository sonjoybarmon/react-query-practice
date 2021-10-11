import { Container, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = async () => {
  return await axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("Perform side effect after data error", error);
  };

  // const { isLoading, data } = useQuery("super-heroes", () => {
  //   return axios.get("http://localhost:4000/superheroes");
  // });
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      staleTime: 30000,
      // for 1st time refetch in page load used refetchOnMount false
      // refetchOnMount: false,
      refetchOnMount: true,
      // for edit data auto load in website
      refetchOnWindowFocus: true,
      onSuccess,
      onError,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <Container>{error.message}</Container>;
  }
  return (
    <Container>
      <h1>rq super heros page</h1>

      {data?.data?.map((superHero) => (
        <div key={superHero.id}>
          <Typography variant="h6">{superHero.name}</Typography>
        </div>
      ))}
    </Container>
  );
};

export default RQSuperHeroes;
