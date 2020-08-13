function liveralmodal() {
  var word = "교양영역 이수기준"
  var content = "공통교양\n- 국어 : 글쓰기\n- 영어 : Communication in English\n- 기타 : 창의와소통 / 회계와사회 / ACT / 한국사\n" +
    "ㄴ 회계학원론(회계원리)을 이수했을 경우, '회계와사회' 면제\n" +
    "\n핵심교양 : 서로 다른 4개 영역에서 각 1과목 이상 이수\n" +
    "선택교양 : 자율이수\n" + "총 교양credits 45credits까지만 인정됩니다!"
  swal(word, content, "info");
}

function majormodal() {
  var word = "전공영역 이수기준"
  var content = "전공 : 각 학과별 세부 기준 참고\n" +
    "복수전공 : 복수전공 학과의 기준 참고\n ㄴ복수전공의 전공기초는 자유선택으로 인정" +
    "\n연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
    "\n부전공 : 부전공 전공필수 6credits 이상 포함하여 수강" +
    "\n교직 : 교직팀에 문의하여 교직과정 이수 확인" +
    "\n총 이수credits : 132 credits 이상(교양은 최대 45credits까지 인정)"
  swal(word, content, "info");
}

function Liberal_Sum() {
  var elective_point = Number(document.getElementById("elective_liberal").value);
  var common_kor_point = Number(document.getElementById("common_kor").value);
  var common_eng_point = Math.floor(Number(document.getElementById("common_eng").value));
  var common_etc_point = Number(document.getElementById("common_etc").value);
  var core_total_point = Number(document.getElementById("core_total").value);
  document.getElementById("liberal_total").value = elective_point + common_kor_point + common_eng_point + common_etc_point + core_total_point;
}

function Liberal_cal() {
  var AdYear = Number(document.getElementById("ad-year").value);
  var elective_point = Number(document.getElementById("elective_liberal").value);
  var common_kor_point = Number(document.getElementById("common_kor").value);
  var common_eng_point = Number(document.getElementById("common_eng").value);
  var common_eng_ex = document.getElementById("eng_ex").checked;
  var common_etc_point = Number(document.getElementById("common_etc").value);
  var account_check_SF = document.getElementById("account_check").checked;
  var core_total_point = Number(document.getElementById("core_total").value);
  var liberal_total_point = Number(document.getElementById("liberal_total").value);
  var word = "Entrance Year : " + AdYear + "\n";

  if (common_kor_point < 2) {
    word += "공통교양\n - 국어 : " + [2 - common_kor_point] + " more credits required\n";
  } else {
    word += "공통교양\n - 국어 : passed the requirement\n";
  }

  if (common_eng_point < 2 && common_eng_ex) {
    word += " - 영어 : 면제\n"
  } else if (common_eng_point < 2 && !common_eng_ex) {
    word += " - 영어 : " + [2 - common_eng_point] + " more credits required\n";
  } else {
    word += " - 영어 : passed the requirement\n";
  }

  if (!account_check_SF) {
    if (common_etc_point < 8) {
      word += " - 기타 : " + [8 - common_etc_point] + " more credits required\n"
    } else {
      word += " - 기타 : passed the requirement\n"
    }
  } else {
    if (common_etc_point < 6) {
      word += " - 기타 : " + [6 - common_etc_point] + " more credits required ( 회계와사회 : 면제 )\n"
    } else {
      word += " - 기타 : passed the requirement ( 회계와사회 : 면제 )\n"
    }
  }

  if (core_total_point < 12) {
    word += "핵심교양 : " + [12 - core_total_point] + " more credits required\n- 핵심 역량 4개 영역 각 1과목 이상 이수 필요!"
  } else {
    word += "핵심교양 : passed the minimum credits requirement\n- 핵심 역량 4개 영역 각 1과목 이상 이수 확인!"
  }

  word += "\n선택교양 : " + elective_point + " credits"

  if (liberal_total_point <= 45) {
    word += "\nTotal : " + liberal_total_point + " credits"
  } else {
    word += "\nTotal : " + liberal_total_point + " credits_ " + [liberal_total_point - 45] + "credits exceeded\nAny credits over 45 don't count."
  }

  if (common_kor_point == 2 && core_total_point >= 11) {
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
}


// 여기서부터는 전공영역

// 연도별 학과 전공기초, 전공필수 기준
function BaseNeceStandard() {
  var Major_base = {
    "psyche": "10",
    "politics": "12",
    "lis": "12",
    "socialwelfare": "12",
    "cmc": "15",
    "planning": "12",
    "sociology": "12",
    "public-admin": "17",
    "public-policy": "16"
  };

  var Major_nece = {
    "psyche": "9",
    "politics": "9",
    "lis": "18",
    "socialwelfare": "18",
    "cmc": "9",
    "planning": "18",
    "sociology": "9",
    "public-admin": "26",
    "public-policy": "24"
  };

  var Major = document.getElementById("Major_select").value;
  if (Major == "none") {
    document.getElementById("base_standard").value = "-";
    document.getElementById("nece_standard").value = "-";
  } else {
    document.getElementById("base_standard").value = Major_base[Major];
    document.getElementById("nece_standard").value = Major_nece[Major];
  }
}

function BaseNeceresult(Majorstandard) {
  var AdYear = Number(document.getElementById("ad-year").value);
  var Major = document.getElementById("Major_select");
  var Majortext = Major.options[Major.selectedIndex].text;
  var Multimajor = document.getElementById("MultiMajor_select");
  var Multimajortext = Multimajor.options[Multimajor.selectedIndex].text;
  var BaseStandard = document.getElementById("base_standard").value;
  var NeceStandard = document.getElementById("nece_standard").value;
  var Basepoint = Number(document.getElementById("base_input").value);
  var Necepoint = Number(document.getElementById("nece_input").value);
  var Majorpoint = Number(document.getElementById("major_input").value);
  Majorstandard = Number(Majorstandard);
  var word = "Entrance Year : " + AdYear;

  if (Majortext.includes("트랙")) {
    word += "\n주전공 : 공공인재학부 " + Majortext + "\n다전공 : " + Multimajortext + "\n";
  } else {
    word += "\n주전공 : " + Majortext + "\n다전공 : " + Multimajortext + "\n";
  }

  var FusionOption = Number(document.getElementById("fusion-options").value);
  if (Multimajortext.includes("융합")) {
    if (FusionOption == 0) {
      swal("세부 융합전공을 선택하세요!", "", "error");
      document.getElementById("double_major_none").scrollIntoView();
      return false;
    }
  }

  if (Majorpoint < Necepoint) {
    swal("전공 과목은 전공 필수를 포함합니다!", "", "error");
    return false;
  }

  if (Basepoint < BaseStandard) {
    word += "전공기초 : " + [BaseStandard - Basepoint] + " more credits required\n";
  } else {
    word += "전공기초 : passed the requirement\n";
  }

  if (Necepoint < NeceStandard) {
    word += "전공필수 : " + [NeceStandard - Necepoint] + " more credits required\n";
  } else {
    word += "전공필수 : passed the requirement\n";
  }

  if (Majorpoint < Majorstandard) {
    word += "전공과목 : " + [Majorstandard - Majorpoint] + " more credits required\n"
  } else {
    word += "전공과목 : passed the requirement\n"
  }

  var Doublecheck = document.getElementById("double_major_none").checked;
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  if (!Doublecheck) {
    if (Doublepoint < 45) {
      word += "복수전공 : " + [45 - Doublepoint] + " more credits required\n"
    } else {
      word += "복수전공 : passed the minimum credits requirement\n"
    }
  }

  var Linkcheck = document.getElementById("link_major_none").checked;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
  if (!Linkcheck) {
    if (Linkpoint < 36) {
      word += "연계전공 : " + [36 - Linkpoint] + " more credits required\n"
    } else {
      word += "연계전공 : passed the minimum credits requirement\n"
    }
  }


  var Fusioncheck = document.getElementById("fusion_major_none").checked;
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
  var FusionStandard = Number(document.getElementById("fusion_standard").value);
  if (!Fusioncheck) {
    if (Fusionpoint < FusionStandard) {
      word += "융합전공_" + Fusiontext + " : " + [FusionStandard - Fusionpoint] + " more credits required\n"
    } else {
      word += "융합전공_" + Fusiontext + " : passed the minimum credits requirement\n"
    }
  }

  var Plancheck = document.getElementById("plan_major_none").checked;
  var Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
  if (!Plancheck) {
    if (Planpoint < 36) {
      word += "설계전공 : " + [36 - Planpoint] + " more credits required\n"
    } else {
      word += "설계전공 : passed the minimum credits requirement\n"
    }
  }

  var Minorcheck = document.getElementById("minor_none").checked;
  var Minorpoint = Number(document.getElementById("minor_point").value);
  if (!Minorcheck) {
    if (Minorpoint < 21) {
      word += "부전공 : " + [21 - Minorpoint] + " more credits required\n"
    } else {
      word += "부전공 : passed the minimum credits requirement\n"
    }
  }

  var Freepoint = Number(document.getElementById("free_point").value);
  word += "자유선택 : " + Freepoint + " credits 이수\n"

  var Teachingcheck = document.getElementById("teaching_none").checked;
  var Teachingpoint = Number(document.getElementById("teaching_point").value);
  if (!Teachingcheck) {
    if (Teachingpoint < 22)
      word += "교직이수 : " + [22 - Teachingpoint] + " more credits required\n"
    else {
      word += "교직이수 : passed the minimum credits requirement\n"
    }
  }

  var TotalPoint = Number(document.getElementById("the_total").value);
  if (TotalPoint < 132) {
    word += "전체 이수credits : " + [132 - TotalPoint] + " more credits required"
  } else {
    word += "전체 이수credits : passed the requirement"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && TotalPoint >= 132) {
    if (Minorcheck && Teachingcheck) {
      if (Multimajortext.includes("심화")) {
        swal("Major credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingcheck) {
      if (Multimajortext.includes("심화")) {
        swal("Major credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
      if (Multimajortext.includes("심화")) {
        swal("Major credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      }
    } else if (Minorcheck && Teachingpoint >= 22) {
      if (Multimajortext.includes("심화")) {
        swal("Major credits result", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("Major credits result", word, "success")
        } else {
          swal("Major credits result", word, "error")
        }
      }
    } else {
      swal("Major credits result", word, "error")
    }
  } else {
    swal("Major credits result", word, "error")
  }
}
