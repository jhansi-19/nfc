document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const shareModal = document.getElementById('shareModal');
  const sendContactModal = document.getElementById('sendContactModal');
  const shareButton = document.querySelector('.share-card-button');
  const sendContactButton = document.querySelector('.send-contact-button');
  const closeButtons = document.querySelectorAll('.close-modal');
  const flipContainer = document.querySelector('.flip-container');
  const frontContent = flipContainer.querySelector('.front-content');
  const backContent = flipContainer.querySelector('.back-content');

  // Toggle between front (company name/logo) and back (QR code) on click
  flipContainer.addEventListener('click', () => {
    if (frontContent.style.display === 'none') {
      frontContent.style.display = 'flex';
      backContent.style.display = 'none';
    } else {
      frontContent.style.display = 'none';
      backContent.style.display = 'flex';
    }
  });

  // Open Share Modal
  shareButton.addEventListener('click', () => {
    shareModal.style.display = 'block';
  });

  // Open Send Contact Modal
  sendContactButton.addEventListener('click', () => {
    sendContactModal.style.display = 'block';
  });

  // Close Modals
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      shareModal.style.display = 'none';
      sendContactModal.style.display = 'none';
    });
  });

  // Close Modal on Outside Click
  window.addEventListener('click', (event) => {
    if (event.target === shareModal) {
      shareModal.style.display = 'none';
    }
    if (event.target === sendContactModal) {
      sendContactModal.style.display = 'none';
    }
  });

  // Share Functionality
  const detailsUrl = `${window.BASE_URL}/details`;

  // WhatsApp Share
  document.querySelector('.whatsapp-share').addEventListener('click', () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this visiting card: ${detailsUrl}`;
    window.open(whatsappUrl, '_blank');
  });

  // Facebook Share
  document.querySelector('.facebook-share').addEventListener('click', () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(detailsUrl)}`;
    window.open(facebookUrl, '_blank');
  });

  // Twitter Share
  document.querySelector('.twitter-share').addEventListener('click', () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(detailsUrl)}&text=Check out this visiting card`;
    window.open(twitterUrl, '_blank');
  });

  // Email Share
  document.querySelector('.email-share').addEventListener('click', () => {
    const subject = encodeURIComponent('Check out Diplomat Properties');
    const body = encodeURIComponent(`I found this visiting card you might be interested in: ${detailsUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });

  // Outlook Share
  document.querySelector('.outlook-share').addEventListener('click', () => {
    const subject = encodeURIComponent('Check out Diplomat Properties');
    const body = encodeURIComponent(`I found this visiting card you might be interested in: ${detailsUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`; // Outlook uses the same mailto protocol
  });

  // Telegram Share
  document.querySelector('.telegram-share').addEventListener('click', () => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(detailsUrl)}&text=Check out this visiting card`;
    window.open(telegramUrl, '_blank');
  });

  // Messenger Share
  document.querySelector('.messenger-share').addEventListener('click', () => {
    const messengerUrl = `https://www.facebook.com/messenger/share/?link=${encodeURIComponent(detailsUrl)}&app_id=YOUR_APP_ID`;
    window.open(messengerUrl, '_blank');
  });

  // LinkedIn Share
  document.querySelector('.linkedin-share').addEventListener('click', () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(detailsUrl)}`;
    window.open(linkedinUrl, '_blank');
  });
});