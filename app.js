
const option_btn = document.querySelector('.option-btn')

const basic = document.querySelector('.card--basic .card--price')
const professional = document.querySelector('.card--professional .card--price')
const master = document.querySelector('.card--master .card--price')


option_btn.addEventListener('click', () => {
  console.log(basic)
  if (option_btn.classList.contains('anually')) {
    option_btn.classList.remove('anually')
    option_btn.style.justifyContent = 'flex-end'
    basic.textContent = '$19.99'
    professional.textContent = '$24.99'
    master.textContent = '$39.99'
  } else {
    option_btn.classList.add('anually')
    option_btn.style.justifyContent = 'flex-start'
    basic.textContent = '$199.99'
    professional.textContent = '$249.99'
    master.textContent = '$399.99'
  }
})