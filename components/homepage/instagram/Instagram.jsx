const instaFrames = [
  {
    id: 1,
    src: 'https://www.instagram.com/tv/CVd0SkHP_dM/embed/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fdesertraja.com&rp=%2F#%7B%22ci%22%3A2%2C%22os%22%3A4591%2C%22ls%22%3A3346.300000000745%2C%22le%22%3A3701%7D',
  },
  {
    id: 2,
    src: 'https://www.instagram.com/p/CUhyhy3lVOb/embed/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fdesertraja.com&rp=%2F#%7B%22ci%22%3A3%2C%22os%22%3A4795.600000023842%2C%22ls%22%3A1902.4000000059605%2C%22le%22%3A2348.800000011921%7D',
  },
  {
    id: 3,
    src: 'https://www.instagram.com/p/CUHzvg8M31t/embed/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fdesertraja.com&rp=%2F#%7B%22ci%22%3A4%2C%22os%22%3A5558.9000000059605%2C%22ls%22%3A1902.4000000059605%2C%22le%22%3A2348.800000011921%7D',
  },
  {
    id: 4,
    src: 'https://www.instagram.com/reel/CV6KGPHh-6I/embed/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fdesertraja.com&rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A2964%2C%22ls%22%3A1902.4000000059605%2C%22le%22%3A2348.800000011921%7D',
  },
  {
    id: 5,
    src: 'https://www.instagram.com/reel/CVz1mawNyW4/embed/?cr=1&v=14&wp=326&rd=https%3A%2F%2Fdesertraja.com&rp=%2F#%7B%22ci%22%3A1%2C%22os%22%3A2967%2C%22ls%22%3A1902.4000000059605%2C%22le%22%3A2348.800000011921%7D',
  },
];

const Instagram = () => {
  return (
    <section id="instagram" className="my-20">
      <h2 className="font-bold mb-10 md:text-center">
        Video Testimonials from our customers
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {instaFrames.map((el) => (
          <iframe
            key={el.id}
            className="mx-auto"
            width="320"
            height="440"
            src={el.src}
            frameBorder="0"
          />
        ))}
      </div>
      <div className="h-20"></div>
      <a
        className="bg-brand hover:bg-brand-orange rounded text-white px-[20px] py-[10px] my-10 w-fit mx-auto block"
        href="https://www.instagram.com/desertraja/"
      >
        Find Us on Instagram
      </a>
    </section>
  );
};

export default Instagram;
