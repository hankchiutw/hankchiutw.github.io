import React from "react";
import styled from "styled-components";
import UnsafeMarkdown from "./UnsafeMarkdown";

const Container = styled.div`
  font-size: 16px;
  background-color: var(--white);
  padding: 24px;
  border-top: solid 5px var(--main-bg-color);
  position: relative;

  .date-label {
    font-weight: 700;
    color: var(--main-bg-color);
  }

  .header {
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }

  .header__thumbnail {
    height: 60px;
    width: 60px;
    margin-right: 20px;
  }

  .header__thumbnail img {
    max-height: 60px;
    max-width: 60px;
  }

  .header__title {
    font-size: 20px;
  }

  .header__sub-title {
    text-transform: uppercase;
    margin-top: 10px;
  }

  .content {
    text-align: left;
  }
`;

function _formatDate(str) {
  return str ? str.replace("-", ".").slice(0, 7) : "";
}

function DateCard(props) {
  const {
    className,
    startDate,
    endDate,
    thumbnail,
    link,
    title,
    subTitle,
    content
  } = props;
  return (
    <Container className={className}>
      <div className="date-label">
        {_formatDate(startDate)} - {_formatDate(endDate)}
      </div>
      <div className="header">
        <a
          className="header__thumbnail"
          href={link}
          style={{pointerEvents: link ? "auto" : "none"}}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={thumbnail} alt={link} />
        </a>
        <div>
          <div className="header__title">{title}</div>
          <div className="header__sub-title">{subTitle}</div>
        </div>
      </div>
      <UnsafeMarkdown className="content" markdown={content} />
    </Container>
  );
}

export default DateCard;
