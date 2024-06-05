import { useState } from "react";

function FormComments() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstname("");
    setLastname("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Lastname">Nom:</label>
        <input
          type="text"
          id="Lastname"
          value={Lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="Firstname">Prénom:</label>
        <input
          type="text"
          id="Firstname"
          value={Firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Commentaire:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormComments;
