import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Wrapper from "./Wrapper";
import Card from "./Card";
import Gradient from "./Gradient";
import { Link } from "react-router-dom";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const check = localStorage.getItem("popular");

    if(check) {
        setPopular(JSON.parse(check));

    } else{
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
          );
          const data = await api.json();

          localStorage.setItem("popular", JSON.stringify(data.recipes));
          setPopular(data.recipes);
          console.log(data.recipes);
    }

    
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>

        <Splide options={{
            perPage: 4,
            arrow: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
        }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}







export default Popular;
