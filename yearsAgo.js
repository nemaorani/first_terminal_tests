module.exports = function yearsAgo(currentYear) {
    var year = new Date();
    return year.getFullYear(currentYear) - currentYear;
}