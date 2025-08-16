import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function SimpleContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Por favor completá todos los campos');
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };
    
emailjs.send('service_7bymypg', 'template_nepo48f', templateParams, 'm6cfnBCpJNEy1j7N9')
  .then(() => emailjs.send('service_7bymypg', 'template_id76bp6', templateParams, 'm6cfnBCpJNEy1j7N9'))
  .then(() => {
    alert('Mensaje enviado exitosamente!');
    setName('');
    setEmail('');
    setMessage('');
  })
  .catch((error) => console.error('Error enviando el mail:', error));

  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '20px',
    backgroundColor: '#0d1116',
    borderRadius: '8px',
    color: 'white',
    fontFamily: '"Lato", sans-serif',
    boxShadow: '0 0 10px rgba(80, 0, 202, 0.5)',
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#ccc',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #393e46',
    backgroundColor: '#222831',
    color: 'white',
    fontSize: '1rem',
    fontFamily: '"Lato", sans-serif',
  };

  const buttonStyle = {
    backgroundColor: '#5000ca',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Contacto</h1>
      <p style={subtitleStyle}>¿Tenés un proyecto que quieras realizar? ¡Colaboremos para hacerlo realidad!</p>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Tu nombre"
          style={inputStyle}
        />
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Tu email"
          style={inputStyle}
        />
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Tu mensaje"
          style={{ ...inputStyle, height: '120px', resize: 'vertical' }}
        />
        <button type="submit" style={buttonStyle}>Enviar</button>
      </form>
    </div>
  );
}





// import React, { useState, FormEvent } from 'react';
// import emailjs from '@emailjs/browser';

// export default function SimpleContact() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const sendEmail = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!name.trim() || !email.trim() || !message.trim()) {
//       alert('Por favor completá todos los campos');
//       return;
//     }

//     const templateParams = {
//       name,
//       email,
//       message,
//     };

//     emailjs
//       .send('service_7bymypg', 'template_nepo48f', templateParams, 'm6cfnBCpJNEy1j7N9')
//       .then(
//         (response) => {
//           alert('Mensaje enviado correctamente. ¡Gracias!');
//           setName('');
//           setEmail('');
//           setMessage('');
//         },
//         (error) => {
//           alert('Error al enviar el mensaje. Intentá nuevamente.');
//           console.error('EmailJS error:', error);
//         }
//       );
//   };

//   return (
//     <form onSubmit={sendEmail}>
//       <div>
//         <label>Nombre:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           placeholder="Tu nombre"
//         />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input
//           type="text"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           placeholder="Tu email"
//         />
//       </div>
//       <div>
//         <label>Mensaje:</label>
//         <textarea
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//           placeholder="Tu mensaje"
//         />
//       </div>
//       <button type="submit">Enviar</button>
//     </form>
//   );
// }





















// import React, { useRef, useState } from 'react';
// import '../assets/styles/Contact.scss';
// // import emailjs from '@emailjs/browser';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import TextField from '@mui/material/TextField';

// function Contact() {

//   const [name, setName] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [message, setMessage] = useState<string>('');

//   const [nameError, setNameError] = useState<boolean>(false);
//   const [emailError, setEmailError] = useState<boolean>(false);
//   const [messageError, setMessageError] = useState<boolean>(false);

//   const form = useRef();

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     setNameError(name === '');
//     setEmailError(email === '');
//     setMessageError(message === '');

//     /* Uncomment below if you want to enable the emailJS */

//     // if (name !== '' && email !== '' && message !== '') {
//     //   var templateParams = {
//     //     name: name,
//     //     email: email,
//     //     message: message
//     //   };

//     //   console.log(templateParams);
//     //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
//     //     (response) => {
//     //       console.log('SUCCESS!', response.status, response.text);
//     //     },
//     //     (error) => {
//     //       console.log('FAILED...', error);
//     //     },
//     //   );
//     //   setName('');
//     //   setEmail('');
//     //   setMessage('');
//     // }
//   };

//   return (
//     <div id="contact">
//       <div className="items-container">
//         <div className="contact_wrapper">
//           <h1>Contact Me</h1>
//           <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
//           <Box
//             ref={form}
//             component="form"
//             noValidate
//             autoComplete="off"
//             className='contact-form'
//           >
//             <div className='form-flex'>
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Your Name"
//                 placeholder="What's your name?"
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//                 error={nameError}
//                 helperText={nameError ? "Please enter your name" : ""}
//               />
//               <TextField
//                 required
//                 id="outlined-required"
//                 label="Email / Phone"
//                 placeholder="How can I reach you?"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 error={emailError}
//                 helperText={emailError ? "Please enter your email or phone number" : ""}
//               />
//             </div>
//             <TextField
//               required
//               id="outlined-multiline-static"
//               label="Message"
//               placeholder="Send me any inquiries or questions"
//               multiline
//               rows={10}
//               className="body-form"
//               value={message}
//               onChange={(e) => {
//                 setMessage(e.target.value);
//               }}
//               error={messageError}
//               helperText={messageError ? "Please enter the message" : ""}
//             />
//             <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
//               Send
//             </Button>
//           </Box>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;