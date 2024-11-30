
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

// Closing the dropdown if clicks outside 
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

