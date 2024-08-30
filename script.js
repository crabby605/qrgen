document.getElementById('generate-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const qrCodeContainer = document.getElementById('qr-code');
    const downloadBtn = document.getElementById('download-btn');

    qrCodeContainer.innerHTML = ''; // Clear previous QR code
    downloadBtn.style.display = 'none'; // Hide the download button

    if (text.trim()) {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
        const img = document.createElement('img');
        img.src = qrCodeUrl;
        img.alt = "QR Code";
        img.id = "qr-img";
        qrCodeContainer.appendChild(img);

        downloadBtn.style.display = 'inline-block'; // Show the download button

        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = qrCodeUrl;
            link.download = 'qr_code.png';
            link.click();
        });
    } else {
        qrCodeContainer.innerHTML = '<p>Please enter text or URL.</p>';
    }
});
