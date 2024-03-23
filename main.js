let ratingSelect;
function disabledButtons() {
  btnsRating.forEach(btn => {
    btn.classList.remove('btn-rating-active')
  })
}
let btnsRating = document.querySelectorAll('.btn-rating');
btnsRating.forEach(btn => {
  btn.addEventListener('click', activeButton)
})
function activeButton(event) {
  disabledButtons()
  let select = event.target
  ratingSelect = select.id
  select.classList.toggle('btn-rating-active')
}
let submit = document.querySelector('.btn-submit');
submit.addEventListener('click', () => {
  if (ratingSelect) {
    let firstStep = document.querySelector('.first-step')
    let lastStep = document.querySelector('.last-step');
    let ratingNumber = document.querySelector('.ratingNumber');
    ratingNumber.innerText = ratingSelect;
    firstStep.classList.add('hidden')
    lastStep.classList.remove('hidden')
  }
  else {
    let invalidMessage = document.querySelector('.invalid-submit');
    invalidMessage.classList.add('invalid-submit--active')
  }
  
})

