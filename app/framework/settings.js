import $ from 'jquery';
import { Promise } from 'rsvp';

let settings = {};

export function init() {
  return new Promise(function (resolve, reject) {
    $.get({
      url: 'settings.json',
      dataType: 'json',

      dataFilter(data) {
        // remove comments
        return data.replace(/\/\/.*/g, '');
      },

      success(response) {
        $.extend(settings, response);
        resolve();
      }
    });
  });
}

export default settings;