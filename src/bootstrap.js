// ES6 code goes here
console.log('es6 code goes here');
import moment from 'moment';
console.log(moment.now()); //////////Seconds since Jan 1st 1970

const rightNow = moment();
console.log(rightNow)

const birthday = moment('1984-10-21', 'YYYY-MM-DD');
console.log(birthday.format('MMM Do YYYY'));
console.log(birthday.fromNow());

const twoWeeksFromNow = moment().add(2, 'weeks')
console.log(twoWeeksFromNow.toString())

const sixMonthsAgo = moment().subtract(6, 'months')
console.log(sixMonthsAgo.toString())