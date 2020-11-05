import React from 'react';

class Card extends React.Component{

  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Col center" style={{ marginTop: '20px'}}>
        <div className="token-card text-center">
        <a href={this.props.target}>
        <div className="Col center center-vertical" style={{ height: '200px', width: '200px', margin: '10px'}}
        >
          <p>{this.props.name}</p>
        </div>
        </a>
        </div>
      </div>

    )
  }
}
export default Card