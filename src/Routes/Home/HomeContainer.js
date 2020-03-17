import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { kanbanApi } from "../../api";

const HomeContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});
  const [error, setError] = useState(null);

  const didMount = async () => {
    try {
      const {
        data: { Items }
      } = await kanbanApi.getCards();
      setItems(Items);
      console.log(Items);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };
  useEffect(() => {
    didMount();
  }, []);

  return <HomePresenter loading={loading} items={items} setItems={setItems} />;
};
export default HomeContainer;
