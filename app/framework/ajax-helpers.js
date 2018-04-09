import $ from 'jquery';
import { Promise } from 'rsvp';

// fetches JSON-file with `url` from server and merges
// its values with `object`
// (also removes comments)
export function fetchJSON(url, object) {
  return new Promise(function (resolve) {
    $.get({
      url,
      dataType: 'json',

      dataFilter(data) {
        // remove comments
        return data.replace(/^((([^"\n]*)"([^"\n]*)")*?([^"\n]*?))\/\/.*/gm, '$1');
      },

      success(response) {
        $.extend(object, response);
        resolve();
      }
    });
  });
}
