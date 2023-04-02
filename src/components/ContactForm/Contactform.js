import React, {useReducer} from 'react';
import TextField from '@material-ui/core/TextField';
// eslint-disable-next-line no-duplicate-imports
import TextareaAutosize from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {withNamespaces} from 'react-i18next';
import emailjs, {init} from 'emailjs-com';
import {formValidation} from '../utils';
import * as S from './contactForm.styled';

// eslint-disable-next-line no-undef
init(process.env.REACT_APP_USER_ID);

const useStyles = makeStyles(theme => ({
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
  status: 'idle',
  feedbackMessage: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'updateField': {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case 'success': {
      return {
        ...state,
        status: 'success',
        name: '',
        email: '',
        message: '',
        feedbackMessage: [action.payload],
      };
    }
    case 'error': {
      return {
        ...state,
        status: 'error',
        feedbackMessage: action.payload,
      };
    }
    case 'loading': {
      return {
        ...state,
        status: 'loading',
        feedbackMessage: [],
      };
    }
    default: {
      return state;
    }
  }
};
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line id-length
const ContactForm = ({t}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // eslint-disable-next-line no-shadow
  const {name, message, email, status, feedbackMessage} = state;

  const handleSendForm = evt => {
    evt.preventDefault();

    dispatch({
      type: 'loading',
    });

    const {
      status: validationStatus,
      feedbackMessage: validationMessage,
    } = formValidation({name, message, email});

    if (validationStatus === 'error') {
      dispatch({
        type: 'error',
        payload: validationMessage,
      });
      return;
    }

    const templateParams = {
      name,
      message,
      email,
    };

    emailjs
      .send(
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_SERVICE_ID,
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams
      )
      .then(
        function() {
          dispatch({
            type: 'success',
            payload: t('message.sent'),
          });
        },
        function() {
          dispatch({
            type: 'error',
          });
        }
      );
  };
  const handleOnChange = ({target: {value}}, fieldName) => {
    dispatch({
      type: 'updateField',
      fieldName,
      payload: value,
    });
  };

  const classes = useStyles();
  return (
    <S.Wrapper>
      <S.SectionTitle isSmall>
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <a id="contact">{t('contact.form.title')}</a>
      </S.SectionTitle>
      {feedbackMessage.length >= 1 && (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <S.AlertMessage type={status}>
          {/* eslint-disable-next-line no-shadow */}
          {feedbackMessage.map(message => (
            <p key={message}>{message}</p>
          ))}
        </S.AlertMessage>
      )}
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
              onChange={evt => handleOnChange(evt, 'name')}
            />
          </S.FieldHolder>
          <S.FieldHolder>
            <TextField
              variant="outlined"
              label="E-mail"
              type="text"
              value={email}
              name="email"
              onChange={evt => handleOnChange(evt, 'email')}
            />
          </S.FieldHolder>
          <S.FieldHolder>
            <TextareaAutosize
              variant="outlined"
              label={t('contact.form.message')}
              placeholder="Message"
              value={message}
              name="message"
              onChange={evt => handleOnChange(evt, 'message')}
            />
          </S.FieldHolder>
          <S.ButtonContainer>
            <Button variant="outlined" onClick={handleSendForm}>
              {status === 'loading'
                ? t('contact.form.sending')
                : t('contact.form.send')}
            </Button>
          </S.ButtonContainer>
          <div></div>
        </form>
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default withNamespaces()(ContactForm);
