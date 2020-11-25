import React, {useReducer} from 'react'
import * as S from './contactForm.styled'
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withNamespaces } from 'react-i18next';
import emailjs, { init } from 'emailjs-com';
import {formValidation} from '../utils'
init(process.env.REACT_APP_USER_ID);

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const initialState = {
  name: '',
  email: '',
  message: '',
  status: "idle",
  feedbackMessage: [],
}


const reducer = (state, action) => {
  switch (action.type) {
    case 'updateField': {
 return {
      ...state,
      [action.fieldName]: action.payload
  }
    }
    case 'success': {
     return {
       ...state,
      status: 'success',
      name: '',
      email: '',
      message: '',
      feedbackMessage: ['Message sent']
      }
        }
        case 'error': {
         return {
           ...state,
          status: 'error',
          feedbackMessage: action.payload
             }
            }
            case 'loading': {
              return {
                ...state,
               status: 'loading',
               feedbackMessage: []
                  }
                 }
    default: {
     return state;
    }
  }
}
const ContactForm = ({t})  => {
  const [state, dispatch] = useReducer (reducer, initialState);
  const {name, message, email, status, feedbackMessage} = state;

const handleSendForm = (evt) => {
  evt.preventDefault();

  dispatch({
    type: 'loading',
  })

  const {status: validationStatus, feedbackMessage: validationMessage} = formValidation({ name, message, email})

  if (validationStatus === 'error') {
    dispatch({
      type: 'error',
      payload: validationMessage
    })
    return;
  }

  const templateParams = {
    name, message, email
  };

emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       dispatch({
        type: 'success',
      })
    }, function(error) {
       console.log('FAILED...', error);
       dispatch({
        type: 'error',
      })
    });

}
const handleOnChange = ({ target: {name,value}}) => {
  dispatch({
    type: 'updateField',
    fieldName: name,
    payload: value,
  })
}

  const classes = useStyles();
  return (
    <S.Wrapper>
          <S.SectionTitle isSmall>
          {t('contact.form.title')}
         </S.SectionTitle>

      {feedbackMessage.length >= 1 &&
         <S.AlertMessage type={status} >
         {feedbackMessage.map(message => <p key={message}>{message}</p>)}
         </S.AlertMessage>
      }
      <S.FormContainer>
      <form noValidate autoComplete="off" className={classes.root}>
        <S.FieldHolder>
           <TextField
             id="outlined-basic"
             variant="outlined"
             label="Name"
             type="text"
             value={name}
             name="name"
             onChange={(evt) => handleOnChange(evt)}
          /></S.FieldHolder>
        <S.FieldHolder>
          <TextField
            variant="outlined"
            label="E-mail"
            type="text"
            value={email}
            name="email"
            onChange={(evt) => handleOnChange(evt)}
          /></S.FieldHolder>
          <S.FieldHolder>
          <TextareaAutosize
            variant="outlined"
            label= {t('contact.form.message')}
            placeholder="Message"
            value={message}
            name="message"
            onChange={(evt) => handleOnChange(evt)}
           />
          </S.FieldHolder>
          <S.ButtonContainer>
          <Button variant="outlined" onClick={handleSendForm}>
            {status === 'loading' ? "Sending..." : 'Send'}
            </Button>
            </S.ButtonContainer>
           <div>
           </div>
        </form>
        </S.FormContainer>
    </S.Wrapper>
  )
}


export default withNamespaces()(ContactForm);
