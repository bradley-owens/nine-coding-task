import "./LearnMore.scss";
import LearnMoreImage from "../../assets/images/desktop/learnMoreImage.png";
import logo from "../../assets/images/desktop/googleLogo.png";

const LearnMore = () => {
  return (
    <section className="learn-container">
      <main className="learn-main">
        <img src={logo} alt={"google pixel logo"} />
        <div className="learn-text">
          <h1>Portraits photographed beautifully and authentically</h1>
          <p>
            Historically, camera technology has overlooked and excluded people
            with darker skin tones. Today's cameras carry that same bias. Google
            and Nine's portfolio of brands are helping improve the
            representation of diverse skin tones by producing image galleries
            for use across the Nine Network and Getty's Refinery29 We Are Many
            collection.
          </p>
          <button>Learn more about Pixel 6</button>
        </div>
      </main>
      <img
        className="learn-image"
        src={LearnMoreImage}
        alt="google pixel phone"
      />
    </section>
  );
};

export default LearnMore;
