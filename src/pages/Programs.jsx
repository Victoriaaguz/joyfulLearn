import data from "../data/index.json";

export default function Inrichment(){
    return(
        <section className="programs-section" id="programs">
        <div className="programs-container">
          <h2 className="section-title">Programs</h2>
          <p className="programs-section-heading">Classes</p>
        </div>
        <div className="programs-section-container">
        {data?.Programs?.map((item, index) => (
            <div key={index} className="programs-section-card">
              <div className="programs-section-img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="programs-section-card-content">
                <h3 className="program-section-title">{item.title}</h3>
                <p className="programs-section-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }