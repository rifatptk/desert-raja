const Hero = () => {
  return (
    <section id="hero">
      <video
        width="100%"
        height="100%"
        className="bg-video"
        src="/assets/videos/hero-vdo.mp4"
        type="video/mp4"
        preload="auto"
        autoPlay={true}
        loop="loop"
        muted={true}
        poster=""
      >
        <source src="/assets/videos/hero-vdo.mp4" type="video/webm" />
        <source src="/assets/videos/hero-vdo.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;
