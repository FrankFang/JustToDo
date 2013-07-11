/**
 * User: frank
 * Date: 13-6-1
 * Time: 下午7:07
 */

var h = require('./core/convertor.js');
var f = './test_resource/工作/1.project.txt';
h.convert(f,function(result){
    console.log(result);
});
