//
//buttons onclick

function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


createYear = generate_year_range(1970, 2050);
/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute('data-lang');

var months = "";
var days = "";

var monthDefault = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
    months = monthDefault;
    days = dayDefault;
} else if (lang == "id") {
    months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    days = ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
} else if (lang == "fr") {
    months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    days = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];
} else {
    months = monthDefault;
    days = dayDefault;
}


var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;

// 
monthAndYear = document.getElementById("monthAndYear");
showCalendarA(currentMonth, currentYear);




function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendarA(currentMonth, currentYear);
    
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendarA(currentMonth, currentYear);
    
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendarA(currentMonth, currentYear);
    
}

// THE ABOVE showcalendar() call is by default
// THE BELOW showCalendarForB,A OR C() is called only on click
// so basically, I'm gonna keep the below default function showCalendar()
// ....then create three other functions reacting to the different shifts
// remember to remove everything from //console.log(cell); in default fx
// and as per the above comment, change the THE IFs CONDITIONALS 
// FOR SHIFT B ---> function showCalendarForB()   
// change this name everywhere else. ForA and ForC too on click




// DIFFERENT shiftA,B,C: function showCalendarA,B,C
function showCalendarA(month, year) {

    var firstDay = ( new Date( year, month ) ).getDay();

    tbl = document.getElementById("calendar-body");

    
    tbl.innerHTML = "";

    
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    var date = 1;
    
    
    for ( var i = 0; i < 6; i++ ) {
        
        var row = document.createElement("tr");

        
        for ( var j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                cell = document.createElement( "td" );
                cell.setAttribute("id", "00");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth(month, year)) {
                break;
            } else {
                cell = document.createElement("td");
                cell.setAttribute("data-date", date);
                cell.setAttribute("data-month", month + 1);
                cell.setAttribute("data-year", year);
                cell.setAttribute("data-month_name", months[month]);
                cell.className = "date-picker";
                cell.innerHTML = "<span>" + date + "</span>";
                // NEVER DELETE THESE COMMENTS BELOW
                // console.log(cell); //////

                
                // date === today.getDate() &&      put this back in the conditional bellow
                // && month === today.getMonth()    do the above for this check statement too
                // throw in another conditional for every specific month 

////////////////////////////////////////////////////////////////////////////////

                // NEW YEAR 2025// shift A

////////////////////////////////////////////////////////////////////////////////
                // JANVIER 2025 //31 days
                // nightshift // -> day
                const janNights = [6,7,8,15,16,17,24,25,26]
                if (year === 2025 && month === 0 && janNights.includes(date)){
                    cell.className = "highlighted-dayshift"
                }
                // off // -> 
                const janOffs = [1,2,9,10,11,18,19,20,27,28,29]
                if (year === 2025 && month === 0 && janOffs.includes(date)){
                    cell.className = "highlighted-nightshift" 
                }
                // dayshifts // -> off
                const janDays = [3,4,5,12,13,14,21,22,23,30,31]
                if (year === 2025 && month === 0 && janDays.includes(date)){
                    cell.className = "highlighted-days" 
                }
////////////////////////////////////////////////////////////////////////////////
                // FEVRIER 2025 //28 days
                // nightshift 
                const febNights = [2,3,4,11,12,13,20,21,22]
                if (year === 2025 && month === 1 && febNights.includes(date)){
                    cell.className = "highlighted-dayshift" 
                }
                // off
                const febOffs = [5,6,7,14,15,16,23,24,25]
                if (year === 2025 && month === 1 && febOffs.includes(date)){
                    cell.className = "highlighted-nightshift"
                }
                // dayshifts
                const febDays = [1,8,9,10,17,18,19,26,27,28]
                if (year === 2025 && month === 1 && febDays.includes(date)){
                    cell.className = "highlighted-days"
                }
/////////////////////////////////////////////////////////////////////////
                // MARS 2025 //31 days
                
                // nightshift 
                const marchNights = [1,2,3,10,11,12,19,20,21,28,29,30]
                if (year === 2025 && month === 2 && marchNights.includes(date)){
                    cell.className = "highlighted-dayshift"
                }
                // off
                const marchOffs = [4,5,6,13,14,15,22,23,24,31]
                if (year === 2025 && month === 2 && marchOffs.includes(date)){
                    cell.className = "highlighted-nightshift"
                }
                // dayshifts
                const marchDays = [7,8,9,16,17,18,25,26,27] // c'est comme si ca saute d'une journee a chaque fois
                if (year === 2025 && month === 2 && marchDays.includes(date)){
                    cell.className = "highlighted-days"
                }
                
//////////////////////////////////////////////////////////////

                // AVRIL 2025 //30 days
                
                // nightshift 
                const aprilNights = [6,7,8,15,16,17,24,25,26]
                if (year === 2025 && month === 3 && aprilNights.includes(date)){
                    cell.className = "highlighted-dayshift"
                }
                // off
                const aprilOffs = [1,2,9,10,11,18,19,20,27,28,29]
                if (year === 2025 && month === 3 && aprilOffs.includes(date)){
                    cell.className = "highlighted-nightshift"
                }
                // dayshifts
                const aprilDays = [3,4,5,12,13,14,21,22,23,30]
                if (year === 2025 && month === 3 && aprilDays.includes(date)){
                    cell.className = "highlighted-days"
                }
    ///////////////////////////////////////////////////
                // MAI 2025 // 31 days
                
                // nightshift 
                const mayNights = [3,4,5,12,13,14,21,22,23,30,31]
                if (year === 2025 && month === 4 && mayNights.includes(date)){ 
                    cell.className = "highlighted-dayshift"
                } 
                
                // offdays
                const mayOffs = [6,7,8,15,16,17,24,25,26]
                if (year === 2025 && month === 4 && mayOffs.includes(date)){ 
                    cell.className = "highlighted-nightshift"
                }
                
                // dayshift 
                const mayDays = [1,2,9,10,11,18,19,20,27,28,29]
                if (year === 2025 && month === 4 && mayDays.includes(date)){
                    cell.className = "highlighted-days"
                }
                
////////////////////////////////////////////////////
                // JUIN 2025 // 30 days

                // nightshift
                const junNights = [1,8,9,10,17,18,19,26,27,28]
                if (year === 2025 && month === 5 && junNights.includes(date)){ 
                    cell.className = "highlighted-dayshift"
                } 
                // offdays
                const junOffs = [2,3,4,11,12,13,20,21,22,29,30]
                if (year === 2025 && month === 5 && junOffs.includes(date)){ 
                    cell.className = "highlighted-nightshift"
                }
                // dayshift 
                const junDays = [5,6,7,14,15,16,23,24,25]
                if (year === 2025 && month === 5 && junDays.includes(date)){
                    cell.className = "highlighted-days"
                }

////////////////////////////////////////////////////
                // JUILLET 2025 // 31 days

                // nightshift
                const julyNights = [5,6,7,14,15,16,23,24,25]
                if (year === 2025 && month === 6 && julyNights.includes(date)){ 
                    cell.className = "highlighted-dayshift"
                } 
                // offdays
                const julyOffs = [1,8,9,10,17,18,19,26,27,28]
                if (year === 2025 && month === 6 && julyOffs.includes(date)){ 
                    cell.className = "highlighted-nightshift"
                }
                // dayshift 
                const julyDays = [2,3,4,11,12,13,20,21,22,29,30,31]
                if (year === 2025 && month === 6 && julyDays.includes(date)){
                    cell.className = "highlighted-days"
                }
////////////////////////////////////////////////////
                // AOUT 2025 // 31 days
                // nightshift
                const augustNights = [1,2,3,10,11,12,19,20,21,28,29,30]
                if (year === 2025 && month === 7 && augustNights.includes(date)){ 
                    cell.className = "highlighted-dayshift"
                } 
                // offdays
                const augustOffs = [4,5,6,13,14,15,22,23,24,31]
                if (year === 2025 && month === 7 && augustOffs.includes(date)){ 
                    cell.className = "highlighted-nightshift"
                }
                // dayshift 
                const augustDays = [7,8,9,16,17,18,25,26,27]
                if (year === 2025 && month === 7 && augustDays.includes(date)){
                    cell.className = "highlighted-days"
                }

////////////////////////////////////////////////////
                // SEPTEMBRE 2025 // 30 days

                // nightshift
                const sepNights = [6,7,8,15,16,17,24,25,26]
                if (year === 2025 && month === 8 && sepNights.includes(date)){ 
                    cell.className = "highlighted-dayshift"
                } 
                // offdays
                const sepOffs = [1,2,9,10,11,18,19,20,27,28,29] 
                if (year === 2025 && month === 8 && sepOffs.includes(date)){ 
                    cell.className = "highlighted-nightshift"
                }
                // dayshift 
                const sepDays = [3,4,5,12,13,14,21,22,23,30,31]
                if (year === 2025 && month === 8 && sepDays.includes(date)){
                    cell.className = "highlighted-days"
                }
//////////////////////////////////////////////////
                // OCTOBRE 2025 // 31 days
                // nightshift
                const octNights = [2,3,4,11,12,13,20,21,22,29,30,31] // + aka change premier chiffre next time, I'll make these arrayX,arrayY,arrayZ
                if (year === 2025 && month === 9 && octNights.includes(date)){ 
                    cell.className = "highlighted-dayshift"
                } 
                // offdays
                const octOffs = [5,6,7,14,15,16,23,24,25]  //+
                if (year === 2025 && month === 9 && octOffs.includes(date)){ 
                    cell.className = "highlighted-nightshift"
                }
                // dayshift 
                const octDays = [1,8,9,10,17,18,19,26,27,28] //- deuxieme chiffre
                if (year === 2025 && month === 9 && octDays.includes(date)){
                    cell.className = "highlighted-days"
                }
////////////////////////////////////////////////these three different arrays are not actually different, they are one and they shuffle, so how can i make em do that with code and stopping automatically if month ends on 28,29,30 or 31?????
                // NOVEMBRE 2025 // 30 days
                // nightshift
                const novNights = [7,8,9,16,17,18,25,26,27]
                if (year === 2025 && month === 10 && novNights.includes(date)){ 
                    cell.className = "highlighted-dayshift"
                } 
                // offdays
                const novOffs = [1,2,3,10,11,12,19,20,21,28,29,30]
                if (year === 2025 && month === 10 && novOffs.includes(date)){ 
                    cell.className = "highlighted-nightshift"
                }
                // dayshift 
                const novDays = [4,5,6,13,14,15,22,23,24]
                if (year === 2025 && month === 10 && novDays.includes(date)){
                    cell.className = "highlighted-days"
                }
////////////////////////////////////////////////// I'm getting closer to solving this. find repetitive patterns, pull them into a generic code one liner or two liners. 
                // DECEMBRE 2025 // 31 days
                // nightshift
                const decNights = [4,5,6,13,14,15,22,23,24,31] 
                if (year === 2025 && month === 11 && decNights.includes(date)){ 
                    cell.className = "highlighted-dayshift"
                } 
                // offdays
                const decOffs = [7,8,9,16,17,18,25,26,27]
                if (year === 2025 && month === 11 && decOffs.includes(date)){ 
                    cell.className = "highlighted-nightshift"
                }
                // dayshift 
                const decDays = [1,2,3,10,11,12,19,20,21,28,29,30]
                if (year === 2025 && month === 11 && decDays.includes(date)){
                    cell.className = "highlighted-days"
                }
                
               

///////////////////////////************************************************************************************** */



                
                //************** */
                // it all came from up here //// BRAINS 
                row.appendChild(cell); 
                date++;

            }

        }

        tbl.appendChild(row); // add a row to the table
    }

}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}