import Header from "./components/layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Fragment>
    <Cart/>
     <Header/>
     <main>
      <Meals/>
     </main>
    </Fragment>
  );
}

export default App;
