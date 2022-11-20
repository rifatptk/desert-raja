import Link from 'next/link';
import React from 'react';
import Container from '../../components/common/Container';
import AlsoLike from '../../components/evening-desert-safari-dubai-with-self-driven-quad/AlsoLike';
import Calendar from '../../components/evening-desert-safari-dubai-with-self-driven-quad/Calendar';
import TourLeft from '../../components/evening-desert-safari-dubai-with-self-driven-quad/TourLeft';
import TourPage from '../../components/evening-desert-safari-dubai-with-self-driven-quad/TourPage';

const tour = () => {
  return (
    <div>
      <TourPage />
      <Container>
        <div className="flex items-center gap-2 py-5">
          <Link href="/">
            <span className="font-bold text-[14px]">Home </span>
          </Link>
          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
          <p className="text-[13px]">
          Evening Desert Safari Dubai With Self Driven Quad in an OPEN Desert – Desert Raja
          </p>
        </div>
      </Container>
      <div className="w-full h-[1px] bg-brand-light-gray"></div>
      <Container>
        <div className="flex items-start space-x-8 py-14">
          <div className="flex-[3]">
            <TourLeft />
          </div>
          <div className="flex-[1] hidden md:block sticky top-0">
            <Calendar />
          </div>
        </div>
        <AlsoLike />
      </Container>
    </div>
  );
};

export default tour;
