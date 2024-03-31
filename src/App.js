import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head"
import store from "./utils/store";
function App() {
  return (
    <div className="App">
     {/* <h1 className="bg-red-700">Hello</h1> */}
     <Provider store={store}>
      <Head/>
      <Body/>
     </Provider>
    </div>
  );
}
export default App;
// Head
// Body 
//   Sidebar
//     MenuItems
//   Main Container 
//     ButtonList
//     Video Container 
//       video card 
