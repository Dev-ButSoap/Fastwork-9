document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');

    document.querySelectorAll('.accordion-header').forEach(otherHeader => {
      if (otherHeader !== header) {
        otherHeader.classList.remove('active');
        const otherContent = otherHeader.parentElement.querySelector('.accordion-content');
        otherContent.style.maxHeight = null;
        otherContent.style.padding = "0 30px";
      }
    });

    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      accordionContent.style.padding = "0 30px";
      header.classList.remove('active');
    } else {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 60 + 'px';
      accordionContent.style.padding = "30px";
      header.classList.add('active');
    }
  });
});