import { useState } from "react";
import styles from "./ReviewForm.module.scss";

type NewReview = {
  author: string;
  rating: number;
  comment: string;
};

type Props = {
  onSubmit: (review: NewReview) => void;
};

type FormErrors = {
  author?: string;
  rating?: string;
  comment?: string;
};

export const ReviewForm = ({ onSubmit }: Props) => {
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!author.trim()) {
      newErrors.author = "Author name is required.";
    }

    const numericRating = Number(rating);
    if (!numericRating || numericRating < 1 || numericRating > 5) {
      newErrors.rating = "Rating must be between 1 and 5.";
    }

    if (!comment.trim()) {
      newErrors.comment = "Review comment is required.";
    } else if (comment.trim().length < 10) {
      newErrors.comment = "Comment should be at least 10 characters long.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    onSubmit({
      author: author.trim(),
      rating: Number(rating),
      comment: comment.trim(),
    });
    
    setSuccessMessage("Your review has been added.");

    setAuthor("");
    setRating("5");
    setComment("");
    setErrors({});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Add your review</h3>

      <div className={styles.field}>
        <label htmlFor="review-author" className={styles.label}>
          Your name
        </label>
        <input
          id="review-author"
          type="text"
          className={styles.input}
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
            setSuccessMessage("");
          }}
          placeholder="Enter your name"
        />
        {errors.author && <p className={styles.error}>{errors.author}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="review-rating" className={styles.label}>
          Rating
        </label>
        <select
          id="review-rating"
          className={styles.select}
          value={rating}
          onChange={(event) => {
            setRating(event.target.value);
            setSuccessMessage("");
          }}
        >
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Very good</option>
          <option value="3">3 - Good</option>
          <option value="2">2 - Fair</option>
          <option value="1">1 - Poor</option>
        </select>
        {errors.rating && <p className={styles.error}>{errors.rating}</p>}
      </div>

      <div className={styles.field}>
        <label htmlFor="review-comment" className={styles.label}>
          Comment
        </label>
        <textarea
          id="review-comment"
          className={styles.textarea}
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
            setSuccessMessage("");
          }} 
          placeholder="Share your thoughts about this brand"
          rows={5}
          maxLength={500}
        />
        {errors.comment && <p className={styles.error}>{errors.comment}</p>}
      </div>

      {successMessage && (
        <p className={styles.successMessage}>{successMessage}</p>
      )}

      <button type="submit" className={styles.submitButton}>
        Submit review
      </button>
    </form>
  );
};