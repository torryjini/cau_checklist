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

var Result = {
  lib12to14: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var word = "👉Entrance Year : " + AdYear + "\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      swal("Choose your entrance year!", "", "error");
      return false;
    }

    if (common_kor_point < 2) {
      word += "👉Mandatory\n - 국어 : " + [2 - common_kor_point] + " more credits required\n";
    } else {
      word += "👉Mandatory\n - 국어 : Passed the requirement\n";
    }

    if (common_eng_point < 4 && common_eng_ex) {
      word += " - 영어 : 면제\n"
    } else if (common_eng_point < 4 && !common_eng_ex) {
      word += " - 영어 : " + [4 - common_eng_point] + " more credits required\n";
    } else {
      word += " - 영어 : Passed the requirement\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < 8) {
        word += " - 기타 : " + [8 - common_etc_point] + " more credits required\n"
      } else {
        word += " - 기타 : Passed the requirement\n"
      }
    } else {
      if (common_etc_point < 6) {
        word += " - 기타 : " + [6 - common_etc_point] + " more credits required(회계와사회 : 면제)\n"
      } else {
        word += " - 기타 : Passed the requirement(회계와사회 : 면제)\n"
      }
    }

    if (core_total_point < 9) {
      word += "👉Core : " + [9 - core_total_point] + " more credits required"
    } else {
      word += "👉Core : Passed the requirement"
    }

    word += "\n👉Elective : " + elective_point + " credits"

    if (liberal_total_point <= 45) {
      word += "\n👉Total : " + liberal_total_point + " credits"
    } else {
      word += "\n👉Total : " + liberal_total_point + " credits_" + [liberal_total_point - 45] + "credits exceeded\nAny credits over 45 don't count."
    }

    if (common_kor_point == 2 && core_total_point >= 9) {
      if (common_eng_point >= 4 && common_etc_point == 8) {
        swal("General credits result", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point == 8) {
        swal("General credits result", word, "success")
      } else if (common_eng_point >= 4 && common_etc_point >= 6 && account_check_SF) {
        swal("General credits result", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("General credits result", word, "success")
      } else {
        swal("General credits result", word, "error")
      }
    } else {
      swal("General credits result", word, "error")
    }
  },
  lib2015: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var MACH1 = Number(document.getElementById("mach1").value);
    var MACH1none = document.getElementById("mach1_none").checked;
    var MACH2 = Number(document.getElementById("mach2").value);
    var MACH2none = document.getElementById("mach2_none").checked;
    var MACH1_st = Number(document.getElementById("mach1_st").value);
    var MACH2_st = Number(document.getElementById("mach2_st").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var word = "👉Entrance Year : " + AdYear + "\n";

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      swal("Choose your college!", "", "error");
      return false;
    }

    if (common_kor_point < 2) {
      word += "👉Mandatory\n - 국어 : " + [2 - common_kor_point] + " more credits required\n";
    } else {
      word += "👉Mandatory\n - 국어 : Passed the requirement\n";
    }

    if (common_eng_point < 2 && common_eng_ex) {
      word += " - 영어 : 면제\n"
    } else if (common_eng_point < 2 && !common_eng_ex) {
      word += " - 영어 : " + [2 - common_eng_point] + " more credits required\n";
    } else {
      word += " - 영어 : Passed the requirement\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < 8) {
        word += " - 기타 : " + [8 - common_etc_point] + " more credits required\n"
      } else {
        word += " - 기타 : Passed the requirement\n"
      }
    } else {
      if (common_etc_point < 6) {
        word += " - 기타 : " + [6 - common_etc_point] + " more credits required(회계와사회 : Exempted)\n"
      } else {
        word += " - 기타 : Passed the requirement(회계와사회 : Exempted)\n"
      }
    }

    if (core_total_point < 12) {
      word += "👉Core : " + [12 - core_total_point] + " more credits required\n- Take at least 1 course from 4 different core areas!"
    } else {
      word += "👉Core : Passed the minimum credits requirement\n- Check to see if the courses are from 4 different areas!"
    }

    word += "\n👉Elective : " + elective_point + " credits"

    if (!MACH1none) {
      if (MACH1 < 4) {
        word += "\n👉MACH교양 : " + [4 - MACH1] + " more credits required"
      } else {
        word += "\n👉MACH교양 : Passed the requirement"
      }
    }

    if (!MACH2none) {
      if (MACH2 < 4) {
        word += "\n👉MACH실습 : " + [2 - MACH2] + " more credits required"
      } else {
        word += "\n👉MACH실습 : Passed the requirement"
      }
    }

    if (liberal_total_point <= 45) {
      word += "\n👉Total : " + liberal_total_point + " credits"
    } else {
      word += "\n👉Total : " + liberal_total_point + " credits_" + [liberal_total_point - 45] + "credits exceeded\nAny credits over 45 don't count."
    }

    if (common_kor_point == 2 && core_total_point >= 11 && MACH1 >= MACH1_st && MACH2 >= MACH2_st) {
      if (common_eng_point == 2 && common_etc_point == 8) {
        swal("General credits result", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 8) {
        swal("General credits result", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= 6 && account_check_SF) {
        swal("General credits result", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("General credits result", word, "success")
      } else {
        swal("General credits result", word, "error")
      }
    } else {
      swal("General credits result", word, "error")
    }
  },
  lib2016: function() {
    var AdYear = Number(document.getElementById("ad-year").value);
    var College = document.getElementById("college_select").value;
    var elective_point = Number(document.getElementById("elective_liberal").value);
    var common_kor_point = Number(document.getElementById("common_kor").value);
    var common_eng_point = Number(document.getElementById("common_eng").value);
    var common_eng_ex = document.getElementById("eng_ex").checked;
    var cometcst = Number(document.getElementById("com_etc_st").value);
    var common_etc_point = Number(document.getElementById("common_etc").value);
    var account_check_SF = document.getElementById("account_check").checked;
    var Core1 = document.getElementById("core1").checked;
    var Core2 = document.getElementById("core2").checked;
    var Core3 = document.getElementById("core3").checked;
    var Core4 = document.getElementById("core4").checked;
    var Core5 = document.getElementById("core5").checked;
    var core_total_point = Number(document.getElementById("core_total").value);
    var MACH1 = Number(document.getElementById("mach1").value);
    var MACH1none = document.getElementById("mach1_none").checked;
    var MACH2 = Number(document.getElementById("mach2").value);
    var MACH2none = document.getElementById("mach2_none").checked;
    var MACH1_st = Number(document.getElementById("mach1_st").value);
    var MACH2_st = Number(document.getElementById("mach2_st").value);
    var liberal_total_point = Number(document.getElementById("liberal_total").value);
    var word = "👉Entrance Year : " + AdYear + "\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      swal("Choose your entrance year!", "", "error");
      return false;
    }

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      swal("Choose your college!", "", "error");
      return false;
    }

    if (core_total_point > 0 && !Core1 && !Core2 && !Core3 && !Core4 && !Core5) {
      swal("Check core courses!", "", "error")
      return false;
    }

    if (Core1 || Core2 || Core3 || Core4 || Core5) {
      if (core_total_point == 0) {
        swal("Enter your credits for core courses!", "", "error")
        return false;
      }
    }

    if (common_kor_point < 2) {
      word += "👉Mandatory\n - 국어 : " + [2 - common_kor_point] + " more credits required\n";
    } else {
      word += "👉Mandatory\n - 국어 : Passed the requirement\n";
    }

    if (common_eng_point < 2 && common_eng_ex) {
      word += " - 영어 : Exempted\n"
    } else if (common_eng_point < 2 && !common_eng_ex) {
      word += " - 영어 : " + [2 - common_eng_point] + " more credits required\n";
    } else {
      word += " - 영어 : Passed the requirement\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < cometcst) {
        word += " - 기타 : " + [cometcst - common_etc_point] + " more credits required\n"
      } else {
        word += " - 기타 : Passed the requirement\n"
      }
    } else {
      if (common_etc_point < cometcst - 2) {
        word += " - Others : " + [cometcst - 2 - common_etc_point] + " more credits required(앙트레프레너십시대의회계 : Exempted)\n"
      } else {
        word += " - Others : Passed the requirement(앙트레프레너십시대의회계 : Exempted)\n"
      }
    }

    if (Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
      word += "👉Core : Passed the requirement"
    } else if (core_total_point < 15) {
      word += "👉Core : " + [15 - core_total_point] + " more credits required\n- Incomplete course : "
    } else {
      word += "👉Core : Passed the minimum credits requirement\n- Incomplete course : "
    }

    if (!Core1) {
      word += "도전 "
    }
    if (!Core2) {
      word += "창의 "
    }
    if (!Core3) {
      word += "융합 "
    }
    if (!Core4) {
      word += "신뢰 "
    }
    if (!Core5) {
      word += "소통"
    }

    var Engin =["engineering", "ict", "software"]
    if (AdYear >= 2019 && Engin.includes(College)) {
      word += "\n - Check if you have taken at least one MACH subject!"
    }

    word += "\n👉Elective : " + elective_point + " credits"

    if (!MACH1none) {
      if (MACH1 < 4) {
        word += "\n👉MACH교양 : " + [4 - MACH1] + " more credits required"
      } else {
        word += "\n👉MACH교양 : Passed the requirement"
      }
    }

    if (!MACH2none) {
      if (MACH2 < 4) {
        word += "\n👉MACH실습 : " + [2 - MACH2] + " more credits required"
      } else {
        word += "\n👉MACH실습 : Passed the requirement"
      }
    }

    if (liberal_total_point <= 45) {
      word += "\n👉Total : " + liberal_total_point + " credits"
    } else {
      word += "\n👉Total : " + liberal_total_point + " credits_" + [liberal_total_point - 45] + "credits exceeded\nAny credits over 45 don't count."
    }

    if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14 && MACH1 >= MACH1_st && MACH2 >= MACH2_st) {
      if (common_eng_point == 2 && common_etc_point >= cometcst) {
        swal("General credits result", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= cometcst) {
        swal("General credits result", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("General credits result", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("General credits result", word, "success")
      } else {
        swal("General credits result", word, "error")
      }
    } else {
      swal("General credits result", word, "error")
    }
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
