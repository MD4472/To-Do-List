$(document).ready(function() {
  $(".alert-danger").hide();

  $(".btn-primary").on("click", function(e) {
    e.preventDefault();
    //e in line 4, after function means event.
    
    var newWord = $("#newWord").val().trim();
    var isDuplicate = false;
    $("td.word-td").each(function() {
      if($(this).text().trim().toLowerCase() === newWord.toLowerCase()) {
        isDuplicate = true;
        return;
      }
    });

    if(isDuplicate) {
      $(".alert-danger").slideDown();
      return;
    }

    var newRow = $("<tr>");
    //line 22 adds a new table row
    var wordTd = $("<td>").addClass("word-td").append(newWord);
    //line 24 adds new table data into the new row
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    // line 26 ==> <button class="btn btn-danger">Delete</button>
    var deleteTd = $("<td>").append(deleteBtn);
    // line 28 ==> creates the following: <td><button class="btn btn-danger">Delete</button></td> 
    var completedBtn = $("<button>").addClass("btn btn-success").append("Completed");
     // // line 30 ==> creates <button class="btn btn-success">Completed</button>
    deleteTd.append(completedBtn);
    // line 32 ==> creates lines 33 to 37
    /*<td>
      <button class="btn btn-danger">Delete</button>
      <button class="btn btn-success">Completed</button>
    </td>*/
    newRow.append(wordTd).append(deleteTd);
    $("tbody").append(newRow);

    $("#newWord").val("").focus();
  });

  $("table").on("click", ".btn-danger", function() {
    if($("tr").length > 1) {
      $(this).parent().parent().remove();  
    }
    
  });

    $("table").on("click", ".btn-success", function(){
    $(this).replaceWith($("<div>").addClass("finished").append("Finished this task!"));
    $("div").parent().prev().css("text-decoration", "line-through");
  });


  $("#newWord").on("keydown", function() {
    $(".alert-danger").fadeOut(1500);
  });

});

