import Header from "./components/Header";
import Button from "./components/Button";
import Navbar from "./Navbar";
import NavItem from "./components/NavItem";
import { Image } from "./components/Image";

function App() {
  return (
    <div>
      <Navbar />
      <NavItem />
      <Header />
      <Button label="Add to Cart" />
      <Button label="Read more..." />
      <Button label="Register" />

      <Image />
      </div>
  );
}

export default App;