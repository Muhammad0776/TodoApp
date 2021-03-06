import { AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { AiOutlineEdit } from "react-icons/ai";
import React, { Component } from 'react'
import { Button, Input, } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './Todo.css';


export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos,
            typing: '',
            deleted: []
        }
    }

    setValues = (e) => {
        this.setState({ typing: e.target.value })
    }

    setTodo = () => {
        if (this.state.typing !== "") {
            let data = [...this.state.todos]
            data.push({ title: this.state.typing })
            this.setState({ todos: data })
            this.setState({ typing: "" })
        } else {
            alert('Type your task !')
        }
    }

    // deleted task
    deleteTodo = (index) => {
        let data = [...this.state.todos]
        data.splice(index, 1)
        this.setState({ todos: data })
    }

    // ClearAll
    // clearAll = () => {
    //     console.log(clearAll);

    //     this.state.todos.innerHTML = '';
    //     this.state.todos.count = 0;

    //     console.log(this.state.todos);
    // }


    render() {
        return (
            <div className="rounded overflow-hidden shadow p-3 bg-primary">
                <h2>Todo App</h2>

                <div className="d-flex align-items-center mb-3">
                    <Input
                        type="text"
                        placeholder="New Task"
                        value={this.state.typing}
                        className="me-2"
                        onChange={this.setValues}
                    />
                    <Button
                        color="dark"
                        onClick={this.setTodo}
                    >
                        <AiOutlinePlus color="white" fontWeight="600" fontSize="1.5rem" />
                    </Button>
                </div>

                <ListGroup>
                    {
                        this.state.todos.map((item, index) => {
                            return <ListGroupItem tag="a" href="#" className="w-100 d-flex justify-content-between" key={index} action>{index + 1}.  {item.title}
                                <div>
                                    <Button
                                        color="success"
                                        className="float-right me-3"
                                        onClick={this.state}
                                    >
                                        <AiOutlineEdit color="white" font-fontWeight="600" fontSize="1.5rem" />
                                    </Button>
                                    <Button
                                        color="danger"
                                        className="float-right"
                                        onClick={this.deleteTodo.bind(this, index)}
                                    >
                                        <BsTrash color="white" fontWeight="600" fontSize="1.5rem" />
                                    </Button>
                                </div>
                            </ListGroupItem>
                        })
                    }
                </ListGroup>

                <div class="d-flex justify-content-between align-items-center mt-3">
                    <p class="m-0">
                        You have <span id="count">3</span> pending lists
                    </p>
                    <button class="btn btn-danger" onclick="clearAll()">
                        Clear All
                    </button>
                </div>


            </div>
        )
    }
}