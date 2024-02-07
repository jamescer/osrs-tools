'use strict';
const { Task } = require('./Task.js');

class SlayerMaster {
  constructor({ name, assignments, totalWeight }) {
    this.name = name;
    this.totalWeight = totalWeight;
    this.tasks = this.initializeSlayerTasks();
  }

  /**
   * Generate the default takss
   * TODO implement functionality to limit or implement options to change task returns
   * @param {Integer} amount Amount of tasks to generate
   * */
  initializeSlayerTasks() {
    var newTasks = [];
    for (var i in this.tasks) {
      newTasks.push(new Task(this.tasks[i]));
    }

    return newTasks;
  }

  /**
   * Generate the default takss
   * TODO implement functionality to limit or implement options to change task returns
   * @param {Integer} amount Amount of tasks to generate
   * */
  generateTasks(amount) {
    var tasksToReturn = [];
    for (var u = 0; u < amount; u++) {
      tasksToReturn.push(this.getRandomTask());
    }
    return tasksToReturn;
  }

  /**
   * Get A Random task from this master
   * @param {Task} task of tasks for this master class
   * */
  getRandomTask() {
    if (this.tasks) {
      return this.tasks[Math.floor(Math.random() * this.tasks.length)];
    } else {
      return null;
    }
  }

  /**
   * Get Name of Slayer Master
   * @returns
   */
  getName() {
    return this.name;
  }

  /**
   * Get Tasks
   * @return {Array} Array of tasks for this master class
   * */
  getTasks() {
    return this.tasks;
  }

  /**
   * to string function
   * @todo
   * */
  toString() {
    return (
      'SlayerMaster :) WIP SlayerMaster:{\n' +
      'name: ' +
      this.name +
      '\n' +
      ' }'
    );
  }
}

module.exports = exports = { SlayerMaster };
