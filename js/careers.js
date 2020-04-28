function generateCareerElem(data) {
  return `<div class="career">
      <h6 class="margins">${data.Position}</h6>
      <p>
        <b>Key problem to solve</b>
      </p>
      <p>
        ${data.Problem}
      </p>
      <p>
        <b>Method</b>
      </p>
      <p>
        ${data.Method}
      </p>
      <p>
        <b>Technical Expertise</b>
      </p>
      <p>
        ${data.Technical}
      </p>
      <p>
        <b>Basic Knowledge</b>
      </p>
      <p>
        ${data.Knowledge}
      </p>
      <p class="sm">Posted on ${data.Posted}</p>
      <a href="../apply" target="_blank">
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
