import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  useEffect(() => {
    const responseHandler = (responseData) => {
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
    };
    sendRequest(
      {
        url: "https://react-http-311f1-default-rtdb.firebaseio.com/Meals.json",
      },
      responseHandler
    );
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const Loading = (
    <section className={classes.loading}>
      <p>Loading...</p>
    </section>
  );

  const Error = (
    <section className={classes.loading}>
      <p>Something went Wrong!</p>
    </section>
  );

  return (
    <section className={classes.meals}>
      {isLoading && Loading}
      {error && Error}
      {meals.length > 0 && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
