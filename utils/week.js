import moment from 'moment';

function getweek (){
    var currentDate = moment();

    var weekStart = currentDate.clone().startOf('isoWeek');
    // var weekEnd = currentDate.clone().endOf('isoWeek');

    var days = Array(7);

    for (var i = 0; i <= 6; i++){
        days[i] = (moment(weekStart).add(i, 'days').format("DD  [/]  MM [/]  YYYY"));
    }

    return {days};
}

export default getweek;