/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
	"name":"Damien Graille",
	"role": "web developer",
	"welcomemessage":"Targetting an entry level developer job",
	"biopic":"images/2b.jpg",
	"contacts":{"mobilenumber":"07760586545",
	"email":"damiengraille@gmail.com",
	"githubusername":"DamienGraille",
	"location":"London"},
	"skills":["HTML5","CSS3","Javascript:  ES6, React, Node", "Problem Analysis and Problem-Solving","Ability to work under pressure"]
}

console.log (bio);



var education = {
"schools": [{
	 "name":"Notre Dame du Grandchamp",
	 "degree": "BTS",
	 "dates": "2008-2010",
   "location":"Versailles",
	 "major":["Comptabilite", "Gestion des Organisations"]
	},
	{
	 "name":"Canterbury Christ Church",
	 "degree":"BSc",
	 "dates":"2010-2012",
	 "location":"Canterbury",
	 "major": ["Accounting", "Finance"]
	}
],
"onlineCourses": [
	{
		"school": "Javascript Basics",
		"title":"Udacity",
		"dates" : 2016,
		"url": "http://www.udacity.com/courses/ud804"
	}
]
}

console.log(education)

var work = {
	"jobs": [
		{"employer": "Global",
		"role": "finance assistant",
		"location": "London",
		"dates": "2017-present",
		"description": "Payables, management accounting"
		}, {
		"employer": "Count of Ten",
		"role": "finance assistant",
		"location": "London",
		"dates": "2016-2017",
		"description": "General accounting of the company"
	}, {
	 "employer": "Parker Hannifin ",
	 "role": "financial accoutant ",
	 "location": "Luxembourg",
	 "dates": "2012-2015",
	 "description": "managed holding companies"
	}, {
	 "employer": "Vessel Europe Sarl",
	 "role": "accounting and administrative assistant",
	 "location": "Paris",
	 "dates": "December-February 2012",
	 "description": "Manage sales, purchases bookkeeping"
	}]
}
console.log(work)

var projects = {
	"projects": [{
		"title":"Month End Close Process",
		"dates":"2013-2015",
		"description" : "Streamline/improve the month end close process to \
		produce financial statements more efficiently"
	}, {
		"title":"Parker Inter company business",
		"dates":"2013-2014",
		"description":"Ensure smooth process of inter-company invoices in the accounting system\
		and support colleagues in European, Latin America and Asia to resolve queries."
	}]
}
console.log(projects)

formattedbioname = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedbioname);
formattedrole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedrole);
formattedmessage = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);
$("#header").append(formattedmessage);
formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedbiopic);
formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobilenumber);
$("#header").append(formattedmobile);
formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedemail);
formattedloc = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedloc);


if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

work.display = function() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer =  HTMLworkEmployer.replace
		("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].role);
		var formattedEmployerTitle = formattedEmployer + formattedTitle
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
		$(".work-entry:last").append(formattedLocation);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
		$(".work-entry:last").append(formattedDescription);
	}
	}
work.display()

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace
		("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace
		("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace
		("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
	}
}
projects.display()

education.display = function() {
	for (a in education.schools) {
	 $("#education").append(HTMLschoolStart);
	 var formattedName = HTMLschoolName.replace
	 ("%data%", education.schools[a].name);
	 $(".education-entry:last").append(formattedName);
	 var formattedDegree = HTMLschoolDegree.replace
	 ("%data%", education.schools[a].degree);
	 $(".education-entry:last").append(formattedDegree);
	 var formattedDates = HTMLschoolDates.replace
	 ("%data%", education.schools[a].dates);
	 $(".education-entry:last").append(formattedDates);
	 var formattedLocation = HTMLschoolLocation.replace
	 ("%data%", education.schools[a].location);
	 $(".education-entry:last").append(formattedLocation);
	 var formattedMajor = HTMLschoolMajor.replace
	 ("%data%", education.schools[a].major);
	 $(".education-entry:last").append(formattedMajor);
 }
 for (a in education.onlineCourses) {
	$("#education").append(HTMLschoolStart);
	var formattedTitle = HTMLonlineTitle.replace
	("%data%", education.onlineCourses[a].title);
	$(".education-entry:last").append(formattedTitle);
	var formattedSchool = HTMLschoolDegree.replace
	("%data%", education.onlineCourses[a].school);
	$(".education-entry:last").append(formattedSchool);
	var formattedDates = HTMLschoolDates.replace
	("%data%", education.onlineCourses[a].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedUrl = HTMLonlineURL.replace
	("%data%", education.onlineCourses[a].url);
	$(".education-entry:last").append(formattedUrl);
}


}
education.display()

$("#mapDiv").append(googleMap);

//$(document).click(function(loc) {
//var x = loc.pageX;
//var y = loc.pageY;

//logClicks(x,y)
//});


//$('#main').append(internationalizeButton);
//function InName(name) {
//name = name.trim().split(" ");
//console.log(name);
//name[1] = name[1].toUpperCase();
//name[0] = name[0].slice(0,1).toUppercase() +
//name[0].slice(1).toLowerCase();
//return name[0] +" "name[1];
//}



//location dates description


//$("#work").append(HTMLworkEmployer.concat(HTMLworkTitle))
//formattedWork = HTMLworkEmployer.replace("%data%", work.employer[1]);
//HTMLworkTitle.replace("%data%", work.role[1]);
//$("#work").append(HTMLworkEmployer.concat(HTMLworkTitle))
//formattedWork = HTMLworkEmployer.replace("%data%", work.employer[2]);
//HTMLworkTitle.replace("%data%", work.role[2]);
//$("#work").append(HTMLworkEmployer.concat(HTMLworkTitle))}
