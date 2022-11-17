import { activitiesCardsData } from '../../../constants/constants';
import ActivitiesCard from './ActivitiesCard';

const Activities = () => {
  return (
    <section id="activities" className="my-20">
      <h1 className="text-2xl font-semibold mb-[60px]">
        Here is the list of activities you can perform while on your desert
        safari with us:
      </h1>
      {/* cards */}
      <div className="grid gap-5 md:gap-7 lg:grid-cols-3">
        {activitiesCardsData.map((el, i) => (
          <ActivitiesCard data={el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Activities;
