(function () {
    var fs, myUtil;
    fs = require('fs');
    myUtil = require('./util.js');

    var rTodo = /^\s*\[\s*]/i; // [ ] means to do.
    var rDone = /^\s*\[\s*x\s*]/i; // [x] means done.
    var rTask = /^\s*\[\s*(x)?\s*]/i;
    var rPerson = /(->|\+|!)?@[^\s(\[]+/g; // ->@jack means delegating this task to Jack. +@jack means teamwork with Jack. !@Jack means I have to push Jack
    var rProgress = /@\(\s*(\d{1,3})%\s*\)/; // @(50%) means I completed 50%

    var map = [];
    var taskFound = false;

    function convertFiles(filePath, callback) {
        fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
            if (err) throw err;
            var lines = data.split(/\r|\n|\r\n/);
            var lastTaskId;
            lines.forEach(function (line) {
                if (!line) {return false;}

                var task = {};
                task.content = line;
                var match = line.match(rTask);

                if(match){
                    var done = match[1];
                }else{

                }
                if (rTodo.test(line)) {
                    taskFound = true;
                    task.done = false;
                    task.type = 'task';
                    task.id = myUtil.guid();
                } else if (rDone.test(line)) {
                    task.done = true;
                    task.type = 'task';
                    task.id = myUtil.guid();
                } else {
                    task.type = 'note';
                    if (lastTaskId) {
                        task.id = lastTaskId;
                    }
                    map.push(task);
                    return true;
                }
                lastTaskId = task.id;

                var headTabCount = line.search(/[\t]/) + 1;
                task.level = headTabCount + 1;
                var personMatch = line.match(rPerson);
                var scheduleMatch = line.match(rProgress);
                task.progress = scheduleMatch && scheduleMatch[1];
                map.push(task);
            });
            callback && callback(map);
        });
    }

    exports.convert = convertFiles;

    exports.async = function (callback) {
        setTimeout(function () {
            callback(10);
        }, 10);
    };

}).call(this);

// fixme:
// multiline note should be ONE object;
