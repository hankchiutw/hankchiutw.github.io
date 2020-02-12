import React from "react";
import styled from "styled-components";
import SocialIcons from "./components/SocialIcons";
import ProfileCard from "./components/ProfileCard";
import ShadowBox from "./shared/ShadowBox";
import SectionBox from "./shared/SectionBox";
import SectionText from "./shared/SectionText";
import UnsafeMarkdown from "./shared/UnsafeMarkdown";
import GridBox from "./shared/GridBox";
import TimeLine from "./components/TimeLine";
import { _ } from "libs/i18n";

const Container = styled.div`
  width: 100%;
  background-color: #efefef;
  display: block;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 515px;
    background-image: url(assets/header.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  :after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: 515px;
    background-color: rgba(44, 51, 64, 0.8);
  }

  .container {
    position: relative;
    z-index: 2;
    max-width: 960px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }

  footer {
    text-align: center;
    padding: 30px 0;
    color: var(--ultralight-font-color);
    --social-icons-hover-fg: var(--main-font-color);
  }
`;

const NavBar = styled.div`
  display: block;
  padding: 20px 15px;
  margin-bottom: 40px;
`;

function App() {
  const basics = _("resume:basics", { returnObjects: true });
  const work = _("resume:work", { returnObjects: true });

  const timelineItems = work.map(item => ({
    startDate: item.startDate,
    endDate: item.endDate,
    thumbnail: item.thumbnail,
    link: item.website,
    title: item.company,
    subTitle: item.position,
    content: item.summary
  }));

  return (
    <Container>
      <NavBar />
      <div className="container">
        <ProfileCard basics={basics} work={work} imgURL="assets/portrait.png" />
        <SectionBox title={_("about-me.title")}>
          <SectionText>
            <UnsafeMarkdown markdown={_("about-me.detail")} />
          </SectionText>
        </SectionBox>
        <SectionBox title={_("tech-stack.title")}>
          <ShadowBox>
            <GridBox cells={_("tech-stack.stacks", { returnObjects: true })} />
          </ShadowBox>
          <SectionText>
            <UnsafeMarkdown markdown={_("tech-stack.detail")} />
          </SectionText>
        </SectionBox>
        <SectionBox title={_("work-exp.title")}>
          <TimeLine items={timelineItems} />
        </SectionBox>
        <footer>
          <SocialIcons profiles={basics.profiles} />
        </footer>
      </div>
    </Container>
  );
}

export default App;
