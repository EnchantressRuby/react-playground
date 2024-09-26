import Typography from "./components/Typography"
import SpacingAndSizing from "./components/SpacingAndSizing"
import HoverAndFocus from "./components/HoverAndFocus";
import FlexAndResponsive from "./components/FlexAndResponsive";

function App() {
  return (
    <div>
      <h1 className="text-2xl text-center text-purple-700 font-bold">
        Hi Tailwind
      </h1>
      <FlexAndResponsive />
      <HoverAndFocus />
      <SpacingAndSizing />
      <Typography />
    </div>
  );
}

export default App;
