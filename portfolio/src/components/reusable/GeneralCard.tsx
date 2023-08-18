import { StyledGeneralCard } from "../../styles/ReusableStyles"
import MainButton from "./MainButton"

interface IProps {
    img:any
    title:string
    description:string
    link:string
}

const GeneralCard = ({img, title, description, link}:IProps) => {
  return (
    <>
    <StyledGeneralCard>
        <div className="first-row">
            <img src={img} alt="photo"/>
        </div>
        <div className="second-row">
            <div><h3>{title}</h3></div>
            <div>{description}</div>
            <div> <MainButton text="Course" link={link} /></div>
        </div>
    </StyledGeneralCard>
    </>
  )
}

export default GeneralCard