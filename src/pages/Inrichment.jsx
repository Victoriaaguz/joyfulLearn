
import data from "../data/index.json";

export default function Inrichment(){
    return (
        <section className="inrichment-section" id="inrichment">
            <div className="inrichment-container">
                <div className="inrichment-container">
                    <p className="section-title">Inrichment</p>
                    <h2 className="section-heading">Grow The Child</h2>
                </div>
                <div className="inrichment-section-container">
                {data?.inrichment?.map((item, index) => (
                    <div key={index} className="inrichment-section-card">
                        <div className="inrichment-section-img" content="width=device-width, initial-scale=1.0">
                            <img src={item.src} alt="Placeholder" />
                        </div>
                    <div className="inrichment-section-card-content">
                    <div>
                <h3 className="inrichment-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
                </div>
            </div>
        </section>
    )
}
