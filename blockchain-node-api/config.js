const artifacts = require('./build/contracts/Contacts.json');

network_id = Object.keys(artifacts.networks)[0];

const CONTACT_ADDRESS = artifacts.networks[network_id].address;
const CONTACT_ABI = artifacts.abi;

module.exports = {
        CONTACT_ABI,
        CONTACT_ADDRESS,
};
