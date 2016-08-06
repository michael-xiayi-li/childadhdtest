// Validating Empty Field




scores= [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
firstpartquestionamount=46;
totalquestionamount=54;




function updatequestion(currnumber,numberset,questionset){
var symptoms =["Does not pay attention to details or makes careless mistakes"
,"Has difficulty keeping attention to what needs to be done"
,"Does not seem to listen when spoken to directly"
,"Does not follow through when given directions and fails to finish activities"
,"Has difficulty organizing tasks and activities"
,"Avoids, dislikes, or refuses to start tasks that require ongoing mental effort"
,"Loses things necessary for tasks or activities"
,"Is easily distracted by noises or other stimuli"
,"Is forgetful in daily activities"
,"Fidgets with hands or feet or squirms in seat"
,"Leaves seat when remaining seated is expected"
,"Runs about or climbs too much when remaining seated is expected"
,"Has difficulty playing or beginning quiet play activities"
,"Is \"on the go\" or often acts as if \"driven by a motor\""
,"Talks too much"
,"Blurts out answers before questions have been completed"
,"Has difficulty waiting his or her turn"
,"Interrupts or intrudes in on others' conversations and/or activities"
,"Argues with adults"
,"Loses temper"
,"Actively defies or refuses to go along with adults' requests or rules"
,"Deliberately annoys people"
,"Blames others for his or her mistakes or misbehaviors"
,"Is touchy or easily annoyed by others"
,"Is angry or resentful"
,"Is spiteful and wants to get even"
,"Bullies, threatens, or intimidates others"
,"Starts physical fights"
,"Lies to get out of trouble or to avoid obligations(ie,\"cons\" others)"
,"Is truant from school (skips school) without permission"
,"Is physically cruel to people"
,"Has stolen things that have value"
,"Deliberately destroys others' property"
,"Has used a weapon that can cause serious harm (bat, knife, brick, gun)"
,"Is physically cruel to animals"
,"Has deliberately set fires to cause damage"
,"Has broken into someone else's home, business, or car"
,"Has stayed out at night without permission"
,"Has run away from home overnight"
//sexual activity question omitted
,"Is fearful, anxious, or worried"
,"Is afraid to try new things for fear of making mistakes"
,"Feels worthless or inferior"
,"Blames self for problems, feels guilty"
,"Feels lonely, unwanted, or unloved"
,"Is sad, unhappy, or depressed"
,"Is self-conscious or easily embarrassed"
,"Overall school performance"
,"Reading"
,"Writing"
,"Mathematics"
,"Relationship with parents"
,"Relationship with siblings"
,"Relationship with peers"
,"Participation in organized activities"]

nextnumber=parseInt(currnumber)+1;



var newnumber= currnumber+1;

document.getElementById(numberset).innerHTML=newnumber + ".";
//questionnumber questions
document.getElementById(questionset).innerHTML= symptoms[parseInt(currnumber)];






}








function showpast(numberset){


	questionnumber = parseInt(document.getElementById(numberset).innerHTML,10);

	numberrating=-1;
	spot="";
	if (scores[questionnumber] !=-1){

		numberrating=scores[questionnumber];
		if(questionnumber<47){
			spot="questionnumber";
		}
		else{
			spot="performancequestionnumber";
		}

		sayrating(numberrating,spot);

	}


}











function showcurrent(){

	detectnumber=false;
	i=0;

	while(!detectnumber && i<54){

		if(scores[i]!=-1){
			detectnumber=true;
		}
		i++;

	}

	if (i>=54){
		div_show();
	}
	else if (i>46 && i<54){
		perf_show();
	}
	else{
		div_show();
	}



}






function sayrating(numberrating,qualitativespot) {


	var rating="";

	if (qualitativespot =='qualitativerating'){

	switch(numberrating){

		case 0:
			rating="Never"
			break;
		case 1:
			rating="Occasionally"
			break;
		case 2:
			rating="Often";
			break;
		case 3:
			rating="Very Often";
			break;	
		default:
			break;

	}

	
    document.getElementById('qualitativerating').innerHTML = rating;
	
	switch(numberrating){
	case 0:
		document.getElementById('qualitativerating').style.left="380px";
		break;
	case 1:
		document.getElementById('qualitativerating').style.left="345px";
		break;
	case 2:
		document.getElementById('qualitativerating').style.left="380px";
		break;
	case 3:
		document.getElementById('qualitativerating').style.left="355px";
		break;
	default:
		break;
	}

	document.getElementsByClassName('progress')[0].style.top="230px";

}

	else{


		switch(numberrating){

		
		case 1:
			rating="Excellent"
			document.getElementsByClassName('progress')[1].style.top="21px";
			
			break;
		case 2:
			rating="Above Average";
			document.getElementsByClassName('progress')[1].style.top="-20px";
			
			break;
		case 3:
			rating="Average";
			document.getElementsByClassName('progress')[1].style.top="21px";
			break;	
		case 4:
			rating="Somewhat of a Problem";
			document.getElementsByClassName('progress')[1].style.top="-20px";
			break;
		case 5:
			rating="Problematic";
			document.getElementsByClassName('progress')[1].style.top="-20px";
			break;
		default:
			break;

	}

	document.getElementById(qualitativespot).innerHTML = rating;


	switch(numberrating){
	case 1:
		document.getElementById(qualitativespot).style.left="345px";
		document.getElementById(qualitativespot).style.top="205px";
		break;
	case 2:
		document.getElementById(qualitativespot).style.left="315px";
		document.getElementById(qualitativespot).style.top="-100px";
		break;
	case 3:
		document.getElementById(qualitativespot).style.left="345px";
		document.getElementById(qualitativespot).style.top="205px";
		break;
	case 4:
		document.getElementById(qualitativespot).style.left="245px";
		document.getElementById(qualitativespot).style.top="-100px";
		break;
	case 5:
		document.getElementById(qualitativespot).style.left="320px";
		document.getElementById(qualitativespot).style.top="-100px";
		break;
	default:
		break;
	}





	}



}


//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

function assess_show(){
document.getElementById('assessment').style.display = "block";

}

function assess_hide(){
document.getElementById('assessment').style.display = "none";

}

function submitscore(numberrating,numberset,questionset){

	
	incrementprogress(questionset);
	//find way to keep track of questions


	questionnumber = parseInt(document.getElementById(numberset).innerHTML,10);

	






	if (questionnumber>=totalquestionamount){

		calculatescores();
	}
	else if (questionnumber==firstpartquestionamount){

		div_hide();
		perf_show();


		//jf3i2jfqio3pjfio3ajgipjiopejgioaoifjoiajgia3jiojgdviifojeioajfiejifjwifjewiajfoiewajiowaefjo
	}

	else{


	numberset ="";
	questionset="";

	if (questionnumber<firstpartquestionamount){

		numberset="questionnumber";
		questionset="questions";
	}
	else{
		numberset="performancequestionnumber";
		questionset="performancequestions";

	}




	updatequestion(questionnumber,numberset,questionset);

	scores[questionnumber-1]=numberrating;
	




}







}


 function readdata(x,y) {
        try {
            var excel = new ActiveXObject("Excel.Application");
            excel.Visible = false;
            var excel_file = excel.Workbooks.Open("adhd_questions.xls");// alert(excel_file.worksheets.count);
            var excel_sheet = excel_file.Worksheets("Sheet1");

            for(i=0;i<5;i++)
            {
               var data = excel_sheet.Cells(i,2).Value;
                drawWithexcelValue(data);
            }


        }
        catch (ex) {
            alert(ex);
        }

}


function check_empty() {
if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('form').submit();
alert("Form Submitted Successfully...");
}
}

function perf_show(){
	document.getElementById("secondquestionset").style.display = "block";

}

function perf_hide(){

	document.getElementById("secondquestionset").style.display = "none";

}

function goback(numberset,questionset){


	questionnumber = parseInt(document.getElementById(numberset).innerHTML,10);


	if (questionnumber==firstpartquestionamount+1){

		perf_hide();
		div_show();
		newnumber=firstpartquestionamount-1;
		updatequestion(newnumber,"questionnumber","questions");
		decrementprogress(questionset);
		//showpast(numberset);

	}
	else if (questionnumber>1){
	newnumber=questionnumber-2;
	updatequestion(newnumber,numberset,questionset);
	decrementprogress(questionset);
	//showpast(numberset);
	}
}

function calculatescores(){



/*
Predominantly Inattentive subtype
■ Must score a 2 or 3 on 6 out of 9 items on questions 1–9 AND
■ Score a 4 or 5 on any of the Performance questions 48–55
Predominantly Hyperactive/Impulsive subtype
■ Must score a 2 or 3 on 6 out of 9 items on questions 10–18
AND
■ Score a 4 or 5 on any of the Performance questions 48–55
ADHD Combined Inattention/Hyperactivity
■ Requires the above criteria on both inattention and
hyperactivity/impulsivity
Oppositional-Defiant Disorder Screen
■ Must score a 2 or 3 on 4 out of 8 behaviors on questions 19–26
AND
■ Score a 4 or 5 on any of the Performance questions 48–55
Conduct Disorder Screen
■ Must score a 2 or 3 on 3 out of 14 behaviors on questions
27–40 AND
■ Score a 4 or 5 on any of the Performance questions 48–55
Anxiety/Depression Screen
■ Must score a 2 or 3 on 3 out of 7 behaviors on questions 41–47
AND
■ Score a 4 or 5 on any of the Performance questions 48–55

*/

inattentive = 0;
hyperactivity=0;
oppdefiant=0;
conductdisorder=0;
anxietydepp=0;
perf=0;



for (i = 0; i < 9; i++){
	if (scores[i] ==2 || scores[i]==3){
		inattentive++;
	}
}

for (i=9;i<18;i++){
	if (scores[i]==2 || scores[i]==3){
		hyperactivity++;
	}

}

for(i=18;i<26;i++){

	if (scores[i]==2 || scores[i]==3){
		oppdefiant++;
	}
}


for(i=26;i<40;i++){

	if (scores[i]==2 || scores[i]==3){
		conductdisorder++;
	}
}

for(i=40;i<47;i++){

	if(scores[i]==2 || scores[i]==3){
			anxietydepp++;
	}
}


for(i=47;i<54;i++){
	if(scores[i]==4 || scores[i]==5){
		perf++;
	}
}



inattentivebool=inattentive>=6 && perf>=1;
hyperactivitybool=hyperactivity>=6 &&perf>=1;
combined=inattentivebool &&hyperactivitybool;
oppdefiantbool=oppdefiant>=4 && perf>=1;
conductdisorderbool=conductdisorder>3 &&perf>=1;
anxietydeppbool= anxietydepp>=3 &&perf>=1;


/*
Predominantly Inattentive subtype
■ Must score a 2 or 3 on 6 out of 9 items on questions 1–9 AND
■ Score a 4 or 5 on any of the Performance questions 48–55
Predominantly Hyperactive/Impulsive subtype
■ Must score a 2 or 3 on 6 out of 9 items on questions 10–18
AND
■ Score a 4 or 5 on any of the Performance questions 48–55
ADHD Combined Inattention/Hyperactivity
■ Requires the above criteria on both inattention and
hyperactivity/impulsivity
Oppositional-Defiant Disorder Screen
■ Must score a 2 or 3 on 4 out of 8 behaviors on questions 19–26
AND
■ Score a 4 or 5 on any of the Performance questions 48–55
Conduct Disorder Screen
■ Must score a 2 or 3 on 3 out of 14 behaviors on questions
27–40 AND
■ Score a 4 or 5 on any of the Performance questions 48–55
Anxiety/Depression Screen
■ Must score a 2 or 3 on 3 out of 7 behaviors on questions 41–47
AND
■ Score a 4 or 5 on any of the Performance questions 48–55



	<td id="inscore"></td>
    <td id="hyscore"></td>
    <td id="combscore"></td>
    <td id="oppscore"></td>
    <td id="cdscore"></td>
    <td id="anscore"></td>

*/


if (inattentivebool){
	document.getElementById("inscore").innerHTML= "At Risk";


}
else{
	document.getElementById("inscore").innerHTML= "Not At Risk";
}


if (hyperactivitybool){
	document.getElementById("hyscore").innerHTML= "At Risk";


}
else{
	document.getElementById("hyscore").innerHTML= "Not At Risk";
}


if (combined){
	document.getElementById("combscore").innerHTML= "At Risk";


}
else{
	document.getElementById("combscore").innerHTML= "Not At Risk";
}



if (oppdefiantbool){
	document.getElementById("oppscore").innerHTML= "At Risk";


}
else{
	document.getElementById("oppscore").innerHTML= "Not At Risk";
}


if (conductdisorderbool){
	document.getElementById("cdscore").innerHTML= "At Risk";


}
else{
	document.getElementById("cdscore").innerHTML= "Not At Risk";
}


if (anxietydeppbool){
	document.getElementById("anscore").innerHTML= "At Risk";


}
else{
	document.getElementById("anscore").innerHTML= "Not At Risk";
}

perf_hide();

assess_show();











}

function skip(numberset,questionset){
	questionnumber = parseInt(document.getElementById(numberset).innerHTML,10);

	if (questionnumber==firstpartquestionamount){
		div_hide();
		perf_show();

		updatequestion(questionnumber,"performancequestionnumber","performancequestions");
		incrementprogress(questionset);
	}

	else if (questionnumber<totalquestionamount){
	updatequestion(questionnumber,numberset,questionset);
	incrementprogress(questionset);
}

}


function incrementprogress(questionset){
	addamount=101/totalquestionamount;

	k=-1;

	if(questionset=="questions"){
		k=0;
	}
	else if(questionset=="performancequestions"){
		k=1;
	}
	var elements = document.getElementsByClassName("progress-bar");

	var currprogressbarwidth = elements[k].style.width;
	var currprogresspercent= parseFloat(currprogressbarwidth);

	
	var newprogress= currprogresspercent+addamount;

	elements[k].style.width=newprogress+"%";
}


function decrementprogress(questionset){
	addamount=101/totalquestionamount;

	k=-1;

	if(questionset=="questions"){
		k=0;
	}
	else if(questionset=="performancequestions"){
		k=1;
	}
	var elements = document.getElementsByClassName("progress-bar");
	
	var currprogressbarwidth = elements[k].style.width;
	var currprogresspercent= parseFloat(currprogressbarwidth);

	
	var newprogress= currprogresspercent-addamount;

	elements[k].style.width=newprogress+"%";
}