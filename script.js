document.getElementById('generate-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const qrCodeContainer = document.getElementById('qr-code');

    qrCodeContainer.innerHTML = ''; // Clear previous QR code

    if (text.trim()) {
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
        const img = document.createElement('img');
        img.src = qrCodeUrl;
        qrCodeContainer.appendChild(img);
    } else {
        qrCodeContainer.innerHTML = '<p>Please enter text or URL.</p>';
    }
});
