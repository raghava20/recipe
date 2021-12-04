import './App.css';

function App() {
  // const recipe = "Chicken Tandoori";
  const recipes = [
    {
      name: "Chicken Tandoori",
      picture: "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg"
    },
    {
      name: "Parotta Shawarma",
      picture: "https://5.imimg.com/data5/NS/TO/YR/SELLER-5158094/shawarma-roll-500x500.jpeg"
    },
    {
      name: "Chicken Briyani",
      picture: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg"
    },
    {
      name: "Grill Chicken",
      picture: "https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-horizontal-1532030541.jpg"
    },
    {
      name: "Gobi Manchurian",
      picture: "https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Baked-Gobi-Manchurian43.jpg"
    }
  ];
  return (
    <div className="App">
      <div className="recipe-list-container">
        {recipes.map((recipe, index) => {
          return (<div key={index} className="recipe-container">
            <img className="recipe-picture" src={recipe.picture} alt={recipe.name} />
            <p className="recipe-name">{recipe.name}</p>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
