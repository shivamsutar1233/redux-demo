import { CakeContainer } from "./Components/CakeContainer";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CakeContainer />
      {/* <Routes>
        <Route path="/" element={<CakeContainer />} />
      </Routes> */}
    </Provider>
  );
}

export default App;
