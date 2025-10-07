import React from "react";
import Card from "./Card";

function Apps() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Cards with Children Prop</h2>

      <Card>
        <h3>Simple Text Card</h3>
        <p>This card displays text content.</p>
      </Card>

      <Card>
        <img
          src="https://via.placeholder.com/200"
          alt="placeholder"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </Card>

      <Card>
        <button style={{ padding: "10px 20px" }}>Click Me!</button>
      </Card>
    </div>
  );
}

export default Apps;
