/**
 * User: frank
 * Date: 13-6-1
 * Time: 下午8:27
 */

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};

exports.guid = guid;
