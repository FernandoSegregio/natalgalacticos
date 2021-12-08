import React from 'react';

class Videos extends React.Component {
  render() {
    return (
      <div className="embed-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hfw3FQ8reDE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    );
  }
}

export default Videos;
