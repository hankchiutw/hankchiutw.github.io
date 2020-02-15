import ShadowBox from 'hc-react/shared/ShadowBox';
import UnsafeMarkdown from 'hc-react/shared/UnsafeMarkdown';
import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const ThumbnailAnchor = styled.a`
  height: var(--thumbnail-size);
  width: var(--thumbnail-size);
  margin-right: var(--thumbnail-margin);
  border: solid var(--thumbnail-border-size) var(--timeline-color);
  padding: var(--thumbnail-padding);
  border-radius: 50%;
  z-index: 1;
  background-color: white;

  & img {
    max-height: var(--thumbnail-size);
    max-width: var(--thumbnail-size);
    border-radius: 50%;
  }

  pointerevents: ${props => (props.href ? 'auto' : 'none')};
`;

const StretchItem = styled.div`
  flex: 1;
`;

const DateWidget = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  height: var(--thumbnail-size);

  @media (max-width: 767px) {
    margin-bottom: 14px;
  }
`;

const DateLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  background-color: var(--main-bg-color);
  color: white;
  display: inline-block;
  padding: 0 16px;
  border-radius: 20px;
  height: 40px;
  line-height: 40px;
  position: relative;

  &:before {
    font-size: 20px;
    position: absolute;
    line-height: 40px;
    color: var(--main-bg-color);
    content: '\\25c0';
    left: -10px;
    top: 0px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Content = styled(ShadowBox)`
  font-size: 16px;
  text-align: left;
  background-color: var(--white);
  padding: 24px;
  border-top: solid 5px var(--main-bg-color);
  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--main-bg-color);
`;

const SubTitle = styled.div`
  text-transform: uppercase;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  --timeline-color: #27a79a50;
  --thumbnail-size: 60px;
  --thumbnail-margin: 35px;
  --thumbnail-border-size: 6px;
  --thumbnail-padding: 2px;
  --timeline-offset: calc(
    (
        var(--thumbnail-size) + var(--thumbnail-border-size) +
          var(--thumbnail-padding)
      ) * 0.5
  );

  @media (max-width: 767px) {
    --thumbnail-size: 40px;
    --thumbnail-margin: 14px;
    --thumbnail-border-size: 4px;
    --thumbnail-padding: 1px;
  }

  &:before {
    content: '';
    background-color: var(--timeline-color);
    width: var(--thumbnail-border-size);
    position: absolute;
    left: var(--timeline-offset);
    top: 0;
    bottom: 0;
    display: block;
    z-index: 0;
    border-radius: 3px;
  }
`;

interface Props {
  className?: string;
  items: TimeLineItem[];
}

export interface TimeLineItem {
  startDate: string;
  endDate?: string;
  thumbnail: string;
  link: string;
  title: string;
  subTitle: string;
  content: string;
}

export function TimeLine({ className, items }: Props) {
  const content = items.map(item => {
    const {
      startDate,
      endDate,
      link,
      thumbnail,
      title,
      subTitle,
      content,
    } = item;
    return (
      <Row key={startDate}>
        <ThumbnailAnchor href={link} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={link} />
        </ThumbnailAnchor>
        <StretchItem>
          <DateWidget>
            <DateLabel>
              {_formatDate(startDate)} - {_formatDate(endDate)}
            </DateLabel>
          </DateWidget>
          <Content>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <UnsafeMarkdown markdown={content} />
          </Content>
        </StretchItem>
      </Row>
    );
  });
  return <Container className={className}>{content}</Container>;
}

function _formatDate(str) {
  return str ? str.replace('-', '.').slice(0, 7) : '';
}
