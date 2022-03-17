import React, { Component } from 'react'
import UpdatedComponent from '../HOC/withCounter'

class HoverCounter extends Component {
  render() {
    const {count, incrementCount} = this.props;
    return (
        <button onMouseOver={incrementCount}>
            Hovered {count} times.
        </button>
    )
  }
}

export default UpdatedComponent(HoverCounter)