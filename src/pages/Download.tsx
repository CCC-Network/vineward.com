import DownloadButtons from "../components/DownloadButtons";
import Reveal from "../components/Reveal";
import "./Download.css";

export default function Download() {
  return (
    <>
      <section className="section download-hero">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Get Vineward</p>
            <h1>Choose how you'd like to install it</h1>
            <p className="download-hero__lede">
              Vineward is heading to the major app stores. Listings still in review are marked
              clearly below rather than left as dead links — check back, or reach out and we'll let
              you know the moment yours is live.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section download-section">
        <div className="container download-section__inner">
          <Reveal variant="up">
            <DownloadButtons />
          </Reveal>
        </div>
      </section>

      <section className="section download-note">
        <div className="container download-note__inner">
          <Reveal variant="left">
            <h3>Installing outside an app store</h3>
            <p>
              The direct APK download will let you install Vineward on Android without going through
              a store. You may need to allow installs from your browser in your device settings the
              first time. We'll publish that file, and step-by-step instructions, as soon as a
              release build is ready.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
