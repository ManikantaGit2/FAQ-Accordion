const items = document.querySelectorAll('.accordion-item');
items.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const arrow = item.querySelector('.arrow');

  header.addEventListener('click', () => {
    // Collapse other items
    items.forEach(i => {
      if (i !== item) {
        i.querySelector('.accordion-content').classList.remove('active');
        i.querySelector('.arrow').classList.remove('rotate');
      }
    });

    // Toggle current item
    content.classList.toggle('active');
    arrow.classList.toggle('rotate');
  });
});