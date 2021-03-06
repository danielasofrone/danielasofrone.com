import styled from 'styled-components';

export const Parallax = styled.div`
  background-image: url('https://live.staticflickr.com/3803/33269203366_888aa81cbd_h.jpg');
  min-height: 700px;
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  font-family: 'Chivo', sans-serif;
  background-color: transparent;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CenteredText = styled.div`
  position: absolute;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Chivo', sans-serif;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NavBarHolder = styled.div`
  position: absolute;
  top: 5%;
  right: 8%;
  @media (min-width: 768px) {
    top: 8%;
  }
`;
