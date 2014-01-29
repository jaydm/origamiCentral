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
		<div id="header" class="asRow">
          <img src="images/origami_crane.jpg" class="logo" />
          <nav class="top-bar" data-topbar>
				<ul class="title-area">
					<!-- Title Area -->
					<li class="name"> </li>
					
					<!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
					<li class="toggle-topbar menu-icon"><a href="">Menu</a></li>
				</ul>
				<section class="top-bar-section">
					<ul class="left">
						<li class="has-dropdown"><a href="#">Origami Central</a>
							<ul class="dropdown">
								<li><label>Main Menu</label></li>
								<li class="has-dropdown"><a href="#">Home</a>						
									<ul class="dropdown">
										<li><label>Home Page</label></li>
										<li><a href="./pto/requests.jsp" rel="external" target="_blank">Return to home page</a></li>
									</ul>
								</li>
								<li class="has-dropdown"><a href="#">Searching</a>
									<ul class="dropdown">
										<li><label>Searching the database</label></li>
										<li><a href="./pto/departments.jsp" rel="external" target="_blank" class="hidden administration">Search by model name</a></li>
										<li><a href="./pto/employees.jsp" rel="external" target="_blank">Search by Designer</a></li>
										<li><a href="./pto/calendars.jsp" rel="external" target="_blank" class="hidden administration">Search by publication</a></li>									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</section>
			</nav>
      </div>
     <div class="leftColumn">
      <h4>Welcome to OrigamiCentral</h4>
      <h5>The Origami Model Diagram Database</h5>
      <p>Here you will find easy to use searches to help you in your search for origami
          model diagrams in print and online.  Hopefully, you will find this utility
          helpful and easy to use.  If you have any suggestions on how this might be
          improved you can contact me on Google+ at: https://www.google.com/+JayMcHugh</p>
      <p>If you have already used the database or would like to just jump in,
          <a href="#jumpin">Click here to start</a> or keep reading.</p>
      <p>Even though there are several sites on the web that help you to search for
          diagrams - we are hoping to make this the easiest to use and most complete
          resource for finding them.  If you own a book or website that is not already
          in the database, let me know and I will get it added to the database.  For
          developers, there is also an API to allow you to connect to the database on
          your web pages (as long as you credit OrigamiCentral as powering your site).</p>
      <p>Basic access of the database is fairly straightforward.  Just use the search
          forms below to search with as little or as much specificity as you like.</p>
      <form>
          <div class="row">
              <div class="small-12 columns">
                  <label>Model Name</label>
                  <input type="text" id="modelName" />
              </div>
          </div>
          <div class="row">
              <div class="small-12 columns">
                  <label>Designer Name</label>
                  <input type="text" id="designerName" />
              </div>
          </div>
          <div class="row">
              <div class="small-12 columns">
                  <label>Source Publication</label>
                  <input type="text" id="source" />
              </div>
          </div>
      </form>
         </div>
     <div class="rightColumn">
     </div>
  </body>
</html>
