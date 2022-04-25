import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {
    render() {
        const { count ,incrementCount} = this.state
        return <h2 onMouseOver={incrementCount}> 
        Hovered {count} times </h2>
    }
}
export default UpdatedComponent (HoverCounter)