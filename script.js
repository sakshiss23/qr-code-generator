var qr;
(function () {
  qr = new QRious({
    element: document.getElementById('qr-code'),
    size: 200,
    value: ''
  });
})();

function generateQRCode() {
  var qrtext = document.getElementById("qr-text").value;
  if(qrtext.length === 0){
    Toastify({
      text: "Please give an input",
      className: "info",
      style: {
        background: "linear-gradient(90deg, #3300ff, #e52e71 )",
      },
      
    }).showToast();
  return;
  }
  document.getElementById("qr-result").innerHTML = "QR code for : " + qrtext;

  qr.set({
    foreground: 'black',
    size: 200,
    value: qrtext
  });
  Toastify({
    text: "QR Code generated!",
    className: "info",
    style: {
      background: "linear-gradient(90deg, #3300ff, #e52e71)",
    }
    
  }).showToast();
}

