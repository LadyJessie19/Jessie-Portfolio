import styled from "styled-components";

export const StyledMainButton = styled.button`
  background-color: ${({ theme }) => theme.colors.BackgroundGrey};
  color: ${({ theme }) => theme.colors.WhiteScreen};
  border: 2px solid ${({ theme }) => theme.colors.CherryPink};
  padding: 7px 20px;
  font-size: 16px;
  font-family: "Fira Code";
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }
`;

export const StyledTinySideBar = styled.span`
  position: fixed;
  top: 0px;
  left: 55px;

  .side-bar-icons {
    position: relative;
    right: 15px;
    display: flex;
    flex-direction: column;
  }

  img:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }

  @media screen and (max-width: 600px) {
    left: 27px;
  }
`;

export const StyledNavBar = styled.span`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.WhiteScreen};
  padding: 3px 9px;
  height: 25px;

  span {
    color: ${({ theme }) => theme.colors.CherryPink};
  }

  div:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }
`;

export const StyledQuote = styled.span`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 5%;

  .inner-quote {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-end;
  }
  .begin-quote {
    background-color: ${({ theme }) => theme.colors.BackgroundGrey};
    padding: 7px;
    position: absolute;
    right: 8px;
    top: 55px;
  }
  .end-quote {
    background-color: ${({ theme }) => theme.colors.BackgroundGrey};
    padding: 7px;
    position: absolute;
    left: 8px;
    top: -15px;
  }
  .phrase-quote {
    border: 1px solid ${({ theme }) => theme.colors.LightGrey};
    color: ${({ theme }) => theme.colors.WhiteScreen};
    font-size: 21px;
    font-weight: 500;
    padding: 0px 30px;
  }
  @media screen and (max-width: 600px) {
    width: 80vw;
    margin: 10vw;
  }
`;

export const StyledBigCardProject = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.LightGrey};
  display: flex;
  flex-direction: column;
  width: 300px;
  max-height: 600px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.WhiteScreen};
  position: relative;
  padding-bottom: 70px;

  .photo-row {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  .first-row {
    width: 100%;
    padding: 5px 0px 5px 2px;
    border-top: 1px solid ${({ theme }) => theme.colors.LightGrey};
    border-bottom: 1px solid ${({ theme }) => theme.colors.LightGrey};
    text-align: center;
  }

  .second-row {
    padding: 0.1rem 1rem;
    font-size: 13px;

    h4 {
      font-size: 16px;
      font-weight: 500;
    }
  }

  .button-row {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export const StyledSmallCardProject = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.LightGrey};
  display: flex;
  flex-direction: column;
  width: 270px;
  min-height: 300px;
  font-size: 14px;
  font-family: "Fira Code";
  position: relative;

  .first-row {
    padding: 0.5rem 0.5rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.LightGrey};
  }

  .second-row {
    border-top: 1px solid ${({ theme }) => theme.colors.LightGrey};
    padding: 1rem;
  }

  .row-one {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.WhiteScreen};
    margin-bottom: 0.5rem;
  }
  .row-two {
    color: ${({ theme }) => theme.colors.LightGrey};
    margin-bottom: 60px;
  }

  .button-row {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;

  .inner-section {
    display: flex;
    justify-content: center;
    gap: 2rem;
    max-width: 100%;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 600px) {
    margin-left: -2rem;
  }
`;

export const StyledSectionHeader = styled.div`
  display: flex;
  margin: 1rem 14%;

  .inner-header {
    max-width: 99vw;
    display: flex;
    align-items: center;
    gap: 3rem;
  }
  .left-header {
    display: flex;
    color: ${({ theme }) => theme.colors.WhiteScreen};
    font-size: 26px;
    p {
      min-width: 175px;
    }
  }
  .left-header > img {
    margin-left: 0.5rem;
  }
  p > span {
    color: ${({ theme }) => theme.colors.CherryPink};
  }
  .right-header {
    display: flex;
    width: 8vw;
    color: ${({ theme }) => theme.colors.WhiteScreen};
  }
`;

export const StyledSkillsSection = styled.div`
  .skills-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 7rem;
  }
  .right-side {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    width: 30%;
    gap: 1rem;
  }
  .left-side {
    height: fit-content;
  }
  @media screen and (max-width: 600px) {
    .right-side {
      width: 90%;
    }
  }
`;

export const StyledSkillCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.LightGrey};
  color: ${({ theme }) => theme.colors.LightGrey};

  .first-row {
    padding: 0.3rem;
  }
  .second-row {
    padding: 0.5rem;
    border-top: 1px solid ${({ theme }) => theme.colors.LightGrey};
  }
`;

export const StyledGeneralCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.LightGrey};
  width: 300px;
  position: relative;

  .first-row {
    text-align: center;
    padding: 0.3rem;
    height: 200px;
    display: flex;
    justify-content: center;
  }

  .second-row {
    height: 250px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.LightGrey};
    color: ${({ theme }) => theme.colors.LightGrey};
  }
  h3 {
    color: ${({ theme }) => theme.colors.WhiteScreen};
    font-weight: 400;
  }

  .button-row {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

export const StyledMessageMeCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.LightGrey};
  width: 66%;
  padding: 0.5rem;
  margin: 0 20% 10%;

  h3 {
    color: ${({ theme }) => theme.colors.WhiteScreen};
  }
  .row {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.LightGrey};
    cursor: pointer;
  }
  .row:hover {
    background-color: ${({ theme }) => theme.colors.CandyGreen};
    color: ${({ theme }) => theme.colors.BackgroundGrey};
  }
  span {
    font-size: 14px;
  }
`;

export const StyledFooter = styled.div`
  margin: 1rem 0 0 0;
  border-top: 1px solid ${({ theme }) => theme.colors.LightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .first-row {
    width: 70%;
    color: ${({ theme }) => theme.colors.WhiteScreen};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .second-row {
    color: ${({ theme }) => theme.colors.LightGrey};
    text-align: center;
  }

  .left-side {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .footer-text {
    color: ${({ theme }) => theme.colors.LightGrey};
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 15px;
  }

  img:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }
`;

export const StyledHeaderHomePage = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledMainHomePage = styled.div`
  width: 80%;
  margin: 4% auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMainTextHomePage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.WhiteScreen};
  width: 60%;
  h1 {
    max-width: 90%;
    font-size: 28px;
  }
  span {
    color: ${({ theme }) => theme.colors.CherryPink};
  }
  p {
    max-width: 90%;
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto 2rem;
    align-items: center;
    text-align: center;
  }
`;

export const StyledContainerHomePage = styled.div`
  width: 80%;
  margin: 2rem auto;
`;

export const StyledContainerSecondaryPage = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const StyledContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 0 10% 1rem;
  flex-wrap: wrap;
`;

export const StyledInnerContentContainer = styled.div`
  width: 40%;
  text-align: center;
  p {
    color: ${({ theme }) => theme.colors.WhiteScreen};
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledSecondaryPageTitle = styled.div`
  width: 80%;
  margin: 4rem auto;
  color: ${({ theme }) => theme.colors.WhiteScreen};

  span {
    color: ${({ theme }) => theme.colors.CherryPink};
  }
  h2 {
    font-size: 17px;
  }
`;

export const StyledSecondaryPageSection = styled.div`
  width: 70%;
  margin: 1rem auto 3rem;
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.WhiteScreen};

  span {
    color: ${({ theme }) => theme.colors.CherryPink};
  }
`;

export const StyledMainImgDisplay = styled.div`
  position: relative;
`;

export const StyledLabelImage = styled.div`
  position: absolute;
  bottom: -235px;
`;