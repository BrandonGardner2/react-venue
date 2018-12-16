import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.9292610011826!2d-95.36428918489175!3d29.750760381990098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bee56015ad33%3A0x4b3b6ccb1295ba8b!2sToyota+Center!5e0!3m2!1sen!2sus!4v1544997012558"
        width="100%"
        height="500"
        frameBorder="0"
        title="location"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
