import logo from "./logo.svg";
import "./App.css";
import PropsDemo from "./PropsDemo";
import PropsDemo2 from "./PropsDemo2";
import Message from "./Message";
import Likes from "./Likes";
import PropTypesDemo from "./PropTypesDemo";
import Parent from "./Shop/Parent";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Parent />
      {/* <Message />
      <hr />
      <Likes />
      <hr />
      <PropsDemo uname="Guest" email="support@helpdesk.co.in">
        this is the body part of the component
      </PropsDemo>
      <hr />
      <hr />
      <PropsDemo2 a="hello" b="bye" />
      <hr />
      <PropTypesDemo /> */}
    </div>
  );
}

export default App;
