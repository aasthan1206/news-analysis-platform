import { useState } from "react";
import feedback1 from "../assets/images/feedback1.png";
import feedback2 from "../assets/images/feedback2.jpg";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const token = localStorage.getItem("accessToken");
  const handleChange = (e) => {
    setFeedback(e.target.value);
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { feedback };
      const response = await fetch("http://localhost:5002/feedback ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          feedback_desc: feedback,
        }),
      });
      alert("Feedback submitted successfully!");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/3">
        <div>
          <img src={feedback1} alt="feedback" />
        </div>
        <div>
          <img src={feedback2} alt="" />
        </div>
      </div>
      <div className="bg-gray-200 w-2/3 text-center py-16">
        <div className="text-3xl text-grey-dark font-merri font-semibold pb-6">
          Feel free to drop us your{" "}
          <span className="text-red-dark">feedback</span>{" "}
        </div>
        <form onSubmit={onFormSubmit}>
          <textarea
            name="feedback_desc"
            value={feedback}
            onChange={handleChange}
            id=""
            rows="10"
            className="border-grey-dark w-96 py-2 px-4 font-merri"
          ></textarea>
          <div>
            <button className="bg-red-dark font-bold text-white w-96 text-center py-2 rounded-sm hover:bg-grey-dark mx-auto my-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
