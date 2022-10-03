import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";

const btnValues = [
  ["v", "+-", "%", "/"],
  [7, 8, 9, "X"],
[4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
]

function App() {
  return (
    <div>
      <Wrapper>
        <Screen/>
          
      </Wrapper>

    </div>
  );
}

export default App;
