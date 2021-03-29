import React, { useEffect, useState } from "react";
import "./default.scss";
import axios from "axios";


function App() {

  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {

    const unsubscribe = axios.get("https://data.boston.gov/api/3/action/datastore_search?resource_id=f1e13724-284d-478c-b8bc-ef042aa5b70b&limit=10&q=42")
      .then((response) => {

        setRestaurant(response.data.result.records);
      }).catch((error) => {

        console.log(error.message);

        setRestaurant(offlineRestaurantData)
      })

    return unsubscribe;

  }, [restaurant]);

  return (
    <React.Fragment>
      <h1>Foodie</h1>
      <ul>
        {restaurant.map((rest) => {

          return <li key={rest._id}>{rest._id} --- {rest.BusinessName}</li>

        })}
      </ul>
    </React.Fragment>
  );
}

export default App;
