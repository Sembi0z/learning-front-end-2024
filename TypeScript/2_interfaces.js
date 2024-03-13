var rect1 = {
    id: '0',
    size: {
        width: 20,
        height: 30
    },
    color: '#aaa'
};
var rect2 = {
    id: '1',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';
// rect2.id = '2'
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '2',
    size: {
        width: 20,
        height: 20
    },
    color: '#ccc',
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
