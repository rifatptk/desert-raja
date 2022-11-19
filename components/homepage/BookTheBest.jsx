import Image from "next/image";


const BookTheBest = () => {
  return (
    <section id="bookTheBest">
      <div className="md:mt-[85px] md:mb-8">
        <p className="text-center font-montserrat font-normal text-[15px]">Book the Best Desert Safari in Dubai</p>
        <div className="flex flex-col items-center md:items-start justify-between gap-[30px] md:flex-row  mt-3">
          <div className="flex-1 flex text-center justify-center items-center w-full rounded-lg overflow-hidden">
            <img src="/assets/images/home/best.jpg" alt="BookTheBest" className="rounded-lg  "/>
          </div>

          <div className="flex-1 text-[16px]">
              <div className=" md:pt-[30px]">
              <p className="pb-3">
              At Desert Raja, client care is more important than anything else.
              All of our packages include a free pickup and drop-off option. We
              appreciate your time and want you to enjoy an exciting as well as
              a calming desert trip with us.
            </p>
            <p className="pb-3">
              Our operators are never in a hurry and let you enjoy your moments
              whenever needed. We make sure that you are never bored while
              traveling in our 4×4 luxury cars with free wifi. At Desert Raja,
              we also try to keep the pricing affordable so that you can enjoy
              the cheapest desert safari in Dubai without killing the
              experience; we never overcharge if you are visiting Dubai and want
              to have an authentic Desert Safari Experience then you know where
              to find us.
            </p>
            <p>
              We are <b>Dubai’s leading Desert safari company</b>. We travel the
              untravelled dunes in the desert to make sure you experience the
              best Desert safari in Dubai. Unforgettable experience with a lot
              of fun and adventure. Book your spot Now!
            </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTheBest;
