const defangIp = (ip) => {
  return ip.replace(/\./g, '[.]');
};

module.exports = defangIp;
