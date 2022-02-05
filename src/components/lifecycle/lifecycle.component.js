import React, { Component } from 'react';

class LifeCycleDemo extends Component {
    constructor() {
        super();
        this.state = {
            remove: false
        }
        console.log("🚀 ~ file: constructor called ");
    }
    /**
     * @TODO If we use this without defining this.state in constructor {} 
     * @TODO then WARNING!! will be coming in the explorer.
     * @param {*} props 
     * @param {*} state 
     * @returns 
     */
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps() called !! ');
        return {};
    }
    componentDidMount() {
        console.log('component mounted!!')
    }
    componentDidUpdate() {
        console.log('LifeCycle component will update!!')
    }
    componentWillUnmount() {
        console.log('Lifecycle component will un-mount !!');
    }
    render() {
        console.log("🚀 ~ render called !! ");
        return !this.state.remove ?
            <div>
                <h1>LifeCycle Components</h1>
                <button onClick={e => this.setState({ remove: true })}>remove me</button>
            </div> : null;
    }
}

export default LifeCycleDemo;