import React from 'react';
import styled from 'styled-components';
import IconFont from './IconFont';
import UnsafeMarkdown from './UnsafeMarkdown';

const Container = styled.div`
  text-align: left;
  font-weight: 400;
  background-color: var(--white);
  padding: 50px 40px 25px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: auto auto;
  grid-row-gap: 25px;

  @media (max-width: 767px) {
    padding: 30px 20px;
    display: block;
  }

  .cell {
    margin: 0 15px 25px;
  }

  .icon-font {
    color: var(--main-bg-color);
    font-size: 35px;
    display: block;
    height: auto;
    margin-bottom: 20px;
  }

  .cell__title {
    font-size: 20px;
    text-transform: uppercase;
    margin: 0;
  }

  .cell__subtitle {
    font-size: 16px;
    margin: 15px 0 0;
    color: var(--main-bg-color);
  }

  hr {
    width: 100%;
    max-width: 130px;
    height: 5px;
    background-color: var(--seporator-color);
    border: 0;
    display: inline-block;
    margin: 25px 0 0;
  }

  .cell__detail {
    font-size: 16px;
    word-break: break-word;
  }
`;

interface Props {
  className?: string;
  cells: Cell[];
}

interface Cell {
  icon: string;
  title: string;
  subTitle: string;
  detail: string;
}

const GridBox = ({ className, cells }: Props) => {
  const content = cells.map(({ icon, title, subTitle, detail }) => {
    return (
      <div className="cell" key={title}>
        <IconFont className="icon-font" icon={icon} />
        <div className="cell__title">{title}</div>
        <div className="cell__subtitle">{subTitle}</div>
        <hr />
        <UnsafeMarkdown className="cell__detail" markdown={detail} />
      </div>
    );
  });
  return <Container className={className}>{content}</Container>;
};

export default GridBox;
