import React from "react";

const App = () => {
  const handleCancel = () => {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  };

  return (
    <main>
      <button onClick={handleCancel}>Cancel</button>
    </main>
  );
};

export default App;
