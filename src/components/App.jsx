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
        const styles = {
            section: {
                height: '240px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'sans-serif',
                border: '1px solid gray'
            },
            h1: {
                margin: 0,
                marginBottom: '.5em',
                color: 'teal',
                fontWeight: 300,
                fontSize: '36px'
            }
        }

        return (
            <section style={styles.section}>
                <h1 style={styles.h1}>Form App</h1>
                <DataForm  onMessage={this.handleMessage.bind(this)}/>
                <div>
                    <p style={{color: 'gray'}}>height: 240px, width: 100%</p>
                </div>
            </section>
        )
    }
}

export default App
