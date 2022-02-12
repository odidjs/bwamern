import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade buttom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-item-center">
                  Category belum tersedia
                </div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`Category-${index1}-items-${index2}`}
                  >
                    <Fade bottom delay={300 * index2}>
                      <div className="card" style={{ border: 0 }}>
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light">Choice</span>
                          </div>
                        )}
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover"
                          ></img>
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`propertie/${item._id}`}
                            className="stretched-link d-block text-grey-800"
                          >
                            <h5 className="h4">{item.name}</h5>
                          </Button>
                          <span className="tex-grey-500">
                            {item.city},{item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}
