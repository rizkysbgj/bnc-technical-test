import React, { useState } from "react";
import { Button, Form, Icon, Input } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import './Login.style.css';

const Login = () => {
  const { setValue, handleSubmit } = useForm();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const fields = [
    {
      label: 'Corporate Account No.',
      placeholder: 'Corporate Account No.',
      type: 'text',
      name: 'accountNo'
    },
    {
      label: 'User ID',
      placeholder: 'User ID',
      type: 'text',
      name: 'userId'
    },
    {
      label: 'Login Password',
      placeholder: 'Login Password',
      type: isPasswordShown ? 'text' : 'password',
      icon: isPasswordShown ? 'eye slash' : 'eye',
      name: 'password'
    }
  ];

  const onClickPasswordIcon = () => {
    if(isPasswordShown) {
      setIsPasswordShown(false);

      return;
    }

    setIsPasswordShown(true);
  }

  const onSubmit = (value) => {
    console.log(JSON.stringify(value));
  };

  const renderIcon = (name) => {
    return(<Icon name={name} link onClick={onClickPasswordIcon} />);
  };

  const renderInput = (field, index) => {
    const { label, placeholder, type, icon, name} = field;

    return (
        <div className="inputItemContainer" key={index}>
          <label className="labelText">{label}</label>
          <Input
            name={name}
            fluid 
            placeholder={placeholder} 
            type={type} 
            icon={icon && renderIcon(icon)}
            onChange={async (e, { name, value }) => {
              setValue(name, value);
            }}
            className="inputField"
          />
        </div>
    )
  };

  const renderButton = () => {
    return(
      <div className="buttonContainer">
        <Button
          type="submit"
          color="yellow" 
          className="buttonLogin"
        >
          Login
        </Button>
      </div>
    )
  }

  const renderFooter = () => {
    return(
      <div className="footerContainer">
        <p>Without Account?</p>
        <a href="/">Register Now</a>
      </div>
    )
  }

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="loginContainer">
        <div className="inputContainer">
            {fields.map((field, index) => renderInput(field, index))}
        </div>
        {renderButton()}
        {renderFooter()}
      </div>
    </Form>
  )
}

export default Login;