import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { CardData } from "../../types/App";

export const SmallCard: React.FC<CardData> = ({ title, value, subTitle, percentage ,Good}) => {
    const Color = Good

    const renderArrow = () => {
      if (Color) {
        return <FaArrowAltCircleUp />;
      } else {
        return <FaArrowAltCircleDown />;
      }
    };

    return (
      <div className='smallCard'>
        <h3>{title}</h3>
        <h2>{value}</h2>
        <p>{subTitle}</p>
        <span className={Color ? "Green" : "Red"}> 
          {renderArrow()} {percentage}%
        </span>
      </div>
    );
  };