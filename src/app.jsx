import React, { useState } from "react";

const App = () => {
  const [_state, _setState] = useState("Hello rogerwang"); // react hook states

  return (
    <>
      {/* //local react setter*/}
      <input value={_state} onChange={(ev) => _setState(ev.target.value)} />
    </>
  );
};

export default App;
