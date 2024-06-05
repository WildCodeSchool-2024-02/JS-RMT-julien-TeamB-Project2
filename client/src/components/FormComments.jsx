import { useState } from "react";
import "./FormComment.css";

function FormComments() {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstname("");
    setLastname("");
    setComment("");
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
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
      <div className="like-dislike-buttons">
        <button type="button" onClick={handleLike}>
          J'aime
        </button>
        <span>{likes}</span>
        <button type="button" onClick={handleDislike}>
          Je n'aime pas
        </button>
        <span>{dislikes}</span>
      </div>
    </form>
  );
}

export default FormComments;
