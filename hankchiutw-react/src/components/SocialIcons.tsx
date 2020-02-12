import React from "react";
import styled from "styled-components";
import IconFont from "../shared/IconFont";

const Container = styled.div`
  a {
    text-decoration: none;
    width: 45px;
    height: 45px;
    font-size: 20px;
    margin: 5px 15px;
    color: inherit;
    border-radius: 50%;
    transition: background-color 0.25s linear 0s, color 0.25s linear 0s;
    display: inline-block;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: var(--social-icons-hover-fg);
  }
`;

interface Props {
  className?: string;
  profiles: any;
}

function SocialIcons({ className, profiles }: Props) {
  return (
    <Container className={className}>
      {profiles
        ? profiles.map(({ network, url }) => (
            <a href={url} target="_blank" rel="noopener noreferrer" key={url}>
              <IconFont icon={network} />
            </a>
          ))
        : []}
    </Container>
  );
}

export default SocialIcons;
