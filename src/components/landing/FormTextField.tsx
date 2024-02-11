import { TextField, Theme } from "@mui/material";

const FormTextField: React.FC<{ label: string, multiline: boolean }> = (props) => {
  return (
    <>
      <TextField
        multiline={props.multiline}
        rows={4}
        label={props.label}
        variant="outlined"
        InputLabelProps={{
          sx: {
            color: "white", // Set label color to white
            "&.Mui-focused": {
              // Styles applied when focused
              color: "white", // Set focused label color to white
            },
          },
        }}
        InputProps={{
          sx: {
            color: "white", // Set text color to white
            borderColor: "white", // Set border color to white
            "&.MuiOutlinedInput-root": {
              // Styles applied to the root outlined input element
              "& fieldset": {
                // Styles applied to the input fieldset
                borderColor: "white", // Set border color to white
              },
              "&:hover fieldset": {
                // Styles applied when input is hovered
                borderColor: "white", // Set border color to white
              },
              "&.Mui-focused fieldset": {
                // Styles applied when input is focused
                borderColor: "white", // Set focused border color to white
              },
            },
            "&::placeholder": {
              // Styles applied to the placeholder text
              color: "white", // Set placeholder text color to white
            },
            "&:focus::placeholder": {
              // Styles applied to the placeholder text when focused
              color: "white", // Set focused placeholder text color to white
            },
          },
        }}
      />
    </>
  );
};

export default FormTextField;
