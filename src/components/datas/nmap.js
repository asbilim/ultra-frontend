const nmapScanTypes = [
    {
      name: 'TCP SYN scan',
      value: '-sS',
      description: 'The default and most common Nmap scan type. Performs a stealthy scan by sending SYN packets to the target ports and analyzing the responses.',
    },
    {
      name: 'TCP connect scan',
      value: '-sT',
      description: "Connects to the target's ports to determine if they are open, similar to the way a web browser connects to a web server.",
    },
    {
      name: 'UDP scan',
      value: '-sU',
      description: 'Scans for open UDP ports, which are commonly used by DNS, SNMP, and other protocols.',
    },
    {
      name: 'ACK scan',
      value: '-sA',
      description: 'Sends ACK packets to the target ports to determine if they are filtered or unfiltered by a firewall.',
    },
    {
      name: 'Window scan',
      value: '-sW',
      description: 'Sends packets with a specific window size to the target ports to determine if they are filtered or unfiltered by a firewall.',
    },
    {
      name: 'Ping scan',
      value: '-sn',
      description: 'Performs a host discovery scan to determine which hosts are up, without scanning any ports.',
    },
    {
      name: 'OS detection',
      value: '-O',
      description: 'Attempts to determine the operating system of the target by analyzing network traffic and responses.',
    },
    {
      name: 'Service detection',
      value: '-sV',
      description: 'Attempts to determine the version and type of services running on the target ports, such as web servers, email servers, and other applications.',
    },
    {
      name: 'Script scan',
      value: '-sC',
      description: 'Runs a set of Nmap scripts against the target to provide more detailed information about the target.',
    },
  ];
  
  const nmapVerbosityOptions = [
    { name: 'Normal', value: '' },
    { name: 'Verbose', value: '-v' },
    { name: 'Ultra verbose', value: '-vv' },
  ];
  
  const nmapServiceDetectionOptions = [
    { name: 'No detection', value: '' },
    { name: 'Service detection', value: '-sV' },

  ];
  
  export { nmapScanTypes, nmapVerbosityOptions, nmapServiceDetectionOptions };