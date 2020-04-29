import React, { Component } from 'react'
import FluxAction from './FluxAction'
import FluxStore from './FluxStore'

class FluxMainComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleClickHandler = this.handleClickHandler.bind(this)
    }

    handleClickHandler = () => {
        FluxStore.registerStore()
        //Registering the store on click of button
        FluxAction.showData('This is fired from app component button action')
    }

    componentDidMount() {
        console.log("inside componentDidMount")
    }



    render() {
        return (
            <div >
                <h1>This is simple flux example</h1>
                <button onClick={this.handleClickHandler}> Demonstrate Flux behaviour</button>
            </div>
        )
    }
}

export default FluxMainComponent
