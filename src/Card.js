import React from 'react';

class Card extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <a className="Col center" href={this.props.target}>
      <div className="token-card Col center-vertical center">
          <p>{this.props.name} >></p>
      </div>
      </a>
    )
  }
}
export default Card