// javascript file for home page

function loadModels() {
   var posting = $.post("/xml/modelSelect.php");
    
    posting.done(fillModels);
}

function fillModels(xmlDoc, status, eventObject) {
    var dropDown = $("#modelName");
    
    loadSelectBox(dropDown, 'model', 'id', 'description', xmlDoc, false, 'None Selected');
}

function loadDesigners() {
   var posting = $.post("/xml/designerSelect.php");
    
    posting.done(fillDesigners);
}

function fillDesigners(xmlDoc, status, eventObject) {
    var dropDown = $("#designerName");
    
    loadSelectBox(dropDown, 'designer', 'id', 'name', xmlDoc, false, 'None Selected');
}

function loadSources() {
   var posting = $.post("/xml/sourceSelect.php");
    
    posting.done(fillSources);
}

function fillSources(xmlDoc, status, eventObject) {
    var dropDown = $("#sourceName");
    
    loadSelectBox(dropDown, 'source', 'id', 'title', xmlDoc, false, 'None Selected');
}

function quickSearchModels() {
    var data = {
        modelName: $("#modelName").val(),
        designerName: $("#designerName").val(),
        sourceName: $("#sourceName").val()};
        
    var posting = $.post("/xml/modelSearch.php", data);
    
    posting.done(fillSearchResults);
}

function quickSearchDesigners() {
    var data = {
        modelName: $("#modelName").val(),
        designerName: $("#designerName").val(),
        sourceName: $("#sourceName").val()};
        
    var posting = $.post("/xml/designerSearch.php", data);
    
    posting.done(fillSearchResults);
}

function quickSearchSources() {
    var data = {
        modelName: $("#modelName").val(),
        designerName: $("#designerName").val(),
        sourceName: $("#sourceName").val()};
        
    var posting = $.post("/xml/sourceSearch.php", data);
    
    posting.done(fillSearchResults);
}

function fillSearchResults(xmlDoc, status, eventObject) {
    var target = $("#searchResults");
    
    killChildren(target);
    
    var sources = xmlDoc.getElementsByTagName("source");
    
    var sourceID;
    var sourceTitle;
    
    var authorID;
    var authorName;
    
    var modelID;
    var modelName;
    var modelPage;
    
    var designerID;
    var designerName;
    
    var ul = baseUL.cloneNode(false);
    
    for (var i = 0; i < sources.length; i++) {
        sourceID = getNodeAttribute(sources[i], 'id');
        sourceTitle = getNodeValue(sources[i], 'title');
        
        var author = sources[i].getElementsByTagName('author');
        
        authorID = getNodeAttribute(author[0], 'id');
        authorName = getNodeValue(author[0], 'name');
        
        var models = sources[i].getElementsByTagName('model');
        
        var sourceItem = baseLI.cloneNode(false);
        
        sourceItem.sourceID = sourceID;
        sourceItem.appendChild(document.createTextNode(sourceTitle));
        
        ul.appendChild(sourceItem);
        
        for (var j = 0; j < models.length; j++) {
            var model = models[j];
            
            modelID = getNodeAttribute(model, 'id');
            modelName = getNodeValue(model, 'description');
            modelPage = getNodeValue(model, 'page');
            
            var designer = model.getElementsByTagName('designer');
            
            designerID = getNodeAttribute(designer, 'id');
            designerName = getNodeValue(designer, 'name');
            
            var modelList = baseUL.cloneNode(false);
            
            modelList.appendChild(document.createTextNode(modelName));
            
            var modelItem;
            
            modelItem = baseLI.cloneNode(false);
            modelItem.appendChild(document.createTextNode('ID: ' + modelID));
            modelList.appendChild(modelItem);
            
            modelItem = baseLI.cloneNode(false);
            modelItem.appendChild(document.createTextNode('Designer: ' + designerName));
            modelList.appendChild(modelItem);
            
            modelItem = baseLI.cloneNode(false);
            modelItem.appendChild(document.createTextNode('Page: ' + modelPage));
            modelList.appendChild(modelItem);
            
            sourceItem.appendChild(modelList);
        }
    }
    
    target.append(ul);
}

$(function() {
    $(document).foundation();
    
    $("#searchModels").click(quickSearchModels);
    $("#searchDesigners").click(quickSearchDesigners);
    $("#searchSources").click(quickSearchSources);
});
