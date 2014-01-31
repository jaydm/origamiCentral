<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Origami Central - Search Models by Designer Name</title>
    <link rel="stylesheet" href="stylesheets/origamiCentral.css" />
    <link rel="canonical" href="http://origamicentral.org/origamiModelsByDesigner.php" />
    <script src="bower_components/modernizr/modernizr.js"></script>
    <script src="bower_components/jquery/jquery.js"></script>
    <script src="bower_components/foundation/js/foundation.min.js"></script>
    <script src="js/general.js"></script>
    <script src="js/origamiModelsByDesigner.js"></script>
  </head>
 <body class="asCol">
     <?php include_once("analyticstracking.php"); ?>
     <?php include_once("siteMenu.php"); ?>
<?php
    $designerName = $_GET['designerName'];

    if ($_POST['designerName'] != '') {
        $designerName = $_POST['designerName'];
    }
?>
     
     <div id="body" class="asRow">
         <div class="leftColumn">
             <h4>Searching by Designer Name</h4>

             <form>
                 <fieldset>
                     <label>Quick Search</label>
                     <div class="row">
                         <div class="small-8 columns">
                             <label>Designer Name</label>
                             <input type="text" id="designerName" value='<?=$designerName; ?>' />
                         </div>
                         <div class="small-4 columns">
                             <label>&nbsp;</label>
                             <input type="button" id="searchModels" value="Search" />
                         </div>
                     </div>
                 </fieldset>
             </form>
         </div>
         <div class="rightColumn panel">
             <div id="searchResults"></div>
             <div class="googleAd">
<?php include_once("origamiCentral.largeRectAd.php"); ?>
             </div>
         </div>
     </div>
  </body>
</html>
