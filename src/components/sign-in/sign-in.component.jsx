import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);
    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    };

    render() {
        const { googleSignInStart } = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have on account</SignInTitle>
                <span>sign in with ypur email and password </span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            {' '}
                            sign in with Google{' '}
                        </CustomButton>
                    </ButtonsBarContainer>

                </form>

            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);