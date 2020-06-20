import React, { Component } from 'react'

export default class App extends Component{

    state= {
        peopleInSpace: []
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    peopleInSpace: result.people
                })
            })
    }

    render(){
        return(
            <ul>
                {this.state.peopleInSpace.map(person => person.name)}
            </ul>
        )
    }
}
