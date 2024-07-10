import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"

function App() {

  return (
    <>
    <Provider store={appStore}>
     <Body/>
    </Provider>
    </>
  )
}

// Import the functions you need from the SDKs you need

export default App
