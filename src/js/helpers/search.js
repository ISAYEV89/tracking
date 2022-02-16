$(document).ready(function () {
    $("#filter").keyup(function () {

        // Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0;

        // Loop through the comment list
        $(".box, .searchBlock").each(function () {

            // If the list item does not contain the text phrase fade it out
            if ($(this).find('.searchData').text().search(new RegExp(filter, "i")) < 0) {
                $(this).hide();

            } else {

                $(this).show();
            }


        });

        // Update the count
        /*  var numberItems = count;
          $("#filter-count").text("Number of Comments = "+count);*/
    });
});
