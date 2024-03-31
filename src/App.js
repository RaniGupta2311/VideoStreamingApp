import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head"
import store from "./utils/store";
import Watch from "./components/Watch";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
function App() {
  return (
    <div className="App">
     {/* <h1 className="bg-red-700">Hello</h1> */}
     <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}/>
     </Provider>
    </div>
  );
}

const appRouter=createBrowserRouter([
 {
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<Watch/>
    }
  ]
 }

])
export default App;
// Head
// Body 
//   Sidebar
//     MenuItems
//   Main Container 
//     ButtonList
//     Video Container 
//       video card 
