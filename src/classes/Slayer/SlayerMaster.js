'use strict';
const { Task } = require('./Task.js')
class SlayerMaster {

    constructor(obj) {
        this.name = obj.name;
        // this.generateTasks(obj.tasks);
        this.totalWeight = obj.totalWeight;
        this.tasks = this.initializeTasks(obj.assignments);
        console.log(this);
    }

    initializeTasks(tasks) {
        var newTasks = [];
        for (var i in tasks) {
            newTasks.push(new Task(tasks[i]))
        }

        return newTasks;
    }

    /**
     * Get Turael Data
     * @param {Integer} amount Amount of tasks to generate
     * */
    generateTasks(amount) {
        var tasksToReturn = [];
        for (var u = 0; u < amount; u++) {
            tasksToReturn.push(this.getRandomTask())
        }
        return tasksToReturn;
    }

    /**
     * Get A Random task from this master
     * @param {Task} task of tasks for this master class
     * */
    getRandomTask() {
        if (this.tasks) {
            return new Task(this.tasks[Math.floor(Math.random() * this.tasks.length)])
        } else {
            return null;
        }

    }


    /**
     * Get Tasks
     * @return {Array} Array of tasks for this master class
     * */
    getTasks() {
        return this.tasks;
    }

    /**
     * to string func
     * @todo
     * */
    toString() {
        return 'SlayerMaster :) WIP';
    }



}

module.exports = exports = { SlayerMaster };