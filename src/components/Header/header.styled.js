import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Parallax = styled.div`
    background-image: url("https://live.staticflickr.com/3803/33269203366_888aa81cbd_h.jpg");
    min-height: 700px;
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 2.5rem;
    font-family: "PT Serif", serif;
    background-color: transparent;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 576px) {
      background-attachment: scroll;
      font-size: 1.5rem;
  }
`;

export const CenteredText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;