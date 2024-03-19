import React from 'react';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            data: 0
        };
    }
    add = () => {
    this.setState(State=>({data:State.data + 1}));
    }

    Rem = () => {
    this.setState(State=>({data:State.data -1}));
    }

    render() {
        return (
            <div>
                <h1>Counting NO :  {this.state.data}</h1>
                <button onClick={this.add} style={{margin:'7px'}}>Incre</button>
                <button onClick={this.Rem}>Decre</button>
            </div>
        );
    }
}

export default Counter;
