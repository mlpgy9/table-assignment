
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)


$(document).ready(function() {

	// 1.
	// When the page is loaded,
	// call the loadData() function.
	loadData();

});

function loadData() {
	
	console.log();
	// 2.
	// Write an AJAX call here to load your data.
	// Then PASS the data to writeTable();
	
		$.getJSON("js/donations_over_5K.json", function(donationsData) {

		writeTable(donationsData);
		});
}


function writeTable(d) {

	// 3.
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount
	
	for (i = 0; i < d.length; i++) { 
   
    var committee = d[i]["Committee"];
    var amount = d[i]["Amount"];
    var date = d[i]["Contribution Date"];
    var info = d[i]["Contribution Information"];

    	if (committee === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") { 

		
	$(".table").append(
	"<tr class=lines>"+
		"<td>"+date+"</td>"+
		"<td>"+info+"</td>"+
			"<td class=amount>"+amount+"</td>"+
			"</tr>"
	);		
}	
}
}
