function majorselectreset() {
    num = new Array("Select");
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
    num = new Array("Select", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
    vnum = new Array("0", "66", "50", "50", "50", "50");
  } else {
    num = new Array("Select", "전공심화", "복수전공", "연계전공", "융합전공", "설계전공");
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
