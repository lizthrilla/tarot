import React, { Component } from 'react'
import data from '../data.js'
import cx from 'classNames'

class Card extends Component {
  static propTypes = {
    image: React.PropTypes.string,
    handleClick: React.PropTypes.func,
    card: React.PropTypes.string
  }

  render () {
    return <div className={cx('card', {up: true, down: false})}>
      {data.cards.map((card, i) => {
        return <div key={i}>
          <img src={card.image} />
          <p>{card.description}</p>
          <p>{card.fortune}</p>
        </div>
      })}
    </div>
  }
}

export default Card
