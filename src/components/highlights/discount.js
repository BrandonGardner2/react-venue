import React, { Component } from "react";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before June 20th</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus, nobis. Animi sint, dolorum deserunt incidunt
                impedit ex! Quos excepturi eaque, possimus, tempore aut
                distinctio eius officia beatae itaque maiores mollitia!
              </p>
              <div>button</div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
