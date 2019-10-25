import React from "react";

class Dog extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dog">
        <div>you have {this.props.love} loves</div>
        <div>you generate {this.props.lovePerSecond} loves per second</div>
        <img
          src="clickerDog.png"
          alt="Dog"
          onClick={this.props.getClickFromDog}
        />
      </div>
    );
  }
}

export default Dog;
