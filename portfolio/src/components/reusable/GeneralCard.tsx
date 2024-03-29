import { StyledGeneralCard } from "../../styles/ReusableStyles";
import MainButton from "./MainButton";

interface IProps {
  img: any;
  title: string;
  description: string;
  link: string;
  button: string;
}

const GeneralCard = ({ img, title, description, link, button }: IProps) => {
  return (
    <>
      <StyledGeneralCard>
        <div className="first-row">
          <img src={img} alt="photo" width={290} />
        </div>
        <div className="second-row">
          <div>
            <h3>{title}</h3>
          </div>
          <div>{description}</div>
        </div>
        <div className="button-row">
          <MainButton text={button} link={link} />
        </div>
      </StyledGeneralCard>
    </>
  );
};

export default GeneralCard;
