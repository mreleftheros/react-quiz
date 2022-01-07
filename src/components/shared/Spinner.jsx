const Spinner = ({ message }) => {
  return (
    <div className="select-none">
      <div className="text-9xl text-center animate-spin mb-4">&#8987;</div>
      <h2 className="text-4xl text-center">{message}</h2>
    </div>
  );
};

export default Spinner;
