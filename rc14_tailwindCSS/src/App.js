import Typography from "./components/Typography"
import SpacingAndSizing from "./components/SpacingAndSizing"
import HoverAndFocus from "./components/HoverAndFocus";
import FlexAndResponsive from "./components/FlexAndResponsive";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="dark:bg-gray-600 min-h-screen">
      <Navbar />
      <h1 className="text-2xl text-center text-purple-700 dark:text-white font-bold">
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
