function generateQRCode() {
  const data = document.getElementById("data").value;
  const size = document.getElementById("size").value;

  if (data && size) {
    const qrcodeURL = `https://api.qrserver.com/v1/generate?data=${data}&size=${size}`;
    document.getElementById("qrcode").src = qrcodeURL;
  } else {
    alert("Please enter both data and size.");
  }
}
