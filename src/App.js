import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;
