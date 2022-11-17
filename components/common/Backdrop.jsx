const RiBackdrop = ({ children, blur, close }) => {
  return (
    <div
      onClick={() => {
        close();
      }}
      className={`fixed inset-0 bg-black/50 ${blur ? `backdrop-blur-sm` : ''}`}
    >
      {children}
    </div>
  );
};

export default RiBackdrop;
