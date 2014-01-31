<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Origami Central - Reborn</title>
    <link rel="stylesheet" href="stylesheets/origamiCentral.css" />
    <script src="bower_components/modernizr/modernizr.js"></script>
    <script src="bower_components/jquery/jquery.js"></script>
    <script src="bower_components/foundation/js/foundation.min.js"></script>
    <script src="js/general.js"></script>
    <script src="js/index.js"></script>
  </head>
 <body class="asCol">
     <?php include_once("analyticstracking.php"); ?>
     <?php include_once("siteMenu.php"); ?>
     
     <div id="body" class="asRow">
         <div class="leftColumn">
             <h4>Welcome to OrigamiCentral</h4>
             <p>Here you will find easy to use searches to help you in your search for origami
                 model diagrams in print and online.  Hopefully, you will find this utility
                 helpful and easy to use.  If you have any suggestions on how this might be
                 improved you can contact me on <a href="https://www.google.com/+JayMcHugh">Google+</a>.</p>
             
             <p>If you have already used the database or would like to just jump in,
                 <a href="#jumpin">Click here to start</a> or keep reading.</p>
             
             <p>Even though there are several sites on the web that help you to search for
                 diagrams - we are hoping to make this the easiest to use and most complete
                 resource for finding them.  If you own a book or website that is not already
                 in the database, let me know and I will get it added to the database.  For
                 developers, there will also an API (not available yet) to allow you to connect to the database on
                 your web pages (as long as you credit OrigamiCentral as powering your site).</p>
             
             <p>Basic access of the database is fairly straightforward.  Just use the search
                 forms below to search using the either the model name, designer name, or source title
                 (only the first one that you fill in will be used).</p>
             
             <form>
                 <a name="jumpin"></a>
                 <fieldset>
                     <label>Quick Search</label>
                     <div class="row">
                         <div class="small-8 columns">
                             <label>Model Name</label>
                             <input type="text" id="modelName" />
                         </div>
                         <div class="small-4 columns">
                             <label>&nbsp;</label>
                             <input type="button" id="searchModels" value="Search" />
                         </div>
                     </div>
                     <div class="row">
                         <div class="small-8 columns">
                             <label>Designer Name</label>
                             <input type="text" id="designerName" />
                         </div>
                     </div>
                     <div class="row">
                         <div class="small-8 columns">
                             <label>Source Publication</label>
                             <input type="text" id="sourceName" />
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
