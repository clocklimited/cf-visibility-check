var visible = require('..')
describe('visibility-check', function () {

  it('should return false is entity.visible is false', function () {
    false.should.equal(visible({ liveDate: null, expiryDate: null, visible: false }))
  })

  it('should return true is entity.visible is true', function () {
    true.should.equal(visible({ liveDate: null, expiryDate: null, visible: true }))
  })

  it('should return false when entity.visible is true but liveDate is in the future', function () {
    false.should.equal(visible({ liveDate: Date.now() + 1000, expiryDate: null, visible: true }))
  })

  it('should return false when entity.visible is true but liveDate is in the future and is a string', function () {
    var tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    false.should.equal(visible({ liveDate: tomorrow.toString(), expiryDate: null, visible: true }))
  })

  it('should return true when entity.visible is true and liveDate is in the past and is a string', function () {
    var yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    true.should.equal(visible({ liveDate: yesterday.toString(), expiryDate: null, visible: true }))
  })

  it('should return false when entity.visible is true but expiryDate is in the future and is a string', function () {
    var tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    true.should.equal(visible({ liveDate: null, expiryDate: tomorrow.toString(), visible: true }))
  })

  it('should return true when entity.visible is true and expiryDate is in the past and is a string', function () {
    var yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    false.should.equal(visible({ liveDate: null, expiryDate: yesterday.toString(), visible: true }))
  })

  it('should return false when entity.visible is true but expiryDate is in the past', function () {
    false.should.equal(visible({ liveDate: null, expiryDate: Date.now() - 1000, visible: true }))
  })

  it('should return true when entity.visible is true and expiryDate is in the future', function () {
    true.should.equal(visible({ liveDate: null, expiryDate: Date.now() + 1000, visible: true }))
  })

  it('should return true when entity.visible is true and liveDate is in the past', function () {
    true.should.equal(visible({ liveDate: Date.now() - 1000, expiryDate: null, visible: true }))
  })
})