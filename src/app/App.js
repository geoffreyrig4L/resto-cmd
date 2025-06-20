import { Provider } from "react-redux";
import Cart from "../features/cart/Cart";
import Owner from "../features/owner/Owner";
import Total from "../features/total/Total";
import Menu from "../features/menu/Menu";
import Voucher from "../features/voucher/Voucher";
import Notes from "../features/notes/Notes";
import Fidelity from "../features/fidelity/Fidelity";
import "./App.css";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Owner />
        <Menu />
        <Fidelity />
        <div className="cart-container">
          <h1>Mon menu</h1>
          <Voucher />
          <Cart />
          <Total />
          <Notes />
        </div>
      </div>
    </Provider>
  );
}

export default App;
