import React from 'react';

const MapEmbed = () => {
  return (
    <div>
      <h1>Embedded Map Example</h1>
      <iframe
        title="Embedded Map"
        width="300"
        height="250"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8940041993606!2d76.84913187317392!3d11.04657325415652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85f853e01b50b%3A0xcbc9bcc157065c67!2sArulmigu%20Subramaniya%20Swamy%20Temple%2C%20Marudhamalai!5e0!3m2!1sen!2sin!4v1711600642954!5m2!1sen!2sin"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
