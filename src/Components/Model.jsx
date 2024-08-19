const Model = ({ ismodelOpen, setismodelOpen, children }) => {
  if (!ismodelOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <button
          className="absolute top-0 right-4 text-gray-300 text-3xl"
          onClick={() => setismodelOpen(false)}
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Model;
