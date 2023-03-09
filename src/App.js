import "./App.css";
import Clock from "./components/Clock/clock.js";
import Card from "./components/Clock/Card/Card.js";

function App() {
  return (
    <>
      <Card
        name={"Ivan"}
        surname={"Pizdić"}
        cardNumber={84729494739223}
        cvc={456}
        isErste={true}
      >
        <Clock name={"Ivan"} customInterval={1000} />
      </Card>
    </>
  );
}
export default App;
