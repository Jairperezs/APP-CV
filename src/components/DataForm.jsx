import React, {Component} from 'react'

function Inputs({options, onChange, disabled}) {
    const listOption = options.map(option => {
        return (
            <label key={option.name} htmlFor={option.name}>
                {option.name}
                <select name={option.name} id={option.name} onChange={onChange} disabled={option.disabled}>
                    <option value="">Seleccionar</option>
                    {option.option.map(val => {
                        return (
                            <option key={val} value={val}>{val}</option>
                        )
                    })}
                </select>
            </label>
        )
    })

    return(
        <div>
            {listOption}
            <button type="submit" disabled={disabled}>Add</button>
        </div>
    )
}

class DataForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            lastname: ''  
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
            lastname: this.state.lastname
        }

        e.preventDefault() 
        this.props.onMessage(message)
    }

    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)} autoComplete="off">
                <Inputs options={[{name: "name", option: ["Services", "serc"], disabled: false},{name: "lastname", option: ["Serasdasd", "asd"], disabled: this.state.name ? false : true}]} onChange={this.handleInputChange} disabled={this.state.lastname ? false : true}/>
            </form>
        )
    }
}

export default DataForm