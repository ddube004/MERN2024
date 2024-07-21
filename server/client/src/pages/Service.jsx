import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();
  console.log(services);
  

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container grid grid-three-cols">
        {services.length == 0
          ? ""
          : services.map((currElem, index) => {
              return (
                <div className="card" key={index}>
                  <div className="card-img">
                    <img
                      src="/images/design.png"
                      alt="our services"
                      width="200"
                    />
                  </div>

                  <div className="card-details">
                    <div className="grid grid-two-cols">
                      <p>{currElem.provider}</p>
                      <p>{currElem.price}</p>
                    </div>
                    <h2>{currElem.services}</h2>
                    <p>{currElem.description}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
};
