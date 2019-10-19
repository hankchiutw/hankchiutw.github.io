import styled from "styled-components";

export default styled.div`
  text-align: center;
  color: var(--main-font-color);

  :before {
    content: "${props => props.title}";
    display: block;
    font-size: 34px;
    font-weight: 600;
    margin-top: 70px;
    margin-bottom: 25px;
  }
`;
