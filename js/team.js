function generateCareerElem(data) {
  return `<div class="team-member">
    <div class="photo"><!--<img src="${data.ImagePath}"/>--></div>
    <p class="lg">${data.Name}</p>
    <p>${data.Position}</p>
  </div>`;
}

function fillCareers(arr) {
  $(".team-wrapper").html("");
  arr.forEach((doc) => {
    $(".team-wrapper").append(generateCareerElem(doc));
  });
}

$(document).ready(function () {
  var data;
  jQuery.get("team.csv", (csv) => {
    data = $.csv.toObjects(csv);
    fillCareers(data);
  });
});
