import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps, nextProps){
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error){
            // check for register error
            if(error.id === 'REGISTER_FAIL'){
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
        }
    }

    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        //substr(1) will remove the first letter which is r. This is to prevent complete
        this.setState({ [e.target.name.substr(1)]: e.target.value })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = this.state;

        // Create User object
        const newUser = {
            name,
            email,
            password
        };

        // Attempt to register
        this.props.register(newUser);
    }

    render() {
        return(
            <div>
                <NavLink onClick={this.toggle} href="#">Register</NavLink>

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                    { this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null }
                    <Form onSubmit={this.handleOnSubmit} autoComplete="off">
                      <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                          type="text"
                          name="rname"
                          id="name"
                          placeholder="Name"
                          autoComplete="off"
                          onChange={this.onChange}
                        />
                        </FormGroup>

                        <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          name="remail"
                          id="email"
                          placeholder="Email"
                          autoComplete="off"
                          onChange={this.onChange}
                        />

                        </FormGroup>


                        <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          name="rpassword"
                          id="password"
                          placeholder="Password"
                          autoComplete="new-password"
                          onChange={this.onChange}
                        />
                        </FormGroup>

                        <Button color="dark" style={{ marginTop: '2rem' }} block>
                          Register
                        </Button>

                    </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);
