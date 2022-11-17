import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const ActivitiesCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* front-side */}
      <div
        onMouseOver={() => setIsFlipped(true)}
        className={`w-full h-[260px] lg:h-[300px] overflow-auto [&::-webkit-scrollbar]:hidden grid place-items-center rounded-[10px] bg-cover bg-brand-light-gray`}
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <h1 className="text-white text-xl font-bold">{data.title}</h1>
      </div>
      {/* flipped-side */}
      <div
        onMouseOver={() => setIsFlipped(true)}
        onMouseOut={() => setIsFlipped(false)}
        className={`w-full h-[260px] lg:h-[300px] overflow-auto [&::-webkit-scrollbar]:hidden rounded-[10px] bg-brand-light-gray p-6`}
      >
        <h2 className="text-xl text-center mb-4">{data.title}</h2>
        <div className="text-[13px] text-center space-y-3">{data.details}</div>
      </div>
    </ReactCardFlip>
  );
};

export default ActivitiesCard;
