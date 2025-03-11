document.addEventListener('DOMContentLoaded', function() {
    // For regular pages
    const pageToggleBtn = document.getElementById('page-toggle');
    if (pageToggleBtn) {
      const previewContent = document.querySelector('.page-preview');
      const fullContent = document.querySelector('.page-full');
      
      pageToggleBtn.addEventListener('click', function() {
        if (fullContent.style.display === 'none') {
          previewContent.style.display = 'none';
          fullContent.style.display = 'block';
          pageToggleBtn.textContent = 'Show less';
        } else {
          previewContent.style.display = 'block';
          fullContent.style.display = 'none';
          pageToggleBtn.textContent = 'Read more';
        }
      });
    }
    
    // For homepage about section
    const aboutToggleBtn = document.getElementById('about-toggle');
    if (aboutToggleBtn) {
      const aboutPreviewContent = document.querySelector('.about-section .page-preview');
      const aboutFullContent = document.querySelector('.about-section .page-full');
      
      aboutToggleBtn.addEventListener('click', function() {
        if (aboutFullContent.style.display === 'none') {
          aboutPreviewContent.style.display = 'none';
          aboutFullContent.style.display = 'block';
          aboutToggleBtn.textContent = 'Show less';
        } else {
          aboutPreviewContent.style.display = 'block';
          aboutFullContent.style.display = 'none';
          aboutToggleBtn.textContent = 'Read more';
        }
      });
    }
  });