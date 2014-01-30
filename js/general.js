// library of generally used functions
	
window.commandQueue = [];

// create basic form elements for cloning
var baseA = document.createElement("a");
var baseDL = document.createElement("dl");
var baseDT = document.createElement("dt");
var baseDD = document.createElement("dd");
var baseDIV = document.createElement("div");
var baseUL = document.createElement("ul");
var baseOL = document.createElement("ol");
var baseLI = document.createElement("li");
var baseFORM = document.createElement("form");
var baseSELECT = document.createElement("select");
var baseINPUT = document.createElement("input");
var baseOPTION = document.createElement("option");
var baseTABLE = document.createElement("table");
var baseTHEAD = document.createElement("thead");
var baseTBODY = document.createElement("tbody");
var baseTH = document.createElement("th");
var baseTR = document.createElement("tr");
var baseTD = document.createElement("td");
var baseSPAN = document.createElement("span");
var baseBR = document.createElement("br");
var baseTEXTAREA = document.createElement("textarea");
var baseIMG = document.createElement('img');

// pull the value of a node from a DOM (xml) object
function getNodeValue(node, tag) {
var returnValue = undefined;
		
if (tag !== ".") {
var foundAt = -1;

try {
for (var i = 0; i < node.childNodes.length; i++) {
					if (node.childNodes[i].nodeName === tag) { 
						foundAt = i;
				
						break;
					}
				}
			} catch (err1) {
			}
		
			if (foundAt === -1) {
				try {
					if ((node.length !== undefined) && (node.length > 0)) {
						node = node[0];
			
						for (var j = 0; j < node.childNodes.length; j++) {
							if (node.childNodes[j].nodeName === tag) { 
								foundAt = j;
				
								break;
							}
						}
					}
				} catch (err2) {
				}
			}
		
			if (foundAt >= 0) {
				var set = false;
			
				try {
					returnValue = node.childNodes[foundAt].nodeValue;
				
					if ((returnValue !== "") && (returnValue !== null) && (returnValue !== undefined)) {
						set = true;
					}
				} catch (err3) {
				}
			
				if (! set) {
					try {
						returnValue = node.childNodes[foundAt].textContent;
				
						if ((returnValue !== "") && (returnValue !== null) && (returnValue !== undefined)) {
							set = true;
						}
					} catch (err4) {
					}
				}
				
				if (! set) {
					try {
						if (node.childNodes[foundAt].childNodes.length > 0) {
							returnValue = node.childNodes[foundAt].childNodes[0].textContent;
						}
						
						if ((returnValue !== "") && (returnValue !== null) && (returnValue !== undefined)) {
							set = true;
						}
					} catch (err5) {
					}
				}
			}
		} else {
			returnValue = node.textContent;
		}
		
		if (returnValue === undefined) {
			returnValue = "";
		}
		
		returnValue = returnValue.replace(/&amp;/gi,"&");
		
		return returnValue;
	}
	
	// pull an attribute value from a DOM (xml) object
	function getNodeAttribute(obj, tag) {
		var returnValue = undefined;
		var set = false;
		
		try {
			returnValue = obj.attributes.getNamedItem(tag).value;
			set = true;
		} catch (err) {
		}
		
		if (! set) {
			try {
				returnValue = obj[0].attributes.getNamedItem(tag).value;
				set = true;
			} catch (err1) {
			}
		}
		
		if (returnValue === undefined) {
			returnValue = "";
		}
		
		returnValue = returnValue.replace(/&amp;/gi,"&");
		
		return returnValue;
	}
	
	function killChildren(node) {
		if (node !== null) {
            $(node).children().remove();
		}

		return true;
	}
	
	function loadSelectBox(selectBox, nodeType, nodeID, nodeDesc, xmlDoc, showIDs, zeroDesc) {
		if (showIDs === undefined) {
			showIDs = false;
		}
			
		var holdSelected = selectBox.value;
		
		killChildren(selectBox);
		
		var data = xmlDoc.getElementsByTagName(nodeType);
		
		var workOption = baseOPTION.cloneNode(false);
		
		var id;
		var desc;
		
		if (zeroDesc !== undefined) {
			workOption = baseOPTION.cloneNode(false);
			workOption.value = 0;
			workOption.text = zeroDesc;
		
			$(selectBox).append(workOption);
		}
		
		for (var i = 0; i < data.length; i++) {
			id = getNodeAttribute(data[i], nodeID);
				
			if (! ((id === '0') && (zeroDesc !== undefined))) {
				desc = unEscapeString(getNodeValue(data[i], nodeDesc));
			
				if (showIDs) {
					desc += " (" + id + ")";
				}
			
				workOption = baseOPTION.cloneNode(false);
				workOption.value = id;
				workOption.text = desc;
		
				$(selectBox).append(workOption);
			}
		}
		
		selectBox.value = holdSelected;
	}

	function urlEncode (string) {
		var newString = "" + string; 			// force whatever is passed in to be a string

		while (newString.indexOf(" ") !== -1) {
			newString = newString.replace(" ", "+");
		}
		
		return escape(newString);
	}
	
	function validateDate(event) {
		var rawDate = event.target.value;
		var date = rawDate.replace('/', '-');
		
		var explodedDate = date.split('-');
		
		var year = 0;
		var month = 0;
		var day = 0;
		
		if (explodedDate[0] > 1000) {
			year = explodedDate[0];
			month = explodedDate[1];
			day = explodedDate[2];	
		} else {
			if (explodedDate[2] < 100) {
				year = explodedDate[2] + 2000;
			} else {
				year = explodedDate[2];
			}
			
			month = explodedDate[0];
			day = explodedDate[1];
		}
		
		var check = new Date(month + "/" + day + "/" + year);
		
		if (check.getDate() !== (day * 1)) {
			alert("Invalid Date");
			event.target.focus();
			return (false);
		} else if (check.getMonth() !== (month - 1)) {
			alert("Invalid Date");
			event.target.focus();
			return (false);
		} else if (check.getFullYear() !== (year * 1)) {
			alert("Invalid Date");
			event.target.focus();
			return (false);
		}
		
		return (true);
	}
	
	function returnFalse() {
		return false;
	}
	
	function isNull(val) {
		return (val === null);
	}
	
	function swapNode(node1, node2) {
		var placeHolder1 = document.createTextNode("place holder 1");
		var placeHolder2 = document.createTextNode("place holder 2");
		
		var parentNode1 = node1.parentNode;
		var parentNode2 = node2.parentNode;
		
		parentNode1.insertBefore(placeHolder1, node1);
		parentNode2.insertBefore(placeHolder2, node2);
		
		parentNode1.replaceChild(node2, placeHolder1);
		parentNode2.replaceChild(node1, placeHolder2);
		
		return true;
	}
	
	function killNode(node1) {
		if (node1 !== null) {
			killChildren(node1);
		
			if (node1.parentNode !== undefined) {
				node1.parentNode.removeChild(node1);
			}
		}
		
		return true;
	}
	
	function showError(response) {
		var xmlDoc = response.xhr.responseXML;
		var isError = false;
		
		try {
			var error = getNodeAttribute(xmlDoc, "isError");
			
			if (error != "") {
				var errorReason = getNodeAttribute(xmlDoc, "errorReason");
				var errorMessage = getNodeAttribute(xmlDoc, "errorMessage");
				
				alert(errorReason + "\n\n" + errorMessage);
				
				isError = true;
			}
		} catch (error) {
			
		}
		
		return isError;
	}
	
	function bitBucket(type, response, event) {
		showError(response);
		
		return true;
	}
	
	function encapsulate(command) {
		var commandXML = "<command ";
		var nodes = "";
		
		for (i in command) {
			commandXML += i + "='" + escapeString(command[i]) + "' ";
			nodes += "<" + i + ">" + escapeString(command[i]) + "</" + i + ">";
		}
		
		commandXML += ">" + nodes + "</command>";
		
		return commandXML;
	}
	
	function escapeString(inputData) {
		var outputData = inputData;

		if (typeof inputData == 'string') {
			if (inputData != null && inputData != "") {
				outputData = inputData.replace(/&/gi, "&amp;");
				outputData = outputData.replace(/</gi, "&lt;");
				outputData = outputData.replace(/>/gi, "&gt;");
				outputData = outputData.replaceAll("\"", "&quot;");
				outputData = outputData.replaceAll("\\", "~1~");
				outputData = outputData.replaceAll("%", "~2~");
				outputData = outputData.replaceAll("\'", "~3~");
				outputData = outputData.replaceAll("\n", "~4~");
			}
		}
		
		return outputData;
	}
	
	function unEscapeString(inputData) {
		var outputData = inputData;

		if (typeof inputData == 'string') {
			if (inputData != null && inputData != "") {
				outputData = inputData.replaceAll("&amp;", "&");
				outputData = outputData.replaceAll("&lt;", "<");
				outputData = outputData.replaceAll("&gt;", ">");
				outputData = outputData.replaceAll("&quot;", "\"");
				outputData = outputData.replaceAll("~1~", "\\");
				outputData = outputData.replaceAll("~2~", "%");
				outputData = outputData.replaceAll("~3~", "\'");
				outputData = outputData.replaceAll("~4~", "\n");
			}
		}
		
		return outputData;
	}
	
	function flushQueue() {
		window.commandQueue = [];
		window.busy = false;
		
		return true;
	}
	
	function queueCommand(command) {
		var commandXML = encapsulate(command);
		
		if (window.commandQueue === undefined) {
			window.commandQueue = [];
		}
			
		window.commandQueue[window.commandQueue.length] = commandXML;
		window.busy = true;
		
		return true;
	}
	
	function pushSpecificQueue(url, onLoad, queue, onError) {
		if (onError == undefined) {
			onError = "bitBucket";
		}
		
		var xmlDoc = "";
		
		xmlDoc += "<?xml version='1.0' encoding='utf-8' ?>";
		xmlDoc += "<commands userID='" + dojo.byId("_userID").value + "'>";
		
		for (var i = 0; i < queue.length; i++) {
			if (queue[i] !== undefined) {
				xmlDoc += queue[i];
			}
		}
		
		xmlDoc += "</commands>";
         
		var parser = new DOMParser();
		
        var xmlDocument = parser.parseFromString(xmlDoc, "text/xml");
		
		dojo.rawXhrPost({
			url: url,
			postData: xmlDocument,
			load: onLoad,
			headers: {
				"Content-Type": "application/xml"
			},
			handleAs: "xml"
		});
		
		return true;
	}
	
	function pushQueue(url, onLoad) {
		pushSpecificQueue(url, onLoad, window.commandQueue);
		
		flushQueue();
		
		return true;
	}
	
	function uploadFile(event) {
		var target = event.target;
		var formID = target.parentNode;
		var url = formID.action;
		
		var parameters = {
			url: url,
			load: function(data) {
				// basically do nothing
			},
			error: function(data) {
				// basically do nothing
			},
			form: formID
		};
		
		dojo.io.iframe.send(parameters);
	}
	
	function offsetDate(sentDate, offset) {
		if (offset === undefined) {
			offset = 0;
		}
		
		var workDate = sentDate;
		
		if ((workDate == null) || (workDate === undefined)) {
			workDate = new Date();
		}
		
		workDate.setDate(workDate.getDate() + offset);

		return workDate;
	}
	
	function fixDate(sentDate, offset) {
		if (offset === undefined) {
			offset = 0;
		}
		
		var workDate = offsetDate(sentDate, offset);
			
		var d  = workDate.getDate();
		var day = (d < 10) ? '0' + d : d;
		var m = workDate.getMonth() + 1;
		var month = (m < 10) ? '0' + m : m;
		var strDate = (workDate.getYear() + 1900) + "-" + month + "-" + day;
		
		return strDate;
	}
	
	
	function cursorWait() {
		document.body.style.cursor = 'progress';
		
		return true;
	}

	function cursorReset() {
		try {
			document.body.style.cursor = 'default';
		} catch (err) {
			
		}
		
		return true;
	}

        String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "");
        };

        String.prototype.ltrim = function() {
                return this.replace(/^\s+/, "");
        };

        String.prototype.rtrim = function() {
                return this.replace(/\s+$/, "");
        };

        String.prototype.replaceAll = function(find, replace) {
                var text = this;
                var index = text.indexOf(find);

                while (index != -1) {
                        text = text.replace(find, replace);
                        index = text.indexOf(find);
                }

                return text;
        };



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