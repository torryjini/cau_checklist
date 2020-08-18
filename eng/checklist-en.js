function liberalmodal() {
  var word = "Requirements for general credits"
  var content = "👉Mandatory\n- 국어 : 글쓰기(Writing)\n- 영어 : Communication in English\n- Others : 창의와소통/ACT/한국사/컴퓨팅적사고와문제해결/\n 앙트레프레너십시대의회계(회계와사회)\n" +
    "No need to take '앙트레프레너십시대의회계' if you already took 회계학원론(회계원리)" +
    "\n👉Core : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
    "Take more than one class per each area!\nElectives : free to choose any\n"
     + "👉Any credits over 45 are not counted!"
  swal(word, content, "info");
}

function majormodal() {
  var word = "Requirements for major credits"
  var content = "👉Major : Check the department's detailed requiremetns\n" +
    "👉Double major : Check each department's detailed requiremetns\n ㄴBasics of double majors are counted as Free choice" +
    "\n👉연계/융합/설계전공 : Check for required courses for each track!" +
    "\n👉Minor : Earn more than 6 credits from required courses of your minor" +
    "\n👉Free choice : CAU Seminar (1 credit) is mandatory." +
    "\n👉Teaching : Check for details(Tel.02-820-5080)" +
    "\n👉Total credits : Only 132 credits count for graduation\n(only up to 45 credits for general courses)"
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
  var Core1 = document.getElementById("core1").checked;
  var Core2 = document.getElementById("core2").checked;
  var Core3 = document.getElementById("core3").checked;
  var Core4 = document.getElementById("core4").checked;
  var Core5 = document.getElementById("core5").checked;
  var core_total_point = Number(document.getElementById("core_total").value);
  var liberal_total_point = Number(document.getElementById("liberal_total").value);
  var word = "Entrance Year : " + AdYear + "\n";

  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    swal("Choose your entrance year!", "", "error");
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
    word += "Mandatory\n - 국어 : " + [2 - common_kor_point] + " more credits required\n";
  } else {
    word += "Mandatory\n - 국어 : Passed the requirement\n";
  }

  if (common_eng_point < 2 && common_eng_ex) {
    word += " - 영어 : Exempted\n"
  } else if (common_eng_point < 2 && !common_eng_ex) {
    word += " - 영어 : " + [2 - common_eng_point] + " more credits required\n";
  } else {
    word += " - 영어 : Passed the requirement\n";
  }

  if (!account_check_SF) {
    if (common_etc_point < 10) {
      word += " - 기타 : " + [10 - common_etc_point] + " more credits required\n"
    } else {
      word += " - 기타 : Passed the requirement\n"
    }
  } else {
    if (common_etc_point < 8) {
      word += " - Others : " + [8 - common_etc_point] + " more credits required (앙트레프레너십시대의회계 : Exempted)\n"
    } else {
      word += " - Others : Passed the requirement (회계와사회 : Exempted)\n"
    }
  }

  if (Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
    word += "Core : Passed the requirement\n"
  } else if (core_total_point < 15) {
    word += "Core : " + [15 - core_total_point] + " more credits required\n- Incomplete course : "
  } else {
    word += "Core : Passed the minimum credits requirement\n- Incomplete course : "
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

  word += "\nElective : " + elective_point + " credits"

  if (liberal_total_point <= 45) {
    word += "\nTotal : " + liberal_total_point + " credits"
  } else {
    word += "\nTotal : " + liberal_total_point + " credits_" + [liberal_total_point - 45] + "credits exceeded\nAny credits over 45 don't count."
  }

  if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
    if (common_eng_point == 2 && common_etc_point == 10) {
      swal("General credits result", word, "success")
    } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 10) {
      swal("General credits result", word, "success")
    } else if (common_eng_point == 2 && common_etc_point >= 8 && account_check_SF) {
      swal("General credits result", word, "success")
    } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 8 && account_check_SF) {
      swal("General credits result", word, "success")
    } else {
      swal("General credits result", word, "error")
    }
  } else {
    swal("General credits result", word, "error")
  }
}


// 여기서부터는 전공영역

// 연도별 학과 전공기초, Required 기준
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

  var Major_base1718 = {
    "public-admin": "18",
    "public-policy": "17"
  };

  var Major_nece1718 = {
    "public-admin": "26",
    "public-policy": "24"
  };

  var Major_base2019 = {
    "public-admin": "17",
    "public-policy": "17"
  };

  var Major_nece2020 = {
    "sociology": "12",
    "public-admin": "18",
    "public-policy": "18"
  };
  var Major = document.getElementById("Major_select").value;
  var AdYear = Number(document.getElementById("ad-year").value);
  if (Major == "none") {
    document.getElementById("base_standard").value = "-";
    document.getElementById("nece_standard").value = "-";
  } else if (AdYear == 2017 || AdYear == 2018) {
    if (Major == "public-admin" || Major == "public-policy") {
      document.getElementById("base_standard").value = Major_base1718[Major];
      document.getElementById("nece_standard").value = Major_nece1718[Major];
    } else {
      document.getElementById("base_standard").value = Major_base[Major];
      document.getElementById("nece_standard").value = Major_nece[Major];
    }
  } else if (AdYear == 2019) {
    if (Major == "public-admin" || Major == "public-policy") {
      document.getElementById("base_standard").value = Major_base2019[Major];
      document.getElementById("nece_standard").value = Major_nece2020[Major];
    } else {
      document.getElementById("base_standard").value = Major_base[Major];
      document.getElementById("nece_standard").value = Major_nece[Major];
    }
  } else if (AdYear >= 2020) {
    if (Major == "public-admin" || Major == "public-policy") {
      document.getElementById("base_standard").value = Major_base2019[Major];
      document.getElementById("nece_standard").value = Major_nece2020[Major];
    } else if (Major == "sociology") {
      document.getElementById("base_standard").value = Major_base[Major];
      document.getElementById("nece_standard").value = Major_nece2020[Major];
    } else {
      document.getElementById("base_standard").value = Major_base[Major];
      document.getElementById("nece_standard").value = Major_nece[Major];
    }
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
    word += "\nMajor : 공공인재학부 " + Majortext + "\nMultiple Major : " + Multimajortext + "\n";
  } else {
    word += "\nMajor : " + Majortext + "\nMultiple Major : " + Multimajortext + "\n";
  }

  var FusionOption = Number(document.getElementById("fusion-options").value);
  if (Multimajortext.includes("융합")) {
    if (FusionOption == 0) {
      swal("Choose your 융합전공!", "", "error");
      document.getElementById("double_major_none").scrollIntoView();
      return false;
    }
  }

  if (Majorpoint < Necepoint) {
    swal("Major courses include required courses!", "", "error");
    return false;
  }

  if (Basepoint < BaseStandard) {
    word += "Basics : " + [BaseStandard - Basepoint] + " more credits required\n";
  } else {
    word += "Basics : Passed the requirement\n";
  }

  if (Necepoint < NeceStandard) {
    word += "Required : " + [NeceStandard - Necepoint] + " more credits required\n";
  } else {
    word += "Required : Passed the requirement\n";
  }

  if (Majorpoint < Majorstandard) {
    word += "Major course : " + [Majorstandard - Majorpoint] + " more credits required\n"
  } else {
    word += "Major course : Passed the requirement\n"
  }

  var Doublecheck = document.getElementById("double_major_none").checked;
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  if (!Doublecheck) {
    if (Doublepoint < 45) {
      word += "Double major : " + [45 - Doublepoint] + " more credits required\n"
    } else {
      word += "Double major : Passed the minimum credits requirement\n"
    }
  }

  var Linkcheck = document.getElementById("link_major_none").checked;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
  if (!Linkcheck) {
    if (Linkpoint < 36) {
      word += "연계전공 : " + [36 - Linkpoint] + " more credits required\n"
    } else {
      word += "연계전공 : Passed the minimum credits requirement\n"
    }
  }


  var Fusioncheck = document.getElementById("fusion_major_none").checked;
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
  var FusionStandard = Number(document.getElementById("fusion_standard").value);
  if (!Fusioncheck) {
    if (Fusionpoint < FusionStandard) {
      word += Fusiontext + "융합전공 : " + [FusionStandard - Fusionpoint] + " more credits required\n"
    } else {
      word += Fusiontext + "융합전공 : Passed the minimum credits requirement\n"
    }
  }

  var Plancheck = document.getElementById("plan_major_none").checked;
  var Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
  if (!Plancheck) {
    if (Planpoint < 36) {
      word += "설계전공 : " + [36 - Planpoint] + " more credits required\n"
    } else {
      word += "설계전공 : Passed the minimum credits requirement\n"
    }
  }

  var Minorcheck = document.getElementById("minor_none").checked;
  var Minorpoint = Number(document.getElementById("minor_point").value);
  if (!Minorcheck) {
    if (Minorpoint < 21) {
      word += "Minor : " + [21 - Minorpoint] + " more credits required\n"
    } else {
      word += "Minor : Passed the minimum credits requirement\n"
    }
  }

  var Freepoint = Number(document.getElementById("free_point").value);
  if (Freepoint < 1) {
    word += "Free choice : " + Freepoint + " credits_CAU세미나 미수강\n"
  } else {
    word += "Free choice : " + Freepoint + " credits\n_CAU세미나 이수 확인 필수!\n"
  }

  var Teachingcheck = document.getElementById("teaching_none").checked;
  var Teachingpoint = Number(document.getElementById("teaching_point").value);
  if (!Teachingcheck) {
    if (Teachingpoint < 22)
      word += "Teaching : " + [22 - Teachingpoint] + " more credits required\n"
    else {
      word += "Teaching : Passed the minimum credits requirement\n"
    }
  }

  var TotalPoint = Number(document.getElementById("the_total").value);
  if (TotalPoint < 132) {
    word += "Total credits : " + [132 - TotalPoint] + " more credits required"
  } else {
    word += "Total credits : Passed the requirement"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && Freepoint >= 1 && TotalPoint >= 132) {
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
