import React, { Component} from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Sneka'
        }
        console.log("lifecycleA constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivdeStateFromProps')
        return null
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
    render() {
        console.log('LifecycelA render')
        return (<div> 
            <div>Lifecycle A</div>
            <LifecycleB />
            </div>
        )
    }

}
export default LifecycleA