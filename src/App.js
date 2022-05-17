import logo from "./logo.svg";
import "./App.css";
import PropsDemo from "./PropsDemo";
import PropsDemo2 from "./PropsDemo2";

function App() {
  return (
    <div className="App">
      <PropsDemo uname="Guest" email="support@helpdesk.co.in">
        this is the body part of the component
      </PropsDemo>
      <hr />
      <hr />
      <PropsDemo2 a="hello" b="bye" />
    </div>
  );
}

export default App;
