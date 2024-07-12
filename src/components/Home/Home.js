import React from "react";
import FrantoioImage from "../../images/frantoio.webp";
import LeccinoImage from "../../images/leccino.webp";
import ManzanilloImage from "../../images/manzanillo.webp";
import PendolinoImage from "../../images/pendolino.jpeg";
import PicholineImage from "../../images/picholine.webp";
import PicualImage from "../../images/picual.webp";

function Home() {
  const varieties = {};
  varieties.manzanillo =   { type: "Manzanillo",image: ManzanilloImage, comment: "front and center flavour with a distinct snap of pepper and a true olive taste."};
  varieties.leccino =   { type: "Leccino",image: LeccinoImage, comment: "a delicious varietal with medium intensity with refined green olive and herbal notes."};
  varieties.picual =   { type: "Picual",image: PicualImage, comment: "aromas of fig leaf, rocket, ripe tomato and passionfruit. robust and spicy with slight bitter finish."};
  varieties.pendolino =   { type: "Pendolino",image:PendolinoImage, comment: "distinctive flavour and texture, intense green colour, taste of fresh almonds, spicy after taste."};
  varieties.frantoio =   { type: "Frantoio",image: FrantoioImage, comment: "a medium/robust fruity oil of unsurpassed quality with medium degree of peppery after taste."};
  varieties.picholine =   { type: "Picholine",image: PicholineImage, comment: "classic French oil with intense fruit and herb favours and a nice peppery finish."};
  
  return (
    <div>
      <div className="banner-image"></div>
      <div>
        <span className="tagline">Extra Virgin Olive Oil</span>
        <div className="tagline-para">
          We produce Extra Virgin Olive Oil.
        </div>

        <br />
        <br />
        <br />
        <div className="latest-container">
          <hr className="line" /> &nbsp; &nbsp;
          <span className="latest-designs">Variety</span>&nbsp;&nbsp;
          <hr className="line" />
          <br />
          <br />
          <div className="product-container image-gallery">
           {Object.keys(varieties).map((keyName) => {
              const variety = varieties[keyName];
              return (
                <div className="home-products" key={variety.type}>
                  <img
                    className="products-shoe-image"
                    alt={variety.type}
                    src={variety.image}
                  />
                  <h3 className="shoe-name">{variety.type}</h3>
                  <h3 className="shoe-name">{variety.comment}</h3> 
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// varieties.manzanillo =   { type: "Manzanillo",image: ManzanilloImage, comment: "while some oils disappear into the background, the manzanillo is front and center with a distinct snap of pepper and a true olive taste. won't call it “green” as the flavor is ripe and full but has a freshness not often found in such oils."};
//   varieties.leccino =   { type: "Leccino",image: LeccinoImage, comment: "a delicious varietal with medium intensity. This varietal of olive is lively on the nose with refined green olive and herbal notes."};
//   varieties.picual =   { type: "Picual",image: PicualImage, comment: "has aromas of fig leaf, rocket, ripe tomato and passionfruit. Its flavours are robust and spicy, with a slight bitter finish."};
//   varieties.pendolino =   { type: "Pendolino",image:PendolinoImage, comment: "has a distinctive flavour and texture with intense green colour and a taste of fresh almonds with a spicy after taste. Pendolino is particularly suitable for carpaccio of fish or meat or in vegetable or legume soups."};
//   varieties.frantoio =   { type: "Frantoio",image: FrantoioImage, comment: "renowned for producing a medium/robust fruity oil of unsurpassed quality with a medium degree of pepper aftertaste. Characteristically associated with aromas of fresh cut grass, green tomatoes and fresh walnuts. These premium oils have a wonderful balance and superb character. Intensely fruity they are ideal when served with salads, roasts and as dipping oils"};
