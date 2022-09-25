import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

import QRCodeLink from "qrcode";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [imgQrCode, setImgQrCode] = useState();

  function generateQrCodeUrl(url_link) {
    QRCodeLink.toDataURL(
      url_link,
      { width: 600, margin: 3 },
      function (err, url) {
        setImgQrCode(url);
      }
    );
  }

  function handleNewUrl(e) {
    setQrCode(e.target.value);
    generateQrCodeUrl(e.target.value);
  }

  return (
    <div className="Container">
      <div className="main">
        <h1>
          Qrcode <br /> generator
        </h1>
        <QRCode className="qrcode" value={qrCode} />
        <input
          type="text"
          placeholder="Digite sua url..."
          value={qrCode}
          onChange={(e) => handleNewUrl(e)}
        />
        <a href={imgQrCode} download="qrcode.png">
          Download
        </a>

        <footer>
          <p>
            made by{""}
            <a href="https://github.com/maikonalexandre">@maikonalexandredev</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
