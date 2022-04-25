import React, { Component} from 'react'

class LifecycleB  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Sneka'
        }
        console.log("lifecycleB constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivdeStateFromProps')
        return null
    }
    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }
    render() {
        console.log('LifecycelB render')
        return <div> Lifecycle B</div>
    }

}
export default LifecycleB