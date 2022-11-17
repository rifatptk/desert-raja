const Container = ({ children, className }) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;