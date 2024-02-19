// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      var p1 = document.getElementById('password1').value;
      var p2 = document.getElementById('password2').value;
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else if (p1 != p2) {
        alert("비밀번호가 일치하지 않습니다.")
      } else {
        alert("회원가입에 성공했습니다.")
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

