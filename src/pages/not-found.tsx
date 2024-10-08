import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const historyBack = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <img
        src="/images/not-found.png"
        className="activity-banner w-full md:w-[80%] h-[50%] object-contain"
      />
      <div className="w-full h-[15%] flex justify-center items-center p-2">
        <div
          className="flex justify-center items-center gap-x-2 cursor-pointer p-2"
          onClick={historyBack}
        >
          <p className="text-xl font-medium text-[#240744]">
            Do you feel disoriented?
          </p>
          <img
            src="/images/arrow-back.png"
            className="object-contain w-16 h-16"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
