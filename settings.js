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

function Form_Reset(id) {
  document.getElementById(id).reset();
}

function total_point_sum() {
  var LiberalTotal = Number(document.getElementById("liberal_total").value);
  var Basepoint = Number(document.getElementById("base_input").value);
  var Majorpoint = Number(document.getElementById("major_input").value);
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value);
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value);
  var Planpoint = Number(document.getElementById("plan_major_point").value);
  var Minorpoint = Number(document.getElementById("minor_point").value);
  var Freepoint = Number(document.getElementById("free_point").value);
  var Teachpoint = Number(document.getElementById("teaching_point").value);
  if (LiberalTotal > 45) {
    document.getElementById("the_total").value = 45 + Basepoint + Majorpoint + Doublepoint + Linkpoint + Fusionpoint + Planpoint + Minorpoint + Freepoint + Teachpoint;
  } else {
    document.getElementById("the_total").value = LiberalTotal + Basepoint + Majorpoint + Doublepoint + Linkpoint + Fusionpoint + Planpoint + Minorpoint + Freepoint + Teachpoint;
  }
}

function MajortableReset() {
  document.getElementById("double_table").style.display = "none";
  document.getElementById("link_table").style.display = "none";
  document.getElementById("fusion_table").style.display = "none";
  document.getElementById("plan_table").style.display = "none";
}

function OfficeNumber() {
  var Office = {
    //사회과학대학
    "psyche": "심리학과",
    "politics": "정치국제학과",
    "lis": "문헌정보학과",
    "socialwelfare": "사회복지학부",
    "cmc": "미디어커뮤니케이션학부",
    "cmc2": "미디어커뮤니케이션학부",
    "planning": "도시계획/부동산학과",
    "sociology": "사회학과",
    "public-admin": "공공인재학부",
    "public-policy": "공공인재학부",
    "public": "공공인재학부",
    //경영경제대학
    "biz_ba":"경영학부",
    "biz_glofi":"경영학부",
    "econ":"경제학부",
    "adpr":"광고홍보학과",
    "stat":"응용통계학과",
    "gloknol":"지식경영학부",
    "log":"국제물류학과",
    "security":"산업보안학과"
  };
  var PhoneNumber = {
    //사회과학대학
    "psyche": "02-820-5124",
    "politics": "02-820-5473",
    "lis": "02-820-5144",
    "socialwelfare": "02-820-5149",
    "cmc": "02-820-5481",
    "cmc2": "02-820-5481",
    "planning": "02-820-5108",
    "sociology": "02-820-6351",
    "public-admin": "02-820-5445",
    "public-policy": "02-820-5445",
    "public": "02-820-5445",
    //경영경제대학
    "biz_ba":"02-820-5539",
    "biz_glofi":"02-820-5540",
    "econ":"02-820-5487",
    "adpr":"02-820-5504",
    "stat":"02-820-5499",
    "gloknol":"02-820-5527",
    "log":"02-820-5537",
    "security":"02-820-5730"
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

function checkcont1(none, point) {
  var none_checked = document.getElementById(none).checked;
  if (!none_checked) {
    document.getElementById(point).readOnly = false;
  } else {
    document.getElementById(point).value = null;
    document.getElementById(point).readOnly = true;
  }
}

function checkcont(none, point, cross) {
  var none_checked = document.getElementById(none).checked;
  if (!none_checked) {
    document.getElementById(point).readOnly = false;
    document.getElementById(cross).readOnly = false;
  } else {
    document.getElementById(point).value = null;
    document.getElementById(point).readOnly = true;
    document.getElementById(cross).value = null;
    document.getElementById(cross).readOnly = true;
  }
}

function FusionStandardCheck() {
  var fusion_min = document.getElementById("fusion-options").value;
  var crosspoint = document.getElementById("cross_point2");
  if (fusion_min == 45) {
    document.getElementById("fusion_standard").value = 45;
    crosspoint.setAttribute("max", 15);
  } else {
    document.getElementById("fusion_standard").value = 36;
    crosspoint.setAttribute("max", 12);
  }
}
