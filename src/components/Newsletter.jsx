import { ArrowRight } from "../utils/icons.util";
import { NewsletterLogos } from "../utils/icons.util";

export default function Newsletter() {
  return (
    <div className="newsletter">
      <div className="content">
        <h3>
          Subscribe to our newsletter
        </h3>
        <p>
          Praesent fringilla erat a lacinia egestas. 
          Donec vehicula tempor libero et cursus. 
          Donec non quam urna. 
          Quisque vitae porta ipsum.
        </p>
      </div>
      <div className="inputfield">
        <input type="text" placeholder="Email address"/>
        <button>
          <span>Subscribe</span>
          <ArrowRight className="arrowright" />
        </button>
      </div>
      <div className="companylogo">
        <NewsletterLogos />
      </div>
    </div>
  );
}