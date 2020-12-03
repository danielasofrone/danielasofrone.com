
import { t } from '../i18n'

function validateEmail(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
   }
  return false;
  }

  export const formValidation = (inputs) => {
     let status = "success";
     let feedbackMessage = [];
     const keys = Object.keys(inputs)

for (const key of keys) {
  if (inputs[key] === '') {
    status = "error";
    feedbackMessage.push(`${t(`contact.form[${key}]`)} ${t('contact.form.required')}`);
   } else if ( key === 'email' && !validateEmail(inputs[key])) {
     status = 'error';
     feedbackMessage.push((t('required.valid.email')))
   }
  }
   return {
    feedbackMessage,
    status}
  };