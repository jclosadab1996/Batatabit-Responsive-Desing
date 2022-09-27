const c = console.log;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const card = document.querySelectorAll('.main-currency-table');

//questions 
const questions = document.querySelectorAll('.question-container__item')

questions.forEach(function(question) {
  const btn = question.querySelector('.question-container__icons')
  btn.addEventListener('click', function() {
    // c(question)
    questions.forEach(function(item) {
      if(item !== question) {
        item.classList.remove('show-text')
      }
      // c(item)
    })
    question.classList.toggle('show-text')
  })
})


nextBtn.addEventListener('click', function() {
  card.forEach(function(item) {
    item.classList.toggle('active');
  })
})

prevBtn.addEventListener('click', function() {
  card.forEach(function(item) {
    item.classList.toggle('active');
  })
})
