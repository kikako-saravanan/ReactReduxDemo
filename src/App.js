import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import JuiceContainer from "./components/JuiceContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";
function App() {
  console.log("Store", store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <JuiceContainer />
        <NewCakeContainer />
        <ItemContainer />
        <ItemContainer cake />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
