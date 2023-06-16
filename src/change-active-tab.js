export function changeActiveTab(content) {
  const activeButton = document.querySelector('.active');
  const newActiveButton = document.querySelector(
    `.${content}-button`
  );

  if (activeButton) {
    activeButton.classList.remove('active');
  }
  newActiveButton.classList.add('active');
}
