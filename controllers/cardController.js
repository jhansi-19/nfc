const QRCode = require('qrcode');

const getDetails = async (req, res) => {
  const detailsUrl = `https://nfc-cbsv.onrender.com/details`; // e.g., https://your-app.onrender.com/details
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(detailsUrl);
    res.render('details', { message: req.session.message, qrCodeDataUrl });
    req.session.message = null; // Clear message after displaying
  } catch (error) {
    console.error('Error generating QR code:', error);
    res.status(500).send('Error generating QR code');
  }
};

const sendContact = (req, res) => {
  const { name, phone, email, message } = req.body;
  const cardOwnerNumber = '971521977368'; // Dubai number: +971555151350 (remove + for WhatsApp API)
  const text = encodeURIComponent(
    `New Contact Submission:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${cardOwnerNumber}&text=${text}`;
  
  // Store success message in session
  req.session.message = 'Details sent successfully via WhatsApp!';
  
  // Redirect to WhatsApp
  res.redirect(whatsappUrl);
};

const downloadVCard = (req, res) => {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:MUHAMMAD TAHIR
ORG:Managing Director Diplomat Properties
TEL;TYPE=CELL:00971521977368
TEL;TYPE=CELL:00971585809032
TEL;TYPE=CELL:0097145665109

EMAIL:[Afaf@riseproperties.ae]
URL:http://www.riseproperties.ae
ADR:;;PO Box No 455979 Office NO.1607 Opal Tower Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  res.setHeader('Content-Type', 'text/vcard');
  res.setHeader('Content-Disposition', 'attachment; filename="contact.vcf"');
  res.send(vCardData);
};

module.exports = { getDetails, sendContact, downloadVCard };