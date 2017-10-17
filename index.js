const commander = require('commander')

commander
  .version('0.0.1')
  .description('Web Starter Kit')
  .option('init, --init', 'Init')
  .parse(process.argv)

console.log(':')
if(commander.init) {

}
