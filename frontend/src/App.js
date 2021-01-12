import React from "react"
import Header from "./components/Header"
import ToDoItem from "./components/ToDoItem"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            tasksToDo: [],
            loading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.refreshList = this.refreshList.bind(this)
    }

    componentDidMount() {
        this.refreshList();
    }

    //FETCH toDoItems from REST api and update state
    refreshList() {
        this.setState({loading: true})
        fetch("http://localhost:8000/api/thingstodo/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    tasksToDo: data.map(task =>
                        <ToDoItem
                            key={task.id}
                            task={task}
                            handleChange={this.handleChange}
                        />
                    ),
                    loading: false
                })
            })
    }

    //update state and POST updated toDoItem to REST api
    handleChange(id) {
        this.setState(prevState => {
            const updatedTasksToDo = prevState.tasksToDo.map(task => {
                console.log(task)
                if (task.props.task.id === id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                    return task
                }
            })

            return {
                tasksToDo: updatedTasksToDo
            }
        })
    }

    /*




    fetch("http://localhost:8000/api/thingstodo/", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ??? })
            }) */

    render() {
        return (
            <div>
                <Header/>
                <main className="todolist">
                    {this.state.loading ? "loading..." : this.state.tasksToDo}
                </main>
            </div>
        )
    }
}

export default App;