

function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const chevron = element.querySelector('.chevron');
  const isVisible = content.style.display === 'block';

  // Close all open accordion items
  document.querySelectorAll('.accordion-content').forEach((item) => {
    item.style.display = 'none';
  });
  document.querySelectorAll('.chevron').forEach((item) => {
    item.classList.remove('rotate');
  });

  // Toggle the selected accordion item
  if (!isVisible) {
    content.style.display = 'block';
    chevron.classList.add('rotate');
  }
}


function toggleDropdown1() {
  const dropdownContent1 = document.querySelector('.dropdown-content1');
  const chevron1 = document.querySelector('.chevron1');
  const isVisible = dropdownContent1.classList.contains('show1');

  if (isVisible) {
    dropdownContent1.classList.remove('show1');
    chevron1.classList.remove('rotate1');
  } else {
    dropdownContent1.classList.add('show1');
    chevron1.classList.add('rotate1');
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn1')) {
    const dropdownContent1 = document.querySelector('.dropdown-content1');
    const chevron1 = document.querySelector('.chevron1');

    if (dropdownContent1.classList.contains('show1')) {
      dropdownContent1.classList.remove('show1');
      chevron1.classList.remove('rotate1');
    }
  }
}

