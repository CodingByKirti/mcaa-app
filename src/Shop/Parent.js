import React, { Component } from "react";
import PropTypesDemo from "../PropTypesDemo";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: "Chocolate 🍫", cost: 100, count: 0 },
        { name: "Candy 🍬 ", cost: 10, count: 0 },
        { name: "Juice 🍸", cost: 120, count: 0 },
        { name: "Cookie 🍪 ", cost: 90, count: 0 },
      ],
      totalCost: 0,
      totalCount: 0,
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem = (name) => {
    let itms = this.state.items.map((i) => {
      if (i.name == name) {
        i.count++;
        this.state.totalCost += i.cost;
        this.state.totalCount++;
      }
      return i;
    });
    this.setState({
      items: itms,
      totalCost: this.state.totalCost,
    });
  };
  render() {
    return (
      <div>
        <h5>Items in cart 💼 {this.state.totalCount}</h5>
        <h5>Cart value 💼 {this.state.totalCost}</h5>
        {this.state.items.map((i) => {
          return (
            <Child
              name={i.name}
              cost={i.cost}
              count={i.count}
              addItem={this.addItem}
            />
          );
          //   console.log(i.name);
        })}
        {/* <Child /> */}
      </div>
    );
  }
}
