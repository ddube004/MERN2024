// export const Home = () => {
//   return <h1>Hello Home Page</h1>;
// };

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are best world largest IT Company</p>
              <h1>Welcome Deepak Dubey</h1>
              <p>
                Are you ready take your business to next level with cutting edge
                IT solution? Look no further at Thapa Technical, we specialise
                in providing innovotive IT services and solution tailorised to
                meet unique needs
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding togather"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      {/* {second section} */}
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registerd companies</p>
          </div>
          <div className="div1">
            <h2>100+</h2>
            <p>Happy Client</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well know developers</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>services</p>
          </div>
        </div>
      </section>
      {/* {third section} */}

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding togather"
              width="400"
              height="500"
            />
          </div>
          <div className="hero-content">
            <p>We are best world largest IT Company</p>
            <h1>Welcome Deepak Dubey</h1>
            <p>
              Are you ready take your business to next level with cutting edge
              IT solution? Look no further at Thapa Technical, we specialise in
              providing innovotive IT services and solution tailorised to meet
              unique needs
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
