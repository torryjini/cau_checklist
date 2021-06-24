const Modal = {
  lib12to14: function() {
    let word = "Requirements for general credits"
    const content = "👉Mandatory\n- 국어 : 글쓰기\n- 영어 : English1(Communication in English)\nEnglish2(English fo Professional Track)" +
      "\n- Others : 논리와사고(ACT) / 회계와사회 / 독서와토론(창의와소통) / 한국사\n" +
      "No need to take '회계와사회' if you already took 회계학원론(회계원리)" +
      "\n👉Core : More than 9 credits are needed" +
      "\n👉Electives : Free to choose any\n" + "👉Any credits over 45 are not counted!"
    swal(word, content, "info");
  },
  lib2015: function() {
    let word = "Requirements for general credits"
    const content = "👉Mandatory\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- Others : 창의와소통 / 회계와사회 / ACT / 한국사\n" +
      "No need to take '회계와사회' if you already took 회계학원론(회계원리)" +
      "\n👉Core : Complete at least one course from 4 different areas\n" +
      "👉Electives : free to choose any\n" + "👉Any credits over 45 are not counted!"
    swal(word, content, "info");
  },
  lib2016: function() {
    const AdYear = Number(document.getElementById("ad-year").value);
    const College = document.getElementById("college_select").value;
    const Engin = ["engineering", "ict", "software", "artech"]
    let word = "Requirements for general credits"
    const content1618 = "👉Mandatory\n- 국어 : 글쓰기(Writing)\n- 영어 : Communication in English\n- Others : 창의와소통/ACT/한국사/\n 앙트레프레너십시대의회계(회계와사회)" +
      "\nNo need to take '앙트레프레너십시대의회계' if you already took 회계학원론(회계원리)" +
      "\n👉Core : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "Take more than one class per each area!\nElectives : free to choose any\n" +
      "👉Any credits over 45 are not counted!"
    const contenteng = "👉Mandatory\n- 국어 : 글쓰기(Writing)\n- 영어 : Communication in English\n- Others : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n디자인적사고와문제해결" +
      "\nNo need to take '앙트레프레너십시대의회계' if you already took 회계학원론(회계원리)" +
      "\n👉Core : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "Take more than one class per each area!\nElectives : free to choose any\n" +
      "👉Any credits over 45 are not counted!"
    const content = "👉Mandatory\n- 국어 : 글쓰기(Writing)\n- 영어 : Communication in English\n- Others : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n컴퓨팅적사고와문제해결" +
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
    let word = "Requirements for major credits"
    const content = "👉Major : Check the department's detailed requiremetns\n" +
      "👉Double major : Check each department's detailed requiremetns\n ㄴBasics of double majors are counted as Free choice" +
      "\n👉연계/융합/설계전공 : Check for required courses for each track!" +
      "\n👉Minor : Earn more than 6 credits from required courses of your minor" +
      "\n👉Teaching : Check for details(Tel.02-820-5080)" +
      "\n👉Total credits : Only 132 credits count for graduation\n(only up to 45 credits for general courses)"
    swal(word, content, "info");
  },
  major2016: function() {
    let word = "Requirements for major credits"
    const content = "👉Major : Check the department's detailed requiremetns\n" +
      "👉Double major : Check each department's detailed requiremetns\n ㄴBasics of double majors are counted as Free choice" +
      "\n👉연계/융합/설계전공 : Check for required courses for each track!" +
      "\n👉Minor : Earn more than 6 credits from required courses of your minor" +
      "\n👉Free choice : CAU세미나(1 credit) is mandatory." +
      "\n👉Teaching : Check for details(Tel.02-820-5080)" +
      "\n👉Total credits : Only 132 credits count for graduation\n(only up to 45 credits for general courses)"
    swal(word, content, "info");
  },
  major_tr: function() {
    let word = "Requirements for credits"
    const content = "👉General courses : No need to take credits\n" +
      "👉Major : Check the department's detailed requiremetns\n" +
      "👉Double major : Check each department's detailed requiremetns\nBasics of double majors are counted as Free choice" +
      "\n👉연계/융합/설계전공 : Check for required courses for each track!" +
      "\n👉Minor : Earn more than 6 credits from required courses of your minor" +
      "\n👉Teaching : Check for details(Tel.02-820-5080)" +
      "\n👉Total credits : Only 66 credits count for graduation(over 99 credits for 2nd year transfer students)"
    swal(word, content, "info");
  }
}

const Result = {
  lib12to14: function() {
    const AdYear = Number(document.getElementById("ad-year").value);
    const College = document.getElementById("college_select").value;
    const elective_point = Number(document.getElementById("elective_liberal").value);
    const common_kor_point = Number(document.getElementById("common_kor").value);
    const common_eng_point = Number(document.getElementById("common_eng").value);
    const common_eng_ex = document.getElementById("eng_ex").checked;
    const common_etc_point = Number(document.getElementById("common_etc").value);
    const account_check_SF = document.getElementById("account_check").checked;
    const core_total_point = Number(document.getElementById("core_total").value);
    const liberal_total_point = Number(document.getElementById("liberal_total").value);
    let word = "👉Entrance Year : " + AdYear + "\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your entrance year!", "", "error");
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
      word += "\n👉Total : " + liberal_total_point + " credits_" + [liberal_total_point - 45] + " credits exceeded\nAny credits over 45 don't count."
    }

    if (common_kor_point == 2 && core_total_point >= 9 && liberal_total_point > 45) {
      if (common_eng_point >= 4 && common_etc_point == 8) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point == 8) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point >= 4 && common_etc_point >= 6 && account_check_SF) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("General Credits Results", word, "warning")
      } else {
        swal("General Credits Results", word, "error")
      }
    } else if (common_kor_point == 2 && core_total_point >= 9 && liberal_total_point <= 45) {
      if (common_eng_point >= 4 && common_etc_point == 8) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point == 8) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point >= 4 && common_etc_point >= 6 && account_check_SF) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("General Credits Results", word, "success")
      } else {
        swal("General Credits Results", word, "error")
      }
    } else {
      swal("General Credits Results", word, "error")
    }
  },
  lib2015: function() {
    const AdYear = Number(document.getElementById("ad-year").value);
    const College = document.getElementById("college_select").value;
    const elective_point = Number(document.getElementById("elective_liberal").value);
    const common_kor_point = Number(document.getElementById("common_kor").value);
    const common_eng_point = Number(document.getElementById("common_eng").value);
    const common_eng_ex = document.getElementById("eng_ex").checked;
    const common_etc_point = Number(document.getElementById("common_etc").value);
    const account_check_SF = document.getElementById("account_check").checked;
    const core_total_point = Number(document.getElementById("core_total").value);
    const MACH1 = Number(document.getElementById("mach1").value);
    const MACH1none = document.getElementById("mach1_none").checked;
    const MACH2 = Number(document.getElementById("mach2").value);
    const MACH2none = document.getElementById("mach2_none").checked;
    const MACH1_st = Number(document.getElementById("mach1_st").value);
    const MACH2_st = Number(document.getElementById("mach2_st").value);
    const liberal_total_point = Number(document.getElementById("liberal_total").value);
    let word = "👉Entrance Year : " + AdYear + "\n";

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your college!", "", "error");
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
      word += "\n👉Total : " + liberal_total_point + " credits_" + [liberal_total_point - 45] + " credits exceeded\nAny credits over 45 don't count."
    }

    if (common_kor_point == 2 && core_total_point >= 11 && MACH1 >= MACH1_st && MACH2 >= MACH2_st && liberal_total_point > 45) {
      if (common_eng_point == 2 && common_etc_point == 8) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 8) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point == 2 && common_etc_point >= 6 && account_check_SF) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("General Credits Results", word, "warning")
      } else {
        swal("General Credits Results", word, "error")
      }
    } else if (common_kor_point == 2 && core_total_point >= 11 && MACH1 >= MACH1_st && MACH2 >= MACH2_st && liberal_total_point <= 45) {
      if (common_eng_point == 2 && common_etc_point == 8) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 8) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= 6 && account_check_SF) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("General Credits Results", word, "success")
      } else {
        swal("General Credits Results", word, "error")
      }
    } else {
      swal("General Credits Results", word, "error")
    }
  },
  lib2016: function() {
    const AdYear = Number(document.getElementById("ad-year").value);
    const College = document.getElementById("college_select").value;
    const elective_point = Number(document.getElementById("elective_liberal").value);
    const common_kor_point = Number(document.getElementById("common_kor").value);
    const common_eng_point = Number(document.getElementById("common_eng").value);
    const common_eng_ex = document.getElementById("eng_ex").checked;
    const cometcst = Number(document.getElementById("com_etc_st").value);
    const common_etc_point = Number(document.getElementById("common_etc").value);
    const account_check_SF = document.getElementById("account_check").checked;
    const Core1 = document.getElementById("core1").checked;
    const Core2 = document.getElementById("core2").checked;
    const Core3 = document.getElementById("core3").checked;
    const Core4 = document.getElementById("core4").checked;
    const Core5 = document.getElementById("core5").checked;
    const core_total_point = Number(document.getElementById("core_total").value);
    const MACH1 = Number(document.getElementById("mach1").value);
    const MACH1none = document.getElementById("mach1_none").checked;
    const MACH2 = Number(document.getElementById("mach2").value);
    const MACH2none = document.getElementById("mach2_none").checked;
    const MACH1_st = Number(document.getElementById("mach1_st").value);
    const MACH2_st = Number(document.getElementById("mach2_st").value);
    const liberal_total_point = Number(document.getElementById("liberal_total").value);
    let word = "👉Entrance Year : " + AdYear + "\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your entrance year!", "", "error");
    }

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your college!", "", "error");
    }

    if (core_total_point > 0 && !Core1 && !Core2 && !Core3 && !Core4 && !Core5) {
      return swal("Check core courses!", "", "error");
    }

    if (Core1 || Core2 || Core3 || Core4 || Core5) {
      if (core_total_point == 0) {
        return swal("Enter your credits for core courses!", "", "error");
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

    if (Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 12) {
      word += "👉Core : Passed the requirement"
    } else if (core_total_point < 14) {
      word += "👉Core : " + core_total_point + " credits\n- Incomplete course : "
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

    const Engin = ["engineering", "ict", "software"]
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
      word += "\n👉Total : " + liberal_total_point + " credits_" + [liberal_total_point - 45] + " credits exceeded\nAny credits over 45 don't count."
    }

    if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14 && MACH1 >= MACH1_st && MACH2 >= MACH2_st && liberal_total_point > 45) {
      if (common_eng_point == 2 && common_etc_point >= cometcst) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= cometcst) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point == 2 && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("General Credits Results", word, "warning")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("General Credits Results", word, "warning")
      } else {
        swal("General Credits Results", word, "error")
      }
    } else if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14 && MACH1 >= MACH1_st && MACH2 >= MACH2_st && liberal_total_point <= 45) {
      if (common_eng_point == 2 && common_etc_point >= cometcst) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= cometcst) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("General Credits Results", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("General Credits Results", word, "success")
      } else {
        swal("General Credits Results", word, "error")
      }
    } else {
      swal("General Credits Results", word, "error")
    }
  },
  etc: function() {
    const English_result = document.getElementById("English").checked;
    const Hanja_result = document.getElementById("Hanja").checked;
    const Korean_result = document.getElementById("Korean").checked;
    const Paper_result = document.getElementById("major_paper").checked;
    const Paper_result2 = document.getElementById("double_major_paper").checked;
    const Average_result = Number(document.getElementById("average").value);

    if (Average_result > 4.5) {
      return swal("You cannot enter credits above 4.5!", "", "error");
    }

    let word = "👉Graduation Recognition System\n";

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
      swal("Other Requirements Results", word, "success");
    } else if (Average_result >= 2) {
      if (!English_result || !Hanja_result || !Korean_result || !Paper_result || !Paper_result2) {
        swal("Other Requirements Results", word, "warning");
      }
    } else if (Average_result <= 2) {
      swal("Other Requirements Results", word, "error");
    }
  },
  major: function Major_result() {
    const AdYear = Number(document.getElementById("ad-year").value);
    const Majorstandard = document.getElementById("major_standard").value;
    const MajorSelect = document.getElementById("Major_select").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const FusionCross = Number(document.getElementById("cross_point2").value);
    const PlanCross = Number(document.getElementById("cross_point3").value);

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your entrance year!", "", "error");
    }

    if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
      if (FusionCross > 6) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Maximum credits for\n" + Fusiontext + " 융합전공 are 6!", "", "error");
      }
    } else if (Fusiontext.includes("금융")) {
      if (FusionCross > 15) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Maximum credits for\n" + Fusiontext + " 융합전공 are 15!", "", "error");
      }
    } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
      if (FusionCross > 12) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Maximum credits for\n" + Fusiontext + " 융합전공 are 12!", "", "error");
      }
    }

    if (MajorSelect == "none") {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your major!", "", "error");
    } else if (Majorstandard < 45) {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your multiple major!", "", "error");
    } else if (LinkCross > 12) {
      document.getElementById("double_major_point").scrollIntoView();
      return swal("Maximum cross credits for 연계전공 are 12!", "", "error");
    } else if (PlanCross > 6) {
      document.getElementById("link_major_none").scrollIntoView();
      return swal("Maximum cross credits for 자기설계전공 are 6!", "", "error");
    } else {
      if (AdYear <= 2014) {
        Result.basenece12to14(Majorstandard);
      } else if (AdYear == 2015) {
        Result.basenece2015(Majorstandard);
      } else {
        Result.basenece2016(Majorstandard);
      }
    }
  },
  basenece12to14: function(Majorstandard) {
    const AdYear = Number(document.getElementById("ad-year").value);
    const Major = document.getElementById("Major_select");
    const Majortext = Major.options[Major.selectedIndex].text;
    const Multimajor = document.getElementById("MultiMajor_select");
    const Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
    const BaseStandard = document.getElementById("base_standard").value;
    const NeceStandard = document.getElementById("nece_standard").value;
    const Basepoint = Number(document.getElementById("base_input").value);
    const Necepoint = Number(document.getElementById("nece_input").value);
    const Majorpoint = Number(document.getElementById("major_input").value);
    let word = "👉Entrance Year : " + AdYear + "\nMajor : " + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n";

    const FusionOption = Number(document.getElementById("fusion-options").value);
    if (Multimajortext.includes("융합")) {
      if (FusionOption == 0) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Choose your 융합전공!", "", "error");
      }
    }

    if (Majorpoint < Necepoint) {
      return swal("Major credits include Required credits!", "", "error");
    }

    if (Basepoint < BaseStandard) {
      word += "👉Basics : " + [BaseStandard - Basepoint] + " more credits required\n";
    } else {
      word += "👉Basics : Passed the requirement\n";
    }

    if (Necepoint < NeceStandard) {
      word += "👉Required : " + [NeceStandard - Necepoint] + " more credits required\n";
    } else {
      word += "👉Required : Passed the requirement\n";
    }

    if (Majorpoint < Majorstandard) {
      word += "👉Major : " + [Majorstandard - Majorpoint] + " more credits required\n"
    } else {
      word += "👉Major : Passed the requirement\n"
    }

    const Doublecheck = document.getElementById("double_major_none").checked;
    const DoubleStandard = document.getElementById("double_st").value;
    const Doublepoint = Number(document.getElementById("double_major_point").value);
    if (!Doublecheck) {
      if (Doublepoint < DoubleStandard) {
        word += "👉Double major : " + [DoubleStandard - Doublepoint] + " more credits required\n"
      } else {
        word += "👉Double major : Passed the minimum credits requirement\n"
      }
    }

    const Linkcheck = document.getElementById("link_major_none").checked;
    const LinkStandard = document.getElementById("link_st").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
    if (!Linkcheck) {
      if (Linkpoint < LinkStandard) {
        word += "👉연계전공 : " + [LinkStandard - Linkpoint] + " more credits required\n"
      } else {
        word += "👉연계전공 : Passed the minimum credits requirement\n"
      }
    }


    const Fusioncheck = document.getElementById("fusion_major_none").checked;
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
    const FusionStandard = Number(document.getElementById("fusion_standard").value);
    if (!Fusioncheck) {
      if (Fusionpoint < FusionStandard) {
        word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " more credits required\n"
      } else {
        word += "👉" + Fusiontext + "융합전공 : Passed the minimum credits requirement\n"
      }
    }

    const Plancheck = document.getElementById("plan_major_none").checked;
    const PlanStandard = document.getElementById("plan_st").value;
    const Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
    if (!Plancheck) {
      if (Planpoint < PlanStandard) {
        word += "👉설계전공 : " + [PlanStandard - Planpoint] + " more credits required\n"
      } else {
        word += "👉설계전공 : Passed the minimum credits requirement\n"
      }
    }

    const Minorcheck = document.getElementById("minor_none").checked;
    const MinorStandard = document.getElementById("minor_st").value;
    const Minorpoint = Number(document.getElementById("minor_point").value);
    if (!Minorcheck) {
      if (Minorpoint < MinorStandard) {
        word += "👉Minor : " + [MinorStandard - Minorpoint] + " more credits required\n"
      } else {
        word += "👉Minor : Passed the minimum credits requirement\n"
      }
    }

    const Freepoint = Number(document.getElementById("free_point").value);
    word += "👉Free choice : " + Freepoint + " credits\n"


    const Teachingcheck = document.getElementById("teaching_none").checked;
    const TeachingStandard = document.getElementById("teaching_st").value;
    const Teachingpoint = Number(document.getElementById("teaching_point").value);
    if (!Teachingcheck) {
      if (Teachingpoint < TeachingStandard)
        word += "👉Teaching : " + [TeachingStandard - Teachingpoint] + " more credits required\n"
      else {
        word += "👉Teaching : Passed the minimum credits requirement\n"
      }
    }

    const TotalStandard = Number(document.getElementById("total_standard").value);
    const TotalPoint = Number(document.getElementById("the_total").value);
    if (TotalPoint < TotalStandard) {
      word += "👉Total credits : At least " + [TotalStandard - TotalPoint] + " more credits required"
    } else {
      word += "👉Total credits : Passed the requirement"
    }

    if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
      if (Minorcheck && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorcheck && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else {
        swal("Major Credits Results", word, "error")
      }
    } else {
      swal("Major Credits Results", word, "error")
    }
  },
  basenece2015: function(Majorstandard) {
    const AdYear = Number(document.getElementById("ad-year").value);
    const Major = document.getElementById("Major_select");
    const Majortext = Major.options[Major.selectedIndex].text;
    const Multimajor = document.getElementById("MultiMajor_select");
    const Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
    const BaseStandard = document.getElementById("base_standard").value;
    const NeceStandard = document.getElementById("nece_standard").value;
    const Basepoint = Number(document.getElementById("base_input").value);
    const Necepoint = Number(document.getElementById("nece_input").value);
    const Majorpoint = Number(document.getElementById("major_input").value);
    let word = "👉Entrance Year : " + AdYear;

    if (Majortext.includes("트랙")) {
      word += "\n👉Major : 공공인재학부 " + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n";
    } else {
      word += "\n👉Major : " + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n";
    }

    const FusionOption = Number(document.getElementById("fusion-options").value);
    if (Multimajortext.includes("융합")) {
      if (FusionOption == 0) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Choose your 융합전공!", "", "error");
      }
    }

    if (Majorpoint < Necepoint) {
      return swal("Major credits include required credits!", "", "error");
    }

    if (Basepoint < BaseStandard) {
      word += "👉Basics : " + [BaseStandard - Basepoint] + " more credits required\n";
    } else {
      word += "👉Basics : Passed the requirement\n";
    }

    if (Necepoint < NeceStandard) {
      word += "👉Required : " + [NeceStandard - Necepoint] + " more credits required\n";
    } else {
      word += "👉Required : Passed the requirement\n";
    }

    if (Majorpoint < Majorstandard) {
      word += "👉Major : " + [Majorstandard - Majorpoint] + " more credits required\n"
    } else {
      word += "👉Major : Passed the requirement\n"
    }

    const Doublecheck = document.getElementById("double_major_none").checked;
    const DoubleStandard = document.getElementById("double_st").value;
    const Doublepoint = Number(document.getElementById("double_major_point").value);
    if (!Doublecheck) {
      if (Doublepoint < DoubleStandard) {
        word += "👉Double major : " + [DoubleStandard - Doublepoint] + " more credits required\n"
      } else {
        word += "👉Double major : Passed the minimum credits requirement\n"
      }
    }

    const Linkcheck = document.getElementById("link_major_none").checked;
    const LinkStandard = document.getElementById("link_st").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
    if (!Linkcheck) {
      if (Linkpoint < LinkStandard) {
        word += "👉연계전공 : " + [LinkStandard - Linkpoint] + " more credits required\n"
      } else {
        word += "👉연계전공 : Passed the minimum credits requirement\n"
      }
    }

    const Fusioncheck = document.getElementById("fusion_major_none").checked;
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
    const FusionStandard = Number(document.getElementById("fusion_standard").value);
    if (!Fusioncheck) {
      if (Fusionpoint < FusionStandard) {
        word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " more credits required\n"
      } else {
        word += "👉" + Fusiontext + "융합전공 : Passed the minimum credits requirement\n"
      }
    }

    const Plancheck = document.getElementById("plan_major_none").checked;
    const PlanStandard = document.getElementById("plan_st").value;
    const Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
    if (!Plancheck) {
      if (Planpoint < PlanStandard) {
        word += "👉설계전공 : " + [PlanStandard - Planpoint] + " more credits required\n"
      } else {
        word += "👉설계전공 : Passed the minimum credits requirement\n"
      }
    }

    const Minorcheck = document.getElementById("minor_none").checked;
    const MinorStandard = document.getElementById("minor_st").value;
    const Minorpoint = Number(document.getElementById("minor_point").value);
    if (!Minorcheck) {
      if (Minorpoint < MinorStandard) {
        word += "👉Minor : " + [MinorStandard - Minorpoint] + " more credits required\n"
      } else {
        word += "👉Minor : Passed the minimum credits requirement\n"
      }
    }

    const Freepoint = Number(document.getElementById("free_point").value);
    word += "👉Free choice : " + Freepoint + " credits\n"

    const Teachingcheck = document.getElementById("teaching_none").checked;
    const TeachingStandard = document.getElementById("teaching_st").value;
    const Teachingpoint = Number(document.getElementById("teaching_point").value);
    if (!Teachingcheck) {
      if (Teachingpoint < TeachingStandard)
        word += "👉Teaching : " + [TeachingStandard - Teachingpoint] + " more credits required\n"
      else {
        word += "👉Teaching : Passed the minimum credits requirement\n"
      }
    }

    const TotalStandard = Number(document.getElementById("total_standard").value);
    const TotalPoint = Number(document.getElementById("the_total").value);
    if (TotalPoint < TotalStandard) {
      word += "👉Total credits : At least " + [TotalStandard - TotalPoint] + " more credits required"
    } else {
      word += "👉Total credits : Passed the requirement"
    }

    if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
      if (Minorcheck && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorcheck && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else {
        swal("Major Credits Results", word, "error")
      }
    } else {
      swal("Major Credits Results", word, "error")
    }
  },
  basenece2016: function(Majorstandard) {
    const AdYear = Number(document.getElementById("ad-year").value);
    const Major = document.getElementById("Major_select");
    const Majortext = Major.options[Major.selectedIndex].text;
    const Multimajor = document.getElementById("MultiMajor_select");
    const Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
    const BaseStandard = document.getElementById("base_standard").value;
    const NeceStandard = document.getElementById("nece_standard").value;
    const Basepoint = Number(document.getElementById("base_input").value);
    const Necepoint = Number(document.getElementById("nece_input").value);
    const Majorpoint = Number(document.getElementById("major_input").value);
    let word = "👉Entrance Year : " + AdYear;

    if (Majortext.includes("트랙")) {
      word += "\n👉Major : 공공인재학부" + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n";
    } else {
      word += "\n👉Major : " + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n";
    }

    const FusionOption = Number(document.getElementById("fusion-options").value);
    if (Multimajortext.includes("융합")) {
      if (FusionOption == 0) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Choose your 융합전공!", "", "error");
      }
    }

    if (Majorpoint < Necepoint) {
      return swal("Major credits include Required credits!", "", "error");
    }

    const Freepoint = Number(document.getElementById("free_point").value);
    const CAUSeminar = document.getElementById("causeminar").checked;
    if (Freepoint < 1 && CAUSeminar) {
      return swal("Fill in the Free choice!", "", "error");
    }

    if (Basepoint < BaseStandard) {
      word += "👉Basics : " + [BaseStandard - Basepoint] + " more credits required\n";
    } else {
      word += "👉Basics : Passed the requirement\n";
    }

    if (Necepoint < NeceStandard) {
      word += "👉Required : " + [NeceStandard - Necepoint] + " more credits required\n";
    } else {
      word += "👉Required : Passed the requirement\n";
    }

    if (Majorpoint < Majorstandard) {
      word += "👉Major : " + [Majorstandard - Majorpoint] + " more credits required\n"
    } else {
      word += "👉Major : Passed the requirement\n"
    }

    const Doublecheck = document.getElementById("double_major_none").checked;
    const DoubleStandard = document.getElementById("double_st").value;
    const Doublepoint = Number(document.getElementById("double_major_point").value);
    if (!Doublecheck) {
      if (Doublepoint < DoubleStandard) {
        word += "👉Double major : " + [DoubleStandard - Doublepoint] + " more credits required\n"
      } else {
        word += "👉Double major : Passed the minimum credits requirement\n"
      }
    }

    const Linkcheck = document.getElementById("link_major_none").checked;
    const LinkStandard = document.getElementById("link_st").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
    if (!Linkcheck) {
      if (Linkpoint < LinkStandard) {
        word += "👉연계전공 : " + [LinkStandard - Linkpoint] + " more credits required\n"
      } else {
        word += "👉연계전공 : Passed the minimum credits requirement\n"
      }
    }


    const Fusioncheck = document.getElementById("fusion_major_none").checked;
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
    const FusionStandard = Number(document.getElementById("fusion_standard").value);
    if (!Fusioncheck) {
      if (Fusionpoint < FusionStandard) {
        word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " more credits required\n"
      } else {
        word += "👉" + Fusiontext + "융합전공 : Passed the minimum credits requirement\n"
      }
    }

    const Plancheck = document.getElementById("plan_major_none").checked;
    const PlanStandard = document.getElementById("plan_st").value;
    const Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
    if (!Plancheck) {
      if (Planpoint < PlanStandard) {
        word += "👉설계전공 : " + [PlanStandard - Planpoint] + " more credits required\n"
      } else {
        word += "👉설계전공 : Passed the minimum credits requirement\n"
      }
    }

    const Minorcheck = document.getElementById("minor_none").checked;
    const MinorStandard = document.getElementById("minor_st").value;
    const Minorpoint = Number(document.getElementById("minor_point").value);
    if (!Minorcheck) {
      if (Minorpoint < MinorStandard) {
        word += "👉Minor : " + [MinorStandard - Minorpoint] + " more credits required\n"
      } else {
        word += "👉Minor : Passed the minimum credits requirement\n"
      }
    }

      word += "👉Free choice : " + Freepoint + " credits\n"

      if (!CAUSeminar) {
        word += "- CAU세미나(1credit) : Not passed\n"
      } else {
        word += "- CAU세미나(1credit) : Passed\n"
      }

    const Teachingcheck = document.getElementById("teaching_none").checked;
    const TeachingStandard = document.getElementById("teaching_st").value;
    const Teachingpoint = Number(document.getElementById("teaching_point").value);
    if (!Teachingcheck) {
      if (Teachingpoint < TeachingStandard)
        word += "👉Teaching : " + [TeachingStandard - Teachingpoint] + " more credits required\n"
      else {
        word += "👉Teaching : Passed the minimum credits requirement\n"
      }
    }

    const TotalStandard = Number(document.getElementById("total_standard").value);
    const TotalPoint = Number(document.getElementById("the_total").value);
    if (TotalPoint < TotalStandard) {
      word += "👉Total credits : At least " + [TotalStandard - TotalPoint] + " more credits required"
    } else {
      word += "👉Total credits : Passed the requirement"
    }

    if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && Freepoint >= 1 && CAUSeminar && TotalPoint >= TotalStandard) {
      if (Minorcheck && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else if (Minorcheck && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("Major Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Major Credits Results", word, "success")
          } else {
            swal("Major Credits Results", word, "error")
          }
        }
      } else {
        swal("Major Credits Results", word, "error")
      }
    } else {
      swal("Major Credits Results", word, "error")
    }
  },
  major_tr: function() {
    const AdYear = Number(document.getElementById("ad-year").value);
    const SecYear = document.getElementById("2ndyear").checked;
    const Majorstandard = document.getElementById("major_standard").value;
    const MajorSelect = document.getElementById("Major_select").value;
    const Multimajor = document.getElementById("MultiMajor_select");
    const Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const FusionCross = Number(document.getElementById("cross_point2").value);
    const PlanCross = Number(document.getElementById("cross_point3").value);
    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your transfer year!", "", "error");
    }

    if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
      if (FusionCross > 6) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Maximum credits for\n" + Fusiontext + "융합전공 are 6!", "", "error");
      }
    } else if (Fusiontext.includes("금융")) {
      if (FusionCross > 15) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Maximum credits for\n" + Fusiontext + "융합전공 are 15!", "", "error");
      }
    } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
      if (FusionCross > 12) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Maximum credits for\n" + Fusiontext + "융합전공 are 12!", "", "error");
      }
    }

    if (MajorSelect == "none") {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your major!", "", "error");
    } else if (SecYear && Multimajortext.includes("N/A")) {
      document.getElementById("student-info").scrollIntoView();
      return swal("Choose your multiple major!", "If you transferred to 2nd year, multiple majors are required!", "error");
    } else if (LinkCross > 12) {
      document.getElementById("double_major_point").scrollIntoView();
      return swal("Maximum cross credits for 연계전공 are 12!", "", "error");
    } else if (PlanCross > 6) {
      document.getElementById("link_major_none").scrollIntoView();
      return swal("Maximum cross credits for 자기설계전공 are 6!", "", "error");
    } else {
      Result.basenece_tr(Majorstandard);
    }
  },
  basenece_tr: function(Majorstandard) {
    const AdYear = Number(document.getElementById("ad-year").value);
    const SecYear = document.getElementById("2ndyear").checked;
    const Major = document.getElementById("Major_select");
    const Majortext = Major.options[Major.selectedIndex].text;
    const Multimajor = document.getElementById("MultiMajor_select");
    const Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
    const Liberal_point = Number(document.getElementById("liberal_input").value);
    const BaseStandard = document.getElementById("base_standard").value;
    const NeceStandard = document.getElementById("nece_standard").value;
    const Basepoint = Number(document.getElementById("base_input").value);
    const Necepoint = Number(document.getElementById("nece_input").value);
    const Majorpoint = Number(document.getElementById("major_input").value);
    let word = "👉Transfer year : " + AdYear;

    if (SecYear) {
      word += "- 2nd year transfer";
    } else {
      word += "- 3rd year transfer"
    }

    if (Majortext.includes("트랙")) {
      word += "\n👉Major : 공공인재학부" + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n👉교양 : " + Liberal_point + " credits\n";
    } else {
      word += "\n👉Major : " + Majortext + "\n👉Multiple Major : " + Multimajortext + "\n👉교양 : " + Liberal_point + " credits\n";
    }

    const FusionOption = Number(document.getElementById("fusion-options").value);
    if (Multimajortext.includes("융합")) {
      if (FusionOption == 0) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("Choose your 융합전공!", "", "error");
      }
    }

    if (Majorpoint < Necepoint) {
      return swal("Major credits include Required credits!", "", "error");
    }

    if (Basepoint < BaseStandard) {
      word += "👉Basics : " + [BaseStandard - Basepoint] + " more credits required\n";
    } else {
      word += "👉Basics : Passed the requirement\n";
    }

    if (Necepoint < NeceStandard) {
      word += "👉Required : " + [NeceStandard - Necepoint] + " more credits required\n";
    } else {
      word += "👉Required : Passed the requirement\n";
    }

    if (Majorpoint < Majorstandard) {
      word += "👉Major : " + [Majorstandard - Majorpoint] + " more credits required\n"
    } else {
      word += "👉Major : Passed the requirement\n"
    }

    const Doublecheck = document.getElementById("double_major_none").checked;
    const DoubleStandard = document.getElementById("double_st").value;
    const Doublepoint = Number(document.getElementById("double_major_point").value);
    if (!Doublecheck) {
      if (Doublepoint < DoubleStandard) {
        word += "👉Double major : " + [DoubleStandard - Doublepoint] + " more credits required\n"
      } else {
        word += "👉Double major : Passed the minimum credits requirement\n"
      }
    }

    const Linkcheck = document.getElementById("link_major_none").checked;
    const LinkStandard = document.getElementById("link_st").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
    if (!Linkcheck) {
      if (Linkpoint < LinkStandard) {
        word += "👉연계전공 : " + [LinkStandard - Linkpoint] + " more credits required\n"
      } else {
        word += "👉연계전공 : Passed the minimum credits requirement\n"
      }
    }

    const Fusioncheck = document.getElementById("fusion_major_none").checked;
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
    const FusionStandard = Number(document.getElementById("fusion_standard").value);
    if (!Fusioncheck) {
      if (Fusionpoint < FusionStandard) {
        word += Fusiontext + "👉융합전공 : " + [FusionStandard - Fusionpoint] + " more credits required\n"
      } else {
        word += Fusiontext + "👉융합전공 : Passed the minimum credits requirement\n"
      }
    }

    const Plancheck = document.getElementById("plan_major_none").checked;
    const PlanStandard = document.getElementById("plan_st").value;
    const Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
    if (!Plancheck) {
      if (Planpoint < PlanStandard) {
        word += "👉설계전공 : " + [PlanStandard - Planpoint] + " more credits required\n"
      } else {
        word += "👉설계전공 : Passed the minimum credits requirement\n"
      }
    }

    const Minorcheck = document.getElementById("minor_none").checked;
    const MinorStandard = document.getElementById("minor_st").value;
    const Minorpoint = Number(document.getElementById("minor_point").value);
    if (!Minorcheck) {
      if (Minorpoint < MinorStandard) {
        word += "👉Minor : " + [MinorStandard - Minorpoint] + " more credits required\n"
      } else {
        word += "👉Minor : Passed the minimum credits requirement\n"
      }
    }

    const Freepoint = Number(document.getElementById("free_point").value);
    word += "👉Free choice : " + Freepoint + " credits\n"

    const Teachingcheck = document.getElementById("teaching_none").checked;
    const TeachingStandard = document.getElementById("teaching_st").value;
    const Teachingpoint = Number(document.getElementById("teaching_point").value);
    if (!Teachingcheck) {
      if (Teachingpoint < TeachingStandard)
        word += "👉Teaching : " + [TeachingStandard - Teachingpoint] + " more credits required\n"
      else {
        word += "👉Teaching : Passed the minimum credits requirement\n"
      }
    }

    const TotalPoint = Number(document.getElementById("the_total").value);
    const TotalStandard = Number(document.getElementById("total_standard").value);
    if (TotalPoint < TotalStandard) {
      word += "👉Total credits : At least " + [TotalStandard - TotalPoint] + " more credits required"
    } else {
      word += "👉Total credits : Passed the requirement"
    }

    if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
      if (Minorcheck && Teachingcheck) {
        if (Multimajortext.includes("N/A")) {
          swal("Total Credits Results", word, "success")
        } else if (Multimajortext.includes("심화")) {
          swal("Total Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingcheck) {
        if (Multimajortext.includes("N/A")) {
          swal("Total Credits Results", word, "success")
        } else if (Multimajortext.includes("심화")) {
          swal("Total Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
        if (Multimajortext.includes("N/A")) {
          swal("Total Credits Results", word, "success")
        } else if (Multimajortext.includes("심화")) {
          swal("Total Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        }
      } else if (Minorcheck && Teachingpoint >= 22) {
        if (Multimajortext.includes("N/A")) {
          swal("Total Credits Results", word, "success")
        } else if (Multimajortext.includes("심화")) {
          swal("Total Credits Results", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("Total Credits Results", word, "success")
          } else {
            swal("Total Credits Results", word, "error")
          }
        }
      } else {
        swal("Total Credits Results", word, "error")
      }
    } else {
      swal("Total Credits Results", word, "error")
    }
  }
}
