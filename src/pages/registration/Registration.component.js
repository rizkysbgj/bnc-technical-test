import React, { useState } from "react";
import { Button, Form, Icon, Input, Select } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import './Registration.style.css';

const Registration = () => {
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
      label: 'Corporate Name',
      placeholder: 'Corporate Name',
      type: 'text',
      name: 'corporateName'
    },
    {
      label: 'User ID',
      placeholder: 'User ID',
      type: 'text',
      name: 'userId'
    },
    {
      label: 'User Name',
      placeholder: 'User Name',
      type: 'text',
      name: 'userName'
    },
    {
      label: 'Role',
      placeholder: 'Role',
      name: 'role',
      type: 'select',
      options: [
        {
          value: 'MAKER',
          text: 'Maker',
          key: 'Maker'
        },
        {
          value: 'APPROVER',
          text: 'Approver',
          key: 'Approver'
        }
      ]
    },
    {
      label: 'Phone No',
      placeholder: 'Phone No',
      type: 'text',
      name: 'phoneNumber'
    },
    {
      label: 'Email',
      placeholder: 'Email',
      type: 'text',
      name: 'email'
    },
    {
      label: 'Password',
      placeholder: 'Password',
      type: isPasswordShown ? 'text' : 'password',
      icon: isPasswordShown ? 'eye slash' : 'eye',
      name: 'password'
    },
    {
      label: 'Verification Code',
      placeholder: 'Verification Code',
      type: 'text',
      name: 'otp'
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

  const renderDropdown = (field) => {
    const { name, placeholder, options} = field;

    return (
      <Select 
        name={name}
        placeholder={placeholder} 
        options={options} 
        onChange={async (e, { name, value }) => {
          setValue(name, value);
        }}
        className="inputField"
      />
    )
  };

  const renderTextInput = (field) => {
    const { placeholder, type, icon, name} = field;
    
    return (
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
    )
  };

  const renderInputField = (field, index) => {
    const { label, type} = field;

    return (
        <div className="inputItemContainer" key={index}>
          <label className="labelText">{label}</label>
          {type === 'select' ? renderDropdown(field) : renderTextInput(field)}
        </div>
    )
  };

  const renderButton = () => {
    return(
      <div className="buttonContainer">
        <Button
          type="submit"
          color="yellow" 
          className="buttonRegistration"
        >
          Submit
        </Button>
      </div>
    )
  }

  const renderFooter = () => {
    return(
      <div className="footerContainer">
        <p>Already have an account?</p>
        <a href="/login">Login Now</a>
      </div>
    )
  }

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="registrationContainer">
        <div className="inputContainer">
            {fields.map((field, index) => renderInputField(field, index))}
        </div>
        {renderButton()}
        {renderFooter()}
      </div>
    </Form>
  )
}

export default Registration;