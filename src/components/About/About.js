import React from "react";
import styles from './About.module.css';
function About() {
  return (
    <div className="row-about">
        <div className="about-nike-part">
     
     <h2 className={styles.title}>About Ruakokoputuna Olives</h2>
     <p className={styles.detail}>
     Ruakokoputuna Olives is an olive grove in the Martinborough area.
     </p>
     <p className={styles.detail}>
     The grove is partly surrounded by native bush, on an elevated site just over 150 metres above sea level. This ensures the grove is relatively pests and disease free with a  later harvest resulting in a uniquely flavoured fruit.
     </p>
   </div>
      <div className="banner-image-about">
        <div className="about-nike">
          {/* <h2 className="about-nike-text">Ruakokoputuna Olives</h2>
          <p>
            "we produce eevo"
          </p> */}
        </div>
      </div>
    
    </div>
  );
}

export default About;
