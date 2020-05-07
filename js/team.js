function generateCareerElem(data, index) {
  return `<div class="team-member" aria-label="${index}">
    <div class="photo"><img src="${data.ImagePath}" alt="Team member image"/></div>
    <p class="lg">${data.Name}</p>
    <p>${data.Position}</p>
  </div>`;
}

function generatePopUp(data) {
  return `<div class="close-button"><i class="fas fa-times"></i></div>
  <div class="content-lg">
    <div class="data-wrapper">
      <div class="photo">
        <img src="${data.ImagePath}" alt="Member Photo" />
      </div>
      <div class="data">
        <h5>${data.Name}</h5>
        <p><b>${data.Position}</b> &middot; <b>${data.Location}</b></p>
        <p>
        ${
          data.LinkedIn != "NA"
            ? `<a href="${data.LinkedIn}">LinkedIn</a> &middot;`
            : ""
        } ${
    data.Website != "NA" ? `<a href="${data.Website}">Website</a> &middot;` : ""
  }  ${data.Resume != "NA" ? `<a href="${data.Resume}">Resume</a>` : ""}
        </p>
      </div>
    </div>
    <h6>About</h6>
    <p>
      ${data.About}
    </p>
    <h6>Educational Institution</h6>
    <p>
      ${data.School}
    </p>
  </div>`;
}

function fillCareers(arr) {
  $(".team-wrapper").html("");
  arr.map((doc, index) => {
    $(".team-wrapper").append(generateCareerElem(doc, index));
  });
}

function openPopUp(doc) {
  $(".team-pop-up").removeClass("close");
  $(".black-screen").removeClass("close");
  $(".team-pop-up").html(generatePopUp(doc));
}

var data;

$(document).ready(function () {
  jQuery.get("team.csv", (csv) => {
    data = $.csv.toObjects(csv);
    fillCareers(data);

    $(".team-wrapper").on("click", ".team-member", function () {
      let i = $(this).attr("aria-label");
      openPopUp(data[i]);
    });

    $(".team-pop-up").on("click", ".close-button", function () {
      $(".team-pop-up").addClass("close");
      $(".black-screen").addClass("close");
    });

    $(".black-screen").click(function () {
      $(".team-pop-up").addClass("close");
      $(".black-screen").addClass("close");
    });
  });
});
