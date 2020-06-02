import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  // to test error-boundary
  // throw new Error();
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
