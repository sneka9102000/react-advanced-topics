import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    render() {
        const { count, incrementCount } =this.state

        return <button onClick={incrementCount}>
            Clicked {count} times</button>
    }
}
export default UpdatedComponent (ClickCounter)