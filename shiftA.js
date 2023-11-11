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

                // AOUT 2023 31
                    // RESTDAYS
                    if (year === 2023 && month === 7 
                    && date === 6) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 7) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 8) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 15) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 7 
                    && date === 16) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 7 
                    && date === 17) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 24) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 25) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 26) { 
                        cell.className = "highlighted-nightshift";
                    } 

                    //DAYSHIFT

                    // highlighted-days
                    // highlighted-dayshift
                    // highlighted-nightshift
                    if (year === 2023 && month === 7 
                    && date === 1) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 2) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 9) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 10) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 7 
                    && date === 11) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 7 
                    && date === 18) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 19) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 20) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 27) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 28) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 29) { 
                        cell.className = "highlighted-days";
                    } 

                    //NIGHTSHIFT

                    if (year === 2023 && month === 7 
                    && date === 3) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 4) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 5) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 12) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 7 
                    && date === 13) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 7 
                    && date === 14) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 21) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 22) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 23) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 30) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 7 
                    && date === 31) { 
                        cell.className = "highlighted-dayshift";
                    } 



                // SEPTEMBER 2023 30
                    // RESTDAYS
                    if (year === 2023 && month === 8 
                    && date === 2) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 3) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 4) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 11) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 12) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 13) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 20) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 21) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 22) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 29) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 30) { 
                        cell.className = "highlighted-nightshift";
                    }

                    // DAYSHIFT
                    // highlighted-days
                    // highlighted-dayshift
                    // highlighted-nightshift
                    if (year === 2023 && month === 8 
                    && date === 5) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 8 
                    && date === 6) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 8 
                    && date === 7) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 14) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 8 
                    && date === 15) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 8 
                    && date === 16) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 23) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 24) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 25) { 
                        cell.className = "highlighted-days";
                    } 

                    // NIGHTSHIFT
                    if (year === 2023 && month === 8 
                    && date === 1) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 8) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 9) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 10) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 17) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 18) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 19) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 26) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 8 
                    && date === 27) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 8 
                    && date === 28) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    
                   

                // OCTOBRE 2023 31
                    // RESTDAYS 
                    if (year === 2023 && month === 9 
                    && date === 1) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 8) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 9) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 10) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 9 
                    && date === 17) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 9 
                    && date === 18) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 19) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 26) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 27) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 9 
                    && date === 28) { 
                        cell.className = "highlighted-nightshift";
                    }  

                    //DAYSHIFT
                    // highlighted-days
                    // highlighted-dayshift
                    // highlighted-nightshift
                    if (year === 2023 && month === 9 
                    && date === 2) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 3) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 4) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 11) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 9 
                    && date === 12) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 9 
                    && date === 13) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 20) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 21) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 22) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 9 
                    && date === 29) { 
                        cell.className = "highlighted-days";
                    }  
                    if (year === 2023 && month === 9 
                    && date === 30) { 
                        cell.className = "highlighted-days";
                    }  
                    if (year === 2023 && month === 9 
                    && date === 31) { 
                        cell.className = "highlighted-days";
                    }  
                
                    // NIGHTSHIFT
                    if (year === 2023 && month === 9 
                    && date === 5) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 6) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 7) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 14) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 9 
                    && date === 15) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 9 
                    && date === 16) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 23) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 24) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 9 
                    && date === 25) { 
                        cell.className = "highlighted-dayshift";
                    }
                
                    
                // NOVEMBRE 2023 30
                    // RESTDAYS 
                    if (year === 2023 && month === 10 
                    && date === 4) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 5) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 6) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 13) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 10
                    && date === 14) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 10
                    && date === 15) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 22) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 23) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 24) { 
                        cell.className = "highlighted-nightshift";
                    } 

                    //DAYSHIFT
                    // highlighted-days
                    // highlighted-dayshift
                    // highlighted-nightshift

                    if (year === 2023 && month === 10 
                    && date === 7) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 10
                    && date === 8) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 10
                    && date === 9) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 10
                    && date === 16) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 10
                    && date === 17) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 10
                    && date === 18) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 10
                    && date === 25) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 10
                    && date === 26) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 10
                    && date === 27) { 
                        cell.className = "highlighted-days";
                    } 

                    //NIGHTSHIFT
                            
                    if (year === 2023 && month === 10 
                    && date === 1) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 2) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 3) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 10) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 10
                    && date === 11) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 10
                    && date === 12) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 19) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 20) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 21) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 28) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 29) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 10
                    && date === 30) { 
                        cell.className = "highlighted-dayshift";
                    } 

                // DECEMBRE 2023 31
                    //RESTDAYS
                    if (year === 2023 && month === 11 
                    && date === 1) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 2) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 3) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 10) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 11
                    && date === 11) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 11
                    && date === 12) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 19) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 20) { 
                        cell.className = "highlighted-nightshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 21) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 11
                    && date === 28) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 11
                    && date === 29) { 
                        cell.className = "highlighted-nightshift";
                    }
                    if (year === 2023 && month === 11
                    && date === 30) { 
                        cell.className = "highlighted-nightshift";
                    }

                    // DAYSHIFT
                    if (year === 2023 && month === 11 
                    && date === 4) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 11
                    && date === 5) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 11
                    && date === 6) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 11
                    && date === 13) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 11
                    && date === 14) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 11
                    && date === 15) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 11
                    && date === 22) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 11
                    && date === 23) { 
                        cell.className = "highlighted-days";
                    } 
                    if (year === 2023 && month === 11
                    && date === 24) { 
                        cell.className = "highlighted-days";
                    }
                    if (year === 2023 && month === 11
                    && date === 31) { 
                        cell.className = "highlighted-days";
                    }
                    
                    // NIGHTSHIFT
                    if (year === 2023 && month === 11 
                    && date === 7) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 8) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 9) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 16) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 11
                    && date === 17) { 
                        cell.className = "highlighted-dayshift";
                    }
                    if (year === 2023 && month === 11
                    && date === 18) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 25) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 26) { 
                        cell.className = "highlighted-dayshift";
                    } 
                    if (year === 2023 && month === 11
                    && date === 27) { 
                        cell.className = "highlighted-dayshift";
                    }

                
 ////////////////////////////////////////////////////////////////////////////////

                // NEXT YEAR 2024

                // JAN 2024 31

                // RESTDAYS 
                if (year === 2024 && month === 0
                && date === 6) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 0
                && date === 7) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 0
                && date === 8) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 0
                && date === 15) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 0
                && date === 16) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 0
                && date === 17) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 0
                && date === 24) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 0
                && date === 25) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 0
                && date === 26) { 
                    cell.className = "highlighted-nightshift";
                }


                //DAYSHIFT
                if (year === 2024 && month === 0
                && date === 1) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 2) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 9) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 10) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 11) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 18) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 19) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 20) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 27) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 28) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 0
                && date === 29) { 
                    cell.className = "highlighted-days";
                }

                
                //NIGHTSHIFT
                if (year === 2024 && month === 0
                && date === 3) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 4) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 5) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 12) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 13) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 14) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 21) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 22) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 23) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 30) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 0
                && date === 31) { 
                    cell.className = "highlighted-dayshift";
                }
                 

                // ADD SOME MORE 

                // FEVRIER 2014 29
                // nightshift
                if (year === 2024 && month === 1
                && date === 1) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 8) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 9) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 10) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 17) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 18) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 19) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 26) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 27) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 1
                && date === 28) { 
                    cell.className = "highlighted-dayshift";
                }

                // restdays
                if (year === 2024 && month === 1
                && date === 2) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 3) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 4) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 11) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 12) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 13) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 20) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 21) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 22) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 1
                && date === 29) { 
                    cell.className = "highlighted-nightshift";
                }

                // dayshift
                if (year === 2024 && month === 1
                && date === 5) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 1
                && date === 6) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 1
                && date === 7) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 1
                && date === 14) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 1
                && date === 15) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 1
                && date === 16) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 1
                && date === 23) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 1
                && date === 24) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 1
                && date === 25) { 
                    cell.className = "highlighted-days";
                }

                //******* */ MARS 2024
                // nightshift => DAYSHIFT
                if (year === 2024 && month === 2
                && date === 6) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 2
                && date === 7) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 2
                && date === 8) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 2
                && date === 15) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 2
                && date === 16) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 2
                && date === 17) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 2
                && date === 24) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 2
                && date === 25) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 2
                && date === 26) { 
                    cell.className = "highlighted-dayshift";
                }
                

                // restdays => NIGHTSHIFT
                if (year === 2024 && month === 2
                && date === 1) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 2) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 9) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 10) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 11) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 18) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 19) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 20) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 27) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 28) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 2
                && date === 29) { 
                    cell.className = "highlighted-nightshift";
                }

                // dayshift => restDAYS
                if (year === 2024 && month === 2
                && date === 3) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 4) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 5) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 12) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 13) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 14) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 21) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 22) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 23) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 30) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 2
                && date === 31) { 
                    cell.className = "highlighted-days";
                }

                // AVRIL 2024
                // nightshift => dayshift

                if (year === 2024 && month === 3
                && date === 2) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 3) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 4) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 11) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 12) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 13) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 20) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 21) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 22) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 29) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 3
                && date === 30) { 
                    cell.className = "highlighted-dayshift";
                }
                

                // restdays = nightshift
                if (year === 2024 && month === 3
                && date === 5) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 3
                && date === 6) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 3
                && date === 7) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 3
                && date === 14) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 3
                && date === 15) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 3
                && date === 16) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 3
                && date === 23) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 3
                && date === 24) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 3
                && date === 25) { 
                    cell.className = "highlighted-nightshift";
                }
                

                // dayshift = restDAYS
                if (year === 2024 && month === 3
                && date === 1) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 8) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 9) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 10) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 17) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 18) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 19) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 26) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 27) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 3
                && date === 28) { 
                    cell.className = "highlighted-days";
                }

                // MAI 2024
                // nightshift => dayshift
                if (year === 2024 && month === 4
                && date === 1) { 
                    cell.className = "highlighted-dayshift";
                } 
                if (year === 2024 && month === 4
                && date === 8) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 4
                && date === 9) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 4
                && date === 10) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 4
                && date === 17) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 4
                && date === 18) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 4
                && date === 19) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 4
                && date === 26) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 4
                && date === 27) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 4
                && date === 28) { 
                    cell.className = "highlighted-dayshift";
                }
                

                // restdays => nightshift
                if (year === 2024 && month === 4
                && date === 2) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 3) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 4) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 11) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 12) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 13) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 20) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 21) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 22) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 29) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 30) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 4
                && date === 31) { 
                    cell.className = "highlighted-nightshift";
                }
                

                // dayshift => restDAYS
                
                if (year === 2024 && month === 4
                && date === 5) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 4
                && date === 6) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 4
                && date === 7) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 4
                && date === 14) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 4
                && date === 15) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 4
                && date === 16) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 4
                && date === 23) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 4
                && date === 24) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 4
                && date === 25) { 
                    cell.className = "highlighted-days";
                }  
                
                // JUIN 2024
                // nightshift => DAYSHIFT

                if (year === 2024 && month === 5
                && date === 4) { 
                    cell.className = "highlighted-dayshift";
                } 
                if (year === 2024 && month === 5
                && date === 5) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 5
                && date === 6) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 5
                && date === 13) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 5
                && date === 14) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 5
                && date === 15) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 5
                && date === 22) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 5
                && date === 23) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 5
                && date === 24) { 
                    cell.className = "highlighted-dayshift";
                }
                
                
                // restdays => nightshift
                if (year === 2024 && month === 5
                && date === 7) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 5
                && date === 8) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 5
                && date === 9) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 5
                && date === 16) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 5
                && date === 17) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 5
                && date === 18) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 5
                && date === 25) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 5
                && date === 26) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 5
                && date === 27) { 
                    cell.className = "highlighted-nightshift";
                }
                
                // dayshift => restDAYS
                
                if (year === 2024 && month === 5
                && date === 1) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 2) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 3) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 10) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 11) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 12) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 19) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 20) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 21) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 28) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 29) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 5
                && date === 30) { 
                    cell.className = "highlighted-days";
                }
                    
                // JUILLET 2024
                // nightshift => dayshift
                if (year === 2024 && month === 6
                && date === 1) { 
                    cell.className = "highlighted-dayshift";
                } 
                if (year === 2024 && month === 6
                && date === 2) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 3) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 10) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 11) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 12) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 19) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 20) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 21) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 28) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 29) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 6
                && date === 30) { 
                    cell.className = "highlighted-dayshift";
                }
                
                
                // restdays => nightshift
                if (year === 2024 && month === 6
                && date === 4) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 5) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 6) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 13) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 14) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 15) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 22) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 23) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 24) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 6
                && date === 31) {
                    cell.className = "highlighted-nightshift";
                }
                
                // dayshift => restDAYS days
                
                if (year === 2024 && month === 6
                && date === 7) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 6
                && date === 8) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 6
                && date === 9) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 6
                && date === 16) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 6
                && date === 17) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 6
                && date === 18) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 6
                && date === 25) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 6
                && date === 26) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 6
                && date === 27) { 
                    cell.className = "highlighted-days";
                }

                // AOUT 2024
                // nightshift => dayshift
                if (year === 2024 && month === 7
                && date === 6) { 
                    cell.className = "highlighted-dayshift";
                } 
                if (year === 2024 && month === 7
                && date === 7) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 7
                && date === 8) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 7
                && date === 15) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 7
                && date === 16) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 7
                && date === 17) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 7
                && date === 24) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 7
                && date === 25) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 7
                && date === 26) { 
                    cell.className = "highlighted-dayshift";
                }
                
                
                // restdays => nightshift
                if (year === 2024 && month === 7
                && date === 1) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 2) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 9) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 10) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 11) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 18) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 19) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 20) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 27) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 28) {
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 7
                && date === 29) {
                    cell.className = "highlighted-nightshift";
                }
                
                // dayshift => restDAYS days 
                
                if (year === 2024 && month === 7
                && date === 3) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 4) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 5) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 12) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 13) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 14) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 21) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 22) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 23) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 30) {
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 7
                && date === 31) {
                    cell.className = "highlighted-days";
                }                
    
                //SEPTEMBRE 2024 
                // nightshift => dayshift 
                if (year === 2024 && month === 8
                && date === 2) { 
                    cell.className = "highlighted-dayshift";
                } 
                if (year === 2024 && month === 8
                && date === 3) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 4) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 11) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 12) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 13) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 20) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 21) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 22) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 29) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 8
                && date === 30) { 
                    cell.className = "highlighted-dayshift";
                }
                
                
                // restdays => nightshift
                if (year === 2024 && month === 8
                && date === 5) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 8
                && date === 6) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 8
                && date === 7) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 8
                && date === 14) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 8
                && date === 15) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 8
                && date === 16) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 8
                && date === 23) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 8
                && date === 24) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 8
                && date === 25) { 
                    cell.className = "highlighted-nightshift";
                }
                
                
                // dayshift => restDAYS days
                
                if (year === 2024 && month === 8
                && date === 1) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 8) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 9) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 10) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 17) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 18) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 19) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 26) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 27) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 8
                && date === 28) {
                    cell.className = "highlighted-days";
                }

                // OCTOBRE 2024
                // nightshift => dayshift

                if (year === 2024 && month === 9
                && date === 1) { 
                    cell.className = "highlighted-dayshift";
                } 
                if (year === 2024 && month === 9
                && date === 8) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 9
                && date === 9) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 9
                && date === 10) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 9
                && date === 17) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 9
                && date === 18) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 9
                && date === 19) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 9
                && date === 26) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 9
                && date === 27) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 9
                && date === 28) { 
                    cell.className = "highlighted-dayshift";
                }
                
                
                // restdays => nightshift
                if (year === 2024 && month === 9
                && date === 2) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 3) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 4) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 11) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 12) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 13) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 20) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 21) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 22) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 29) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 30) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 9
                && date === 31) { 
                    cell.className = "highlighted-nightshift";
                }
                
                
                // dayshift => restDAYS days
                
                if (year === 2024 && month === 9
                && date === 5) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 9
                && date === 6) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 9
                && date === 7) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 9
                && date === 14) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 9
                && date === 15) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 9
                && date === 16) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 9
                && date === 23) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 9
                && date === 24) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 9
                && date === 25) { 
                    cell.className = "highlighted-days";
                }

                // NOVEMBRE 2024
                // nightshift => dayshift

                if (year === 2024 && month === 10
                && date === 4) { 
                    cell.className = "highlighted-dayshift";
                } 
                if (year === 2024 && month === 10
                && date === 5) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 10
                && date === 6) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 10
                && date === 13) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 10
                && date === 14) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 10
                && date === 15) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 10
                && date === 22) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 10
                && date === 23) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 10
                && date === 24) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 10
                && date === 28) { 
                    cell.className = "highlighted-dayshift";
                }
                
                
                // restdays => nightshift
                if (year === 2024 && month === 10
                && date === 7) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 10
                && date === 8) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 10
                && date === 9) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 10
                && date === 16) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 10
                && date === 17) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 10
                && date === 18) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 10
                && date === 25) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 10
                && date === 26) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 10
                && date === 27) { 
                    cell.className = "highlighted-nightshift";
                }
                
                
                // dayshift = restDAY days
                
                if (year === 2024 && month === 10
                && date === 1) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 2) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 3) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 10) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 11) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 12) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 19) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 20) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 21) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 28) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 29) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 10
                && date === 30) { 
                    cell.className = "highlighted-days";
                }
                
                // DECEMBRE 2024
                // nightshift => dayshift
                if (year === 2024 && month === 11
                && date === 1) { 
                    cell.className = "highlighted-dayshift";
                } 
                if (year === 2024 && month === 11
                && date === 2) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 3) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 10) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 11) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 12) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 19) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 20) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 21) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 28) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 29) { 
                    cell.className = "highlighted-dayshift";
                }
                if (year === 2024 && month === 11
                && date === 30) { 
                    cell.className = "highlighted-dayshift";
                }
                
                
                // restdays => nightshift
                if (year === 2024 && month === 11
                && date === 4) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 5) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 6) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 13) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 14) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 15) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 22) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 23) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 24) { 
                    cell.className = "highlighted-nightshift";
                }
                if (year === 2024 && month === 11
                && date === 31) { 
                    cell.className = "highlighted-nightshift";
                }
            
                // dayshift => restDAYS days
                
                if (year === 2024 && month === 11
                && date === 7) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 11
                && date === 8) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 11
                && date === 9) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 11
                && date === 16) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 11
                && date === 17) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 11
                && date === 18) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 11
                && date === 25) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 11
                && date === 26) { 
                    cell.className = "highlighted-days";
                }
                if (year === 2024 && month === 11
                && date === 27) { 
                    cell.className = "highlighted-days";
                }


                
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