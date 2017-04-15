/**
 * Created by khlee on 11/8/16.
 */
var Stopwatch = (function () {
    function Stopwatch(display, results) {
        this.running = false;
        this.laps = [];
        this.time = performance.now();
        this.times = [0, 0, 0];
        this.display = display;
        this.reset();
        this.print();
    }
    Stopwatch.prototype.reset = function () {
        this.times = [0, 0, 0];
    };
    Stopwatch.prototype.isRunning = function () {
        return this.running;
    };
    Stopwatch.prototype.start = function () {
        if (!this.time)
            this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
    };
    Stopwatch.prototype.stop = function () {
        this.running = false;
        this.time = null;
    };
    Stopwatch.prototype.restart = function () {
        if (!this.time)
            this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
        this.reset();
    };
    Stopwatch.prototype.step = function (timestamp) {
        if (!this.running)
            return;
        this.calculate(timestamp);
        this.time = timestamp;
        this.print();
        requestAnimationFrame(this.step.bind(this));
    };
    Stopwatch.prototype.calculate = function (timestamp) {
        var diff = timestamp - this.time;
        // Hundredths of a second are 100 ms
        this.times[2] += diff / 10;
        // Seconds are 100 hundredths of a second
        if (this.times[2] >= 100) {
            this.times[1] += 1;
            this.times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (this.times[1] >= 60) {
            this.times[0] += 1;
            this.times[1] -= 60;
        }
    };
    Stopwatch.prototype.print = function () {
        this.display.innerText = this.format(this.times);
    };
    Stopwatch.prototype.pad0 = function (num) {
        return ('00' + num).slice(-2);
    };
    Stopwatch.prototype.format = function (times) {
        return this.pad0(times[0]) + ":" + this.pad0(times[1]) + ":" + this.pad0(Math.floor(times[2]));
    };
    return Stopwatch;
}());
