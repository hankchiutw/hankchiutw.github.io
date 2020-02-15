import { Resume, Location } from 'features/resume/resume.model';
import React from 'react';
import styled from 'styled-components';
import ShadowBox from '../shared/ShadowBox';
import SocialIcons from './SocialIcons';

const profileContentStyle = `
  .profile__content {
    flex: 7;
    padding: 0 15px;
  }

  .profile__title {
    font-size: 36px;
    font-weight: 300;
    color: var(--main-font-color);
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid var(--seporator-color);
  }

  .profile__content:before {
    content: "HELLO";
    color: var(--white);
    font-size: 14px;
    font-weight: 700;
    padding: 7px 12px;
    background-color: var(--main-bg-color);
  }

  .profile__title:before {
    content: "";
    border-left: solid 8px var(--main-bg-color);
    border-bottom: solid 8px transparent;
    display: block;
    height: 7px;
    margin-left: 8px;
    margin-bottom: 18px;
  }

  .profile__title span {
    font-weight: 700;
  }

  .profile__label {
    font-size: 18px;
    font-weight: 400;
  }

  .profile__row {
    margin-bottom: 13px;
    display: flex;
  }

  .profile__sub-title {
    font-size: 12px;
    font-weight: 700;
    min-width: 120px;
    text-transform: uppercase;
  }

  .profile__sub-label {
    color: var(--light-font-color);
    font-weight: 400;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    .profile__title {
      text-align: center;
    }

    .profile__content:before {
      text-align: center;
      display: flex;
      max-width: 150px;
      justify-content: center;
      margin: auto;
    }

    .profile__title:before {
      display: flex;
      max-width: 150px;
      justify-content: center;
      height: 0px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 18px;
    }

    .profile__row {
      margin-bottom: 28px;
      flex-direction: column;
    }
  }
`;

const profilePortraitStyle = `
  .profile__portrait {
    flex: 5;
    padding: 0 15px;
    text-align: center;
    margin-bottom: 30px;
  }

  .profile__portrait img {
    width: 100%;
    max-width: 400px;
  }
`;

const Container = styled(ShadowBox)`
  display: block;

  .profile {
    background-color: white;
    padding: 57px 50px 15px;
    display: flex;
  }

  @media (max-width: 767px) {
    .profile {
      padding: 30px 20px 15px;
      display: block;
    }
  }

  ${profilePortraitStyle}
  ${profileContentStyle}

  .social-icons {
    background-color: var(--main-bg-color);
    padding: 15px 0;
    display: flex;
    justify-content: center;
    color: var(--white);
  }
`;

function ProfileCard({ basics, work, imgURL }: Resume) {
  const {
    name = '',
    label = '',
    location = {},
    email = '',
    profiles = [],
  } = basics;
  const { postalCode, countryCode } = location as Location;
  const { company, position } = work[0];

  const infos = Object.entries({
    location: `${countryCode}, ${postalCode}`,
    'e-mail': email,
    current: `${position}, ${company}`,
  }).map(([key, value]) => {
    return (
      <div className="profile__row" key={key}>
        <span className="profile__sub-title">{key}</span>
        <span className="profile__sub-label">{value}</span>
      </div>
    );
  });

  return (
    <Container>
      <div className="profile">
        <div className="profile__portrait">
          <img src={imgURL} alt="Hank Chiu" />
        </div>
        <div className="profile__content">
          <div className="profile__title">
            I&apos;m <span>{name}</span>
            <div className="profile__label">{label}</div>
          </div>
          <div className="profile__info">{infos}</div>
        </div>
      </div>
      <SocialIcons className="social-icons" profiles={profiles} />
    </Container>
  );
}

export default ProfileCard;
