import Typography from "./components/Typography"
import SpacingAndSizing from "./components/SpacingAndSizing"
import HoverAndFocus from "./components/HoverAndFocus";
import FlexAndResponsive from "./components/FlexAndResponsive";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="dark:bg-gray-600 min-h-screen">
      <Navbar />
      <h1>
        Hi Tailwind
      </h1>
      <ProfileCard />
      <FlexAndResponsive />
      <HoverAndFocus />
      <SpacingAndSizing />
      <Typography />
    </div>
  );
}

export default App;
