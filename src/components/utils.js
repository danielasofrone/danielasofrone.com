function validateEmail(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {return true;}
  return false;
  }

  export const formValidation = ({name, message, email, feedbackMessage}) => {
     feedbackMessage = "";
     const isNameValid = (name !== "");
     const isMessageValid = ( message !== "");

   if (!isNameValid) {
    feedbackMessage = "This field can't be empty";
  }
  if (!validateEmail(email)) {
    feedbackMessage = "Email is not valid, please try again.";
  }
  if (email === "") {
    feedbackMessage = "This field can't be empty";
  }
  if (!isMessageValid) {
    feedbackMessage = "This field can't be empty";
  }
  else {
    feedbackMessage = "Message sent";
  }
  };
  