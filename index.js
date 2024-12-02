require('./CameraSDK/play');
require('./CameraSDK/connector');

const Player = global.VideoPlayer;

const devices = __dirname + '/devices.csv';
const firmwareData = __dirname + '/firmwareData.csv';
const fs = require('fs');
const { isEmpty } = require('lodash');
let deviceIds = [];
let csvData = [];

fs.readFile(firmwareData, 'utf8', (err, data) => {
  if (err) {
    fs.readFile(devices, 'utf8', (err, data) => {
      if (err) return null;
      const arr = data.split('\n');
      arr.forEach((ele) => {
        const [deviceId, ...password] = ele.split(',');
        deviceIds.push({
          id: deviceId,
          password: password.join().split('\r')[0]
            ? password.join().split('\r')[0]
            : '',
        });
      });
      console.log(deviceIds);

      // got device ids
      if (deviceIds[0].id.length === 10) {
        Player.ConnectDevice(
          deviceIds[0].id,
          '',
          'admin',
          deviceIds[0].password,
          0,
          80,
          0,
          0,
          1,
          'wss',
          null
        );
      } else {
        deviceIds.splice(0, 1);
        Player.ConnectDevice(
          deviceIds[0].id,
          '',
          'admin',
          deviceIds[0].password,
          0,
          80,
          0,
          0,
          1,
          'wss',
          null
        );
      }
    });
  } else {
    const arr = data.split('\n');

    arr.splice(arr.length - 1, 1);
    arr.forEach((ele) => {
      const [deviceId, ...rest] = ele.split(',');
      const reversedRest = rest.reverse();
      // console.log({ reversedRest, deviceId });
      let iccid, imsi, fwVersion;
      let pass = [];
      if (reversedRest[0] === 'failed' || reversedRest[0] === 'success') {
        // old device
        // console.log('old device', deviceId);
        // if (reversedRest[1] === '') {
        imsi = reversedRest[2];
        iccid = reversedRest[3];
        fwVersion = reversedRest[4];
        // }
        for (let i = 5; i < reversedRest.length; i++) {
          pass.push(reversedRest[i]);
        }
      } else {
        for (let i = 0; i < reversedRest.length; i++) {
          pass.push(reversedRest[i]);
        }
        // new device
        // console.log('new device', deviceId);
      }

      let reversePass = pass.reverse().join();
      // console.log(reversePass);
      deviceIds.push({
        id: deviceId,
        password: reversePass === 'empty password' ? '' : reversePass,
        iccid,
        imsi,
        fwVersion,
      });
    });
    console.log(deviceIds);
    if (deviceIds[0].fwVersion === "couldn't fetch fwVersion") {
      console.log('=====1111', deviceIds[0]);
      Player.ConnectDevice(
        deviceIds[0].id,
        '',
        'admin',
        deviceIds[0].password,
        0,
        80,
        0,
        0,
        1,
        'wss',
        null
      );
    } else {
      console.log('=====2222', deviceIds[0]);
      Player.checkNextDevice({
        err: null,
        fwVersion: deviceIds[0].fwVersion,
        iccid: deviceIds[0].iccid,
        imsi: deviceIds[0].imsi,
      });
    }
  }
});

global.ConnectApi.onremotesetup = function (
  session,
  str,
  data_size,
  remoteSetupResult
) {
  if (remoteSetupResult == 0) {
    const _str = JSON.parse(str);
    Player.checkNextDevice({
      err: null,
      fwVersion: isEmpty(_str.IPCam.DeviceInfo)
        ? "couldn't fetch fwVersion"
        : _str.IPCam.DeviceInfo.FWVersion,
      iccid: isEmpty(_str.IPCam.Lte)
        ? "couldn't fetch iccid"
        : _str.IPCam.Lte.ICCID,
      imsi: isEmpty(_str.IPCam.Lte)
        ? "couldn't fetch imsi"
        : _str.IPCam.Lte.IMSI,
    });
  }
};

Player.checkNextDevice = function ({ err, fwVersion, iccid, imsi }) {
  console.log('======== checkNextDevice', { err, fwVersion, iccid, imsi });
  csvData.push(
    `${deviceIds[0].id},${
      deviceIds[0].password ? deviceIds[0].password : 'empty password'
    },${fwVersion},${iccid},${imsi},${err ? err : 'online'},${
      err ? 'failed' : 'success'
    }\n`
  );

  let resultFilePath = __dirname + `/firmwareData`;
  resultFilePath += '.csv';
  fs.writeFile(resultFilePath, csvData.join(''), (err) => {
    if (err) console.log('Error writing the file:', err);
    else console.log('File saved successfully.');
  });

  Player.DisConnectDevice(deviceIds[0].id);
  deviceIds.splice(0, 1);

  if (deviceIds.length === 0) {
    console.log('final data', csvData);

    setTimeout(() => {
      process.exit(0);
    }, 2000);
    return;
  }
  if (
    (deviceIds[0].fwVersion === "couldn't fetch fwVersion" ||
      !deviceIds[0].fwVersion) &&
    deviceIds[0].id.length === 10
  ) {
    Player.ConnectDevice(
      deviceIds[0].id,
      '',
      'admin',
      deviceIds[0].password,
      0,
      80,
      0,
      0,
      1,
      'wss',
      null
    );
  } else {
    if (deviceIds[0].id.length !== 10)
      Player.checkNextDevice({
        err: 'device id wrong',
        fwVersion: "couldn't fetch fwVersion",
        iccid: "couldn't fetch iccid",
        imsi: "couldn't fetch imsi",
      });
    else
      Player.checkNextDevice({
        err: null,
        fwVersion: deviceIds[0].fwVersion,
        iccid: deviceIds[0].iccid,
        imsi: deviceIds[0].imsi,
      });
  }
};

Player.isDeviceConnected = () => {
  let config = {
    Version: '1.3.0',
    Method: 'get',
    IPCam: {
      DeviceInfo: {},
      LTE: {},
    },
    Authorization: {
      Verify: '',
      username: 'admin',
      password: deviceIds[0].password,
    },
  };

  const str = JSON.stringify(config);
  const session = Player.GetSessionById(deviceIds[0].id);
  if (session) {
    global.ConnectApi.remote_setup2(session, str);
  }
};
