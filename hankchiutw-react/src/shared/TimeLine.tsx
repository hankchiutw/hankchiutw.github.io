import React from "react";
import styled from "styled-components";
import DateCard from "./DateCard";
import ShadowBox from "./ShadowBox";

const layoutStyle = `
  .box-container {
    width: calc(50% - 35px);
    margin-bottom: 25px;
    position: relative;
  }

  .box-container:nth-child(odd) {
    float: left;
  }

  .box-container:nth-child(even) {
    float: right;
  }

  .box-container:nth-child(2) {
    margin-top: 50px;
  }

  .box-container:last-child {
    float: right;
  }

  @media (max-width: 767px) {
    .box-container {
      width: 100%;
    }

    .box-container:nth-child(odd) {
      float: none;
    }

    .box-container:nth-child(even) {
      float: none;
    }

    .box-container:nth-child(2) {
      margin-top: 0;
    }
  }
`;

const arrowAndDot = `
  --arrow-offset: -18px;
  --dot-offset: -39px;
  --arrow-top: 4%;
  --dot-top: calc(4% + 20px);

  .box-container:before {
    font-size: 80px;
    position: absolute;
    line-height: 44px;
    color: white;
    top: var(--arrow-top);
  }

  .box-container:after {
    content: "";
    border-radius: 50%;
    background-color: var(--main-bg-color);
    width: 8px;
    height: 8px;
    position: absolute;
    top: var(--dot-top);
  }

  @media (max-width: 767px) {
    .box-container:before {
      display: none;
    }

    .box-container:after {
      display: none;
    }
  }

  .box-container:nth-child(odd):before {
    content: "\\276f";
    right: var(--arrow-offset);
  }

  .box-container:nth-child(odd):after {
    right: var(--dot-offset);
  }

  .box-container:nth-child(even):before {
    content: "\\276e";
    left: var(--arrow-offset);
  }

  .box-container:nth-child(even):after {
    left: var(--dot-offset);
  }

  .box-container:first-child:before {
    top: 35px;
  }

  .box-container:first-child:after {
    top: 55px;
  }

  .box-container:last-child:before {
    top: auto;
    bottom: 35px;
    content: "\\276e";
    right: auto;
    left: var(--arrow-offset);
  }

  .box-container:last-child:after {
    top: auto;
    bottom: 55px;
    right: auto;
    left: var(--dot-offset);
  }
`

const Container = styled.div`
  display: block;
  position: relative;

  :before {
    content: "";
    background-color: var(--main-bg-color);
    opacity: 0.2;
    width: 4px;
    position: absolute;
    left: calc(50% - 2px);
    top: 60px;
    bottom: 85px;
    display: block;
  }

  :after {
    clear: both;
    content: "";
    display: block;
  }

  ${layoutStyle}
  ${arrowAndDot}
`;

interface Props {
  className?: string;
  items: any;
}

function TimeLine({ className, items }: Props) {
  const content = items.map(item => {
    return (
      <ShadowBox className="box-container" key={item.startDate}>
        <DateCard {...item} />
      </ShadowBox>
    );
  });
  return <Container className={className}>{content}</Container>;
}

export default TimeLine;
