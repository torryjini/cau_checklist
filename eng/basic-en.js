var Modal = {
   lib12to14: function() {
    var word = "Requirements for general credits"
    var content = "👉Mandatory\n- 국어 : 글쓰기\n- 영어 : English1(Communication in English)\nEnglish2(English fo Professional Track)"
     + "\n- Others : 논리와사고(ACT) / 회계와사회 / 독서와토론(창의와소통) / 한국사\n"
     + "No need to take '회계와사회' if you already took 회계학원론(회계원리)"
     + "\n👉Core : More than 9 credits are needed"
     + "\n👉Electives : Free to choose any\n" + "👉Any credits over 45 are not counted!"
    swal(word, content, "info");
  },
  lib2015: function() {
    var word = "Requirements for general credits"
    var content = "👉Mandatory\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- Others : 창의와소통 / 회계와사회 / ACT / 한국사\n" +
      "No need to take '회계와사회' if you already took 회계학원론(회계원리)" +
      "\n👉Core : Complete at least one course from 4 different areas\n" +
      "👉Electives : free to choose any\n" + "👉Any credits over 45 are not counted!"
    swal(word, content, "info");
  },
  lib2016: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var Engin = ["engineering", "ict", "software"]
    var word = "Requirements for general credits"
    var content1618 = "👉Mandatory\n- 국어 : 글쓰기(Writing)\n- 영어 : Communication in English\n- Others : 창의와소통/ACT/한국사/\n 앙트레프레너십시대의회계(회계와사회)" +
      "\nNo need to take '앙트레프레너십시대의회계' if you already took 회계학원론(회계원리)" +
      "\n👉Core : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "Take more than one class per each area!\nElectives : free to choose any\n" +
      "👉Any credits over 45 are not counted!"
    var contenteng = "👉Mandatory\n- 국어 : 글쓰기(Writing)\n- 영어 : Communication in English\n- Others : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n디자인적사고와문제해결" +
      "\nNo need to take '앙트레프레너십시대의회계' if you already took 회계학원론(회계원리)" +
      "\n👉Core : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "Take more than one class per each area!\nElectives : free to choose any\n" +
      "👉Any credits over 45 are not counted!"
    var content = "👉Mandatory\n- 국어 : 글쓰기(Writing)\n- 영어 : Communication in English\n- Others : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n컴퓨팅적사고와문제해결" +
      "\nNo need to take '앙트레프레너십시대의회계' if you already took 회계학원론(회계원리)" +
      "\n👉Core : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "Take more than one class per each area!\nElectives : free to choose any\n" +
      "👉Any credits over 45 are not counted!"

    if (Engin.includes(College)) {
      if (AdYear >= 2016 && AdYear <= 2018) {
        swal(word, content1618, "info");
      } else {
        swal(word, contenteng, "info");
      }
    } else {
      swal(word, content, "info");
    }
  },
  major12to15: function() {
    var word = "Requirements for major credits"
    var content = "👉Major : Check the department's detailed requiremetns\n" +
      "👉Double major : Check each department's detailed requiremetns\n ㄴBasics of double majors are counted as Free choice" +
      "\n👉연계/융합/설계전공 : Check for required courses for each track!" +
      "\n👉Minor : Earn more than 6 credits from required courses of your minor" +
      "\n👉Teaching : Check for details(Tel.02-820-5080)" +
      "\n👉Total credits : Only 132 credits count for graduation\n(only up to 45 credits for general courses)"
    swal(word, content, "info");
  },
  major2016: function() {
    var word = "Requirements for major credits"
    var content = "👉Major : Check the department's detailed requiremetns\n" +
      "👉Double major : Check each department's detailed requiremetns\n ㄴBasics of double majors are counted as Free choice" +
      "\n👉연계/융합/설계전공 : Check for required courses for each track!" +
      "\n👉Minor : Earn more than 6 credits from required courses of your minor" +
      "\n👉Free choice : CAU세미나(1 credit) is mandatory." +
      "\n👉Teaching : Check for details(Tel.02-820-5080)" +
      "\n👉Total credits : Only 132 credits count for graduation\n(only up to 45 credits for general courses)"
    swal(word, content, "info");
  },
  major_tr: function() {
    var word = "Requirements for credits"
    var content = "👉General courses : No need to take credits\n" +
      "👉Major : Check the department's detailed requiremetns\n" +
      "👉Double major : Check each department's detailed requiremetns\nBasics of double majors are counted as Free choice" +
      "\n👉연계/융합/설계전공 : Check for required courses for each track!" +
      "\n👉Minor : Earn more than 6 credits from required courses of your minor" +
      "\n👉Teaching : Check for details(Tel.02-820-5080)" +
      "\n👉Total credits : Only 66 credits count for graduation(over 99 credits for 2nd year transfer students)"
    swal(word, content, "info");
  }
}

function Major_result() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var Majorstandard = document.getElementById("MultiMajor_select").value;
  var MajorSelect = document.getElementById("Major_select").value;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var FusionCross = Number(document.getElementById("cross_point2").value);
  var PlanCross = Number(document.getElementById("cross_point3").value);

  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    swal("Choose your entrance year!", "", "error");
    return false;
  }

  if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
    if (FusionCross > 6) {
      document.getElementById("double_major_none").scrollIntoView();
      swal("Maximum credits for\n" + Fusiontext + " 융합전공 are 6!", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("금융")) {
    if (FusionCross > 15) {
      document.getElementById("double_major_none").scrollIntoView();
      swal("Maximum credits for\n" + Fusiontext + " 융합전공 are 15!", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
    if (FusionCross > 12) {
      document.getElementById("double_major_none").scrollIntoView();
      swal("Maximum credits for\n" + Fusiontext + " 융합전공 are 12!", "", "error")
      return false;
    }
  }

  if (MajorSelect == "none") {
    document.getElementById("student-info").scrollIntoView();
    swal("Choose your major!", "", "error");
    return false;
  } else if (Majorstandard < 45) {
    document.getElementById("student-info").scrollIntoView();
    swal("Choose your multiple major!", "", "error");
    return false;
  } else if (LinkCross > 12) {
    document.getElementById("double_major_point").scrollIntoView();
    swal("Maximum cross credits for 연계전공 are 12!", "", "error")
    return false;
  } else if (PlanCross > 6) {
    document.getElementById("link_major_none").scrollIntoView();
    swal("Maximum cross credits for 자기설계전공 are 6!", "", "error")
    return false;
  } else {
    BaseNeceresult(Majorstandard);
  }
}

// 여기서부터는 졸업인정제 등 졸업요건 관련

function Etc_result() {
  var English_result = document.getElementById("English").checked;
  var Hanja_result = document.getElementById("Hanja").checked;
  var Korean_result = document.getElementById("Korean").checked;
  var Paper_result = document.getElementById("major_paper").checked;
  var Paper_result2 = document.getElementById("double_major_paper").checked;
  var Average_result = Number(document.getElementById("average").value);

  if (Average_result > 4.5) {
    swal("You cannot enter credits above 4.5!", "", "error")
    return false;
  }

  var word = "👉Graduation Recognition System\n";

  if (!English_result) {
    word += "- 영어 : not qualified\n"
  } else {
    word += "- 영어 : Qualified\n"
  }

  if (Hanja_result) {
    word += "- 한자 : Qualified\n"
  } else {
    word += "- 한자 : Not qualified\n"
  }

  if (Korean_result) {
    word += "- 한국어(TOPIK) : Qualified\n"
  } else {
    word += "- 한국어(TOPIK) : Not qualified\n"
  }

  if (Paper_result) {
    word += "👉Grad Exam/Thesis\n- Major : Qualified\n"
  } else {
    word += "👉Grad Exam/Thesis\n- Major : Not qualified\n"
  }

  if (Paper_result2) {
    word += "- Double major : Qualified/N/A\n"
  } else {
    word += "- Double major : Not qualified\n"
  }

  if (Average_result >= 2) {
    word += "👉GPA : Qualified"
  } else {
    word += "👉GPA : Not qualified for gradution"
  }

  if (English_result && Hanja_result && Korean_result && Paper_result && Paper_result2 && Average_result >= 2) {
    swal("Other requirements result", word, "success");
  } else if (Average_result >= 2) {
    if (!English_result || !Hanja_result || !Korean_result || !Paper_result || !Paper_result2) {
      swal("Other requirements result", word, "warning");
    }
  } else if(Average_result <= 2) {
    swal("Other requirements result", word, "error");
  }
}
