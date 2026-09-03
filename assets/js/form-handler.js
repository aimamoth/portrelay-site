document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const businessType = formData.get('business_type');
    const message = formData.get('message');

    const btn = form.querySelector('.btn-submit');
    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = 'Opening email...';

    try {
      // Build email body with all information
      const body = `${message}\n\n---\nBusiness Type: ${businessType}\nPhone: ${phone || 'Not provided'}\nSubmitted: ${new Date().toLocaleString()}`;

      // Use mailto link with pre-filled information
      const mailtoLink = `mailto:sovon@aimamoth.com?subject=YachtRelay Inquiry from ${firstName} ${lastName}&body=${encodeURIComponent(body)}`;

      // Open the default email client
      window.location.href = mailtoLink;

      // Show success message
      btn.innerText = '✓ Check your email client';
      btn.style.background = '#4ddf8f';
      form.reset();

      setTimeout(() => {
        btn.innerText = originalText;
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);

    } catch (error) {
      console.error('Error:', error);
      btn.innerText = 'Error. Please try again.';
      btn.disabled = false;
      setTimeout(() => {
        btn.innerText = originalText;
      }, 3000);
    }
  });
});
