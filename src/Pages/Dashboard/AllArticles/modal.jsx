import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Modal = () => {
  // const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleDecline = async e => {
    e.preventDefault();
    const decline = e.target.decline.value;
    // console.log(decline);
    // const newDecline = {
    //   decline: {decline},
    // };
    // const res = await axiosSecure.patch(`/decline${}`, newDecline);
    toast.success(`decline Successfully 🔥`);
    navigate("/dashboard/allArticlesAdmin");
    // return res.data;
  };
  return (
    <div className="modal-box mx-auto mt-36">
      <h3 className="font-bold text-lg te text-center my-4">decline!</h3>
      <div className="">
        <form onSubmit={handleDecline}>
          <textarea
            name="decline"
            className="textarea w-full textarea-error"
            placeholder="decline"
            required
          ></textarea>
          <input
            type="submit"
            value="submit"
            className="px-8 py-3  my-4 leading-5 text-white  w-full transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
