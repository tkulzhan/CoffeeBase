import Drawer from "../components/Drawer/Drawer";
import ItemList from "../components/ItemList/ItemList";
import { store } from "../store/store";
import { Provider } from "react-redux";

const Marketplace = () => {
  return (
    <Provider store={store}>
      <Drawer>
        <ItemList />
      </Drawer>
    </Provider>
  );
};

export default Marketplace;
