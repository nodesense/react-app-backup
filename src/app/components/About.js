import React, {Component} from "react";


export default class About extends Component {

    constructor() {
        super();

        this.state = {
            members: ["Member 1", "Member 2"],
            showList: true,
            pageLikes: 0
        }

    }

    addMember() {
        let name = "Member " + Math.ceil(Math.random() * 100000);
        this.setState({
            members: [...this.state.members, name]
        });
    }

    showHide() {
        // set the state
        //calls render
        this.setState({
            showList: !this.state.showList
        })
    }

    empty() {
        this.setState({
            members : []
        });
    }

    up = () => {
        this.setState({
            pageLikes : this.state.pageLikes + 1
        })
    }

    down = () => {
        this.setState({
            pageLikes : this.state.pageLikes - 1
        })
    }


    render() {

        console.log("about render called");

        return (
            <div>
                <h2>About</h2>

                 <span>{this.state.pageLikes}</span>

                <button id="up" onClick={this.up}>
                    Up
                </button>

                <button className="downBtn"  onClick={this.down}>
                    Down
                </button>

                <button onClick={() => this.addMember()}>
                    Add
                </button>

                <button onClick={() => this.empty()}>
                    Empty
                </button>

                {/* comments */}
                <button onClick={() => this.showHide()}>
                    {this.state.showList ? "Hide": "Show"}
                </button>

                {  this.state.showList &&  
                  <ul>
                    {
                        this.state.members.map( (member, index) => (
                            <li key={index} > {member} </li>
                        ))
                    }
                 </ul>
                }

             
            </div>
        )
    }

}