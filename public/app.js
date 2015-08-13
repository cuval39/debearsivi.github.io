$(document).ready(function() {
    $(".entry_list").click(function() {
        var entry_id = $(this).attr("name");
        create_entry(entry_id);
    });

    $("#prev_entry").click(function () {
        var entry_id = $(this).attr("name");
        create_entry(entry_id);
    });

    $("#next_entry").click(function () {
        var entry_id = $(this).attr("name");
        create_entry(entry_id);
    });

    // Set left and right button press
    $("body").keydown(function (event) {
        // left arrow
        if ((event.keyCode || event.which) == 37)
        {
            var id = $("#prev_entry").attr("name");
            create_entry(id);
        }
        
        // right arrow
        if ((event.keyCode || event.which) == 39)
        {
            var id = $("#next_entry").attr("name");
            create_entry(id);
        }
    });

    // Create first entry
    var first_entry = $("#entry_ul").first("li").find("a").attr("name");
    create_entry(first_entry);
});

function create_entry(id) {
    /**
     * Function for create endtry with id
     * @param id int: Entry id
     * @type {*|jQuery|HTMLElement}
     */

    var entry_content = $("#entry_" + id);
    var entry_writer = entry_content.attr("data-writer");
    var entry_text = entry_content.html();
    var entry_link = "https://www.eksisozluk.com/entry/" + id;

    // Set next and previous
    var entry_li = entry_content.parent();
    var prev_entry_id = entry_li.prev().find("a").attr("name");
    var next_entry_id = entry_li.next().find("a").attr("name");
    if (prev_entry_id){
        $("#prev_entry").removeAttr("disabled")
                        .css("opacity", 1)
                        .attr("name", prev_entry_id);
    }
    else {
        $("#prev_entry").prop('disabled', true)
                        .css("opacity", 0.5);
    }

    if (next_entry_id){
        $("#next_entry").removeAttr("disabled")
                        .css("opacity", 1)
                        .attr("name", next_entry_id);
    }
    else {
        $("#next_entry").prop('disabled', true)
                        .css("opacity", 0.5);
    }

    $("#entry_body").html(entry_text);
    $("#entry_writer").html(entry_writer)
                      .attr("href", "https://www.eksisozluk.com/biri/" + entry_writer);
    $("#entry_link").html(id)
                    .attr("href", entry_link)
                    .focus();
}