import ContextProvider from "./store/ContextProvider";

import Desktop from "./components/UI/desktop/Desktop.component";

function App() {
  return (
    <ContextProvider>
      <Desktop />
    </ContextProvider>
  );
}

export default App;
