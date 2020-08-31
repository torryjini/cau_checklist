function majorselectreset() {
    num = new Array("选 择");
    vnum = new Array("none");

  for (i = 0; i = document.getElementById("Major_select").length; i++) {
    document.getElementById("Major_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("Major_select").options[i] = new Option(num[i], vnum[i]);
  }
}

function multimajorchanges(fr) {
  if (fr == "edu") {
    num = new Array("选 择", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("0", "66", "50", "50", "50", "50");
  } else {
    num = new Array("选 择", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("0", "66", "45", "45", "45", "45");
  }

  for (i = 0; i = document.getElementById("MultiMajor_select").length; i++) {
    document.getElementById("MultiMajor_select").options[0] = null;
  };

  for (i = 0; i < num.length; i++) {
    document.getElementById("MultiMajor_select").options[i] = new Option(num[i], vnum[i]);
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
    swal("请选择入学年度!", "", "error");
    return false;
  }

  if (Fusiontext.includes("문화") || Fusiontext.includes("창업") || Fusiontext.includes("게임")) {
    if (FusionCross > 6) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证6学分!\n ", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("金融")) {
    if (FusionCross > 15) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证15学分!\n", "", "error")
      return false;
    }
  } else if (Fusiontext.includes("인문") || Fusiontext.includes("보안") || Fusiontext.includes("테크") || Fusiontext.includes("벤처")) {
    if (FusionCross > 12) {
      document.getElementById("double_major_none").scrollIntoView();
      swal(Fusiontext + "융합전공最多可以交叉认证12学分! \n", "", "error")
      return false;
    }
  }

  if (MajorSelect == "none") {
    document.getElementById("student-info").scrollIntoView();
    swal("请选择专业学科!", "", "error");
    return false;
  } else if (Majorstandard < 45) {
    document.getElementById("student-info").scrollIntoView();
    swal("请选择是否是多专业!", "", "error");
    return false;
  } else if (LinkCross > 12) {
    document.getElementById("double_major_point").scrollIntoView();
    swal("联系专业(연계전공)最多可以交叉认证12学分!", "", "error")
    return false;
  } else if (PlanCross > 6) {
    document.getElementById("link_major_none").scrollIntoView();
    swal("自我设计专业(자기설계전공)最多可以交叉认证6学分!", "", "error")
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
    swal("平均学分4.5满分!", "", "error")
    return false;
  }

  var word = "👉졸업인정제\n";

  if (!English_result) {
    word += "- 영어 : 未通过\n"
  } else {
    word += "- 영어 : 通过\n"
  }

  if (Hanja_result) {
    word += "- 한자 : 通过\n"
  } else {
    word += "- 한자 : 未通过\n"
  }

  if (Korean_result) {
    word += "- 한국어(TOPIK) : 通过\n"
  } else {
    word += "- 한국어(TOPIK) : 未通过\n"
  }

  if (Paper_result) {
    word += "👉毕业考试/论文\n- 主专业 : 合格\n"
  } else {
    word += "👉毕业考试/论文\n- 主专业 : 不合格\n"
  }

  if (Paper_result2) {
    word += "- 双专业 : 合格 / 无 \n"
  } else {
    word += "- 双专业 : 不合格\n"
  }

  if (Average_result >= 2) {
    word += "👉平均学分 : 合格"
  } else {
    word += "👉平均学分 : 不合格_不可毕业"
  }

  if (English_result && Hanja_result && Korean_result && Paper_result && Paper_result2 && Average_result >= 2) {
    swal("其他毕业条件结果", word, "success");
  } else if (Average_result >= 2) {
    if (!English_result || !Hanja_result || !Korean_result || !Paper_result || !Paper_result2) {
      swal("其他毕业条件结果", word, "warning");
    }
  } else if(Average_result <= 2) {
    swal("其他毕业条件结果", word, "error");
  }
}
