/**
 * User: frank
 * Date: 13-6-1
 * Time: 下午7:13
 */

var assert = require("assert");
var convertor = require('./core/convertor.js');

describe('Core', function () {
    describe('convert', function () {

        it('should return progress', function () {
            var result = [
                {
                    level: 1,
                    done: false,
                    progress: '50' },
                {
                    level: 2,
                    done: false,
                    progress: '50' },
                {
                    level: 2,
                    done: false,
                    progress: null },
                {
                    level: 2,
                    done: false,
                    progress: null },
                {
                    level: 1,
                    done: false,
                    progress: '50' },
                {
                    level: 1,
                    done: true,
                    progress: '50' }
            ];
            var f = '/Users/frank/Dropbox/dev/JustToDo/test_resource/工作/1.project.txt';
            convertor.convert(f, function (map) {
                result.forEach(function (one, index) {
                    for (var name in one) {
                        assert.equal(map[index][name], one[name]);
                    }
                })
            });
        })


    });
})
