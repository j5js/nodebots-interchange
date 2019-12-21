// this module is used to set up the interchange object with different
// configurations

module.exports = {
  fw: {
    'name': 'test_firmware',
    'deviceID': 0x01,
    'creatorID': 0x00,
    'repo': 'github',
    'firmata': true
  },
  options: {
    board: 'nano',
    port: '/dev/dummy',
    firmata: true,
    i2c_address: undefined,
    useFirmata: true,
    firmataName: ''
  },
  options_no_port: {
    board: 'nano',
    port: '',
    firmata: true,
    i2c_address: undefined,
    useFirmata: true,
    firmataName: ''
  }
}
