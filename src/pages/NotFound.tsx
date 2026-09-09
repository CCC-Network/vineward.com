import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container notfound__inner">
        <p className="section-kicker">Page not found</p>
        <h1>This path isn't part of Vineward yet</h1>
        <p>The page you're looking for doesn't exist, or hasn't been built.</p>
        <Link to="/" className="btn btn--primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
