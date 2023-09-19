const form = document.getElementById('form');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const formPages = Array.from(document.querySelectorAll('.form-page'));
let currentPage = 0;

function showPage(pageIndex) {
  const nextPage = formPages[pageIndex];

  if (pageIndex !== currentPage) {
    const currentPageElement = formPages[currentPage];
    currentPageElement.classList.add('blur-out');

    setTimeout(() => {
      currentPageElement.style.display = 'none';
      currentPageElement.classList.remove('blur-out');
    }, 400);
  }

  setTimeout(() => {
    nextPage.style.display = 'block';
    nextPage.classList.add('blur-in');

    setTimeout(() => {
      nextPage.classList.remove('blur-in');
    }, 400);
  }, 400);

  if (pageIndex === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (pageIndex === formPages.length - 1) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'block';
  }

  currentPage = pageIndex;
}

function goToNextPage() {
  if (currentPage < formPages.length - 1) {
    showPage(currentPage + 1);
  }
}

function goToPreviousPage() {
  if (currentPage > 0) {
    showPage(currentPage - 1);
  }
}

function submit() {
  // Aquí puedes realizar las acciones necesarias al enviar el formulario
}

showPage(currentPage);
