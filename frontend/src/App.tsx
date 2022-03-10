import React from "react";
import styled from "styled-components";
import BrandsList from "./components/BrandsList";
import Map from "./components/BrandsMap";

const Wrapper = styled.div(() => ({
  display: "flex",
}));

const App: React.FC = () => {
  return (
    <Wrapper>
      <BrandsList />
      <Map />
    </Wrapper>
  );
};

export default App;
