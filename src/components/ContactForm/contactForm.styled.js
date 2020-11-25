import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 10% ;
    @media (min-width: 567px) {
  margin: 0 20%;
  }
@media (min-width: 768px) {
  margin: 0 30%;
  }
`;

export const SectionTitle = styled.div`
  margin: 20px 0;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  color: #344854;
:before,
:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 2px;
  position: relative;
  vertical-align: middle;
  width: 10%;
}
:before {
  right: 0.5em;
  margin-left: -50%;
}
:after {
  left: 0.5em;
  margin-right: -50%;
}
@media (min-width: 576px) {
  margin: 70px 0;
  font-size: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const FormContainer = styled.div`
  margin-bottom: 40px;
`;

export const FieldHolder = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 10px;
`;

export const ButtonContainer= styled.div`
  width: 100%;
  float: left;
  margin-top: 20px;
  margin-bottom: 50px;
  text-align: center;
`;

export const AlertMessage= styled.div`
  width: 100%;
  float: left;
  padding: 20px;
  color: rgb(250, 179, 174);
  border: 1px solid ${({type}) => type ==='error' ? '#f44336' : 'green'};
  border-radius: 4px;
`;