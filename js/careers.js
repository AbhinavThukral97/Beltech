function generateCareerElem(data) {
  return `<div class="career">
      <h6 class="margins">${data.Position}</h6>
      <p>
        <b>Job Description</b>
      </p>
      <p>
        ${data.Description}
      </p>
      <p class="sm">Posted on ${data.Posted}</p>
      <a href="${data.Link}" target="_blank">
      <button class="secondary margin-fix">
        Apply <i class="fas fa-arrow-right"></i>
      </button>
      </a>
    </div>`;
}

function fillCareers(arr) {
  $(".careers-wrapper").html("");
  arr.forEach((doc) => {
    $(".careers-wrapper").append(generateCareerElem(doc));
  });
}

$(document).ready(function () {
  var data;
  jQuery.get("careers.csv", (csv) => {
    var data = $.csv.toObjects(csv);
    data.shift();

    fillCareers(data);
    $("input.search-box").keyup(function (e) {
      q = $("input.search-box").val().toLowerCase();
      if (q.length > 0) {
        let tempArr = data.filter(
          (doc) => doc.Position.toLowerCase().indexOf(q) > -1
        );
        fillCareers(tempArr);
      } else {
        fillCareers(data);
      }
    });
  });
});
