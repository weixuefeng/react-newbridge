import React from 'react';

class Card extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <a href={this.props.target}>
      <div className="Col center center-vertical" style={{ height: '200px', background: '#4dd0e1', margin: '20px'}}
      >
        <p>{this.props.name}</p>
      </div>
      </a>
    )
  }
}
export default Card