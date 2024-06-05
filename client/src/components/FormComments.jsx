import { useState } from "react";
import "./FormComment.css";

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
    <form className="formContainer" onSubmit={handleSubmit}>
      <label>
        Nom:
        <input
          type="text"
          value={Lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />
      </label>
      <label>
        Prénom:
        <input
          type="text"
          value={Firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
      </label>
      <div>
        <label>
          Commentaire:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormComments;
