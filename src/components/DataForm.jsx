import React, {Component} from 'react'

function Inputs({options, onChange, disabled}) {
    const styleSelect = {
        container: {
            display: 'flex',
        },
        item: {
            marginRight: '5px',
        },
        h1: {
            margin: 0,
            fontWeight: 300
        },
        select: {
            width: '100%',
            color: 'gray'
        },
        button: {
            display: 'flex',
            alignItems: 'flex-end'
        }
    }
    const listOption = options.map(option => {
        return (
            <div style={styleSelect.item} key={option.name}>
                <label htmlFor={option.name} style={styleSelect.h1}>{option.name}</label>
                <select style={styleSelect.select} name={option.name} id={option.name} onChange={onChange} disabled={option.disabled}>
                    <option value="">Seleccionar</option>
                    {option.option.map(val => {
                        return (
                            <option key={val} value={val}>{val}</option>
                        )
                    })}
                </select>
            </div>
        )
    })

    return(
        <div style={styleSelect.container}>
            {listOption}
            <div style={styleSelect.button}>
                <button style={{padding: '2px 5px',background: disabled.color, border: 'none', color: 'white'}} type="submit" disabled={disabled.value}>Add</button>
            </div>
        </div>
    )
}

class DataForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastname: '' ,
            job: '',
            service: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    
    handleInputChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    onSubmit(e) {
        const message = {
            name: this.state.name,
            lastname: this.state.lastname,
            job: this.state.lastname,
            service: this.state.lastname,
        }

        e.preventDefault() 
        this.props.onMessage(message)
    }

    render(){
        const styleForm = {
        }

        return (
            <form style={styleForm.form} onSubmit={this.onSubmit.bind(this)} autoComplete="off">
                <Inputs options={[{name: "name", option: ["Services", "serc"], disabled: false},{name: "lastname", option: ["Serasdasd", "asd"], disabled: this.state.name ? false : true},{name: "job", option: ["Serasdasd", "asd"], disabled: this.state.lastname ? false : true},{name: "service", option: ["Serasdasd", "asd"], disabled: this.state.job ? false : true}]} onChange={this.handleInputChange} disabled={this.state.service ? {value:false, color:'teal'} :{value: true}}/>
            </form>
        )
    }
}

export default DataForm