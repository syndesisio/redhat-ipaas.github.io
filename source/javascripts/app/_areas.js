//= require ../lib/_jquery

/*
 Copyright 2008-2013 Concur Technologies, Inc.

 Licensed under the Apache License, Version 2.0 (the "License"); you may
 not use this file except in compliance with the License. You may obtain
 a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 License for the specific language governing permissions and limitations
 under the License.
 */

(function(global) {
  'use strict';

  var areas = [];

  global.setupAreas = setupAreas;
  global.activateArea = activateArea;

  function activateArea(area) {
    if (!area) return;
    if (area === "") return;

    $(".area-selector a").removeClass('active');
    $(".area-selector a[data-area-name='" + area + "']").addClass('active');
    for (var i = 0; i < areas.length; i++) {
      $(".highlight." + areas[i]).hide();
      $(".area-specific." + areas[i]).hide();
    }
    $(".highlight." + area).show();
    $(".area-specific." + area).show();

    global.toc.calculateHeights();

    // scroll to the new location of the position
    if ($(window.location.hash).get(0)) {
      $(window.location.hash).get(0).scrollIntoView(true);
    }
  }

  // parseURL and stringifyURL are from https://github.com/sindresorhus/query-string
  // MIT licensed
  // https://github.com/sindresorhus/query-string/blob/7bee64c16f2da1a326579e96977b9227bf6da9e6/license
  function parseURL(str) {
    if (typeof str !== 'string') {
      return {};
    }

    str = str.trim().replace(/^(\?|#|&)/, '');

    if (!str) {
      return {};
    }

    return str.split('&').reduce(function(ret, param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = parts[0];
      var val = parts[1];

      key = decodeURIComponent(key);
      // missing `=` should be `null`:
      // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
      val = val === undefined ? null : decodeURIComponent(val);

      if (!ret.hasOwnProperty(key)) {
        ret[key] = val;
      } else if (Array.isArray(ret[key])) {
        ret[key].push(val);
      } else {
        ret[key] = [ret[key], val];
      }

      return ret;
    }, {});
  }

  function stringifyURL(obj) {
    return obj ? Object.keys(obj).sort().map(function(key) {
      var val = obj[key];

      if (Array.isArray(val)) {
        return val.sort().map(function(val2) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
        }).join('&');
      }

      return encodeURIComponent(key) + '=' + encodeURIComponent(val);
    }).join('&') : '';
  }

  // gets the area set in the query string
  function getAreaFromQueryString() {
    if (location.search.length >= 1) {
      var area = parseURL(location.search).area;
      if (area) {
        return area;
      } else if (jQuery.inArray(location.search.substr(1), areas) != -1) {
        return location.search.substr(1);
      }
    }

    return false;
  }

  // returns a new query string with the new area in it
  function generateNewQueryString(area) {
    var url = parseURL(location.search);
    if (url.area) {
      url.area = area;
      return stringifyURL(url);
    }
    return area;
  }

  // if a button is clicked, add the state to the history
  function pushURL(area) {
    if (!history) {
      return;
    }
    var hash = window.location.hash;
    if (hash) {
      hash = hash.replace(/^#+/, '');
    }
    history.pushState({}, '', '?' + generateNewQueryString(area) + '#' + hash);

    // save area as next default
    localStorage.setItem("area", area);
  }

  function setupAreas(l) {
    var defaultArea = localStorage.getItem("area");

    areas = l;

    var presetArea = getAreaFromQueryString();
    if (presetArea) {
      // the area is in the URL, so use that area!
      activateArea(presetArea);

      localStorage.setItem("area", presetArea);
    } else if ((defaultArea !== null) && (jQuery.inArray(defaultArea, areas) != -1)) {
      // the area was the last selected one saved in localstorage, so use that area!
      activateArea(defaultArea);
    } else {
      // no area selected, so use the default
      activateArea(areas[0]);
    }
  }

  // if we click on a area tab, activate that area
  $(function() {
    $(".area-selector a").on("click", function() {
      var area = $(this).data("area-name");
      pushURL(area);
      activateArea(area);
      return false;
    });
    window.onpopstate = function() {
      activateArea(getAreaFromQueryString());
    };
  });
})(window);
