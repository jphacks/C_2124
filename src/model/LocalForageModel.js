import { TaskItem } from "./TaskItem.js";
import localforage from "../localforage/dist/localforage";

/* global localforage */

/**
 * key = 0, 1, 2... : string
 * value = [title : string, completed : boolean]
 */
export class LocalForageModel {
  constructor() {
    // Forcing localstorage here. Feel free to switch to other drivers :)
    localforage.setDriver(localforage.LOCALSTORAGE).then(function () {
      var key = "STORE_KEY";
      // var value = 'What we save offline';
      var value = new Uint8Array(8);
      value[0] = 65;
      // var value = undefined;
      var UNKNOWN_KEY = "unknown_key";

      localforage.setItem(key, value, function () {
        console.log("Saved: " + value);

        localforage.getItem(key, function (err, readValue) {
          console.log("Read: ", readValue);
        });

        // Since this key hasn't been set yet, we'll get a null value
        localforage.getItem(UNKNOWN_KEY, function (err, readValue) {
          console.log("Result of reading " + UNKNOWN_KEY, readValue);
        });
      });
    });
    this.l = localforage;
  }

  toTaskList() {
    // 既にローカルにある情報を入れる
    console.log(localforage);
    localforage
      .length()
      .then(function (numberOfKeys) {
        // Outputs the length of the database.
        console.log("localforage length is: " + numberOfKeys);
      })
      .catch(function (err) {
        // This code runs if there were any errors
        console.log(err);
      });

    let items = [];

    let keys = localforage.keys();
    for (let key in keys) {
      const value = localforage.getItem(key);
      console.log(value, key);
      if (value) {
        items.push(new TaskItem(value));
      }
    }

    return items;
  }

  add(taskItem) {
    this.l.setItem(`${taskItem.id}`, [taskItem.title, taskItem.completed]);
    this.l
    .length()
    .then(function (numberOfKeys) {
      // Outputs the length of the database.
      console.log("localforage length is: " + numberOfKeys);
    });
    localforage.iterate(function(value, key, iterationNumber) {
        // Resulting key/value pair -- this callback
        // will be executed for every item in the
        // database.
        console.log([key, value]);
    });
  }

  update(key, completed) {
    localforage.getItem(key).then(function (item) {
      item[1] = completed;
      localforage.setItem(key, item);
    });
  }

  delete(key) {
    localforage
      .removeItem(key)
      .then(function () {
        console.log("Key is cleared!");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
