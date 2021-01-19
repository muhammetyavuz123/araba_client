import React from "react";
import { connect } from "react-redux";
import "../css/login.css";
import { reduxForm, Field } from "redux-form";
import {loginPost} from "../actions";

class Login extends React.Component {

  renderInput = (props, type) => (
    <input {...props.input} type={type} />
  );

  onSubmit = (formValues) => {
    this.props.loginPost(formValues);
  };

  render() {
    return (
      <div>
        <div className="login-box">
          <h2 style={{ color: "white" }}>Giriş</h2>

          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="user-box">
              <br></br>
              <Field name="email" type="email" component={this.renderInput} />
              <label>Email</label>
            </div>
            <div className="user-box">
              <br></br>
              <Field name="password" type="password" component={this.renderInput} />
              <label>Şifre</label>
              <button type="submit" className="btn btn-success">
                Giriş
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const validate = ({ email, password }) => {
  const errors = {};
 
  if (!email) {
    errors.name = "Lütfen Email Giriniz";
  }
  if (!password) {
    errors.name = "Lütfen Şifre Giriniz";
  }
  return errors;
};

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};
export default reduxForm({
  form: "loginForm",
  validate,
})(connect(mapStateToProps, { loginPost })(Login));