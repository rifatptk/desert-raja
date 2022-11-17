const Hero = () => {
  return (
    <section id="hero">
      <video
        width="100%"
        height="100%"
        className="bg-video"
        src="https://embed-ssl.wistia.com/deliveries/24cc844626ee37fd48be6611d0a844b35fe3a2f3/file.mp4"
        type="video/mp4"
        preload="auto"
        autoPlay={true}
        loop="loop"
        muted={true}
        poster=""
      >
        <source
          src="https://embed-ssl.wistia.com/deliveries/24cc844626ee37fd48be6611d0a844b35fe3a2f3/file.mp4"
          type="video/webm"
        />
        <source
          src="https://embed-ssl.wistia.com/deliveries/24cc844626ee37fd48be6611d0a844b35fe3a2f3/file.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default Hero;
