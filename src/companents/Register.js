import React from "react";
import { connect } from "react-redux";
import "../css/register.css";
import { reduxForm, Field } from "redux-form";
import { registerPost } from "../actions";

class Register extends React.Component {
  renderInput = (props, type) => (
    <input {...props.input} type={type} />
  );

  onSubmit = (formValues) => {
    this.props.registerPost(formValues);
  };

  render() {
    return (
      <div>
        <div className="login-box">
          <h2 style={{ color: "white" }}>Kayıt Ol</h2>

          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="user-box">
              <br></br>
              <Field name="name"type="text" component={this.renderInput} />
              <label>İsim</label>
            </div>
            <div className="user-box">
              <br></br>
              <Field name="surname" type="text" component={this.renderInput} />

              <label>Soyisim</label>
            </div>
            <div className="user-box">
              <br></br>
              <Field name="email" type="email" component={this.renderInput} />
              <label>Email</label>
            </div>
            <div className="user-box">
              <br></br>
              <Field name="password" type="password" component={this.renderInput} />
              <label>Şifre</label>
              <p style={{ color: "white" }}>{this.props.message}</p>
              <button type="submit" className="btn btn-success">
                Kayıt Ol
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const validate = ({ name, surname, email, password }) => {
  const errors = {};
  if (!name) {
    errors.name = "Lütfen isim Giriniz";
  }
  if (!surname) {
    errors.name = "Lütfen Soyisim Giriniz";
  }
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
  form: "registerForm",
  validate,
})(connect(mapStateToProps, { registerPost })(Register));
