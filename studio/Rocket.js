"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //   Methods:
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            total += item.massKg;
        }
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        return this.addPayLoad(cargo, this.cargoItems);
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        return this.addPayLoad(astronaut, this.astronauts);
    };
    Rocket.prototype.addPayLoad = function (payload, items) {
        if (this.canAdd(payload)) {
            items.push(payload);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
