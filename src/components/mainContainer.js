import React from 'react';

export default class MainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            savings: 10000,
            TPRolls: 1,
            TPStock: 1000000,
            TPPrice: 4,
            days: 0,
            panic: 1,
            food: 10,
            health: 100,
            costDemandMultiplier: 1
        }
    }
    handleTPClick = () => {
        this.setState({
            TPRolls: this.state.TPRolls + 1,
            TPStock: this.state.TPStock - 1,
            savings: this.state.savings - (this.state.TPPrice * this.state.costDemandMultiplier)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="flex flex-row stats">
                    <h2>Savings</h2>
                    <p>{this.state.savings}</p>
                </div>
                <div className="flex flex-col">
                    <h2>Resources</h2>
                    <h4>Toilet Paper</h4>
                    <p>You have: {this.state.TPRolls} Rolls</p>
                    <p>Store Stock: {this.state.TPStock} Rolls</p>
                    <div class="flex flex-row">
                        <p>Buy 1 Roll: {this.state.TPPrice * this.state.costDemandMultiplier}</p>
                        <button onClick={() =>{this.handleTPClick()}}>+</button>
                    </div>
                </div>
            </div>
        )
    }
}