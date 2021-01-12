import React from "react"
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap"

class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        let {name, value} = event.target
        if (event.target.type === "checkbox") {
            value = event.target.checked
        }

        const activeItem = {...this.state.activeItem, [name]: value}
        this.setState({activeItem})
    }

    render() {
        const {toggle, onSave} = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>To Do Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="label">Label</Label>
                            <Input
                                type="text"
                                name="label"
                                value={this.state.activeItem.label}
                                onChange={this.handleChange}
                                placeHolder="Enter a Task Description"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="checkbox">Completed</Label>
                            <Input
                                type="checkbox"
                                name="completed"
                                value={this.state.activeItem.completed}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}

export default CustomModal
