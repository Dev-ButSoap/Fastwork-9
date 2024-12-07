const component_navbar = document.getElementById('component_navbar');
const hamburger = document.getElementById('hamburger');
const close_sidebar = document.getElementById('close_sidebar');

hamburger.addEventListener('click', () => {
  component_navbar.classList.add('active');
});

close_sidebar.addEventListener('click', () => {
  component_navbar.classList.remove('active');
});

document.querySelectorAll('.dropdown-submenu').forEach(header => {
  header.addEventListener('click', () => {
    const this_menu = header.parentElement;
    const submenu = this_menu.nextElementSibling;

    document.querySelectorAll('.dropdown-submenu').forEach(otherHeader => {
      if (otherHeader !== header) {
        const other_submenu = otherHeader.parentElement.nextElementSibling;
        otherHeader.classList.remove('active');
        other_submenu.style.maxHeight = null;
        other_submenu.style.padding = "0";
      }
    });

    if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
      submenu.style.padding = "0";
      header.classList.remove('active');
    } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
      submenu.style.padding = "10px";
      header.classList.add('active');
    }
  });
});