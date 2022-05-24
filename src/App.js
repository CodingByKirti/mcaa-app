import logo from "./logo.svg";
import "./App.css";
import PropsDemo from "./PropsDemo";
import PropsDemo2 from "./PropsDemo2";
import Message from "./Message";
import Likes from "./Likes";
import PropTypesDemo from "./PropTypesDemo";

function App() {
  return (
    <div className="App">
      <Message />
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
      <PropTypesDemo />
    </div>
  );
}

export default App;
