import moment from "moment";
import React from 'react'

function GetDaysWeek () {

    var currentDate = moment();

    var weekStart = currentDate.clone().startOf('week');

    var days = Array(7);
    for (var i = 0; i <= 6; i++) {

        days[i]=(moment(weekStart).add(i, 'days').format("DD[/] MM[/]YYYY"));

    };
    return { days }

}

export default GetDaysWeek
