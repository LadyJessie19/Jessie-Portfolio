import styled, { keyframes } from "styled-components";
import {
  fadeIn,
  merge,
  slideInUp,
  slideInDown,
  slideInLeft,
} from "react-animations";

const slideDownElements = merge(slideInDown, fadeIn);
const slideFadeElements = merge(slideInUp, fadeIn);
const slideLeftElements = merge(slideInLeft, fadeIn);

const slideUpAnimation = keyframes`${slideInUp}`;
const slideDownAnimation = keyframes`${slideDownElements}`;
const slideFadeAnimation = keyframes`${slideFadeElements}`;
const slideLeftAnimation = keyframes`${slideLeftElements}`;

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
  animation: 1s ${slideDownAnimation};

  .side-bar-icons {
    position: relative;
    right: 15px;
    display: flex;
    flex-direction: column;
  }

  img:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }

  @media screen and (max-width: 479px) {
    display: none;
  }
`;

export const StyledNavBar = styled.span`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.WhiteScreen};
  padding: 3px 9px;
  height: 25px;
  animation: 1s ${slideUpAnimation};

  span {
    min-width: fit-content;
    color: ${({ theme }) => theme.colors.CherryPink};
  }

  div {
    max-width: fit-content;
  }

  div:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }
  @media screen and (max-width: 479px) {
    width: 90%;
    flex-wrap: wrap;
    align-content: flex-end;
  }
`;

export const StyledQuote = styled.span`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  position: relative;

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
    left: 8px;
    top: -1rem;
  }
  .end-quote {
    background-color: ${({ theme }) => theme.colors.BackgroundGrey};
    padding: 7px;
    position: absolute;
    right: 8px;
    bottom: -1rem;
  }
  .phrase-quote {
    border: 1px solid ${({ theme }) => theme.colors.LightGrey};
    color: ${({ theme }) => theme.colors.WhiteScreen};
    font-size: 21px;
    font-weight: 500;
    padding: 0px 30px;
    position: relative;
  }
  .behind-quote {
    z-index: -2;
  }
  @media screen and (max-width: 479px) {
    width: 80vw;
    margin: 15vw 11vw;
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
  align-items: center;

  .inner-section {
    display: flex;
    justify-content: center;
    gap: 2rem;
    max-width: 100%;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 700px) and (max-width: 1024px) {
  }
`;

export const StyledSectionHeader = styled.div`
  display: flex;
  margin: 0.5rem auto;
  width: 90%;
  max-width: 80vw;

  .inner-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .left-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.WhiteScreen};
    font-size: 26px;
    p {
      min-width: fit-content;
      padding: 0.5rem 1rem;
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
    min-width: fit-content;
    color: ${({ theme }) => theme.colors.WhiteScreen};
  }
  .pink-line {
    width: 100%;
    height: 1px;
    padding-right: 1rem;
    background-color: ${({ theme }) => theme.colors.CherryPink};
  }
  @media screen and (max-width: 479px) {
    width: 100%;
    p {
      font-size: 20px;
    }
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
  @media screen and (max-width: 479px) {
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
  width: 300px;
  padding: 0.5rem;
  margin: 0 auto 3rem;

  div {
    width: 100%;
  }

  h3 {
    width: 100%;
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
  @media screen and (max-width: 479px) {
    margin-left: -30px;
    .footer-text {
      flex-wrap: wrap;
    }
  }
`;

export const StyledHeaderHomePage = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.BackgroundGrey};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  animation: 1s ${slideFadeAnimation};
`;

export const StyledMainHomePage = styled.div`
  width: 80%;
  margin: 150px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 479px) {
    width: 100%;
    margin: 170px auto 0;
  }
  @media screen and (min-width: 700px) and (max-width: 1024px) {
    .flex-wrap {
      width: 100%;
      justify-content: center;
      margin-bottom: 2rem;
    }
  }
`;

export const StyledHeaderElement = styled.h1``;

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
  @media screen and (max-width: 390px) {
    margin: 0 0 2rem;
    align-items: center;
    text-align: center;
    width: 95%;
  }
  @media screen and (min-width: 391px) and (max-width: 479px) {
    margin: 0 auto 2rem;
    align-items: center;
    text-align: center;
    width: 89%;
  }
  @media screen and (min-width: 700px) and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 2rem;
    align-items: center;
  }
`;

export const StyledContainerHomePage = styled.div`
  width: 80%;
  margin: 2rem auto;
  @media screen and (max-width: 479px) {
  }
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
  @media screen and (max-width: 479px) {
    width: unset;
    gap: 2rem;
  }
`;

export const StyledInnerContentContainer = styled.div`
  width: 40%;
  text-align: center;
  p {
    color: ${({ theme }) => theme.colors.WhiteScreen};
  }
  @media screen and (max-width: 479px) {
    width: 100%;
    .img-jessie {
      width: 340px;
    }
  }
  @media screen and (min-width: 700px) and (max-width: 1024px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const StyledSecondaryPageTitle = styled.div`
  width: 80%;
  margin: 120px auto 1rem;
  color: ${({ theme }) => theme.colors.WhiteScreen};

  span {
    color: ${({ theme }) => theme.colors.CherryPink};
  }
  h2 {
    font-size: 17px;
  }
  @media screen and (max-width: 479px) {
    margin: 185px auto 1rem;
  }
`;

export const StyledContactMain = styled.div`
  width: 80%;
  margin: 1rem auto 3rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    width: 60%;
    color: ${({ theme }) => theme.colors.WhiteScreen};
  }
  @media screen and (max-width: 479px) {
    text-align: center;
    margin: 1rem auto;
    flex-wrap: wrap;

    p {
      width: 100%;
    }
  }
`;

export const StyledSecondaryPageSection = styled.div`
  width: 70%;
  margin: 1rem auto 3rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.WhiteScreen};
  span {
    color: ${({ theme }) => theme.colors.CherryPink};
  }

  @media screen and (max-width: 479px) {
    flex-wrap: wrap;
    h1 {
      min-width: fit-content;
    }
    .all-media-itens {
      flex-wrap: wrap;
    }
  }
  @media screen and (min-width: 700px) and (max-width: 1024px) {
    .all-media-itens {
      flex-wrap: wrap;
    }
  }
`;

export const StyledAllMediaComp = styled.div`
  width: fit-content;
  padding: 6px 18px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }
  @media screen and (max-width: 479px) {
    flex-wrap: wrap;
  }
`;

export const StyledMainImgDisplay = styled.div`
  position: relative;
  animation: 1s ${slideLeftAnimation};
  @media screen and (max-width: 390px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    img {
      width: 360px;
    }
  }
  @media screen and (min-width: 391px) and (max-width: 479px) {
    margin: 0 auto;
  }
`;

export const StyledLabelImage = styled.div`
  position: absolute;
  bottom: -235px;
`;

export const StyledDropdown = styled.div`
  position: relative;
  width: 80px;

  .dropdown-toggle:hover {
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    right: 1%;
    width: 100%;
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.BackgroundGrey};
  }

  li {
    color: ${({ theme }) => theme.colors.CandyGreen};
    list-style: none;
    margin-bottom: 0.5rem;
    cursor: pointer;
    padding: 0.5rem 0.1rem;
    width: 90%;
  }

  li:hover {
    background-color: ${({ theme }) => theme.colors.HoverPink};
  }
`;

export const StyledItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StyledListItem = styled.div`
  list-style: none;
  padding: 0.5rem;
  margin: 0 0.5rem 1rem;
  width: fit-content;
  border: 1px solid ${({ theme }) => theme.colors.WhiteScreen};
  @media screen and (max-width: 479px) {
    text-align: center;
    width: 100%;
    font-size: 15px;
  }
`;

export const StyledLogoComponent = styled.span`
  cursor: pointer;
  padding-left: 10px;
  img {
    width: 210px;
  }
  @media screen and (max-width: 479px) {
    margin: 0 auto;
    padding-left: 0;
    img {
      width: 290px;
    }
  }
`;

export const StyledImgLeftSide = styled.div`
  position: absolute;
  top: 70vh;
  left: -10px;
  z-index: -1;
  display: flex;
  flex-direction: column;
  gap: 100vh;
  overflow-y: auto;
  @media screen and (max-width: 479px) {
    display: none;
  }
`;

export const StyledImgRightSide = styled.div`
  position: absolute;
  top: 70vh;
  right: -10px;
  z-index: -1;
  display: flex;
  flex-direction: column;
  gap: 100vh;
  overflow-y: hidden;
  @media screen and (max-width: 479px) {
    display: none;
  }
`;

export const StyledContentDivision = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
  }
`;
