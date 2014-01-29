// javascript file for home page

function loadModels() {
   var posting = $.post("/new/xml/modelSelect.php");
    
    posting.done(fillModels);
}

function fillModels(xmlDoc, status, eventObject) {
    var dropDown = $("#modelName");
    
    loadSelectBox(dropDown, 'model', 'id', 'description', xmlDoc, false, 'None Selected');
}

function loadDesigners() {
   var posting = $.post("/new/xml/designerSelect.php");
    
    posting.done(fillDesigners);
}

function fillDesigners(xmlDoc, status, eventObject) {
    var dropDown = $("#designerName");
    
    loadSelectBox(dropDown, 'designer', 'id', 'name', xmlDoc, false, 'None Selected');
}

function loadSources() {
   var posting = $.post("/new/xml/sourceSelect.php");
    
    posting.done(fillSources);
}

function fillSources(xmlDoc, status, eventObject) {
    var dropDown = $("#sourceName");
    
    loadSelectBox(dropDown, 'source', 'id', 'title', xmlDoc, false, 'None Selected');
}

$(function() {
    $(document).foundation();
    
    loadModels();
    loadDesigners();
    loadSources();
});
