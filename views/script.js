const qns = document.querySelectorAll('.faq-list-item');

qns.forEach((question) => {
  const icon = question.querySelector('.svg-closed');
  const questionBtn = question.querySelector('.faq-question');
  const ans = question.querySelector('.faq-answer');
  questionBtn.addEventListener('click', async () => {
    icon.classList.toggle('svg-closed');
    ans.classList.toggle('open');
  });
});
