// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}
happyHolidays()

function happyHolidaysTo(name) {
  return (`Happy holidays, ${name}!`)
}
happyHolidaysTo("everyone")

function happyCustomHolidayTo(holiday, name) {
  return (`Happy ${holiday}, ${name}!`)
}
happyCustomHolidayTo('New Year', 'everyone')

function holidayCountdown(days, holiday) {
  return (`It's ${days} days until ${holiday}!`)
}
holidayCountdowns("Mother's Day", 20)
