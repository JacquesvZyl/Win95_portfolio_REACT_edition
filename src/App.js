import ContextProvider from "./store/ContextProvider";
import ReactGA from "react-ga";
import Desktop from "./components/UI/desktop/Desktop.component";
const TRACKING_ID = "G-MF58SPC4P8"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <ContextProvider>
      <Desktop />
    </ContextProvider>
  );
}

export default App;
