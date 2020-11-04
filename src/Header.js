import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="header">
        <p className="title">{this.props.title}</p>
      </div>
    )
  }
}
export default Header