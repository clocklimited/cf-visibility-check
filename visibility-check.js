/**
 * Is an entity that has the properties [visible, liveDate, expiryDate] visible
 * @param {Object} entity The object to inspect
 * @param {Date} date Override the point in time to check visibility
 */
module.exports = function (entity, date) {
  if (date === undefined) {
    date = Date.now()
  }

  if (entity.visible === false) {
    return false
  }

  if ((entity.liveDate) && (entity.liveDate > date)) {
    return false
  }

  if ((entity.expiryDate) && (entity.expiryDate < date)) {
    return false
  }

  return true
}