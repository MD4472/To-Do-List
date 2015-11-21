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
    var wordTd = $("<td>").addClass("word-td").append(newWord);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    // line 24 ==> <button class="btn btn-danger">Delete</button>
    var deleteTd = $("<td>").append(deleteBtn);
    // line 26 ==> creates the following: <td><button class="btn btn-danger">Delete</button></td>  
    var completedBtn = $("<button>").addClass("btn btn-success").append("Completed");
    // line 28 ==> creates <button class="btn btn-success">Completed</button>
    deleteTd.append(completedBtn);
    // line 30 ==> creates lines 32 to 35
    /*<td>
      <button class="btn btn-danger">Delete</button>
      <button class="btn btn-success">Completed</button>
    </td>*/
    // var checkBox = $("<td>").addClass("checkbox").append("Completed");
    // deletedTd.append(checkBox);
    


    newRow.append(wordTd).append(deleteTd);
    // newRow.append(wordTd).append(completedBtn);
    $("tbody").append(newRow);

    $("#newWord").val("").focus();
  });

  $("table").on("click", ".btn-danger", function() {
    if($("tr").length > 2) {
      $(this).parent().parent().remove();  
    }
    
  });


  $("#newWord").on("keydown", function() {
    $(".alert-danger").fadeOut(1500);
  });



});



 // $(document).ready(function() {
 //  $(".alert-danger").hide();       
 //  $(".btn-primary").on("click", function(e) {
 //    e.preventDefault();

 //    //pull new note from html form input & trim for easier comparison
 //    var newNote = $("#newNote").val().trim();
 //    var isDuplicate = false;
 //    $("td.note-td").each(function() {
 //      if($(this).text().trim().toLowerCase() === newNote.toLowerCase()) {
 //        isDuplicate = true;
 //        return;
 //      }
 //    });

 //    //after checking for the duplicates, if duplicate, alert! Then slideback
 //    if(isDuplicate) {
 //      $("#duplicateAlert").html("Again? We already noted this.");
 //      $("p").slideUp(3000);
 //      return;
 //    }

 //    //adding newNote into the exisiting table
 //    var newRow = $("<tr>");
 //    var noteTd = $("<td>").addClass("note-td").append(newNote);
 //    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete"); 
    
 //    //Try to add a checkbox with the strike-thru like this?
 //    var deleteTd = $("<td>").append(deleteBtn);
    
 //    //add strikethru button on the add click, just like the delete button 
 //    var strikeBtn = $("<input type='checkbox'")
 //    var strikeTd = $("<td>").append(strikeBtn);
  
    

 //    newRow.append(noteTd).append(deleteTd).append(strikeTd);
 //    $("tbody").append(newRow);

 //    //empty newNote field
 //    $("#newNote").val("").focus();
 //      strikeBtn.on('click',function(){
 //          var element = $(this).parent().parent().find('.note-td');
 //          if($(this).is(':checked')) {
 //            element.addClass('dashed');
 //          }
 //          else{
 //              element.removeClass('dashed');
 //          }
 //      });
 //  });

 //  //functionality of delete button
 //  $("table").on("click", ".btn-danger", function() {
 //    if($("tr").length > 1) {
 //      $(this).parent().parent().remove();  
 //    }

 //  //Need functionality of doneBtn. 
 //  });


