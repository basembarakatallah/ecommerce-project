import { 
  ArrowRight, 
  GoogleLogo, 
  AmazonLogo, 
  PhilipsLogo, 
  ToshibaLogo, 
  SamsungLogo,
} from "../utils/icons.util";

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
          <ArrowRight className={{color: "#FFF"}} />
        </button>
      </div>
      <div className="companylogo">
        <GoogleLogo />
        <AmazonLogo />
        <PhilipsLogo />
        <ToshibaLogo />
        <SamsungLogo />
      </div>
    </div>
  );
}