import styled from "styled-components";

const contentMap = {
  "paint-format": "\\e90c",
  stack: "\\e92e",
  bug: "\\e999",
  rocket: "\\e9a5",
  embed: "\\ea80",
  terminal: "\\ea81",
  github: "\\eab0",
  linkedin: "\\eaca",
  stackoverflow: "\\ead0",
  angular: "\\e900",
};

interface Props {
  icon: string;
}

export default styled.div<Props>`
  font-family: "icomoon" !important;
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  :before {
    content: "${props => contentMap[props.icon]}";
  }
`;
