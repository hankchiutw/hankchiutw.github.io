import React, { Component } from "react";
import styled from "styled-components";

const messageBoxStyle = `
  .message-box {
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transform: scale(0, 0);
    transform-origin: 90% bottom;
    transition: transform 0.25s ease-out;
  }

  .message-box__head {
    background: var(--main-bg-color);
    padding: 16px;
    min-height: 140px;
    color: white;
  }

  .message-box__body {
    padding: 16px;
    background: white;
    max-height: calc(100vh - 120px);
  }
`;

const triggerStyle = `
  .trigger {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: 24px;
    margin-left: auto;
    text-align: center;
    line-height: 60px;
    font-size: 34px;
    color: white;
    font-weight: 400;
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .trigger__open {
    background: #f99149;
  }

  .trigger__close {
    background-color: var(--main-bg-color);
    border-radius: 50%;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    transform: scale(0, 0);
    transition: transform 0.25s ease-out;
  }
`;

const Container = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 999;
  width: 420px;

  ${messageBoxStyle}
  ${triggerStyle}

  &.opened .message-box,
  &.opened .trigger__close {
    transform: scale(1, 1);
  }
`;

interface State {
  opened: boolean;
}

export default class extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      opened: !this.state.opened,
    });
  }

  render() {
    return (
      <Container className={this.state.opened ? "opened" : ""}>
        <div className="message-box">
          <div className="message-box__head">head</div>
          <div className="message-box__body">body</div>
        </div>
        <div className="trigger" onClick={this.toggle}>
          <div className="trigger__open">...</div>
          <div className="trigger__close">×</div>
        </div>
      </Container>
    );
  }
}
