function liveralmodal() {
  var word = "교양영역 이수기준"
  var content = "共同教养\n- 국어 : 글쓰기\n- 英语 : Communication in English\n- 其他 : 창의와소통 / 회계와사회 / ACT / 한국사 / 컴퓨팅적사고와문제해결\n" +
    "ㄴ 회계학원론(회계원리)을 이수했을 경우, '회계와사회' 免\n" +
    "\n核心教养 : 도전 / 창의 / 융합 / 신뢰 / 소통\n" +
    "ㄴ 각 영역에서 1과목 이상 이수!\n选择教养 : 자율이수\n" + "총 교양学分 45学分까지만 인정됩니다!"
  swal(word, content, "info");
}

function majormodal() {
  var word = "전공영역 이수기준"
  var content = "전공 : 각 학과별 세부 기준 참고\n" +
    "双专攻 : 双专攻 학과의 기준 참고\n ㄴ 双专攻的专攻基础认证为自由选择" +
    "\n연계/융합/설계전공 : 각 과정별 교과과정표를 참고하여 필수 과목 확인!" +
    "\n부전공 : 부전공 전공필수 6学分 이상 포함하여 수강" +
    "\n자유선택 : CAU세미나 1学分 의무수강" +
    "\n교직 : 교직팀에 문의하여 교직과정 이수 확인" +
    "\n총 이수学分 : 132 学分 이상(교양은 최대 45学分까지 인정)"
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
  var word = "入学年度 : " + AdYear + "年\n";

  if (AdYear < 1000) {
    document.getElementById("student-info").scrollIntoView();
    swal("入学年度를 선택하세요!", "", "error");
    return false;
  }

  if (core_total_point > 0 && !Core1 && !Core2 && !Core3 && !Core4 && !Core5) {
    swal("核心教养 영역을 체크하세요!", "", "error")
    return false;
  }

  if (Core1 || Core2 || Core3 || Core4 || Core5) {
    if (core_total_point == 0) {
      swal("核心教养 学分을 입력하세요!", "", "error")
      return false;
    }
  }

  if (common_kor_point < 2) {
    word += "共同教养\n - 국어 : " + [2 - common_kor_point] + " 学分未达到要求\n";
  } else {
    word += "共同教养\n - 국어 : 通过\n";
  }

  if (common_eng_point < 2 && common_eng_ex) {
    word += " - 英语 : 免\n"
  } else if (common_eng_point < 2 && !common_eng_ex) {
    word += " - 英语 : " + [2 - common_eng_point] + " 学分未达到要求\n";
  } else {
    word += " - 英语 : 通过\n";
  }

  if (!account_check_SF) {
    if (common_etc_point < 10) {
      word += " - 其他 : " + [10 - common_etc_point] + " 学分未达到要求\n"
    } else {
      word += " - 其他 : 通过\n"
    }
  } else {
    if (common_etc_point < 8) {
      word += " - 其他 : " + [8 - common_etc_point] + " 学分未达到要求 ( 회계와사회 : 免 )\n"
    } else {
      word += " - 其他 : 通过 ( 회계와사회 : 免 )\n"
    }
  }

  if (Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
    word += "核心教养 : 通过\n"
  } else if (core_total_point < 15) {
    word += "核心教养 : " + [15 - core_total_point] + " 学分未达到要求\n- 미이수 영역 : "
  } else {
    word += "核心教养 : 通过最少学分\n- 미이수 영역 : "
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

  word += "\n选择教养 : " + elective_point + " 学分"

  if (liberal_total_point <= 45) {
    word += "\n教养领域 总计 : " + liberal_total_point + " 学分"
  } else {
    word += "\n教养领域 总计 : " + liberal_total_point + " 学分_超过" + [liberal_total_point - 45] + "学分 초과_45 学分만 인정"
  }

  if (common_kor_point == 2 && Core1 && Core2 && Core3 && Core4 && Core5 && core_total_point >= 14) {
    if (common_eng_point == 2 && common_etc_point == 10) {
      swal("教养领域结果", word, "success")
    } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point == 10) {
      swal("教养领域结果", word, "success")
    } else if (common_eng_point == 2 && common_etc_point >= 8 && account_check_SF) {
      swal("教养领域结果", word, "success")
    } else if (common_eng_point <= 2 && common_eng_ex && common_etc_point >= 8 && account_check_SF) {
      swal("教养领域结果", word, "success")
    } else {
      swal("教养领域结果", word, "error")
    }
  } else {
    swal("教养领域结果", word, "error")
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
  var word = "入学年度 : " + AdYear + "年";

  if (Majortext.includes("트랙")) {
    word += "\n主专攻 : 공공인재학부 " + Majortext + "\n多专攻 : " + Multimajortext + "\n";
  } else {
    word += "\n主专攻 : " + Majortext + "\n多专攻 : " + Multimajortext + "\n";
  }

  var FusionOption = Number(document.getElementById("fusion-options").value);
  if (Multimajortext.includes("융합")) {
    if (FusionOption == 0) {
      swal("请选择细部融合专攻（세부융합전공）!", "", "error");
      document.getElementById("double_major_none").scrollIntoView();
      return false;
    }
  }

  if (Majorpoint < Necepoint) {
    swal("专攻科目暴扣专攻必修!", "", "error");
    return false;
  }

  if (Basepoint < BaseStandard) {
    word += "专攻基础 : " + [BaseStandard - Basepoint] + " 学分未达到要求\n";
  } else {
    word += "专攻基础 : 通过\n";
  }

  if (Necepoint < NeceStandard) {
    word += "专攻必修 : " + [NeceStandard - Necepoint] + " 学分未达到要求\n";
  } else {
    word += "专攻必修 : 通过\n";
  }

  if (Majorpoint < Majorstandard) {
    word += "专攻科目 : " + [Majorstandard - Majorpoint] + " 学分未达到要求\n"
  } else {
    word += "专攻科目 : 通过\n"
  }

  var Doublecheck = document.getElementById("double_major_none").checked;
  var Doublepoint = Number(document.getElementById("double_major_point").value);
  if (!Doublecheck) {
    if (Doublepoint < 45) {
      word += "双专攻 : " + [45 - Doublepoint] + " 学分未达到要求\n"
    } else {
      word += "双专攻 : 通过最少学分\n"
    }
  }

  var Linkcheck = document.getElementById("link_major_none").checked;
  var LinkCross = Number(document.getElementById("cross_point1").value);
  var Linkpoint = Number(document.getElementById("link_major_point").value) + LinkCross;
  if (!Linkcheck) {
    if (Linkpoint < 36) {
      word += "연계전공 : " + [36 - Linkpoint] + " 学分未达到要求\n"
    } else {
      word += "연계전공 : 通过最少学分\n"
    }
  }


  var Fusioncheck = document.getElementById("fusion_major_none").checked;
  var Fusion = document.getElementById("fusion-options");
  var Fusiontext = Fusion.options[Fusion.selectedIndex].text;
  var Fusionpoint = Number(document.getElementById("fusion_major_point").value) + Number(document.getElementById("cross_point2").value);
  var FusionStandard = Number(document.getElementById("fusion_standard").value);
  if (!Fusioncheck) {
    if (Fusionpoint < FusionStandard) {
      word += "융합전공" + Fusiontext + " : " + [FusionStandard - Fusionpoint] + " 学分未达到要求\n"
    } else {
      word += "융합전공" + Fusiontext + " : 通过最少学分\n"
    }
  }

  var Plancheck = document.getElementById("plan_major_none").checked;
  var Planpoint = Number(document.getElementById("plan_major_point").value) + Number(document.getElementById("cross_point3").value);
  if (!Plancheck) {
    if (Planpoint < 36) {
      word += "설계전공 : " + [36 - Planpoint] + " 学分未达到要求\n"
    } else {
      word += "설계전공 : 通过最少学分\n"
    }
  }

  var Minorcheck = document.getElementById("minor_none").checked;
  var Minorpoint = Number(document.getElementById("minor_point").value);
  if (!Minorcheck) {
    if (Minorpoint < 21) {
      word += "부전공 : " + [21 - Minorpoint] + " 学分未达到要求\n"
    } else {
      word += "부전공 : 通过最少学分\n"
    }
  }

  var Freepoint = Number(document.getElementById("free_point").value);
  if (Freepoint < 1) {
    word += "자유선택 : " + Freepoint + " 学分 이수_CAU세미나 미수강\n"
  } else {
    word += "자유선택 : " + Freepoint + " 学分 이수_CAU세미나 이수 확인 필수!\n"
  }

  var Teachingcheck = document.getElementById("teaching_none").checked;
  var Teachingpoint = Number(document.getElementById("teaching_point").value);
  if (!Teachingcheck) {
    if (Teachingpoint < 22)
      word += "교직이수 : " + [22 - Teachingpoint] + " 学分未达到要求\n"
    else {
      word += "교직이수 : 通过最少学分\n"
    }
  }

  var TotalPoint = Number(document.getElementById("the_total").value);
  if (TotalPoint < 132) {
    word += "总履修学分 : " + [132 - TotalPoint] + " 学分未达到要求"
  } else {
    word += "总履修学分 : 通过"
  }

  if (Basepoint >= BaseStandard && Necepoint >= NeceStandard && Majorpoint >= Majorstandard && Freepoint >= 1 && TotalPoint >= 132) {
    if (Minorcheck && Teachingcheck) {
      if (Multimajortext.includes("심화")) {
        swal("专攻领域结果", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingcheck) {
      if (Multimajortext.includes("심화")) {
        swal("专攻领域结果", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      }
    } else if (Minorpoint >= 21 && Teachingpoint >= 22) {
      if (Multimajortext.includes("심화")) {
        swal("专攻领域结果", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      }
    } else if (Minorcheck && Teachingpoint >= 22) {
      if (Multimajortext.includes("심화")) {
        swal("专攻领域结果", word, "success")
      } else if (Multimajortext.includes("복수")) {
        if (Doublepoint >= 45) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("연계")) {
        if (Linkpoint >= 36) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("융합")) {
        if (Fusionpoint >= FusionStandard) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      } else if (Multimajortext.includes("설계")) {
        if (Planpoint >= 36) {
          swal("专攻领域结果", word, "success")
        } else {
          swal("专攻领域结果", word, "error")
        }
      }
    } else {
      swal("专攻领域结果", word, "error")
    }
  } else {
    swal("专攻领域结果", word, "error")
  }
}
