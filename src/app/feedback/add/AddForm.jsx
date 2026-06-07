"use client";

const AddForm = () => {
  const handleAddFeedback = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const res = await fetch("http://localhost:3000/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    if (data.insertedId) {
      alert("Successfully feedback added.");
    }
  };

  return (
    <div>
      <form onSubmit={handleAddFeedback}>
        <textarea
          name="message"
          rows={10}
          cols={70}
          required
          className="border-2 rounded px-3 py-2 mb-2"
        ></textarea>
        <hr />
        <button className="border-2 px-4 py-2 bg-amber-300 hover:bg-amber-400 transition-all my-5 rounded hover:text-white">
          Add Feedback
        </button>
      </form>
    </div>
  );
};

export default AddForm;
