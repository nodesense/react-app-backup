import React, {Component} from "react";


export default class About extends Component {

    constructor() {
        super();

        this.state = {
            members: ["Member 1", "Member 2"],
            showList: true
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

    render() {

        console.log("about render called");

        return (
            <div>
                <h2>About</h2>

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