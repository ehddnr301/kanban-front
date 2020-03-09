import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);

  const didMount = () => {
    setLoading(false);
  };
  useEffect(() => {
    didMount();
  }, []);

  return <HomePresenter loading={loading} />;
};
export default HomeContainer;
