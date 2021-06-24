const Modal = {
  lib12to14: function() {
    let word = "교양영역 이수기준"
    const content = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : English1(Communication in English)\nEnglish2(English fo Professional Track)" +
      "\n- 기타 : 논리와사고(ACT) / 회계와사회 / 독서와토론(창의와소통) / 한국사\n" +
      "회계학원론(회계원리)을 이수했을 경우, '회계와사회' 면제" +
      "\n👉핵심교양 : 이수학점 및 역량 관계없이 최소 3과목 이상 이수 시 인정" +
      "\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
    swal(word, content, "info");
  },
  lib2015: function() {
    let word = "교양영역 이수기준"
    const content = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통 / 회계와사회 / ACT / 한국사\n" +
      "회계학원론(회계원리)을 이수했을 경우, '회계와사회' 면제" +
      "\n👉핵심교양 : 서로 다른 4개 영역에서 각 1과목 이상 이수\n" +
      "👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
    swal(word, content, "info");
  },
  lib2016: function() {
    const AdYear = Number(document.getElementById("ad-year").value);
    const College = document.getElementById("college_select").value;
    const Engin = ["engineering", "ict", "software", "artech"]
    let word = "교양영역 이수기준"
    const content1618 = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통/ACT/한국사/\n 앙트레프레너십시대의회계(회계와사회)\n" +
      "회계학원론(회계원리)을 이수했을 경우, '앙트레프레너십시대의회계' 면제" +
      "\n👉핵심교양 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "각 영역에서 1과목 이상 이수!\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
    const contenteng = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n디자인적사고와문제해결" +
      "\n회계학원론(회계원리)을 이수했을 경우, '앙트레프레너십시대의회계' 면제" +
      "\n👉핵심교양 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "각 영역에서 1과목 이상 이수!\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"
    const content = "👉공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통/ACT/한국사/\n앙트레프레너십시대의회계/\n컴퓨팅적사고와문제해결" +
      "\n회계학원론(회계원리)을 이수했을 경우, '앙트레프레너십시대의회계' 면제" +
      "\n👉핵심교양 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
      "각 영역에서 1과목 이상 이수!\n👉선택교양 : 자율이수\n" + "👉총 교양학점 45학점까지만 인정됩니다!"

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
    let word = "전공영역 이수기준"
    const content = "👉전공 : 각 학과별 세부 기준 참고\n" +
      "👉복수전공 : 복수전공 학과의 기준 참고\n복수전공의 전공기초는 자유선택으로 인정" +
      "\n👉연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
      "\n👉부전공 : 부전공 전공필수 6학점 이상 포함하여 수강" +
      "\n👉교직 : 교직과정 이수 확인(Tel.02-820-5080)" +
      "\n👉총 이수학점 : 132 학점 이상\n(교양은 최대 45학점까지 인정)"
    swal(word, content, "info");
  },
  major2016: function() {
    let word = "전공영역 이수기준"
    const content = "👉전공 : 각 학과별 세부 기준 참고\n" +
      "👉복수전공 : 복수전공 학과의 기준 참고\n복수전공의 전공기초는 자유선택으로 인정" +
      "\n👉연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
      "\n👉부전공 : 부전공 전공필수 6학점 이상 포함하여 수강" +
      "\n👉자유선택 : CAU세미나 1학점 의무수강" +
      "\n👉교직 : 교직과정 이수 확인(Tel.02-820-5080)" +
      "\n👉총 이수학점 : 132 학점 이상\n(교양은 최대 45학점까지 인정)"
    swal(word, content, "info");
  },
  major_tr: function() {
    let word = "학점 이수기준"
    const content = "👉교양 : 이수 의무 없음\n" +
      "👉전공 : 각 학과별 세부 기준 참고\n" +
      "👉다전공 : 2학년 편입생만 해당." +
      "\n- 복수전공 : 복수전공 학과의 기준 참고\n복수전공의 전공기초는 자유선택으로 인정" +
      "\n- 연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
      "\n👉부전공 : 부전공 전공필수 6학점 이상 포함하여 수강" +
      "\n👉교직 : 교직과정 이수 확인(Tel.02-820-5080)" +
      "\n👉총 이수학점 : 66 학점 이상(2학년 편입은 99 학점 이상)"
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
    let word = "👉입학연도 : " + AdYear + "년\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      return swal("입학연도를 선택하세요!", "", "error");
    }

    if (common_kor_point < 2) {
      word += "👉공통교양\n - 국어 : " + [2 - common_kor_point] + " 학점 미달\n";
    } else {
      word += "👉공통교양\n - 국어 : 기준 통과\n";
    }

    if (common_eng_point < 4 && common_eng_ex) {
      word += " - 영어 : 면제\n"
    } else if (common_eng_point < 4 && !common_eng_ex) {
      word += " - 영어 : " + [4 - common_eng_point] + " 학점 미달\n";
    } else {
      word += " - 영어 : 기준 통과\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < 8) {
        word += " - 기타 : " + [8 - common_etc_point] + " 학점 미달\n"
      } else {
        word += " - 기타 : 기준 통과\n"
      }
    } else {
      if (common_etc_point < 6) {
        word += " - 기타 : " + [6 - common_etc_point] + " 학점 미달(회계와사회 : 면제)\n"
      } else {
        word += " - 기타 : 기준 통과(회계와사회 : 면제)\n"
      }
    }

    if (core_total_point < 9) {
      word += "👉핵심교양 : " + [9 - core_total_point] + " 학점 미달"
    } else {
      word += "👉핵심교양 : 기준 통과"
    }

    word += "\n👉선택교양 : " + elective_point + " 학점"

    if (liberal_total_point <= 45) {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점"
    } else {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점_ " + [liberal_total_point - 45] + "학점 초과_45 학점만 인정"
    }

    if (common_kor_point == 2 && core_total_point >= 9 && liberal_total_point > 45) {
      if (common_eng_point >= 4 && common_etc_point == 8) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point == 8) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point >= 4 && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "warning")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else if (common_kor_point == 2 && core_total_point >= 9 && liberal_total_point <= 45) {
      if (common_eng_point >= 4 && common_etc_point == 8) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point == 8) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point >= 4 && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 4 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else {
      swal("교양영역 결과", word, "error")
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
    const liberal_total_point = Number(document.getElementById("liberal_total").value);
    const MACH1 = Number(document.getElementById("mach1").value);
    const MACH1none = document.getElementById("mach1_none").checked;
    const MACH2 = Number(document.getElementById("mach2").value);
    const MACH2none = document.getElementById("mach2_none").checked;
    const MACH1_st = Number(document.getElementById("mach1_st").value);
    const MACH2_st = Number(document.getElementById("mach2_st").value);
    let word = "👉입학연도 : " + AdYear + "년\n";

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      return swal("소속 대학을 선택하세요!", "", "error");
    }

    if (common_kor_point < 2) {
      word += "👉공통교양\n - 국어 : " + [2 - common_kor_point] + " 학점 미달\n";
    } else {
      word += "👉공통교양\n - 국어 : 기준 통과\n";
    }

    if (common_eng_point < 2 && common_eng_ex) {
      word += " - 영어 : 면제\n"
    } else if (common_eng_point < 2 && !common_eng_ex) {
      word += " - 영어 : " + [2 - common_eng_point] + " 학점 미달\n";
    } else {
      word += " - 영어 : 기준 통과\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < 8) {
        word += " - 기타 : " + [8 - common_etc_point] + " 학점 미달\n"
      } else {
        word += " - 기타 : 기준 통과\n"
      }
    } else {
      if (common_etc_point < 6) {
        word += " - 기타 : " + [6 - common_etc_point] + " 학점 미달(회계와사회 : 면제)\n"
      } else {
        word += " - 기타 : 기준 통과(회계와사회 : 면제)\n"
      }
    }

    if (core_total_point < 12) {
      word += "👉핵심교양 : " + [12 - core_total_point] + " 학점 미달\n- 핵심 역량 4개 영역 각 1과목 이상 이수 필요!"
    } else {
      word += "👉핵심교양 : 최소학점 기준 통과\n- 핵심 역량 4개 영역 각 1과목 이상 이수 확인!"
    }

    word += "\n👉선택교양 : " + elective_point + " 학점"

    if (!MACH1none) {
      if (MACH1 < 4) {
        word += "\n👉MACH교양 : " + [4 - MACH1] + " 학점 미달"
      } else {
        word += "\n👉MACH교양 : 기준 통과"
      }
    }

    if (!MACH2none) {
      if (MACH2 < 4) {
        word += "\n👉MACH실습 : " + [2 - MACH2] + " 학점 미달"
      } else {
        word += "\n👉MACH실습 : 기준 통과"
      }
    }

    if (liberal_total_point <= 45) {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점"
    } else {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점_ " + [liberal_total_point - 45] + "학점 초과_45 학점만 인정"
    }

    if (common_kor_point == 2 && core_total_point >= 11 && MACH1 >= MACH1_st && MACH2 >= MACH2_st && liberal_total_point > 45) {
      if (common_eng_point == 2 && common_etc_point == 8) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 8) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point == 2 && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "warning")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else if (common_kor_point == 2 && core_total_point >= 11 && MACH1 >= MACH1_st && MACH2 >= MACH2_st) {
      if (common_eng_point == 2 && common_etc_point == 8) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 8) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 6 && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else {
      swal("교양영역 결과", word, "error")
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
    const liberal_total_point = Number(document.getElementById("liberal_total").value);
    const MACH1 = Number(document.getElementById("mach1").value);
    const MACH1none = document.getElementById("mach1_none").checked;
    const MACH2 = Number(document.getElementById("mach2").value);
    const MACH2none = document.getElementById("mach2_none").checked;
    const MACH1_st = Number(document.getElementById("mach1_st").value);
    const MACH2_st = Number(document.getElementById("mach2_st").value);
    let word = "👉입학연도 : " + AdYear + "년\n";

    if (AdYear < 1000) {
      document.getElementById("student-info").scrollIntoView();
      return swal("입학연도를 선택하세요!", "", "error");
    }

    if (College == "none") {
      document.getElementById("student-info").scrollIntoView();
      return swal("소속 대학을 선택하세요!", "", "error");
    }

    if (core_total_point > 0 && !Core1 && !Core2 && !Core3 && !Core4 && !Core5) {
      return swal("핵심교양 영역을 체크하세요!", "", "error");
    }

    if (Core1 || Core2 || Core3 || Core4 || Core5) {
      if (core_total_point == 0) {
        return swal("핵심교양 학점을 입력하세요!", "", "error");
      }
    }

    if (common_kor_point < 2) {
      word += "👉공통교양\n - 국어 : " + [2 - common_kor_point] + " 학점 미달\n";
    } else {
      word += "👉공통교양\n - 국어 : 기준 통과\n";
    }

    if (common_eng_point < 2 && common_eng_ex) {
      word += " - 영어 : 면제\n"
    } else if (common_eng_point < 2 && !common_eng_ex) {
      word += " - 영어 : " + [2 - common_eng_point] + " 학점 미달\n";
    } else {
      word += " - 영어 : 기준 통과\n";
    }

    if (!account_check_SF) {
      if (common_etc_point < cometcst) {
        word += " - 기타 : " + [cometcst - common_etc_point] + " 학점 미달\n"
      } else {
        word += " - 기타 : 기준 통과\n"
      }
    } else {
      if (common_etc_point < cometcst - 2) {
        word += " - 기타 : " + [cometcst - 2 - common_etc_point] + " 학점 미달(앙트레프레너십시대의회계 : 면제)\n"
      } else {
        word += " - 기타 : 기준 통과(앙트레프레너십시대의회계 : 면제)\n"
      }
    }

    if (Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 12) {
      word += "👉핵심교양 : 기준 통과"
    } else if (core_total_point < 14) {
      word += "👉핵심교양 : " + core_total_point + " 학점\n- 미이수 영역 : "
    } else {
      word += "👉핵심교양 : 최소학점 기준 통과\n- 미이수 영역 : "
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
      word += "\n - MACH 교양 1 과목 이상 이수 확인!"
    }

    word += "\n👉선택교양 : " + elective_point + " 학점"

    if (!MACH1none) {
      if (MACH1 < 4) {
        word += "\n👉MACH교양 : " + [4 - MACH1] + " 학점 미달"
      } else {
        word += "\n👉MACH교양 : 기준 통과"
      }
    }

    if (!MACH2none) {
      if (MACH2 < 4) {
        word += "\n👉MACH실습 : " + [2 - MACH2] + " 학점 미달"
      } else {
        word += "\n👉MACH실습 : 기준 통과"
      }
    }

    if (liberal_total_point <= 45) {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점"
    } else {
      word += "\n👉교양영역 계 : " + liberal_total_point + " 학점_ " + [liberal_total_point - 45] + "학점 초과_45 학점만 인정"
    }

    if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14 && MACH1 >= MACH1_st && MACH2 >= MACH2_st && liberal_total_point > 45) {
      if (common_eng_point == 2 && common_etc_point >= cometcst) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= cometcst) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point == 2 && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("교양영역 결과", word, "warning")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("교양영역 결과", word, "warning")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14 && MACH1 >= MACH1_st && MACH2 >= MACH2_st && liberal_total_point <= 45) {
      if (common_eng_point == 2 && common_etc_point >= cometcst) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= cometcst) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point == 2 && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= [cometcst - 2] && account_check_SF) {
        swal("교양영역 결과", word, "success")
      } else {
        swal("교양영역 결과", word, "error")
      }
    } else {
      swal("교양영역 결과", word, "error")
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
      return swal("평균평점은 4.5 만점입니다!", "", "error");
    }

    let word = "👉졸업인정제\n";

    if (!English_result) {
      word += "- 영어 : 미통과\n"
    } else {
      word += "- 영어 : 통과\n"
    }

    if (Hanja_result) {
      word += "- 한자 : 통과\n"
    } else {
      word += "- 한자 : 미통과\n"
    }

    if (Korean_result) {
      word += "- 한국어 : 통과\n"
    } else {
      word += "- 한국어 : 미통과\n"
    }

    if (Paper_result) {
      word += "👉졸업시험/논문\n- 주전공 : 합격\n"
    } else {
      word += "👉졸업시험/논문\n- 주전공 : 불합격\n"
    }

    if (Paper_result2) {
      word += "- 복수전공 : 통과/해당없음\n"
    } else {
      word += "- 복수전공 : 불합격\n"
    }

    if (Average_result >= 2) {
      word += "👉평균평점 : 통과"
    } else {
      word += "👉평균평점 : 미통과_졸업불가"
    }

    if (English_result && Hanja_result && Korean_result && Paper_result && Paper_result2 && Average_result >= 2) {
      swal("기타 졸업요건 결과", word, "success");
    } else if (Average_result >= 2) {
      if (!English_result || !Hanja_result || !Korean_result || !Paper_result || !Paper_result2) {
        swal("기타 졸업요건 결과", word, "warning");
      }
    } else if (Average_result <= 2) {
      swal("기타 졸업요건 결과", word, "error");
    }
  },
  major: function() {
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
      return swal("입학연도를 선택하세요!", "", "error");
    }

    if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
      if (FusionCross > 6) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal(Fusiontext + "융합전공 교차인정\n최대학점은 6 학점입니다!", "", "error");
      }
    } else if (Fusiontext.includes("금융")) {
      if (FusionCross > 15) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal(Fusiontext + "융합전공 교차인정\n최대학점은 15 학점입니다!", "", "error");
      }
    } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
      if (FusionCross > 12) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal(Fusiontext + "융합전공 교차인정\n최대학점은 12 학점입니다!", "", "error");
      }
    }

    const MajorTeachCheck = document.getElementById("major_teach").checked;
    const DoubleTeachCheck = document.getElementById("double-teaching").checked;
    const Teachingnone = document.getElementById("teaching_none").checked;

    if (Teachingnone) {
      if (MajorTeachCheck) {
        return swal("교직이수 여부를 확인하세요!", "", "error");
      } else if (DoubleTeachCheck) {
        return swal("교직이수 여부를 확인하세요!", "", "error");
      }
    } else if (!MajorTeachCheck) {
      if (DoubleTeachCheck) {
        return swal("교직이수 여부를 확인하세요!", "", "error");
      }
    }

    if (MajorSelect == "none") {
      document.getElementById("student-info").scrollIntoView();
      return swal("전공 학과를 선택하세요!", "", "error");
    } else if (Majorstandard < 45) {
      document.getElementById("student-info").scrollIntoView();
      return swal("다전공을 선택하세요!", "", "error");
    } else if (LinkCross > 12) {
      document.getElementById("double_major_point").scrollIntoView();
      return swal("연계전공의 교차인정 최대학점은 12 학점입니다!", "", "error");
    } else if (PlanCross > 6) {
      document.getElementById("link_major_none").scrollIntoView();
      return swal("자기설계전공의 교차인정 최대학점은 6 학점입니다!", "", "error");
    } else {
      if (AdYear <= 2014) {
        Result.basenece12to14(Majorstandard);
      } else if (AdYear == 2015) {
        Result.basenece2015(Majorstandard);
      } else {
        Result.basenece2016(Majorstandard);
      }
      // BaseNeceresult(Majorstandard);
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
    let word = "👉입학연도 : " + AdYear + "년" + "\n👉주전공 : " + Majortext + "\n👉다전공 : " + Multimajortext + "\n";

    const FusionOption = Number(document.getElementById("fusion-options").value);
    if (Multimajortext.includes("융합")) {
      if (FusionOption == 0) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("세부 융합전공을 선택하세요!", "", "error");
      }
    }

    if (Majorpoint < Necepoint) {
      return swal("전공학점은 전공필수를 포함합니다!", "", "error");
    }

    if (Basepoint < BaseStandard) {
      word += "👉전공기초 : " + [BaseStandard - Basepoint] + " 학점 미달\n";
    } else {
      word += "👉전공기초 : 기준 통과\n";
    }

    if (Necepoint < NeceStandard) {
      word += "👉전공필수 : " + [NeceStandard - Necepoint] + " 학점 미달\n";
    } else {
      word += "👉전공필수 : 기준 통과\n";
    }

    if (Majorpoint < Majorstandard) {
      word += "👉전공 : " + [Majorstandard - Majorpoint] + " 학점 미달\n"
    } else {
      word += "👉전공 : 기준 통과\n"
    }

    const Doublecheck = document.getElementById("double_major_none").checked;
    const DoubleStandard = document.getElementById("double_st").value;
    const Doublepoint = Number(document.getElementById("double_major_point").value);
    if (!Doublecheck) {
      if (Doublepoint < DoubleStandard) {
        word += "👉복수전공 : " + [DoubleStandard - Doublepoint] + " 학점 미달\n"
      } else {
        word += "👉복수전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Linkcheck = document.getElementById("link_major_none").checked;
    const LinkStandard = document.getElementById("link_st").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
    if (!Linkcheck) {
      if (Linkpoint < LinkStandard) {
        word += "👉연계전공 : " + [LinkStandard - Linkpoint] + " 학점 미달\n"
      } else {
        word += "👉연계전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }


    const Fusioncheck = document.getElementById("fusion_major_none").checked;
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
    const FusionStandard = Number(document.getElementById("fusion_standard").value);
    if (!Fusioncheck) {
      if (Fusionpoint < FusionStandard) {
        word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " 학점 미달\n"
      } else {
        word += "👉" + Fusiontext + "융합전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Plancheck = document.getElementById("plan_major_none").checked;
    const PlanStandard = document.getElementById("plan_st").value;
    const Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
    if (!Plancheck) {
      if (Planpoint < PlanStandard) {
        word += "👉설계전공 : " + [PlanStandard - Planpoint] + " 학점 미달\n"
      } else {
        word += "👉설계전공 : 최소학점 기준 통과\n"
      }
    }

    const Minorcheck = document.getElementById("minor_none").checked;
    const MinorStandard = document.getElementById("minor_st").value;
    const Minorpoint = Number(document.getElementById("minor_point").value);
    if (!Minorcheck) {
      if (Minorpoint < MinorStandard) {
        word += "👉부전공 : " + [MinorStandard - Minorpoint] + " 학점 미달\n"
      } else {
        word += "👉부전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Freepoint = Number(document.getElementById("free_point").value);

    word += "👉자유선택 : " + Freepoint + " 학점 이수\n"

    const Teachingcheck = document.getElementById("teaching_none").checked;
    const TeachingStandard = document.getElementById("teaching_st").value;
    const Teachingpoint = Number(document.getElementById("teaching_point").value);
    if (!Teachingcheck) {
      if (Teachingpoint < TeachingStandard)
        word += "👉교직이수 : " + [TeachingStandard - Teachingpoint] + " 학점 미달\n"
      else {
        word += "👉교직이수 : 최소학점 기준 통과\n"
      }
    }

    const TotalStandard = Number(document.getElementById("total_standard").value);
    const TotalPoint = Number(document.getElementById("the_total").value);
    if (TotalPoint < TotalStandard) {
      word += "👉전체 이수학점 : 최소 " + [TotalStandard - TotalPoint] + " 학점 미달"
    } else {
      word += "👉전체 이수학점 : 기준 통과"
    }

    if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
      if (Minorcheck && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorcheck && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else {
        swal("전공영역 결과", word, "error")
      }
    } else {
      swal("전공영역 결과", word, "error")
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
    let word = "👉입학연도 : " + AdYear + "년\n👉주전공 : " + Majortext + "\n👉다전공 : " + Multimajortext + "\n";

    const FusionOption = Number(document.getElementById("fusion-options").value);
    if (Multimajortext.includes("융합")) {
      if (FusionOption == 0) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("세부 융합전공을 선택하세요!", "", "error");
      }
    }

    if (Majorpoint < Necepoint) {
      return swal("전공학점은 전공필수를 포함합니다!", "", "error");
    }

    if (Basepoint < BaseStandard) {
      word += "👉전공기초 : " + [BaseStandard - Basepoint] + " 학점 미달\n";
    } else {
      word += "👉전공기초 : 기준 통과\n";
    }

    if (Necepoint < NeceStandard) {
      word += "👉전공필수 : " + [NeceStandard - Necepoint] + " 학점 미달\n";
    } else {
      word += "👉전공필수 : 기준 통과\n";
    }

    if (Majorpoint < Majorstandard) {
      word += "👉전공 : " + [Majorstandard - Majorpoint] + " 학점 미달\n"
    } else {
      word += "👉전공 : 기준 통과\n"
    }

    const Doublecheck = document.getElementById("double_major_none").checked;
    const DoubleStandard = document.getElementById("double_st").value;
    const Doublepoint = Number(document.getElementById("double_major_point").value);
    if (!Doublecheck) {
      if (Doublepoint < DoubleStandard) {
        word += "👉복수전공 : " + [DoubleStandard - Doublepoint] + " 학점 미달\n"
      } else {
        word += "👉복수전공 : 최소학점 기준 통과_필수과목 확인 필요\n"
      }
    }

    const Linkcheck = document.getElementById("link_major_none").checked;
    const LinkStandard = document.getElementById("link_st").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
    if (!Linkcheck) {
      if (Linkpoint < LinkStandard) {
        word += "👉연계전공 : " + [LinkStandard - Linkpoint] + " 학점 미달\n"
      } else {
        word += "👉연계전공 : 최소학점 기준 통과_필수과목 확인 필요\n"
      }
    }

    const Fusioncheck = document.getElementById("fusion_major_none").checked;
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
    const FusionStandard = Number(document.getElementById("fusion_standard").value);
    if (!Fusioncheck) {
      if (Fusionpoint < FusionStandard) {
        word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " 학점 미달\n"
      } else {
        word += "👉" + Fusiontext + "융합전공 : 최소학점 기준 통과_필수과목 확인 필요\n"
      }
    }

    const Plancheck = document.getElementById("plan_major_none").checked;
    const PlanStandard = document.getElementById("plan_st").value;
    const Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
    if (!Plancheck) {
      if (Planpoint < PlanStandard) {
        word += "👉설계전공 : " + [PlanStandard - Planpoint] + " 학점 미달\n"
      } else {
        word += "👉설계전공 : 최소학점 기준 통과\n"
      }
    }

    const Minorcheck = document.getElementById("minor_none").checked;
    const MinorStandard = document.getElementById("minor_st").value;
    const Minorpoint = Number(document.getElementById("minor_point").value);
    if (!Minorcheck) {
      if (Minorpoint < MinorStandard) {
        word += "👉부전공 : " + [MinorStandard - Minorpoint] + " 학점 미달\n"
      } else {
        word += "👉부전공 : 최소학점 기준 통과_필수과목 확인 필요\n"
      }
    }

    const Freepoint = Number(document.getElementById("free_point").value);
    word += "👉자유선택 : " + Freepoint + " 학점 이수\n"

    const Teachingcheck = document.getElementById("teaching_none").checked;
    const TeachingStandard = document.getElementById("teaching_st").value;
    const Teachingpoint = Number(document.getElementById("teaching_point").value);
    if (!Teachingcheck) {
      if (Teachingpoint < TeachingStandard)
        word += "👉교직이수 : " + [TeachingStandard - Teachingpoint] + " 학점 미달\n"
      else {
        word += "👉교직이수 : 최소학점 기준 통과\n"
      }
    }

    const TotalStandard = Number(document.getElementById("total_standard").value);
    const TotalPoint = Number(document.getElementById("the_total").value);
    if (TotalPoint < TotalStandard) {
      word += "👉전체 이수학점 : 최소 " + [TotalStandard - TotalPoint] + " 학점 미달"
    } else {
      word += "👉전체 이수학점 : 기준 통과"
    }

    if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
      if (Minorcheck && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorcheck && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else {
        swal("전공영역 결과", word, "error")
      }
    } else {
      swal("전공영역 결과", word, "error")
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
    let word = "👉입학연도 : " + AdYear + "년\n👉주전공 : " + Majortext + "\n👉다전공 : " + Multimajortext + "\n";

    const FusionOption = Number(document.getElementById("fusion-options").value);
    if (Multimajortext.includes("융합")) {
      if (FusionOption == 0) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("세부 융합전공을 선택하세요!", "", "error");
      }
    }

    if (Majorpoint < Necepoint) {
      return swal("전공학점은 전공 필수를 포함합니다!", "", "error");
    }

    const Freepoint = Number(document.getElementById("free_point").value);
    const CAUSeminar = document.getElementById("causeminar").checked;
    if (Freepoint < 1 && CAUSeminar) {
      return swal("자유선택 학점을 입력하세요!", "", "error");
    }

    if (Basepoint < BaseStandard) {
      word += "👉전공기초 : " + [BaseStandard - Basepoint] + " 학점 미달\n";
    } else {
      word += "👉전공기초 : 기준 통과\n";
    }

    if (Necepoint < NeceStandard) {
      word += "👉전공필수 : " + [NeceStandard - Necepoint] + " 학점 미달\n";
    } else {
      word += "👉전공필수 : 기준 통과\n";
    }

    if (Majorpoint < Majorstandard) {
      word += "👉전공 : " + [Majorstandard - Majorpoint] + " 학점 미달\n"
    } else {
      word += "👉전공 : 기준 통과\n"
    }

    const Doublecheck = document.getElementById("double_major_none").checked;
    const DoubleStandard = document.getElementById("double_st").value;
    const Doublepoint = Number(document.getElementById("double_major_point").value);
    if (!Doublecheck) {
      if (Doublepoint < DoubleStandard) {
        word += "👉복수전공 : " + [DoubleStandard - Doublepoint] + " 학점 미달\n"
      } else {
        word += "👉복수전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Linkcheck = document.getElementById("link_major_none").checked;
    const LinkStandard = document.getElementById("link_st").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
    if (!Linkcheck) {
      if (Linkpoint < LinkStandard) {
        word += "👉연계전공 : " + [LinkStandard - Linkpoint] + " 학점 미달\n"
      } else {
        word += "👉연계전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }


    const Fusioncheck = document.getElementById("fusion_major_none").checked;
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
    const FusionStandard = Number(document.getElementById("fusion_standard").value);
    if (!Fusioncheck) {
      if (Fusionpoint < FusionStandard) {
        word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " 학점 미달\n"
      } else {
        word += "👉" + Fusiontext + "융합전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Plancheck = document.getElementById("plan_major_none").checked;
    const PlanStandard = document.getElementById("plan_st").value;
    const Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
    if (!Plancheck) {
      if (Planpoint < PlanStandard) {
        word += "👉설계전공 : " + [PlanStandard - Planpoint] + " 학점 미달\n"
      } else {
        word += "👉설계전공 : 최소학점 기준 통과\n"
      }
    }

    const Minorcheck = document.getElementById("minor_none").checked;
    const MinorStandard = document.getElementById("minor_st").value;
    const Minorpoint = Number(document.getElementById("minor_point").value);
    if (!Minorcheck) {
      if (Minorpoint < MinorStandard) {
        word += "👉부전공 : " + [MinorStandard - Minorpoint] + " 학점 미달\n"
      } else {
        word += "👉부전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    word += "👉자유선택 : " + Freepoint + " 학점 이수\n"

    if (!CAUSeminar) {
      word += "- CAU세미나(1학점) : 미이수\n"
    } else {
      word += "- CAU세미나(1학점) : 이수\n"
    }

    const Teachingcheck = document.getElementById("teaching_none").checked;
    const TeachingStandard = document.getElementById("teaching_st").value;
    const Teachingpoint = Number(document.getElementById("teaching_point").value);
    if (!Teachingcheck) {
      if (Teachingpoint < TeachingStandard)
        word += "👉교직이수 : " + [TeachingStandard - Teachingpoint] + " 학점 미달\n"
      else {
        word += "👉교직이수 : 최소학점 기준 통과\n"
      }
    }

    const TotalStandard = Number(document.getElementById("total_standard").value);
    const TotalPoint = Number(document.getElementById("the_total").value);
    if (TotalPoint < TotalStandard) {
      word += "👉전체 이수학점 : 최소 " + [TotalStandard - TotalPoint] + " 학점 미달"
    } else {
      word += "👉전체 이수학점 : 기준 통과"
    }

    if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && Freepoint >= 1 && CAUSeminar && TotalPoint >= TotalStandard) {
      if (Minorcheck && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingcheck) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else if (Minorcheck && Teachingpoint >= 22) {
        if (Multimajortext.includes("심화")) {
          swal("전공영역 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("전공영역 결과", word, "success")
          } else {
            swal("전공영역 결과", word, "error")
          }
        }
      } else {
        swal("전공영역 결과", word, "error")
      }
    } else {
      swal("전공영역 결과", word, "error")
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
      return swal("편입학연도를 선택하세요!", "", "error");
    }

    if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
      if (FusionCross > 6) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal(Fusiontext + "융합전공 교차인정\n최대학점은 6 학점입니다!", "", "error");
      }
    } else if (Fusiontext.includes("금융")) {
      if (FusionCross > 15) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal(Fusiontext + "융합전공 교차인정\n최대학점은 15 학점입니다!", "", "error");
      }
    } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
      if (FusionCross > 12) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal(Fusiontext + "융합전공 교차인정\n최대학점은 12 학점입니다!", "", "error");
      }
    }

    if (MajorSelect == "none") {
      document.getElementById("student-info").scrollIntoView();
      return swal("전공 학과를 선택하세요!", "", "error");
    } else if (SecYear && Multimajortext.includes("해당")) {
      document.getElementById("student-info").scrollIntoView();
      return swal("다전공을 선택하세요!", "2학년 편입은 다전공 대상입니다.", "error");
    } else if (LinkCross > 12) {
      document.getElementById("double_major_point").scrollIntoView();
      return swal("연계전공의 교차인정 최대학점은 12 학점입니다!", "", "error");
    } else if (PlanCross > 6) {
      document.getElementById("link_major_none").scrollIntoView();
      return swal("자기설계전공의 교차인정 최대학점은 6 학점입니다!", "", "error");
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
    let word = "👉편입학연도 : " + AdYear + "년";

    if (SecYear) {
      word += " - 2학년편입";
    } else {
      word += " - 3학년편입"
    }

    word += "\n👉주전공 : " + Majortext + "\n👉다전공 : " + Multimajortext + "\n👉교양 : " + Liberal_point + " 학점 이수\n";

    const FusionOption = Number(document.getElementById("fusion-options").value);
    if (Multimajortext.includes("융합")) {
      if (FusionOption == 0) {
        document.getElementById("double_major_none").scrollIntoView();
        return swal("세부 융합전공을 선택하세요!", "", "error");
      }
    }

    if (Majorpoint < Necepoint) {
      return swal("전공학점은 전공필수를 포함합니다!", "", "error");
    }

    if (Basepoint < BaseStandard) {
      word += "👉전공기초 : " + [BaseStandard - Basepoint] + " 학점 미달\n";
    } else {
      word += "👉전공기초 : 기준 통과\n";
    }

    if (Necepoint < NeceStandard) {
      word += "👉전공필수 : " + [NeceStandard - Necepoint] + " 학점 미달\n";
    } else {
      word += "👉전공필수 : 기준 통과\n";
    }

    if (Majorpoint < Majorstandard) {
      word += "👉전공 : " + [Majorstandard - Majorpoint] + " 학점 미달\n"
    } else {
      word += "👉전공 : 기준 통과\n"
    }

    const Doublecheck = document.getElementById("double_major_none").checked;
    const DoubleStandard = document.getElementById("double_st").value;
    const Doublepoint = Number(document.getElementById("double_major_point").value);
    if (!Doublecheck) {
      if (Doublepoint < DoubleStandard) {
        word += "👉복수전공 : " + [DoubleStandard - Doublepoint] + " 학점 미달\n"
      } else {
        word += "👉복수전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Linkcheck = document.getElementById("link_major_none").checked;
    const LinkStandard = document.getElementById("link_st").value;
    const LinkCross = Number(document.getElementById("cross_point1").value);
    const Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
    if (!Linkcheck) {
      if (Linkpoint < LinkStandard) {
        word += "👉연계전공 : " + [LinkStandard - Linkpoint] + " 학점 미달\n"
      } else {
        word += "👉연계전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Fusioncheck = document.getElementById("fusion_major_none").checked;
    const Fusion = document.getElementById("fusion-options");
    const Fusiontext = Fusion.options[Fusion.selectedIndex].text;
    const Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
    const FusionStandard = Number(document.getElementById("fusion_standard").value);
    if (!Fusioncheck) {
      if (Fusionpoint < FusionStandard) {
        word += "👉" + Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " 학점 미달\n"
      } else {
        word += "👉" + Fusiontext + "융합전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Plancheck = document.getElementById("plan_major_none").checked;
    const PlanStandard = document.getElementById("plan_st").value;
    const Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
    if (!Plancheck) {
      if (Planpoint < PlanStandard) {
        word += "👉설계전공 : " + [PlanStandard - Planpoint] + " 학점 미달\n"
      } else {
        word += "👉설계전공 : 최소학점 기준 통과\n"
      }
    }

    const Minorcheck = document.getElementById("minor_none").checked;
    const MinorStandard = document.getElementById("minor_st").value;
    const Minorpoint = Number(document.getElementById("minor_point").value);
    if (!Minorcheck) {
      if (Minorpoint < MinorStandard) {
        word += "👉부전공 : " + [MinorStandard - Minorpoint] + " 학점 미달\n"
      } else {
        word += "👉부전공 : 최소학점 기준 통과_필수과목 확인!\n"
      }
    }

    const Freepoint = Number(document.getElementById("free_point").value);
    word += "👉자유선택 : " + Freepoint + " 학점 이수\n"

    const Teachingcheck = document.getElementById("teaching_none").checked;
    const TeachingStandard = document.getElementById("teaching_st").value;
    const Teachingpoint = Number(document.getElementById("teaching_point").value);
    if (!Teachingcheck) {
      if (Teachingpoint < TeachingStandard)
        word += "👉교직이수 : " + [TeachingStandard - Teachingpoint] + " 학점 미달\n"
      else {
        word += "👉교직이수 : 최소학점 기준 통과\n"
      }
    }

    const TotalPoint = Number(document.getElementById("the_total").value);
    const TotalStandard = Number(document.getElementById("total_standard").value);
    if (TotalPoint < TotalStandard) {
      word += "👉전체 이수학점 : 최소 " + [TotalStandard - TotalPoint] + " 학점 미달"
    } else {
      word += "👉전체 이수학점 : 기준 통과"
    }

    if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= TotalStandard) {
      if (Minorcheck && Teachingcheck) {
        if (Multimajortext.includes("해당")) {
          swal("학점 이수 결과", word, "success")
        } else if (Multimajortext.includes("심화")) {
          swal("학점 이수 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingcheck) {
        if (Multimajortext.includes("해당")) {
          swal("학점 이수 결과", word, "success")
        } else if (Multimajortext.includes("심화")) {
          swal("학점 이수 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        }
      } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
        if (Multimajortext.includes("해당")) {
          swal("학점 이수 결과", word, "success")
        } else if (Multimajortext.includes("심화")) {
          swal("학점 이수 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        }
      } else if (Minorcheck && Teachingpoint >= 22) {
        if (Multimajortext.includes("해당")) {
          swal("학점 이수 결과", word, "success")
        } else if (Multimajortext.includes("심화")) {
          swal("학점 이수 결과", word, "success")
        } else if (Multimajortext.includes("복수")) {
          if (Doublepoint >= 45) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("연계")) {
          if (Linkpoint >= 36) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("융합")) {
          if (Fusionpoint >= FusionStandard) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        } else if (Multimajortext.includes("설계")) {
          if (Planpoint >= 36) {
            swal("학점 이수 결과", word, "success")
          } else {
            swal("학점 이수 결과", word, "error")
          }
        }
      } else {
        swal("학점 이수 결과", word, "error")
      }
    } else {
      swal("학점 이수 결과", word, "error")
    }
  }
}
