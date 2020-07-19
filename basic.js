//Get the button
var mybutton = document.getElementById("TopBtn");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

function onlyNumber(event) {
  event = event || window.event;
  var keyID = (event.which) ? event.which : event.keyCode;
  if ((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
    return;
  else
    return false;
}

function removeChar(event) {
  event = event || window.event;
  var keyID = (event.which) ? event.which : event.keyCode;
  if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39)
    return;
  else
    event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

function Form_Reset(id) {
  document.getElementById(id).reset();
}

function OfficeNumber() {
  var Office = {
    "psyche": "심리학과",
    "politics": "정치국제학과",
    "lis": "문헌정보학과",
    "socialwelfare": "사회복지학부",
    "cmc": "미디어커뮤니케이션학부",
    "planning": "도시계획/부동산학과",
    "sociology": "사회학과",
    "public-admin": "공공인재학부",
    "public-policy": "공공인재학부",
    "public":"공공인재학부"
  };
  var PhoneNumber = {
    "psyche": "02-820-5124",
    "politics": "02-820-5473",
    "lis": "02-820-5144",
    "socialwelfare": "02-820-5149",
    "cmc": "02-820-5481",
    "planning": "02-820-5108",
    "sociology": "02-820-6351",
    "public-admin": "02-820-5445",
    "public-policy": "02-820-5445",
    "public":"02-820-5445"
  };
  var Major = document.getElementById("Major_select").value;
  if (Major == "none") {
    document.getElementById("dept").value = "-";
    document.getElementById("phone").value = "-";
  } else {
    document.getElementById("dept").value = Office[Major];
    document.getElementById("phone").value = PhoneNumber[Major];
  }
}

function infomodal() {
  var word = "입학연도, 전공학과, 다전공을 정확히 입력하세요."
  var content = "연도별, 학과별, 다전공별로 학점 기준이 다릅니다.\n반드시 정확히 입력하세요!"
  swal(word, content, "warning");
}

function liveralmodal2016() {
  var word = "교양영역 이수기준"
  var content = "공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통 / 회계와사회 / ACT / 한국사 / 컴퓨팅적사고와문제해결\n핵심교양 : 도전 / 창의 / 융합 / 신뢰 / 소통\n각 영역에서 1과목 이상 이수\n선택교양 : 자율이수\n" + "총 교양학점 45학점까지만 인정됩니다!"
  swal(word, content, "warning");
}
