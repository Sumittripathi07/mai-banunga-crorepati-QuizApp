import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Redux store
import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
