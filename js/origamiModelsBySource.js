// javascript file for home page

$(function() {
    $(document).foundation();
    
    $("#searchModels").click(quickSearchModels);
    
    if ($("#sourceName").val() != '') {
        quickSearchModels();
    }
});
