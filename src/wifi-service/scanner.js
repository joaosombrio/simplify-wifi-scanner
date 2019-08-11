import { init, scan as _scan } from 'node-wifi';

const scan = () => {
  init({
    iface: null
  });

  _scan(function(error, networks) {
    let scanPromise = 
      _scan()
        .then((networks) => {
          networks.map(network => ({
            ssid: network.ssid,
            mac: network.mac,
            channel: network.channel,
            frequency: network.frequency,
            signal: network.quality,
            security: network.security
          }))
        })
        .catch((error) => { error });
    return scanPromise;
  });
}

export default scan