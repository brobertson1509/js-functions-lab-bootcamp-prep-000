// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}
happyHolidays()

function happyHolidaysTo(name) {
  console.log(`Happy holidays, ${name}!`)
}
happyHolidaysTo("everyone")

function happyCustomHolidayTo(holiday, name) {
  console.log(`Happy ${holiday}, ${name}!`)
}
happyCustomHolidayTo('New Year', 'everyone')

function holidayCountdown(days, holiday) {
  console.log(`It's ${days} days until ${holiday}!`)
}
holidayCountdowns(20, "Mother's Day")
