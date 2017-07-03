import React, { Component } from 'react'
import DataForm from './DataForm.jsx'

class App extends Component {  
    constructor(props) {
        super(props)
    } 

    handleMessage(message) {
        console.log(message)
    }

    render() {
        return (
            <div>
                <h1>Form App</h1>
                <DataForm  onMessage={this.handleMessage.bind(this)}/>
            </div>
        )
    }
}

export default App
