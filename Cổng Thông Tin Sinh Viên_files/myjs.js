( function( $ ) {

  //Get the ISO week date week number
    Date.prototype.getWeek = function () {
        // Create a copy of this date object
        var target  = new Date(this.valueOf());

        // ISO week date weeks start on monday
        // so correct the day number
        var dayNr   = (this.getDay() + 6) % 7;

        // ISO 8601 states that week 1 is the week
        // with the first thursday of that year.
        // Set the target date to the thursday in the target week
        target.setDate(target.getDate() - dayNr + 3);

        // Store the millisecond value of the target date
        var firstThursday = target.valueOf();

        // Set the target to the first thursday of the year
        // First set the target to january first
        target.setMonth(0, 1);
        // Not a thursday? Correct the date to the next thursday
        if (target.getDay() != 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }

        // The weeknumber is the number of weeks between the
        // first thursday of the year and the thursday in the target week
        return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000
    }
    /// get ngay thang
    /*
    Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }*/

    var weekNumber = (new Date()).getWeek();

    var dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    var now = new Date();
    var dd = now.getDate();
    //The value returned by getMonth is an integer between 0 and 11, referring 0 to January, 1 to February, and so on.
    var mm = now.getMonth()+1;
    var yyyy = now.getFullYear();
    if(dd<10)
    {
        dd='0'+dd;
    }
    if(mm<10)
    {
        mm='0'+mm;
    }
    //Thứ Sáu, ngày 18/08/2017, tuần: <span class="date-week-home-organe">33</span>.
    $("#date_week-home").html('Tuần: <span class="date-week-home-organe">'+weekNumber+'</span>, '+dayNames[now.getDay()]+', Ngày '+dd+'/'+mm+'/'+yyyy +'.')


} )( jQuery );