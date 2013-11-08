/**
 * Is an entity that has the properties [visible, liveDate, expiryDate] visible
 * @param {Object} entity The object to inspect
 * @param {Date} date Override the point in time to check visibility
 */
module.exports = function (entity, date) {
  if (date === undefined) {
    date = new Date()
  }

  if (entity.visible === false) {
    return false
  }

  if ((entity.liveDate) && (convertToDate(entity.liveDate) > date)) {
    return false
  }

  if ((entity.expiryDate) && (convertToDate(entity.expiryDate) < date)) {
    return false
  }

  return true
}

function convertToDate(date) {
  if (typeof date === 'string') {
    date = new Date(date)
  }
  return date
}