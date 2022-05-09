import React from "react";
import PropTypes from "prop-types";

const Storytelling = ({ embedId }) => (
  <div className="story-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Storytime Channel"
    />
  </div>
);

Storytelling.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Storytelling;