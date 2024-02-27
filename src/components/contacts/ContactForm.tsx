import { Button, FormControl } from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC<{}> = () => {
  const formRef: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_USER_ID!,
        }
      )
      .then(
        () => {
          console.log("SUCCESS... email has been sent!");
        },
        (error) => {
          console.log(`FAILED...error: ${error.text}`, error.text);
        }
      );
  };

  return (
    <>
      <form ref={formRef} onSubmit={sendEmail}>
        <FormControl fullWidth>
          <input type="text" name="user_name" placeholder="Nome" />
          <br />
          <input type="email" name="user_email" placeholder="Email" />
          <br />
          <input
            type="tel"
            name="user_phone"
            placeholder="Contacto Telefonico"
          />
          <br />
          <textarea name="message" placeholder="Mensagem" />
          <br />
          <Button variant="contained" color="error" size="large" type="submit">
            <strong>Enviar</strong>
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default ContactForm;
