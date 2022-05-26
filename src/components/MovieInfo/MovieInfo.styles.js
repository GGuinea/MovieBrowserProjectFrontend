import { BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : "#000"};

  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    display: block;
    max-width: none;
  }
`;
export const Text = styled.div`
  width: 100%;
  padding: 20x 40px;
  color: var(--white);
  overflow: hidden;
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50px;
    margin: 0;
  }
`;
