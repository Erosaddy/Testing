// =========== 회원가입 버튼 클릭시 회원가입 창으로 이동 ==============

document.getElementById("signup-button").addEventListener("click", function() {
  window.location.href = "http://127.0.0.1:5500/signup.html";
});

// =========== 비밀번호 일치 여부 확인 ==============
function test() {
    var p1 = document.getElementById('password1').value;
    var p2 = document.getElementById('password2').value;
        
        if( p1 != p2 ) {
          alert("비밀번호 불일치");
          return false;
        } else {
          alert("비밀번호가 일치합니다");
          return true;
        }
  }

// =========== 회원가입 데이터 저장 및 로그인 시 값 돌려주는 메서드 ==============

const users = [
  {
    "id": 1,
    "name": "smith",
    "passwd": "smith1234",
    "email": "smith@hanul.com",
    "phone": "SKT0621234567"
  },
  {
    "id": 2,
    "name": "jack",
    "passwd": "jack1234",
    "email": "jack@hanul.com",
    "phone": "SKT0621234567"
  },
  {
    "id": 3,
    "name": "sujan",
    "passwd": "sujan1234",
    "email": "sujan@hanul.com",
    "phone": "SKT0621234567"
  }
];
// 회원가입 시 새로운 사용자 객체 생성
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("signup-data").addEventListener("submit", function(event) {
      event.preventDefault(); // 기본 제출 동작 방지

      // 입력된 값들 가져오기
      
      const name = document.getElementById("username").value;
      const passwd = document.getElementById("password1").value;
      const email= document.getElementById("email").value;
      const phone = (document.getElementById("mobileCarrier").value) + (document.getElementById("tel").value);
      
      // 회원가입 시 필요한 정보를 전달하여 signUp 함수 호출
      signUp(name, passwd, email, phone);

      // 회원가입 성공 후 필요한 추가 동작 구현 (예: 다음 페이지로 리다이렉트)
      
      function signUp(name, passwd, email, phone) {
      
        const newUser = {
          id: users.length + 1,
          name: name,
          passwd: passwd,
          email: email,
          phone: phone
        };
        users.push(newUser);
        alert("회원가입이 완료되었습니다.");
        window.location.href = "http://127.0.0.1:5500/main.html";
      }
  });
});

//============== 입력된 이름과 비밀번호를 가진 사용자를 찾음=================
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // 기본 제출 동작 방지
  
  const name = document.getElementById("userName").value;
  const passwd = document.getElementById("userPassword").value;

  login(name, passwd);
  
});
});
  
  function login(name, passwd) {
    const user = users.find(user => user.name === name && user.passwd === passwd);
    if (user) {
      alert("로그인 되었습니다.");
    } else {
      alert("아이디 혹은 비밀번호를 찾을 수 없습니다. 30초 후 다시 시도해주세요.");
    }
  }



// 예시로 회원가입과 로그인 실행