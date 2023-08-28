import { TextField } from "@mui/material";
import { useEffect } from "react";



const InputField = (props) => {
    const {type, id, name, isFullWidth = true, propsValue, isRequired=true, label, isError, errorMessage = "", handleChange,inputRef } = props

    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, [inputRef.current]);
    const EmailInput = () => {

        return (
        <TextField
        error={isError}
        margin="normal"
        required={isRequired}
        fullWidth={isFullWidth}
        value={propsValue}
        id={id}
        label={label}
        name={name}
        helperText={isError && errorMessage}
        autoFocus
        // disablerestorefocus={"true"}
        type="email"
        onChange={handleChange}
        inputRef={inputRef}
        autoComplete="email"
      />
      )
    }
    const PasswordInput = () => {

        return (
        <TextField
        error={isError}
        margin="normal"
        required={isRequired}
        fullWidth={isFullWidth}
        value={propsValue}
        id={id}
        label={label}
        name={name}
        helperText={isError && errorMessage}
        // autoFocus
        // disablerestorefocus={"true"}
        type={type}
        onChange={handleChange}
        inputRef={inputRef}
        autoComplete="current-password"
      />
      )
    }
    console.log("name", name)
    return (
        type === "email" ? <EmailInput/> : type === "password" ? <PasswordInput/> : ""
    )
}

export default InputField;