var  contract = require('./contract_guess.js');


var web3 = contract.web3;
var args = process.argv.splice(2);
if(typeof(args[0]) != 'undefined'){
  var input=args[0];
}else{
  console.log('{"status":"error"}');
}
const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder(contract.abi);
const result = decoder.decodeData(input);
console.log('{"status":"success", "match_id":"'+result.inputs[0]+'","gusser":"0x'+result.inputs[1].toString()+'","result":"'+result.inputs[2].toString()+'","value":"'+result.inputs[3].toString() +'"}');
