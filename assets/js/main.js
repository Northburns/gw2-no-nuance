/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@emotion/hash/dist/hash.browser.cjs.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.browser.cjs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

exports["default"] = murmurhash2_32_gc;


/***/ }),

/***/ "./node_modules/array-unique/index.js":
/*!********************************************!*\
  !*** ./node_modules/array-unique/index.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
/*!
 * array-unique <https://github.com/jonschlinkert/array-unique>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  var len = arr.length;
  var i = -1;

  while (i++ < len) {
    var j = i + 1;

    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
};

module.exports.immutable = function uniqueImmutable(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('array-unique expects an array.');
  }

  var arrLen = arr.length;
  var newArr = new Array(arrLen);

  for (var i = 0; i < arrLen; i++) {
    newArr[i] = arr[i];
  }

  return module.exports(newArr);
};


/***/ }),

/***/ "./node_modules/chunk/src/chunk.js":
/*!*****************************************!*\
  !*** ./node_modules/chunk/src/chunk.js ***!
  \*****************************************/
/***/ (function(module, exports) {

"use strict";


(function () {

    function chunk (collection, size) {
    
        var result = [];
        
        // default size to two item
        size = parseInt(size) || 2;
        
        // add each chunk to the result
        for (var x = 0; x < Math.ceil(collection.length / size); x++) {
            
            var start = x * size;
            var end = start + size;
            
            result.push(collection.slice(start, end));
            
        }
        
        return result;
        
    };

    // export in node or browser
    if (true) {
        if ( true && module.exports) {
            exports = module.exports = chunk;
        }
        exports.chunk = chunk;
    } else // removed by dead control flow
{}

}.call(this));


/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Save global object in a variable
var __global__ =
(typeof globalThis !== 'undefined' && globalThis) ||
(typeof self !== 'undefined' && self) ||
(typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g);
// Create an object that extends from __global__ without the fetch function
var __globalThis__ = (function () {
function F() {
this.fetch = false;
this.DOMException = __global__.DOMException
}
F.prototype = __global__; // Needed for feature detection on whatwg-fetch's code
return new F();
})();
// Wraps whatwg-fetch with a function scope to hijack the global object
// "globalThis" that's going to be patched
(function(globalThis) {

var irrelevant = (function (exports) {

  /* eslint-disable no-prototype-builtins */
  var g =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof self !== 'undefined' && self) ||
    // eslint-disable-next-line no-undef
    (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g) ||
    {};

  var support = {
    searchParams: 'URLSearchParams' in g,
    iterable: 'Symbol' in g && 'iterator' in Symbol,
    blob:
      'FileReader' in g &&
      'Blob' in g &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in g,
    arrayBuffer: 'ArrayBuffer' in g
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        if (header.length != 2) {
          throw new TypeError('Headers constructor: expected name/value pair to be length 2, found' + header.length)
        }
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body._noBody) return
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
    var encoding = match ? match[1] : 'utf-8';
    reader.readAsText(blob, encoding);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      // eslint-disable-next-line no-self-assign
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._noBody = true;
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this);
        if (isConsumed) {
          return isConsumed
        } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else if (support.blob) {
        return this.blob().then(readBlobAsArrayBuffer)
      } else {
        throw new Error('could not read as ArrayBuffer')
      }
    };

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['CONNECT', 'DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT', 'TRACE'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }

    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal || (function () {
      if ('AbortController' in g) {
        var ctrl = new AbortController();
        return ctrl.signal;
      }
    }());
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);

    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders
      .split('\r')
      .map(function(header) {
        return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
      })
      .forEach(function(line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          try {
            headers.append(key, value);
          } catch (error) {
            console.warn('Response ' + error.message);
          }
        }
      });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    if (this.status < 200 || this.status > 599) {
      throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].")
    }
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 200, statusText: ''});
    response.ok = false;
    response.status = 0;
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = g.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        // This check if specifically for when a user fetches a file locally from the file system
        // Only if the status is out of a normal range
        if (request.url.indexOf('file://') === 0 && (xhr.status < 200 || xhr.status > 599)) {
          options.status = 200;
        } else {
          options.status = xhr.status;
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function() {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function() {
        setTimeout(function() {
          reject(new TypeError('Network request timed out'));
        }, 0);
      };

      xhr.onabort = function() {
        setTimeout(function() {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && g.location.href ? g.location.href : url
        } catch (e) {
          return url
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (
          support.arrayBuffer
        ) {
          xhr.responseType = 'arraybuffer';
        }
      }

      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers || (g.Headers && init.headers instanceof g.Headers))) {
        var names = [];
        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
          names.push(normalizeName(name));
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
        request.headers.forEach(function(value, name) {
          if (names.indexOf(name) === -1) {
            xhr.setRequestHeader(name, value);
          }
        });
      } else {
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
      }

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!g.fetch) {
    g.fetch = fetch;
    g.Headers = Headers;
    g.Request = Request;
    g.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
})(__globalThis__);
// This is a ponyfill, so...
__globalThis__.fetch.ponyfill = true;
delete __globalThis__.fetch.polyfill;
// Choose between native implementation (__global__) or custom implementation (__globalThis__)
var ctx = __global__.fetch ? __global__ : __globalThis__;
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/debounce/index.js":
/*!****************************************!*\
  !*** ./node_modules/debounce/index.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "./node_modules/fast-get/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/fast-get/src/index.js ***!
  \********************************************/
/***/ ((module) => {

const regexCloseSquareBracket = /]|^\[/g
const regexOpenSquareBracket = /\.?\[/g

module.exports = function (object, path, defaultValue) {
  // Handle the case that the object is undefined or not an object
  if (!object || Object(object) !== object) {
    return defaultValue
  }

  // A) If the path is an array, we can just use that
  // B) If the path is a string, convert it into an array by migrating
  //    array-style `[foo]` accessors into object-style `.foo` accessors
  const cleanPath = Array.isArray(path)
    ? path
    : path.replace(regexCloseSquareBracket, '').replace(regexOpenSquareBracket, '.').split('.')

  return get(object, cleanPath, defaultValue)
}

function get (object, path, defaultValue) {
  let current = object

  for (const segment of path) {
    current = current[segment]

    if (current == null) {
      return defaultValue
    }
  }

  return current
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/cache/browser.js":
/*!*********************************************************!*\
  !*** ./node_modules/gw2api-client/src/cache/browser.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debounce = __webpack_require__(/*! debounce */ "./node_modules/debounce/index.js")
const idbKeyval = __webpack_require__(/*! idb-keyval */ "./node_modules/idb-keyval/dist/idb-keyval.mjs")

module.exports = function (configuration) {
  configuration = Object.assign({
    storageKey: 'gw2api-cache',
    gcTick: 5 * 60 * 1000,
    persistDebounce: 3 * 1000,
    storageEngine: idbKeyval
  }, configuration)

  let _storage = {}
  const storageEngine = configuration.storageEngine
  const storageKey = configuration.storageKey
  const persist = debounce(_persist, configuration.persistDebounce)

  function get (key) {
    return Promise.resolve(_get(key))
  }

  function set (key, value, expiry) {
    _set(key, value, expiry)
    return Promise.resolve(true)
  }

  function mget (keys) {
    let values = keys.map(key => _get(key))
    return Promise.resolve(values)
  }

  function mset (values) {
    values.map(value => {
      _set(value[0], value[1], value[2])
    })

    return Promise.resolve(true)
  }

  function _get (key) {
    let value = _storage[key]
    let now = (new Date()).getTime()
    return value && value.expiry > now ? value.value : null
  }

  function _set (key, value, expiry) {
    _storage[key] = { value, expiry: (new Date()).getTime() + expiry * 1000 }
    persist()
  }

  function _persist () {
    storageEngine.set(storageKey, _storage)
      .catch(/* istanbul ignore next */ err => {
        console.warn('Failed persisting cache', err)
      })
  }

  function hydrate () {
    storageEngine.get(storageKey)
      .then(value => {
        if (value) {
          _storage = value
        }
      })
  }

  function flush () {
    _storage = {}
    storageEngine.delete(storageKey)
    return Promise.resolve(true)
  }

  function _getStorage () {
    return _storage
  }

  function garbageCollection () {
    const now = (new Date()).getTime()
    const keys = Object.keys(_storage)

    for (let i = 0; i !== keys.length; i++) {
      if (_storage[keys[i]].expiry < now) {
        delete _storage[keys[i]]
      }
    }

    persist()
  }

  setInterval(garbageCollection, configuration.gcTick)
  hydrate()
  garbageCollection()

  return { get, set, mget, mset, flush, _getStorage }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/cache/memory.js":
/*!********************************************************!*\
  !*** ./node_modules/gw2api-client/src/cache/memory.js ***!
  \********************************************************/
/***/ ((module) => {

module.exports = function (configuration) {
  configuration = Object.assign({
    gcTick: 5 * 60 * 1000
  }, configuration)

  // Scope the storage to the function, so multiple instances don't interfere
  let _storage = {}

  function get (key) {
    return Promise.resolve(_get(key))
  }

  function _get (key) {
    let value = _storage[key]
    let now = (new Date()).getTime()
    return value && value.expiry > now ? value.value : null
  }

  function set (key, value, expiry) {
    _set(key, value, expiry)
    return Promise.resolve(true)
  }

  function _set (key, value, expiry) {
    _storage[key] = { value, expiry: (new Date()).getTime() + expiry * 1000 }
  }

  function mget (keys) {
    let values = keys.map(key => _get(key))
    return Promise.resolve(values)
  }

  function mset (values) {
    values.map(value => {
      _set(value[0], value[1], value[2])
    })

    return Promise.resolve(true)
  }

  function flush () {
    _storage = {}
    return Promise.resolve(true)
  }

  function _getStorage () {
    return _storage
  }

  function garbageCollection () {
    const now = (new Date()).getTime()
    const keys = Object.keys(_storage)

    for (let i = 0; i !== keys.length; i++) {
      if (_storage[keys[i]].expiry < now) {
        delete _storage[keys[i]]
      }
    }
  }

  setInterval(garbageCollection, configuration.gcTick)
  garbageCollection()

  return { get, set, mget, mset, flush, _getStorage }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/cache/null.js":
/*!******************************************************!*\
  !*** ./node_modules/gw2api-client/src/cache/null.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = function () {
  return { get, set, mget, mset, flush }
}

function get () {
  return Promise.resolve(null)
}

function set () {
  return Promise.resolve(true)
}

function mget (keys) {
  const values = keys.map(x => null)
  return Promise.resolve(values)
}

function mset () {
  return Promise.resolve(true)
}

function flush () {
  return Promise.resolve(true)
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/client.js":
/*!**************************************************!*\
  !*** ./node_modules/gw2api-client/src/client.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fetch = __webpack_require__(/*! lets-fetch */ "./node_modules/lets-fetch/src/index.js")
const nullCache = __webpack_require__(/*! ./cache/null */ "./node_modules/gw2api-client/src/cache/null.js")
const endpoints = __webpack_require__(/*! ./endpoints */ "./node_modules/gw2api-client/src/endpoints/index.js")
const flow = __webpack_require__(/*! ./flow */ "./node_modules/gw2api-client/src/flow.js")

module.exports = class Client {
  constructor () {
    this.schemaVersion = '2019-03-20T00:00:00.000Z'
    this.lang = 'en'
    this.apiKey = false
    this.fetch = fetch
    this.caches = [nullCache()]
    this.debug = false
    this.client = this
  }

  // Set the schema version
  schema (schema) {
    this.schemaVersion = schema
    this.debugMessage(`set the schema to ${schema}`)
    return this
  }

  // Set the language for locale-aware endpoints
  language (lang) {
    this.lang = lang
    this.debugMessage(`set the language to ${lang}`)
    return this
  }

  // Set the api key for authenticated endpoints
  authenticate (apiKey) {
    this.apiKey = apiKey
    this.debugMessage(`set the api key to ${apiKey}`)
    return this
  }

  // Set the caching storage method(s)
  cacheStorage (caches) {
    this.caches = [].concat(caches)
    this.debugMessage(`updated the cache storage`)
    return this
  }

  // Set the debugging flag
  debugging (flag) {
    this.debug = flag
    return this
  }

  // Print out a debug message if debugging is enabled
  debugMessage (string) {
    if (this.debug) {
      console.log(`[gw2api-client] ${string}`)
    }
  }

  // Make sure we get the new content if the game updates
  flushCacheIfGameUpdated () {
    const buildEndpoint = this.build()
    const promises = {
      cacheBuildId: () => buildEndpoint._cacheGetSingle('cacheBuildId'),
      buildId: () => buildEndpoint.live().get()
    }

    return flow.parallel(promises).then(resp => {
      let flushPromises = []

      // Flush the caches if the cached build id is set (as a safety measure)
      // and the cached build id is older than the current one
      if (resp.cacheBuildId && resp.cacheBuildId < resp.buildId) {
        this.debugMessage(`flushing the cache because of a new build`)
        flushPromises = this.caches.map(cache => () => cache.flush())
      }

      // Flush the caches (if needed) and save the current build id
      return flow.parallel(flushPromises)
        .then(() => buildEndpoint._cacheSetSingle('cacheBuildId', resp.buildId))
    })
  }

  // All the different API endpoints
  account () {
    return new endpoints.AccountEndpoint(this)
  }

  achievements () {
    return new endpoints.AchievementsEndpoint(this)
  }

  backstory () {
    return new endpoints.BackstoryEndpoint(this)
  }

  build () {
    return new endpoints.BuildEndpoint(this)
  }

  cats () {
    return new endpoints.CatsEndpoint(this)
  }

  characters (name) {
    return new endpoints.CharactersEndpoint(this, name)
  }

  colors () {
    return new endpoints.ColorsEndpoint(this)
  }

  commerce () {
    return new endpoints.CommerceEndpoint(this)
  }

  continents () {
    return new endpoints.ContinentsEndpoint(this)
  }

  currencies () {
    return new endpoints.CurrenciesEndpoint(this)
  }

  dailycrafting () {
    return new endpoints.DailycraftingEndpoint(this)
  }

  dungeons () {
    return new endpoints.DungeonsEndpoint(this)
  }

  emblem () {
    return new endpoints.EmblemEndpoint(this)
  }

  emotes () {
    return new endpoints.EmotesEndpoint(this)
  }

  events () {
    return new endpoints.EventsEndpoint(this)
  }

  files () {
    return new endpoints.FilesEndpoint(this)
  }

  finishers () {
    return new endpoints.FinishersEndpoint(this)
  }

  gliders () {
    return new endpoints.GlidersEndpoint(this)
  }

  guild (id) {
    return new endpoints.GuildEndpoint(this, id)
  }

  home () {
    return new endpoints.HomeEndpoint(this)
  }

  homestead () {
    return new endpoints.HomesteadEndpoint(this)
  }

  items () {
    return new endpoints.ItemsEndpoint(this)
  }

  itemstats () {
    return new endpoints.ItemstatsEndpoint(this)
  }

  jadebots () {
    return new endpoints.JadebotsEndpoint(this)
  }

  legendaryarmory () {
    return new endpoints.LegendaryarmoryEndpoint(this)
  }

  legends () {
    return new endpoints.LegendsEndpoint(this)
  }

  mailcarriers () {
    return new endpoints.MailcarriersEndpoint(this)
  }

  mapchests () {
    return new endpoints.MapchestsEndpoint(this)
  }

  maps () {
    return new endpoints.MapsEndpoint(this)
  }

  masteries () {
    return new endpoints.MasteriesEndpoint(this)
  }

  materials () {
    return new endpoints.MaterialsEndpoint(this)
  }

  minis () {
    return new endpoints.MinisEndpoint(this)
  }

  mounts () {
    return new endpoints.MountsEndpoint(this)
  }

  nodes () {
    return new endpoints.NodesEndpoint(this)
  }

  novelties () {
    return new endpoints.NoveltiesEndpoint(this)
  }

  outfits () {
    return new endpoints.OutfitsEndpoint(this)
  }

  pets () {
    return new endpoints.PetsEndpoint(this)
  }

  professions () {
    return new endpoints.ProfessionsEndpoint(this)
  }

  pvp () {
    return new endpoints.PvpEndpoint(this)
  }

  quaggans () {
    return new endpoints.QuaggansEndpoint(this)
  }

  quests () {
    return new endpoints.QuestsEndpoint(this)
  }

  races () {
    return new endpoints.RacesEndpoint(this)
  }

  raids () {
    return new endpoints.RaidsEndpoint(this)
  }

  recipes () {
    return new endpoints.RecipesEndpoint(this)
  }

  skiffs () {
    return new endpoints.SkiffsEndpoint(this)
  }

  skills () {
    return new endpoints.SkillsEndpoint(this)
  }

  skins () {
    return new endpoints.SkinsEndpoint(this)
  }

  specializations () {
    return new endpoints.SpecializationsEndpoint(this)
  }

  stories () {
    return new endpoints.StoriesEndpoint(this)
  }

  titles () {
    return new endpoints.TitlesEndpoint(this)
  }

  tokeninfo () {
    return new endpoints.TokeninfoEndpoint(this)
  }

  traits () {
    return new endpoints.TraitsEndpoint(this)
  }

  wizardsvault () {
    return new endpoints.WizardsvaultEndpoint(this)
  }

  worldbosses () {
    return new endpoints.WorldbossesEndpoint(this)
  }

  worlds () {
    return new endpoints.WorldsEndpoint(this)
  }

  wvw () {
    return new endpoints.WvwEndpoint(this)
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoint.js":
/*!****************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoint.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const qs = __webpack_require__(/*! querystringify */ "./node_modules/querystringify/index.js")
const unique = __webpack_require__(/*! array-unique */ "./node_modules/array-unique/index.js")
const chunk = __webpack_require__(/*! chunk */ "./node_modules/chunk/src/chunk.js")
const hashString = __webpack_require__(/*! ./hash */ "./node_modules/gw2api-client/src/hash.js")

const clone = (x) => JSON.parse(JSON.stringify(x))

module.exports = class AbstractEndpoint {
  constructor (parent) {
    this.client = parent.client
    this.schemaVersion = parent.schemaVersion || '2019-03-20T00:00:00.000Z'
    this.lang = parent.lang
    this.apiKey = parent.apiKey
    this.fetch = parent.fetch
    this.caches = parent.caches
    this.debug = parent.debug

    this.baseUrl = 'https://api.guildwars2.com'
    this.isPaginated = false
    this.maxPageSize = 200
    this.isBulk = false
    this.bulkId = 'id'
    this.supportsBulkAll = true
    this.isLocalized = false
    this.isAuthenticated = false
    this.isOptionallyAuthenticated = false
    this.credentials = false

    this._skipCache = false
  }

  // Set the schema version
  schema (schema) {
    this.schemaVersion = schema
    this.debugMessage(`set the schema to ${schema}`)
    return this
  }

  // Check if the schema version includes a specific version
  _schemaIncludes (date) {
    return this.schemaVersion >= date
  }

  // Set the language for locale-aware endpoints
  language (lang) {
    this.lang = lang
    this.debugMessage(`set the language to ${lang}`)
    return this
  }

  // Set the api key for authenticated endpoints
  authenticate (apiKey) {
    this.apiKey = apiKey
    this.debugMessage(`set the api key to ${apiKey}`)
    return this
  }

  // Set the debugging flag
  debugging (flag) {
    this.debug = flag
    return this
  }

  // Print out a debug message if debugging is enabled
  debugMessage (string) {
    if (this.debug) {
      console.log(`[gw2api-client] ${string}`)
    }
  }

  // Skip caching and get the live data
  live () {
    this._skipCache = true
    this.debugMessage(`skipping cache`)
    return this
  }

  // Get all ids
  ids () {
    this.debugMessage(`ids(${this.url}) called`)

    if (!this.isBulk) {
      return Promise.reject(new Error('"ids" is only available for bulk expanding endpoints'))
    }

    // There is no cache time set, so always use the live data
    if (!this.cacheTime) {
      return this._ids()
    }

    // Get as much as possible out of the cache
    const hash = this._cacheHash('ids')
    const handleCacheContent = (cached) => {
      if (cached) {
        this.debugMessage(`ids(${this.url}) resolving from cache`)
        return cached
      }

      return this._ids().then(content => {
        this._cacheSetSingle(hash, content)
        return content
      })
    }

    // Get the content either from the cache or API, write it into the cache and return a clone
    const contentPromise = this._skipCache
      ? Promise.resolve(false).then(handleCacheContent)
      : this._cacheGetSingle(hash).then(handleCacheContent)

    return contentPromise.then(clone)
  }

  // Get all ids from the live API
  _ids () {
    this.debugMessage(`ids(${this.url}) requesting from api`)
    return this._request(this.url)
  }

  // Get a single entry by id
  get (id, url = false) {
    this.debugMessage(`get(${this.url}) called`)

    if (!id && this.isBulk && !url) {
      return Promise.reject(new Error('"get" requires an id'))
    }

    // There is no cache time set, so always use the live data
    if (!this.cacheTime) {
      return this._get(id, url)
    }

    // Get as much as possible out of the cache
    const hash = this._cacheHash(id)
    const handleCacheContent = (cached) => {
      if (cached) {
        this.debugMessage(`get(${this.url}) resolving from cache`)
        return cached
      }

      return this._get(id, url).then(content => {
        this._cacheSetSingle(hash, content)
        return content
      })
    }

    // Get the content either from the cache or API, write it into the cache and return a clone
    const contentPromise = this._skipCache
      ? Promise.resolve(false).then(handleCacheContent)
      : this._cacheGetSingle(hash).then(handleCacheContent)

    return contentPromise.then(clone)
  }

  // Get a single entry by id from the live API
  _get (id, url) {
    this.debugMessage(`get(${this.url}) requesting from api`)

    // Request the single id if the endpoint a bulk endpoint
    if (this.isBulk && !url) {
      return this._request(`${this.url}?id=${id}`)
    }

    // We are dealing with a custom url instead
    if (url) {
      return this._request(this.url + id)
    }

    // Just request the base url
    return this._request(this.url)
  }

  // Get multiple entries by ids
  many (ids) {
    this.debugMessage(`many(${this.url}) called (${ids.length} ids)`)

    if (!this.isBulk) {
      return Promise.reject(new Error('"many" is only available for bulk expanding endpoints'))
    }

    // Exit out early if we don't request any ids
    if (ids.length === 0) {
      return Promise.resolve([])
    }

    // Always only work on unique ids, since that's how the API works
    ids = unique.immutable(ids)

    // There is no cache time set, so always use the live data
    if (!this.cacheTime) {
      return this._many(ids)
    }

    // Get as much as possible out of the cache
    const hashes = ids.map(id => this._cacheHash(id))
    const handleCacheContent = (cached) => {
      cached = cached.filter(x => x)

      if (cached.length === ids.length) {
        this.debugMessage(`many(${this.url}) resolving fully from cache`)
        return cached
      }

      this.debugMessage(`many(${this.url}) resolving partially from cache (${cached.length} ids)`)
      const missingIds = getMissingIds(ids, cached)
      return this._many(missingIds, cached.length > 0).then(content => {
        const cacheContent = content.map(value => [this._cacheHash(value[this.bulkId]), value])
        this._cacheSetMany(cacheContent)

        // Merge the new content with the cached content and guarantee element order
        content = content.concat(cached)
        return this._sortByIdList(content, ids)
      })
    }

    // Find the ids that are missing in the cached data
    const getMissingIds = (ids, cached) => {
      const cachedIds = {}
      cached.map(x => {
        cachedIds[x[this.bulkId]] = 1
      })

      return ids.filter(x => cachedIds[x] !== 1)
    }

    // Get the content either from the cache or API, write it into the cache and return a clone
    const contentPromise = this._skipCache
      ? Promise.resolve([]).then(handleCacheContent)
      : this._cacheGetMany(hashes).then(handleCacheContent)

    return contentPromise.then(clone)
  }

  // Get multiple entries by ids from the live API
  _many (ids, partialRequest = false) {
    this.debugMessage(`many(${this.url}) requesting from api (${ids.length} ids)`)

    // Chunk the requests to the max page size
    const pages = chunk(ids, this.maxPageSize)
    const requests = pages.map(page => `${this.url}?ids=${page.join(',')}`)

    // If we are partially caching and all not-cached ids are all invalid,
    // simulate the API behaviour by silently swallowing errors.
    let handleMissingIds = (err) => {
      /* istanbul ignore else */
      if (partialRequest && err.response && err.response.status === 404) {
        return Promise.resolve([])
      }

      /* istanbul ignore next */
      return Promise.reject(err)
    }

    // Work on all requests in parallel and then flatten the responses into one
    return this._requestMany(requests)
      .then(responses => responses.reduce((x, y) => x.concat(y), []))
      .catch(handleMissingIds)
  }

  // Get a single page
  page (page, size = this.maxPageSize) {
    this.debugMessage(`page(${this.url}) called`)

    if (!this.isBulk && !this.isPaginated) {
      return Promise.reject(new Error('"page" is only available for bulk expanding or paginated endpoints'))
    }

    if (size > this.maxPageSize || size <= 0) {
      return Promise.reject(new Error(`"size" has to be between 0 and ${this.maxPageSize}, was ${size}`))
    }

    if (page < 0) {
      return Promise.reject(new Error('page has to be 0 or greater'))
    }

    // There is no cache time set, so always use the live data
    if (!this.cacheTime) {
      return this._page(page, size)
    }

    // Get as much as possible out of the cache
    const hash = this._cacheHash('page-' + page + '/' + size)
    const handleCacheContent = (cached) => {
      if (cached) {
        this.debugMessage(`page(${this.url}) resolving from cache`)
        return cached
      }

      return this._page(page, size).then(content => {
        let cacheContent = [[hash, content]]

        if (this.isBulk) {
          cacheContent = cacheContent.concat(content.map(value => [this._cacheHash(value[this.bulkId]), value]))
        }

        this._cacheSetMany(cacheContent)
        return content
      })
    }

    // Get the content either from the cache or API, write it into the cache and return a clone
    const contentPromise = this._skipCache
      ? Promise.resolve(false).then(handleCacheContent)
      : this._cacheGetSingle(hash).then(handleCacheContent)

    return contentPromise.then(clone)
  }

  // Get a single page from the live API
  _page (page, size) {
    this.debugMessage(`page(${this.url}) requesting from api`)
    return this._request(`${this.url}?page=${page}&page_size=${size}`)
  }

  // Get all entries
  all () {
    this.debugMessage(`all(${this.url}) called`)

    if (!this.isBulk && !this.isPaginated) {
      return Promise.reject(new Error('"all" is only available for bulk expanding or paginated endpoints'))
    }

    // There is no cache time set, so always use the live data
    if (!this.cacheTime) {
      return this._all()
    }

    // Get as much as possible out of the cache
    const hash = this._cacheHash('all')
    const handleCacheContent = (cached) => {
      if (cached) {
        this.debugMessage(`all(${this.url}) resolving from cache`)
        return cached
      }

      return this._all().then(content => {
        let cacheContent = [[hash, content]]

        if (this.isBulk) {
          cacheContent = cacheContent.concat(content.map(value => [this._cacheHash(value[this.bulkId]), value]))
        }

        this._cacheSetMany(cacheContent)
        return content
      })
    }

    // Get the content either from the cache or API, write it into the cache and return a clone
    const contentPromise = this._skipCache
      ? Promise.resolve(false).then(handleCacheContent)
      : this._cacheGetSingle(hash).then(handleCacheContent)

    return contentPromise.then(clone)
  }

  // Get all entries from the live API
  _all () {
    this.debugMessage(`all(${this.url}) requesting from api`)

    // Use bulk expansion if the endpoint supports the "all" keyword
    if (this.isBulk && this.supportsBulkAll) {
      return this._request(`${this.url}?ids=all`)
    }

    // Get everything via all pages instead
    let totalEntries
    return this._request(`${this.url}?page=0&page_size=${this.maxPageSize}`, 'response')
      .then(firstPage => {
        // Get the total number of entries off the first page's headers
        totalEntries = firstPage.headers.get('X-Result-Total')
        return firstPage.json()
      })
      .then(result => {
        // Return early if the first page already includes all entries
        if (totalEntries <= this.maxPageSize) {
          return result
        }

        // Request all missing pages in parallel
        let requests = []
        for (let page = 1; page < Math.ceil(totalEntries / this.maxPageSize); page++) {
          requests.push(`${this.url}?page=${page}&page_size=${this.maxPageSize}`)
        }

        return this._requestMany(requests).then(responses => {
          responses = responses.reduce((x, y) => x.concat(y), [])
          return result.concat(responses)
        })
      })
  }

  // Set a single cache key in all connected cache storages
  _cacheSetSingle (key, value) {
    this.caches.map(cache => {
      cache.set(key, value, this.cacheTime).catch(error => {
        console.warn('[gw2api-client] Errored during _cacheSetSingle', { error, cache, key, value })
      })
    })
  }

  // Set multiples cache key in all connected cache storages
  _cacheSetMany (values) {
    values = values.map(value => [value[0], value[1], this.cacheTime])
    this.caches.map(cache => {
      cache.mset(values).catch(error => {
        console.warn('[gw2api-client] Errored during _cacheSetMany', { error, cache, values })
      })
    })
  }

  // Get a cached value out of the first possible connected cache storages
  _cacheGetSingle (key, index = 0) {
    return this.caches[index].get(key).then(value => {
      if (value || index === this.caches.length - 1) {
        return value
      }

      return this._cacheGetSingle(key, ++index)
    })
  }

  // Get multiple cached values out of the first possible connected cache storages
  _cacheGetMany (keys, index = 0) {
    return this.caches[index].mget(keys).then(values => {
      const cleanValues = values.filter(x => x)

      // We got all the requested keys or are through all storages
      if (cleanValues.length === keys.length || index === this.caches.length - 1) {
        return values
      }

      // Try to ask the next storage for the keys that we didn't get
      let missingKeys = values
        .map((value, i) => value ? false : keys[i])
        .filter(value => value)

      // Then merge the values of the next storage into the missing slots
      return this._cacheGetMany(missingKeys, ++index).then(missingValues => {
        let i = 0
        return values.map(value => value || missingValues[i++])
      })
    })
  }

  // Get a cache hash for an identifier
  _cacheHash (id) {
    let hash = hashString(this.baseUrl + this.url + ':' + this.schemaVersion)

    if (id) {
      hash += ':' + id
    }

    if (this.isLocalized) {
      hash += ':' + this.lang
    }

    if (this._usesApiKey()) {
      hash += ':' + hashString(this.apiKey + '')
    }

    return hash
  }

  // Execute a single request
  _request (url, type = 'json') {
    url = this._buildUrl(url)

    /* istanbul ignore next */
    const credentials = this.credentials ? 'include' : undefined

    return this.fetch.single(url, { type, credentials })
  }

  // Execute multiple requests in parallel
  _requestMany (urls, type = 'json') {
    urls = urls.map(url => this._buildUrl(url))

    /* istanbul ignore next */
    const credentials = this.credentials ? 'include' : undefined

    return this.fetch.many(urls, { type, credentials })
  }

  // Build the headers for localization and authentication
  _buildUrl (url) {
    // Add the base url
    url = this.baseUrl + url

    // Parse a possibly existing query
    const parsedUrl = url.split('?')
    let parsedQuery = qs.parse(parsedUrl[1] || '')

    let query = {}

    // Set the schema version
    query['v'] = this.schemaVersion

    // Only set the API key for authenticated endpoints,
    // when it is required or optional and set on the client
    if (this._usesApiKey()) {
      query['access_token'] = this.apiKey
    }

    // Set the language for localized endpoints
    if (this.isLocalized) {
      query['lang'] = this.lang
    }

    // Merge the parsed query parts out of the url
    query = Object.assign(query, parsedQuery)

    // Build the url with the finished query
    query = qs.stringify(query, true).replace(/%2C/g, ',')
    return parsedUrl[0] + query
  }

  // Guarantee the element order of bulk results
  _sortByIdList (entries, ids) {
    // Hash map of the indexes for better time complexity on big arrays
    let indexMap = {}
    ids.map((x, i) => {
      indexMap[x] = i
    })

    // Sort by the indexes
    entries.sort((a, b) => indexMap[a[this.bulkId]] - indexMap[b[this.bulkId]])
    return entries
  }

  _usesApiKey () {
    return this.isAuthenticated && (!this.isOptionallyAuthenticated || this.apiKey)
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/account-blob.js":
/*!******************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/account-blob.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const _get = __webpack_require__(/*! fast-get */ "./node_modules/fast-get/src/index.js")
const flow = __webpack_require__(/*! ../flow.js */ "./node_modules/gw2api-client/src/flow.js")

function blob (parent) {
  const client = parent.client

  const requests = {
    account: wrap(() => client.account().get()),
    achievements: wrap(() => client.account().achievements().get()),
    bank: wrap(() => client.account().bank().get()),
    characters: wrap(() => client.characters().all()),
    'commerce.buys': wrap(() => client.commerce().transactions().current().buys().all()),
    'commerce.delivery': wrap(() => client.commerce().delivery().get()),
    'commerce.sells': wrap(() => client.commerce().transactions().current().sells().all()),
    dungeons: wrap(() => client.account().dungeons().get()),
    dyes: wrap(() => client.account().dyes().get()),
    emotes: wrap(() => client.account().emotes().get()),
    finishers: wrap(() => client.account().finishers().get()),
    gliders: wrap(() => client.account().gliders().get()),
    guilds: wrap(() => accountGuilds(client)),
    'home.cats': wrap(() => client.account().home().cats().get()),
    'home.nodes': wrap(() => client.account().home().nodes().get()),
    'homestead.decorations': wrap(() => client.account().homestead().decorations().get()),
    'homestead.glyphs': wrap(() => client.account().homestead().glyphs().get()),
    jadebots: wrap(() => client.account().jadebots().get()),
    legendaryarmory: wrap(() => client.account().legendaryarmory().get()),
    luck: wrap(() => client.account().luck().get()),
    mailcarriers: wrap(() => client.account().mailcarriers().get()),
    masteries: wrap(() => client.account().masteries().get()),
    'mastery.points': wrap(() => client.account().mastery().points().get()),
    materials: wrap(() => client.account().materials().get()),
    minis: wrap(() => client.account().minis().get()),
    'mounts.skins': wrap(() => client.account().mounts().skins().get()),
    'mounts.types': wrap(() => client.account().mounts().types().get()),
    novelties: wrap(() => client.account().novelties().get()),
    outfits: wrap(() => client.account().outfits().get()),
    'pvp.games': wrap(() => client.account().pvp().games().all()),
    'pvp.heroes': wrap(() => client.account().pvp().heroes().get()),
    'pvp.standings': wrap(() => client.account().pvp().standings().get()),
    'pvp.stats': wrap(() => client.account().pvp().stats().get()),
    raids: wrap(() => client.account().raids().get()),
    recipes: wrap(() => client.account().recipes().get()),
    shared: wrap(() => client.account().inventory().get()),
    skiffs: wrap(() => client.account().skiffs().get()),
    skins: wrap(() => client.account().skins().get()),
    titles: wrap(() => client.account().titles().get()),
    wallet: wrap(() => client.account().wallet().get())
  }

  return flow.parallel(requests).then(data => {
    data = unflatten(data)
    data.characters = filterBetaCharacters(data.characters)
    return data
  })
}

// Get the guild data accessible for the account
function accountGuilds (client) {
  return client.account().get().then(account => {
    if (!account.guild_leader) {
      return []
    }

    let requests = account.guild_leader.map(id => wrap(() => guildData(id)))
    return flow.parallel(requests)
  })

  function guildData (id) {
    let requests = {
      data: wrap(() => client.guild().get(id)),
      members: wrap(() => client.guild(id).members().get()),
      ranks: wrap(() => client.guild(id).ranks().get()),
      stash: wrap(() => client.guild(id).stash().get()),
      teams: wrap(() => Promise.resolve(null)),
      treasury: wrap(() => client.guild(id).treasury().get()),
      upgrades: wrap(() => client.guild(id).upgrades().get())
    }

    return flow.parallel(requests)
  }
}

// Filter out beta characters from the total account blob, since they are
// technically not part of the actual live account and live on a different server
function filterBetaCharacters (characters) {
  /* istanbul ignore next */
  if (!characters) {
    return null
  }

  return characters.filter(x => !x.flags || !x.flags.includes('Beta'))
}

// Wrap a promise function so all errors that have to do with the API
// just result in an empty response instead of throwing an error
// This prevents API errors / changes breaking the entire infrastructure
function wrap (func) {
  return () => new Promise((resolve, reject) => {
    func()
      .then(x => resolve(x))
      .catch(err => {
        let status = _get(err, 'response.status')
        let text = _get(err, 'content.text')

        if (
          status ||
          text ||
          ['network', 'fetch'].some(x => err.message.toLowerCase().includes(x))
        ) {
          console.warn(`API error: ${text} (${status})`)
          return resolve(null)
        }

        reject(err)
      })
  })
}

// Unflatten an object with keys describing a nested structure
function unflatten (object) {
  let result = {}

  for (let key in object) {
    _set(result, key, object[key])
  }

  return result
}

// Set the value of an object based on a flat key ("a.b.c")
function _set (object, key, value) {
  const keyParts = key.split('.')

  let walking = object
  keyParts.forEach((key, index) => {
    // Create the nested object if it does not exist
    if (!walking[key]) {
      walking[key] = {}
    }

    // If we reached the last part, set the value and exit out
    if (index === keyParts.length - 1) {
      walking[key] = value
      return
    }

    // Set the next part of the key
    walking = walking[key]
  })
}

module.exports = blob
module.exports.wrap = wrap


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/account.js":
/*!*************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/account.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")
const CharactersEndpoint = __webpack_require__(/*! ./characters */ "./node_modules/gw2api-client/src/endpoints/characters.js")
const PvpEndpoint = __webpack_require__(/*! ./pvp */ "./node_modules/gw2api-client/src/endpoints/pvp.js")
const CommerceEndpoint = __webpack_require__(/*! ./commerce */ "./node_modules/gw2api-client/src/endpoints/commerce.js")
const WizardsvaultEndpoint = __webpack_require__(/*! ./wizardsvault */ "./node_modules/gw2api-client/src/endpoints/wizardsvault.js")
const accountBlob = __webpack_require__(/*! ./account-blob.js */ "./node_modules/gw2api-client/src/endpoints/account-blob.js")
const resetTime = __webpack_require__(/*! ../helpers/resetTime */ "./node_modules/gw2api-client/src/helpers/resetTime.js")

class AccountEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  achievements () {
    return new AchievementsEndpoint(this)
  }

  bank () {
    return new BankEndpoint(this)
  }

  characters (name) {
    return new CharactersEndpoint(this, name)
  }

  dailycrafting () {
    return new DailycraftingEndpoint(this)
  }

  delivery () {
    return new CommerceEndpoint(this).delivery()
  }

  dungeons () {
    return new DungeonsEndpoint(this)
  }

  dyes () {
    return new DyesEndpoint(this)
  }

  emotes () {
    return new EmotesEndpoint(this)
  }

  finishers () {
    return new FinishersEndpoint(this)
  }

  gliders () {
    return new GlidersEndpoint(this)
  }

  home () {
    return {
      cats: () => new HomeCatsEndpoint(this),
      nodes: () => new HomeNodesEndpoint(this)
    }
  }

  homestead () {
    return {
      decorations: () => new HomesteadDecorationsEndpoint(this),
      glyphs: () => new HomesteadGlyphsEndpoint(this)
    }
  }

  inventory () {
    return new InventoryEndpoint(this)
  }

  jadebots () {
    return new JadebotsEndpoint(this)
  }

  legendaryarmory () {
    return new LegendaryarmoryEndpoint(this)
  }

  luck () {
    return new LuckEndpoint(this)
  }

  mailcarriers () {
    return new MailcarriersEndpoint(this)
  }

  masteries () {
    return new MasteriesEndpoint(this)
  }

  mapchests () {
    return new MapchestsEndpoint(this)
  }

  mastery () {
    return {
      points: () => new MasteryPointsEndpoint(this)
    }
  }

  materials () {
    return new MaterialsEndpoint(this)
  }

  minis () {
    return new MinisEndpoint(this)
  }

  mounts () {
    return {
      skins: () => new MountSkinsEndpoint(this),
      types: () => new MountTypesEndpoint(this)
    }
  }

  novelties () {
    return new NoveltiesEndpoint(this)
  }

  outfits () {
    return new OutfitsEndpoint(this)
  }

  pvp () {
    return new PvpEndpoint(this, true)
  }

  raids () {
    return new RaidsEndpoint(this)
  }

  recipes () {
    return new RecipesEndpoint(this)
  }

  skiffs () {
    return new SkiffsEndpoint(this)
  }

  skins () {
    return new SkinsEndpoint(this)
  }

  titles () {
    return new TitlesEndpoint(this)
  }

  transactions () {
    return new CommerceEndpoint(this).transactions()
  }

  wallet () {
    return new WalletEndpoint(this)
  }

  wizardsvault () {
    return {
      listings: () => new WizardsvaultListingsEndpoint(this),
      daily: () => new WizardsvaultDailyEndpoint(this),
      weekly: () => new WizardsvaultWeeklyEndpoint(this),
      special: () => new WizardsvaultSpecialEndpoint(this)
    }
  }

  worldbosses () {
    return new WorldbossesEndpoint(this)
  }

  // All data available for the account in a single object
  blob () {
    return accountBlob(this)
  }
}

class AchievementsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/achievements'
    this.isAuthenticated = true
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 5 * 60
  }

  ids () {
    return Promise.reject(new Error('method not supported for this endpoint'))
  }

  get (id) {
    if (id) {
      return super.get(id)
    }

    // This endpoint returns all entries if the url gets requested
    // without any parameters, analogue to the other account endpoints
    return this.all()
  }

  all () {
    return super.get('', true)
  }
}

class BankEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/bank'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class DailycraftingEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/dailycrafting'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  async get () {
    return await isStaleDailyData(this) ? [] : super.get()
  }
}

class DungeonsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/dungeons'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  async get () {
    return await isStaleDailyData(this) ? [] : super.get()
  }
}

class DyesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/dyes'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class EmotesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/emotes'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class FinishersEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/finishers'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class GlidersEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/gliders'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class HomeCatsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/home/cats'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class HomeNodesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/home/nodes'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class HomesteadDecorationsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/homestead/decorations'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class HomesteadGlyphsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/homestead/glyphs'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class InventoryEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/inventory'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class JadebotsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/jadebots'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class LegendaryarmoryEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/legendaryarmory'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class LuckEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/luck'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  async get () {
    const response = await super.get()
    // [API PATCH #0] If the account does not have any luck, the API erroneously returns `[]`
    if (response.length === 0) return 0
    return response[0].value
  }
}

class MailcarriersEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/mailcarriers'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class MapchestsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/mapchests'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  async get () {
    return await isStaleDailyData(this) ? [] : super.get()
  }
}

class MasteriesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/masteries'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class MasteryPointsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/mastery/points'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class MaterialsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/materials'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class MinisEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/minis'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class MountSkinsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/mounts/skins'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class MountTypesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/mounts/types'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class NoveltiesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/novelties'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class OutfitsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/outfits'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class RaidsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/raids'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  async get () {
    return await isStaleWeeklyData(this) ? [] : super.get()
  }
}

class RecipesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/recipes'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class SkiffsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/skiffs'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class SkinsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/skins'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class TitlesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/titles'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class WalletEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/wallet'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class WorldbossesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/worldbosses'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  async get () {
    return await isStaleDailyData(this) ? [] : super.get()
  }
}

class WizardsvaultListingsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/wizardsvault/listings'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class WizardsvaultDailyEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/wizardsvault/daily'
    this.isAuthenticated = true
    this.isLocalized = true
    this.cacheTime = 5 * 60
  }

  async get () {
    const [response, isStale] = await Promise.all([
      super.get(),
      isStaleDailyData(this)
    ])

    if (isStale) {
      response.meta_progress_current = 0
      response.meta_reward_claimed = false
      response.objectives = []
    }

    return response
  }
}

class WizardsvaultWeeklyEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/wizardsvault/weekly'
    this.isAuthenticated = true
    this.isLocalized = true
    this.cacheTime = 5 * 60
  }

  async get () {
    const [response, isStale] = await Promise.all([
      super.get(),
      isStaleWeeklyData(this)
    ])

    if (isStale) {
      response.meta_progress_current = 0
      response.meta_reward_claimed = false
      response.objectives = []
    }

    return response
  }
}

class WizardsvaultSpecialEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/wizardsvault/special'
    this.isAuthenticated = true
    this.isLocalized = true
    this.cacheTime = 5 * 60
  }

  async get () {
    const season = await new WizardsvaultEndpoint(this).get()

    const [response, isStale] = await Promise.all([
      super.get(),
      isStaleData(this, new Date(season.start))
    ])

    if (isStale) {
      response.objectives = []
    }

    return response
  }
}

// Stale data can happen if the last account update was before the last daily reset
async function isStaleDailyData (endpointInstance) {
  return isStaleData(endpointInstance, resetTime.getLastDailyReset())
}

// Stale data can happen if the last account update was before the last weekly reset
async function isStaleWeeklyData (endpointInstance) {
  return isStaleData(endpointInstance, resetTime.getLastWeeklyReset())
}

async function isStaleData (endpointInstance, resetDate) {
  const account = await new AccountEndpoint(endpointInstance).schema('2019-03-26').get()
  return new Date(account.last_modified) < resetDate
}

module.exports = AccountEndpoint


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/achievements.js":
/*!******************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/achievements.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class AchievementsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/achievements'
    this.isPaginated = true
    this.isBulk = true
    this.supportsBulkAll = false
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }

  categories () {
    return new CategoriesEndpoint(this)
  }

  groups () {
    return new GroupsEndpoint(this)
  }

  daily () {
    return new DailyEndpoint(this)
  }

  dailyTomorrow () {
    return new DailyTomorrowEndpoint(this)
  }
}

class CategoriesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/achievements/categories'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class GroupsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/achievements/groups'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class DailyEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/achievements/daily'
    this.cacheTime = 60 * 60
  }
}

class DailyTomorrowEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/achievements/daily/tomorrow'
    this.cacheTime = 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/backstory.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/backstory.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class BackstoryEndpoint extends AbstractEndpoint {
  answers () {
    return new AnswersEndpoint(this)
  }

  questions () {
    return new QuestionsEndpoint(this)
  }
}

class AnswersEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/backstory/answers'
    this.isPaginated = true
    this.isBulk = true
    this.supportsBulkAll = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class QuestionsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/backstory/questions'
    this.isPaginated = true
    this.isBulk = true
    this.supportsBulkAll = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/build.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/build.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class BuildEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/build'
    this.cacheTime = 60
  }

  get () {
    return super.get().then(result => result.id)
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/cats.js":
/*!**********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/cats.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class CatsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/cats'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/characters.js":
/*!****************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/characters.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class CharactersEndpoint extends AbstractEndpoint {
  constructor (client, name) {
    super(client)
    this.name = name
    this.url = '/v2/characters'
    this.isPaginated = true
    this.isBulk = true
    this.bulkId = 'name'
    this.supportsBulkAll = false
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  backstory () {
    return new BackstoryEndpoint(this, this.name)
  }

  core () {
    return new CoreEndpoint(this, this.name)
  }

  crafting () {
    return new CraftingEndpoint(this, this.name)
  }

  equipment () {
    return new EquipmentEndpoint(this, this.name)
  }

  heropoints () {
    return new HeropointsEndpoint(this, this.name)
  }

  inventory () {
    return new InventoryEndpoint(this, this.name)
  }

  quests () {
    return new QuestsEndpoint(this, this.name)
  }

  recipes () {
    return new RecipesEndpoint(this, this.name)
  }

  sab () {
    return new SabEndpoint(this, this.name)
  }

  skills () {
    return new SkillsEndpoint(this, this.name)
  }

  specializations () {
    return new SpecializationsEndpoint(this, this.name)
  }

  training () {
    return new TrainingEndpoint(this, this.name)
  }
}

class BackstoryEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/backstory`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  get () {
    return super.get().then(result => result.backstory)
  }
}

class CoreEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/core`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class CraftingEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/crafting`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  get () {
    return super.get().then(result => result.crafting)
  }
}

class EquipmentEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/equipment`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  get () {
    return super.get().then(result => result.equipment)
  }
}

class HeropointsEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/heropoints`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class InventoryEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/inventory`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  get () {
    return super.get().then(result => result.bags)
  }
}

class QuestsEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/quests`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class RecipesEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/recipes`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  get () {
    return super.get().then(result => result.recipes)
  }
}

class SabEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/sab`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class SkillsEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/skills`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  get () {
    return super.get().then(result => result.skills)
  }
}

class SpecializationsEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/specializations`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  get () {
    return super.get().then(result => result.specializations)
  }
}

class TrainingEndpoint extends AbstractEndpoint {
  constructor (client, character) {
    super(client)
    this.url = `/v2/characters/${encodeURIComponent(character)}/training`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  get () {
    return super.get().then(result => result.training)
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/colors.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/colors.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class ColorsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/colors'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/commerce.js":
/*!**************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/commerce.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class CommerceEndpoint extends AbstractEndpoint {
  // Current things to grab in the delivery box
  delivery () {
    return new DeliveryEndpoint(this)
  }

  // Current gem/coin exchange rates
  exchange () {
    return new ExchangeEndpoint(this)
  }

  // Current tradingpost listings
  listings () {
    return new ListingsEndpoint(this)
  }

  // Current tradingpost prices
  prices () {
    return new PricesEndpoint(this)
  }

  // Current and completed transactions
  transactions () {
    return {
      current: () => ({
        buys: () => new TransactionsEndpoint(this, 'current', 'buys'),
        sells: () => new TransactionsEndpoint(this, 'current', 'sells')
      }),
      history: () => ({
        buys: () => new TransactionsEndpoint(this, 'history', 'buys'),
        sells: () => new TransactionsEndpoint(this, 'history', 'sells')
      })
    }
  }
}

class DeliveryEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = `/v2/commerce/delivery`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class ExchangeEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/commerce/exchange'
    this.cacheTime = 10 * 60
  }

  gems (quantity) {
    return super.get(`/gems?quantity=${quantity}`, true)
  }

  coins (quantity) {
    return super.get(`/coins?quantity=${quantity}`, true)
  }
}

class ListingsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/commerce/listings'
    this.isPaginated = true
    this.isBulk = true
    this.supportsBulkAll = false
    this.cacheTime = 2 * 60
  }
}

class PricesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/commerce/prices'
    this.isPaginated = true
    this.isBulk = true
    this.supportsBulkAll = false
    this.cacheTime = 60
  }
}

class TransactionsEndpoint extends AbstractEndpoint {
  constructor (client, type, list) {
    super(client)
    this.url = `/v2/commerce/transactions/${type}/${list}`
    this.isPaginated = true
    this.isAuthenticated = true
    this.cacheTime = 10 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/continents.js":
/*!****************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/continents.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class ContinentsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/continents'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }

  floors (id) {
    return new FloorsEndpoint(this, id)
  }
}

class FloorsEndpoint extends AbstractEndpoint {
  constructor (client, continentId) {
    super(client)
    this.url = `/v2/continents/${continentId}/floors`
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/currencies.js":
/*!****************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/currencies.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class CurrenciesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/currencies'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/dailycrafting.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/dailycrafting.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class DailycraftingEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/dailycrafting'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/dungeons.js":
/*!**************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/dungeons.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class DungeonsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/dungeons'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/emblem.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/emblem.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class EmblemEndpoint extends AbstractEndpoint {
  backgrounds () {
    return new LayersEndpoint(this, 'backgrounds')
  }

  foregrounds () {
    return new LayersEndpoint(this, 'foregrounds')
  }
}

class LayersEndpoint extends AbstractEndpoint {
  constructor (client, layer) {
    super(client)
    this.url = `/v2/emblem/${layer}`
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/emotes.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/emotes.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class EmotesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/emotes'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/events.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/events.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class EventsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v1/event_details.json'
    this.cacheTime = 24 * 60 * 60
  }

  all () {
    return super.get().then(transformV1Format)
  }

  get (id) {
    return super.get(`?event_id=${id}`, true).then(json => transformV1Format(json)[0])
  }
}

function transformV1Format (json) {
  let events = json.events
  let transformed = []
  const keys = Object.keys(events)

  for (let i = 0; i !== keys.length; i++) {
    transformed.push(Object.assign({ id: keys[i] }, events[keys[i]]))
  }

  return transformed
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/files.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/files.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class FilesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/files'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/finishers.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/finishers.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class FinishersEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/finishers'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/gliders.js":
/*!*************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/gliders.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class GlidersEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/gliders'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/guild.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/guild.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class GuildEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.id = id
    this.url = '/v2/guild'
    this.isAuthenticated = true
    this.isOptionallyAuthenticated = true
    this.cacheTime = 60 * 60
  }

  get (id) {
    return super.get(`/${id}`, true)
  }

  permissions () {
    return new PermissionsEndpoint(this)
  }

  search (name) {
    return new SearchEndpoint(this, name)
  }

  upgrades () {
    if (this.id === undefined) {
      return new AllUpgradesEndpoint(this)
    }

    return new UpgradesEndpoint(this, this.id)
  }

  log () {
    return new LogEndpoint(this, this.id)
  }

  members () {
    return new MembersEndpoint(this, this.id)
  }

  ranks () {
    return new RanksEndpoint(this, this.id)
  }

  stash () {
    return new StashEndpoint(this, this.id)
  }

  storage () {
    return new StorageEndpoint(this, this.id)
  }

  teams () {
    return new TeamsEndpoint(this, this.id)
  }

  treasury () {
    return new TreasuryEndpoint(this, this.id)
  }
}

class PermissionsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/guild/permissions'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class SearchEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/guild/search'
    this.cacheTime = 60 * 60
  }

  name (name) {
    return super.get(`?name=${encodeURIComponent(name)}`, true)
      .then(result => result[0])
  }
}

class AllUpgradesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/guild/upgrades'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class LogEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/log`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }

  since (logId) {
    return super.get(`?since=${logId}`, true)
  }
}

class MembersEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/members`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class RanksEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/ranks`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class StashEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/stash`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class StorageEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/storage`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class TeamsEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/teams`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class TreasuryEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/treasury`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class UpgradesEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.url = `/v2/guild/${encodeURIComponent(id)}/upgrades`
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/home.js":
/*!**********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/home.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class HomeEndpoint extends AbstractEndpoint {
  cats () {
    return new CatsEndpoint(this)
  }

  nodes () {
    return new NodesEndpoint(this)
  }
}

class CatsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/home/cats'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}

class NodesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/home/nodes'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/homestead.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/homestead.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class HomesteadEndpoint extends AbstractEndpoint {
  decorations () {
    return new DecorationsEndpoint(this)
  }

  glyphs () {
    return new GlyphsEndpoint(this)
  }
}

class DecorationsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/homestead/decorations'
    this.isPaginated = true
    this.isLocalized = true
    this.isBulk = true
    this.supportsBulkAll = false
    this.cacheTime = 24 * 60 * 60
  }

  categories () {
    return new DecorationsCategoriesEndpoint(this)
  }
}

class GlyphsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/homestead/glyphs'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}

class DecorationsCategoriesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/homestead/decorations/categories'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  AccountEndpoint: __webpack_require__(/*! ./account */ "./node_modules/gw2api-client/src/endpoints/account.js"),
  AchievementsEndpoint: __webpack_require__(/*! ./achievements */ "./node_modules/gw2api-client/src/endpoints/achievements.js"),
  BackstoryEndpoint: __webpack_require__(/*! ./backstory */ "./node_modules/gw2api-client/src/endpoints/backstory.js"),
  BuildEndpoint: __webpack_require__(/*! ./build */ "./node_modules/gw2api-client/src/endpoints/build.js"),
  CatsEndpoint: __webpack_require__(/*! ./cats */ "./node_modules/gw2api-client/src/endpoints/cats.js"),
  CharactersEndpoint: __webpack_require__(/*! ./characters */ "./node_modules/gw2api-client/src/endpoints/characters.js"),
  ColorsEndpoint: __webpack_require__(/*! ./colors */ "./node_modules/gw2api-client/src/endpoints/colors.js"),
  CommerceEndpoint: __webpack_require__(/*! ./commerce */ "./node_modules/gw2api-client/src/endpoints/commerce.js"),
  ContinentsEndpoint: __webpack_require__(/*! ./continents */ "./node_modules/gw2api-client/src/endpoints/continents.js"),
  CurrenciesEndpoint: __webpack_require__(/*! ./currencies */ "./node_modules/gw2api-client/src/endpoints/currencies.js"),
  DailycraftingEndpoint: __webpack_require__(/*! ./dailycrafting */ "./node_modules/gw2api-client/src/endpoints/dailycrafting.js"),
  DungeonsEndpoint: __webpack_require__(/*! ./dungeons */ "./node_modules/gw2api-client/src/endpoints/dungeons.js"),
  EmblemEndpoint: __webpack_require__(/*! ./emblem */ "./node_modules/gw2api-client/src/endpoints/emblem.js"),
  EmotesEndpoint: __webpack_require__(/*! ./emotes */ "./node_modules/gw2api-client/src/endpoints/emotes.js"),
  EventsEndpoint: __webpack_require__(/*! ./events */ "./node_modules/gw2api-client/src/endpoints/events.js"),
  FilesEndpoint: __webpack_require__(/*! ./files */ "./node_modules/gw2api-client/src/endpoints/files.js"),
  FinishersEndpoint: __webpack_require__(/*! ./finishers */ "./node_modules/gw2api-client/src/endpoints/finishers.js"),
  GlidersEndpoint: __webpack_require__(/*! ./gliders */ "./node_modules/gw2api-client/src/endpoints/gliders.js"),
  GuildEndpoint: __webpack_require__(/*! ./guild */ "./node_modules/gw2api-client/src/endpoints/guild.js"),
  HomeEndpoint: __webpack_require__(/*! ./home */ "./node_modules/gw2api-client/src/endpoints/home.js"),
  HomesteadEndpoint: __webpack_require__(/*! ./homestead */ "./node_modules/gw2api-client/src/endpoints/homestead.js"),
  ItemsEndpoint: __webpack_require__(/*! ./items */ "./node_modules/gw2api-client/src/endpoints/items.js"),
  ItemstatsEndpoint: __webpack_require__(/*! ./itemstats */ "./node_modules/gw2api-client/src/endpoints/itemstats.js"),
  JadebotsEndpoint: __webpack_require__(/*! ./jadebots */ "./node_modules/gw2api-client/src/endpoints/jadebots.js"),
  LegendaryarmoryEndpoint: __webpack_require__(/*! ./legendaryarmory */ "./node_modules/gw2api-client/src/endpoints/legendaryarmory.js"),
  LegendsEndpoint: __webpack_require__(/*! ./legends */ "./node_modules/gw2api-client/src/endpoints/legends.js"),
  MailcarriersEndpoint: __webpack_require__(/*! ./mailcarriers */ "./node_modules/gw2api-client/src/endpoints/mailcarriers.js"),
  MapchestsEndpoint: __webpack_require__(/*! ./mapchests */ "./node_modules/gw2api-client/src/endpoints/mapchests.js"),
  MapsEndpoint: __webpack_require__(/*! ./maps */ "./node_modules/gw2api-client/src/endpoints/maps.js"),
  MasteriesEndpoint: __webpack_require__(/*! ./masteries */ "./node_modules/gw2api-client/src/endpoints/masteries.js"),
  MaterialsEndpoint: __webpack_require__(/*! ./materials */ "./node_modules/gw2api-client/src/endpoints/materials.js"),
  MinisEndpoint: __webpack_require__(/*! ./minis */ "./node_modules/gw2api-client/src/endpoints/minis.js"),
  MountsEndpoint: __webpack_require__(/*! ./mounts */ "./node_modules/gw2api-client/src/endpoints/mounts.js"),
  NodesEndpoint: __webpack_require__(/*! ./nodes */ "./node_modules/gw2api-client/src/endpoints/nodes.js"),
  NoveltiesEndpoint: __webpack_require__(/*! ./novelties */ "./node_modules/gw2api-client/src/endpoints/novelties.js"),
  OutfitsEndpoint: __webpack_require__(/*! ./outfits */ "./node_modules/gw2api-client/src/endpoints/outfits.js"),
  PetsEndpoint: __webpack_require__(/*! ./pets */ "./node_modules/gw2api-client/src/endpoints/pets.js"),
  ProfessionsEndpoint: __webpack_require__(/*! ./professions */ "./node_modules/gw2api-client/src/endpoints/professions.js"),
  PvpEndpoint: __webpack_require__(/*! ./pvp */ "./node_modules/gw2api-client/src/endpoints/pvp.js"),
  QuaggansEndpoint: __webpack_require__(/*! ./quaggans */ "./node_modules/gw2api-client/src/endpoints/quaggans.js"),
  QuestsEndpoint: __webpack_require__(/*! ./quests */ "./node_modules/gw2api-client/src/endpoints/quests.js"),
  RacesEndpoint: __webpack_require__(/*! ./races */ "./node_modules/gw2api-client/src/endpoints/races.js"),
  RaidsEndpoint: __webpack_require__(/*! ./raids */ "./node_modules/gw2api-client/src/endpoints/raids.js"),
  RecipesEndpoint: __webpack_require__(/*! ./recipes */ "./node_modules/gw2api-client/src/endpoints/recipes.js"),
  SkiffsEndpoint: __webpack_require__(/*! ./skiffs */ "./node_modules/gw2api-client/src/endpoints/skiffs.js"),
  SkillsEndpoint: __webpack_require__(/*! ./skills */ "./node_modules/gw2api-client/src/endpoints/skills.js"),
  SkinsEndpoint: __webpack_require__(/*! ./skins */ "./node_modules/gw2api-client/src/endpoints/skins.js"),
  SpecializationsEndpoint: __webpack_require__(/*! ./specializations */ "./node_modules/gw2api-client/src/endpoints/specializations.js"),
  StoriesEndpoint: __webpack_require__(/*! ./stories */ "./node_modules/gw2api-client/src/endpoints/stories.js"),
  TitlesEndpoint: __webpack_require__(/*! ./titles */ "./node_modules/gw2api-client/src/endpoints/titles.js"),
  TokeninfoEndpoint: __webpack_require__(/*! ./tokeninfo */ "./node_modules/gw2api-client/src/endpoints/tokeninfo.js"),
  TraitsEndpoint: __webpack_require__(/*! ./traits */ "./node_modules/gw2api-client/src/endpoints/traits.js"),
  WizardsvaultEndpoint: __webpack_require__(/*! ./wizardsvault */ "./node_modules/gw2api-client/src/endpoints/wizardsvault.js"),
  WorldbossesEndpoint: __webpack_require__(/*! ./worldbosses */ "./node_modules/gw2api-client/src/endpoints/worldbosses.js"),
  WorldsEndpoint: __webpack_require__(/*! ./worlds */ "./node_modules/gw2api-client/src/endpoints/worlds.js"),
  WvwEndpoint: __webpack_require__(/*! ./wvw */ "./node_modules/gw2api-client/src/endpoints/wvw.js")
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/items.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/items.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class ItemsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/items'
    this.isPaginated = true
    this.isBulk = true
    this.supportsBulkAll = false
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/itemstats.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/itemstats.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class ItemstatsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/itemstats'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/jadebots.js":
/*!**************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/jadebots.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class JadebotsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/jadebots'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/legendaryarmory.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/legendaryarmory.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class LegendaryarmoryEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/legendaryarmory'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/legends.js":
/*!*************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/legends.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class LegendsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/legends'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/mailcarriers.js":
/*!******************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/mailcarriers.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class MailcarriersEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/mailcarriers'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/mapchests.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/mapchests.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class MapchestsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/mapchests'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/maps.js":
/*!**********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/maps.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class MapsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/maps'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/masteries.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/masteries.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class MasteriesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/masteries'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/materials.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/materials.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class MaterialsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/materials'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/minis.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/minis.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class MinisEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/minis'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/mounts.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/mounts.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class MountsEndpoint extends AbstractEndpoint {
  skins () {
    return new SkinsEndpoint(this)
  }

  types () {
    return new TypesEndpoint(this)
  }
}

class SkinsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/mounts/skins'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class TypesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/mounts/types'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/nodes.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/nodes.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class NodesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/nodes'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/novelties.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/novelties.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class NoveltiesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/novelties'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/outfits.js":
/*!*************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/outfits.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class OutfitsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/outfits'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/pets.js":
/*!**********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/pets.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class PetsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pets'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/professions.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/professions.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class ProfessionsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/professions'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/pvp.js":
/*!*********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/pvp.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class PvpEndpoint extends AbstractEndpoint {
  constructor (client, fromAccount) {
    super(client)
    this.fromAccount = fromAccount
  }

  amulets () {
    return new AmuletsEndpoint(this)
  }

  games () {
    return new GamesEndpoint(this)
  }

  heroes () {
    if (this.fromAccount) {
      return new AccountHeroesEndpoint(this)
    }

    return new HeroesEndpoint(this)
  }

  ranks () {
    return new RanksEndpoint(this)
  }

  seasons (id) {
    return new SeasonsEndpoint(this, id)
  }

  standings () {
    return new StandingsEndpoint(this)
  }

  stats () {
    return new StatsEndpoint(this)
  }
}

class AccountHeroesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/account/pvp/heroes'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class AmuletsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/amulets'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class GamesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/games'
    this.isPaginated = true
    this.isBulk = true
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class HeroesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/heroes'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class RanksEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/ranks'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class SeasonsEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.id = id
    this.url = '/v2/pvp/seasons'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }

  leaderboards () {
    return new SeasonLeaderboardEndpoint(this, this.id)
  }
}

class SeasonLeaderboardEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.id = id
    this.url = `/v2/pvp/seasons/${id}/leaderboards`
    this.cacheTime = 24 * 60 * 60
  }

  ids () {
    return super.get('', true)
  }

  board (board, region) {
    return new SeasonLeaderboardBoardEndpoint(this, this.id, board, region)
  }
}

class SeasonLeaderboardBoardEndpoint extends AbstractEndpoint {
  constructor (client, id, board, region) {
    super(client)
    this.url = `/v2/pvp/seasons/${id}/leaderboards/${board}/${region}`
    this.isPaginated = true
    this.cacheTime = 5 * 60
  }
}

class StandingsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/standings'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}

class StatsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/pvp/stats'
    this.isAuthenticated = true
    this.cacheTime = 5 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/quaggans.js":
/*!**************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/quaggans.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class QuaggansEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/quaggans'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/quests.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/quests.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class QuestsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/quests'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/races.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/races.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class RacesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/races'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/raids.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/raids.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class RaidsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/raids'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/recipes.js":
/*!*************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/recipes.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class RecipesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/recipes'
    this.isPaginated = true
    this.isBulk = true
    this.supportsBulkAll = false
    this.cacheTime = 24 * 60 * 60
  }

  search () {
    return new SearchEndpoint(this)
  }
}

class SearchEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/recipes/search'
    this.cacheTime = 24 * 60 * 60
  }

  input (id) {
    return super.get(`?input=${id}`, true)
  }

  output (id) {
    return super.get(`?output=${id}`, true)
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/skiffs.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/skiffs.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class SkiffsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/skiffs'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/skills.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/skills.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class SkillsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/skills'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/skins.js":
/*!***********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/skins.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class SkinsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/skins'
    this.isPaginated = true
    this.isBulk = true
    this.supportsBulkAll = false
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/specializations.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/specializations.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class SpecializationsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/specializations'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/stories.js":
/*!*************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/stories.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class StoriesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/stories'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }

  seasons () {
    return new SeasonsEndpoint(this)
  }
}

class SeasonsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/stories/seasons'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/titles.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/titles.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class TitlesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/titles'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/tokeninfo.js":
/*!***************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/tokeninfo.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class TokeninfoEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/tokeninfo'
    this.isAuthenticated = true
    this.cacheTime = 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/traits.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/traits.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class TraitsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/traits'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/wizardsvault.js":
/*!******************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/wizardsvault.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class WizardsvaultEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wizardsvault'
    this.isLocalized = true
    this.cacheTime = 60 * 60
  }

  listings () {
    return new ListingsEndpoint(this)
  }

  objectives () {
    return new ObjectivesEndpoint(this)
  }
}

class ListingsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wizardsvault/listings'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = false
    this.cacheTime = 60 * 60
  }
}

class ObjectivesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wizardsvault/objectives'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/worldbosses.js":
/*!*****************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/worldbosses.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class WorldbossesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/worldbosses'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/worlds.js":
/*!************************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/worlds.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class WorldsEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/worlds'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/endpoints/wvw.js":
/*!*********************************************************!*\
  !*** ./node_modules/gw2api-client/src/endpoints/wvw.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const AbstractEndpoint = __webpack_require__(/*! ../endpoint */ "./node_modules/gw2api-client/src/endpoint.js")

module.exports = class WvwEndpoint extends AbstractEndpoint {
  abilities () {
    return new AbilitiesEndpoint(this)
  }

  matches () {
    return new MatchesEndpoint(this)
  }

  objectives () {
    return new ObjectivesEndpoint(this)
  }

  upgrades () {
    return new UpgradesEndpoint(this)
  }

  ranks () {
    return new RanksEndpoint(this)
  }
}

class AbilitiesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wvw/abilities'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class MatchesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wvw/matches'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 30
  }

  world (worldId) {
    return super.get(`?world=${worldId}`, true)
  }

  overview () {
    return new MatchesOverviewEndpoint(this)
  }

  scores () {
    return new MatchesScoresEndpoint(this)
  }

  stats (id) {
    return new MatchesStatsEndpoint(this, id)
  }
}

class TeamsEndpoint extends AbstractEndpoint {
  constructor (client, id, team) {
    super(client)
    this.team = team
    this.id = id
    this.url = `/v2/wvw/matches/stats/${id}/teams`
  }

  top (which) {
    return new TopStatsEndpoint(this, this.id, this.team, which)
  }
}

class TopStatsEndpoint extends AbstractEndpoint {
  constructor (client, id, team, which) {
    super(client)
    this.which = which
    this.url = `/v2/wvw/matches/stats/${id}/teams/${team}/top/${which}`
  }
}

class MatchesOverviewEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wvw/matches/overview'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 30
  }

  world (worldId) {
    return super.get(`?world=${worldId}`, true)
  }
}

class MatchesScoresEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wvw/matches/scores'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 30
  }

  world (worldId) {
    return super.get(`?world=${worldId}`, true)
  }
}

class MatchesStatsEndpoint extends AbstractEndpoint {
  constructor (client, id) {
    super(client)
    this.id = id
    this.url = '/v2/wvw/matches/stats'
    this.isPaginated = true
    this.isBulk = true
    this.cacheTime = 30
  }

  world (worldId) {
    return super.get(`?world=${worldId}`, true)
  }

  teams (team) {
    return new TeamsEndpoint(this, this.id, team)
  }
}

class ObjectivesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wvw/objectives'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class UpgradesEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wvw/upgrades'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}

class RanksEndpoint extends AbstractEndpoint {
  constructor (client) {
    super(client)
    this.url = '/v2/wvw/ranks'
    this.isPaginated = true
    this.isBulk = true
    this.isLocalized = true
    this.cacheTime = 24 * 60 * 60
  }
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/flow.js":
/*!************************************************!*\
  !*** ./node_modules/gw2api-client/src/flow.js ***!
  \************************************************/
/***/ ((module) => {

async function parallel (promises) {
  const results = await Promise.all(
    Object.values(promises).map(func => func())
  )

  // If the initial structure was an array, just return the array of results
  if (Array.isArray(promises)) {
    return results
  }

  // If the initial structure was an object, rebuild an object with the results
  const keys = Object.keys(promises)
  return results.reduce((object, resultPart, index) => {
    object[keys[index]] = resultPart
    return object
  }, {})
}

module.exports = { parallel }


/***/ }),

/***/ "./node_modules/gw2api-client/src/hash.js":
/*!************************************************!*\
  !*** ./node_modules/gw2api-client/src/hash.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const emotionHash = (__webpack_require__(/*! @emotion/hash/dist/hash.browser.cjs.js */ "./node_modules/@emotion/hash/dist/hash.browser.cjs.js")["default"])

let cache = {}

function hash (string) {
  if (!cache[string]) {
    cache[string] = emotionHash(string)
  }

  return cache[string]
}

module.exports = hash


/***/ }),

/***/ "./node_modules/gw2api-client/src/helpers/resetTime.js":
/*!*************************************************************!*\
  !*** ./node_modules/gw2api-client/src/helpers/resetTime.js ***!
  \*************************************************************/
/***/ ((module) => {

const DAY_MS = 24 * 60 * 60 * 1000

function getDateAtTime (date, time) {
  return new Date(date.toISOString().replace(/T.*Z/, `T${time}.000Z`))
}

function getDailyReset (date) {
  date = date ? new Date(date) : new Date()

  date = new Date(date.getTime() + DAY_MS)
  return getDateAtTime(date, '00:00:00')
}

function getLastDailyReset (date) {
  return new Date(getDailyReset(date).getTime() - DAY_MS)
}

function getWeeklyReset (date) {
  date = date ? new Date(date) : new Date()

  const weekday = date.getUTCDay()
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  let dayDiff = 0

  switch (weekday) {
    case 0:
      // 0 -> 1 sunday
      dayDiff = 1
      break
    case 1:
      // 1 -> 0 monday (if before reset)
      // 1 -> 7 monday (if after reset)
      const pastReset = hours > 7 || (hours === 7 && minutes >= 30)
      dayDiff = pastReset ? 7 : 0
      break
    default:
      // 2 -> 6 tuesday
      // 3 -> 5 wednesday
      // 4 -> 4 thursday
      // 5 -> 3 friday
      // 6 -> 2 saturday
      dayDiff = 8 - weekday
      break
  }

  date = new Date(date.getTime() + dayDiff * DAY_MS)
  return getDateAtTime(date, '07:30:00')
}

function getLastWeeklyReset (date) {
  return new Date(getWeeklyReset(date).getTime() - 7 * DAY_MS)
}

module.exports = {
  getDateAtTime,
  getDailyReset,
  getLastDailyReset,
  getWeeklyReset,
  getLastWeeklyReset
}


/***/ }),

/***/ "./node_modules/gw2api-client/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/gw2api-client/src/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Client = __webpack_require__(/*! ./client */ "./node_modules/gw2api-client/src/client.js")

// Each time the api wrapper is called, we give back a new instance
module.exports = function () {
  return new Client()
}


/***/ }),

/***/ "./node_modules/idb-keyval/dist/idb-keyval.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/idb-keyval/dist/idb-keyval.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   del: () => (/* binding */ del),
/* harmony export */   get: () => (/* binding */ get),
/* harmony export */   keys: () => (/* binding */ keys),
/* harmony export */   set: () => (/* binding */ set)
/* harmony export */ });
class Store {
    constructor(dbName = 'keyval-store', storeName = 'keyval') {
        this.storeName = storeName;
        this._dbp = new Promise((resolve, reject) => {
            const openreq = indexedDB.open(dbName, 1);
            openreq.onerror = () => reject(openreq.error);
            openreq.onsuccess = () => resolve(openreq.result);
            // First time setup: create an empty object store
            openreq.onupgradeneeded = () => {
                openreq.result.createObjectStore(storeName);
            };
        });
    }
    _withIDBStore(type, callback) {
        return this._dbp.then(db => new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, type);
            transaction.oncomplete = () => resolve();
            transaction.onabort = transaction.onerror = () => reject(transaction.error);
            callback(transaction.objectStore(this.storeName));
        }));
    }
}
let store;
function getDefaultStore() {
    if (!store)
        store = new Store();
    return store;
}
function get(key, store = getDefaultStore()) {
    let req;
    return store._withIDBStore('readonly', store => {
        req = store.get(key);
    }).then(() => req.result);
}
function set(key, value, store = getDefaultStore()) {
    return store._withIDBStore('readwrite', store => {
        store.put(value, key);
    });
}
function del(key, store = getDefaultStore()) {
    return store._withIDBStore('readwrite', store => {
        store.delete(key);
    });
}
function clear(store = getDefaultStore()) {
    return store._withIDBStore('readwrite', store => {
        store.clear();
    });
}
function keys(store = getDefaultStore()) {
    const keys = [];
    return store._withIDBStore('readonly', store => {
        // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
        // And openKeyCursor isn't supported by Safari.
        (store.openKeyCursor || store.openCursor).call(store).onsuccess = function () {
            if (!this.result)
                return;
            keys.push(this.result.key);
            this.result.continue();
        };
    }).then(() => keys);
}




/***/ }),

/***/ "./node_modules/lets-fetch/src/flow.js":
/*!*********************************************!*\
  !*** ./node_modules/lets-fetch/src/flow.js ***!
  \*********************************************/
/***/ ((module) => {

async function series (array) {
  let results = []

  for (let i = 0; i !== array.length; i++) {
    results.push(await array[i]())
  }

  return results
}

function parallel (array) {
  return Promise.all(array.map(func => func()))
}

module.exports = {
  series,
  parallel
}


/***/ }),

/***/ "./node_modules/lets-fetch/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lets-fetch/src/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fetch = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js")
const flow = __webpack_require__(/*! ./flow.js */ "./node_modules/lets-fetch/src/flow.js")

const defaultOptions = {
  type: 'json',
  method: 'GET',
  headers: {},
  body: undefined
}

let internalRetry = () => false
let internalRetryWait = () => false

// istanbul ignore next
let internalLogger = () => false

module.exports = { retry, retryWait, logger, single, many }

// Set a custom decider function that decides to retry
// based on the number of tries and the previous error
function retry (decider) {
  internalRetry = decider
}

// Set a custom function that sets how long we should
// sleep between each failed request
function retryWait (callback) {
  internalRetryWait = callback
}

// Set a custom function that logs out information about each request
function logger (callback) {
  internalLogger = callback
}

// Request a single url
function single (url, options = {}) {
  let tries = 1

  // Execute the request and retry if there are errors (and the
  // retry decider decided that we should try our luck again)
  const callRequest = () => {
    let start = new Date()

    return request(url, options)
      .then((data) => {
        internalLogger({ url, duration: new Date() - start, status: 200, retries: tries - 1 })

        return data
      })
      .catch(err => {
        internalLogger({ url, duration: new Date() - start, status: err && err.response && err.response.status, retries: tries - 1 })

        if (internalRetry(++tries, err)) {
          return wait(callRequest, internalRetryWait(tries))
        }

        throw err
      })
  }

  return callRequest()
}

// Send a request using the underlying fetch API
function request (url, options) {
  options = Object.assign({}, defaultOptions, options)
  let savedContent
  let savedResponse

  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(handleResponse)
      .then(handleBody)
      .catch(handleError)

    function handleResponse (response) {
      // Save the response for checking the status later
      savedResponse = response

      // Decode the response body
      switch (options.type) {
        case 'response':
          return response
        case 'json':
          return response.json()
        default:
          return response.text()
      }
    }

    function handleBody (content) {
      // Bubble an error if the response status is not okay
      if (savedResponse && savedResponse.status >= 400) {
        savedContent = content
        throw new Error(`Response status indicates error`)
      }

      // All is well!
      resolve(content)
    }

    function handleError (err) {
      // Overwrite potential decoding errors when the actual problem was the response
      if (savedResponse && savedResponse.status >= 400) {
        err = new Error(`Status ${savedResponse.status}`)
      }

      // Enrich the error message with the response and the content
      let error = new Error(err.message)
      error.response = savedResponse
      error.content = savedContent
      reject(error)
    }
  })
}

// Request multiple pages
function many (urls, options = {}) {
  let flowMethod = (options.waitTime) ? flow.series : flow.parallel

  // Call the single method while respecting the wait time in between tasks
  const callSingle = (url) => single(url, options)
    .then(content => wait(() => content, options.waitTime))

  // Map over the urls and call them using the method the user chose
  let promises = urls.map(url => () => callSingle(url))
  return flowMethod(promises)
}

// Wait a specific time before executing a callback
function wait (callback, ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(callback()), ms || 0)
  })
}


/***/ }),

/***/ "./node_modules/querystringify/index.js":
/*!**********************************************!*\
  !*** ./node_modules/querystringify/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
exports.stringify = querystringify;
exports.parse = querystring;


/***/ }),

/***/ "./src/api-holder.js":
/*!***************************!*\
  !*** ./src/api-holder.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gw2api_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gw2api-client */ "./node_modules/gw2api-client/src/index.js");
/* harmony import */ var gw2api_client_src_cache_memory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gw2api-client/src/cache/memory.js */ "./node_modules/gw2api-client/src/cache/memory.js");
/* harmony import */ var gw2api_client_src_cache_browser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gw2api-client/src/cache/browser.js */ "./node_modules/gw2api-client/src/cache/browser.js");




function createClient(key) {
    const c = gw2api_client__WEBPACK_IMPORTED_MODULE_0__();
    c.schema("2024-07-20T01:00:00.000Z");
    c.language("en");
    if(key) c.authenticate(key);
    c.cacheStorage([
        gw2api_client_src_cache_memory_js__WEBPACK_IMPORTED_MODULE_1__({ gcTick: 5 * 60 * 1000 }),
        gw2api_client_src_cache_browser_js__WEBPACK_IMPORTED_MODULE_2__({
            storageKey: `gw2api-cache_${key}`,
            gcTick: 3 * 60 * 1000
        })
    ]);
    return c;
}

class Player {
    api;
    constructor(name, emoji, iconUrl, key) {
        this.name = name;
        this.emoji = emoji;
        this.iconUrl = iconUrl;
        this.key = key;
        
        if(!name) throw "Please name the players";
        if(!emoji) throw `${name} needs emoji`;
        if(!key) throw `${name} needs key`;

        this.api = createClient(key);
    }
}

function getApiHolder() {
    if(!window.apiHolder) {
        const players = readPlayers();
        window.apiHolder = {
            players: players,
            api: createClient(null)
        };
    }
    return window.apiHolder;
}

function readPlayers() {
    console.log("todo readplayers");
    var players = [];
    try {
        for(var p of JSON.parse(localStorage.getItem("gw2-no-nuance-players"))) {
            players.push(new Player(p.name, p.emoji, p.iconUrl, p.key));
        }
    } catch(e) {
        alert(e);
    }
    console.log(players);
    return players;
}

function writePlayers(players) {
    console.log("saveplayers todo");
    console.log(players);
    localStorage.setItem("gw2-no-nuance-players", JSON.stringify(players));
}

function apiHolderSetupHtml(elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    const table = document.createElement("table");
    element.appendChild(table);

    //const theader = document.createElement("theader");
    const theaderRow =  table.appendChild(document.createElement("tr"));
    theaderRow.appendChild(document.createElement("th")).innerText = "Player name";
    theaderRow.appendChild(document.createElement("th")).innerText = "Emoji";
    theaderRow.appendChild(document.createElement("th")).innerText = "Icon URL";
    theaderRow.appendChild(document.createElement("th")).innerText = "API Key";
    theaderRow.appendChild(document.createElement("th")).innerText = "";
    //table.appendChild(theader);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const buttonAdd = document.createElement("button");
    buttonAdd.innerText = "Add row";
    const buttonSave= document.createElement("button");
    buttonSave.innerText = "Save";

    element.appendChild(buttonAdd);
    element.appendChild(buttonSave);

    const addRow = function(player) {
        const row = table.appendChild(document.createElement("tr"));
        console.log("Creating row for player:");
        console.log(player);
        row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = player?.name    ?? "";
        row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = player?.emoji   ?? "";
        row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = player?.iconUrl ?? "";
        row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = player?.key     ?? "";
        const del = row.appendChild(document.createElement("td")).appendChild(document.createElement("button"));
        del.innerText = "❌"
        del.onclick = () => { row.remove(); };
    }

    for(var player of readPlayers()) {
        addRow(player);
    }

    buttonAdd.onclick = () => { addRow(null); };
    buttonSave.onclick = () => {
        const players = [];
        for(var i in table.rows) {
            if(i==0) continue;
            const tr = table.rows[i];
            if(tr.localName!="tr") continue;
            const i0 = tr.cells[0].children[0].value
            const i1 = tr.cells[1].children[0].value
            const i2 = tr.cells[2].children[0].value
            const i3 = tr.cells[3].children[0].value
            players.push(new Player(i0,i1,i2,i3));
        }
        writePlayers(players);
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    getApiHolder: getApiHolder,
    apiHolderSetupHtml: apiHolderSetupHtml
});

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  console.log('I get called from print.js!');
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _api_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-holder.js */ "./src/api-holder.js");





console.log("HELLO!");

function hello() {
    console.log("Hello from function!");
}

window.gw2 = {
    hello: _print_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    apiHolder: _api_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"],
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    hello: hello,
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1YsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUM3bUJBLHlCQUF5QixtQkFBTyxDQUFDLGlFQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNsRUEseUJBQXlCLG1CQUFPLENBQUMsaUVBQWE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBLHlCQUF5QixtQkFBTyxDQUFDLGlFQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQSx5QkFBeUIsbUJBQU8sQ0FBQyxpRUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBLHlCQUF5QixtQkFBTyxDQUFDLGlFQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkEseUJBQXlCLG1CQUFPLENBQUMsaUVBQWE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBLHlCQUF5QixtQkFBTyxDQUFDLGlFQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQSx5QkFBeUIsbUJBQU8sQ0FBQyxpRUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEEseUJBQXlCLG1CQUFPLENBQUMsaUVBQWE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBLHlCQUF5QixtQkFBTyxDQUFDLGlFQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQSx5QkFBeUIsbUJBQU8sQ0FBQyxpRUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEEseUJBQXlCLG1CQUFPLENBQUMsaUVBQWE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hDQSx5QkFBeUIsbUJBQU8sQ0FBQyxpRUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBLHlCQUF5QixtQkFBTyxDQUFDLGlFQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQSx5QkFBeUIsbUJBQU8sQ0FBQyxpRUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWEEseUJBQXlCLG1CQUFPLENBQUMsaUVBQWE7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBLHlCQUF5QixtQkFBTyxDQUFDLGlFQUFhOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQSx5QkFBeUIsbUJBQU8sQ0FBQyxpRUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDakM7QUFDeUI7QUFDZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpREFBTztBQUNsQixlQUFlLHNEQUFTO0FBQ3hCO0FBQ0EsaUVBQWU7QUFDZjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuY2pzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvYXJyYXktdW5pcXVlL2luZGV4LmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvY2h1bmsvc3JjL2NodW5rLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvY3Jvc3MtZmV0Y2gvZGlzdC9icm93c2VyLXBvbnlmaWxsLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9mYXN0LWdldC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9jYWNoZS9icm93c2VyLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvY2FjaGUvbWVtb3J5LmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvY2FjaGUvbnVsbC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50LmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL2FjY291bnQtYmxvYi5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9hY2NvdW50LmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL2FjaGlldmVtZW50cy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9iYWNrc3RvcnkuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvY2F0cy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9jaGFyYWN0ZXJzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9jb21tZXJjZS5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9jb250aW5lbnRzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL2N1cnJlbmNpZXMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvZGFpbHljcmFmdGluZy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9kdW5nZW9ucy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9lbWJsZW0uanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvZW1vdGVzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9maWxlcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9maW5pc2hlcnMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvZ2xpZGVycy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9ndWlsZC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9ob21lLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL2hvbWVzdGVhZC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9pdGVtcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9pdGVtc3RhdHMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvamFkZWJvdHMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvbGVnZW5kYXJ5YXJtb3J5LmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL2xlZ2VuZHMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvbWFpbGNhcnJpZXJzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL21hcGNoZXN0cy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9tYXBzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL21hc3Rlcmllcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9tYXRlcmlhbHMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvbWluaXMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvbW91bnRzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL25vZGVzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL25vdmVsdGllcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9vdXRmaXRzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL3BldHMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvcHJvZmVzc2lvbnMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvcHZwLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL3F1YWdnYW5zLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL3F1ZXN0cy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9yYWNlcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9yYWlkcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9yZWNpcGVzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL3NraWZmcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy9za2lsbHMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvc2tpbnMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvc3BlY2lhbGl6YXRpb25zLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL3N0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvdGl0bGVzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL3Rva2VuaW5mby5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy90cmFpdHMuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9lbmRwb2ludHMvd2l6YXJkc3ZhdWx0LmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL3dvcmxkYm9zc2VzLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvZW5kcG9pbnRzL3dvcmxkcy5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2VuZHBvaW50cy93dncuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9ndzJhcGktY2xpZW50L3NyYy9mbG93LmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvaGFzaC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vbm9kZV9tb2R1bGVzL2d3MmFwaS1jbGllbnQvc3JjL2hlbHBlcnMvcmVzZXRUaW1lLmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvZ3cyYXBpLWNsaWVudC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9pZGIta2V5dmFsL2Rpc3QvaWRiLWtleXZhbC5tanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9sZXRzLWZldGNoL3NyYy9mbG93LmpzIiwid2VicGFjazovL3NjcmlwdHMvLi9ub2RlX21vZHVsZXMvbGV0cy1mZXRjaC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZ2lmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzLy4vc3JjL2FwaS1ob2xkZXIuanMiLCJ3ZWJwYWNrOi8vc2NyaXB0cy8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly9zY3JpcHRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NjcmlwdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NjcmlwdHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zY3JpcHRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2NyaXB0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NjcmlwdHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gbXVybXVyaGFzaDIgdmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9nYXJ5Y291cnQvbXVybXVyaGFzaC1qcy9ibG9iL21hc3Rlci9tdXJtdXJoYXNoMl9nYy5qc1xuZnVuY3Rpb24gbXVybXVyaGFzaDJfMzJfZ2Moc3RyKSB7XG4gIHZhciBsID0gc3RyLmxlbmd0aCxcbiAgICAgIGggPSBsIF4gbCxcbiAgICAgIGkgPSAwLFxuICAgICAgaztcblxuICB3aGlsZSAobCA+PSA0KSB7XG4gICAgayA9IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZiB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgOCB8IChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDI0O1xuICAgIGsgPSAoayAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoayA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuICAgIGsgXj0gayA+Pj4gMjQ7XG4gICAgayA9IChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChrID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG4gICAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNikgXiBrO1xuICAgIGwgLT0gNDtcbiAgICArK2k7XG4gIH1cblxuICBzd2l0Y2ggKGwpIHtcbiAgICBjYXNlIDM6XG4gICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcblxuICAgIGNhc2UgMjpcbiAgICAgIGggXj0gKHN0ci5jaGFyQ29kZUF0KGkgKyAxKSAmIDB4ZmYpIDw8IDg7XG5cbiAgICBjYXNlIDE6XG4gICAgICBoIF49IHN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZjtcbiAgICAgIGggPSAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoaCA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuICB9XG5cbiAgaCBePSBoID4+PiAxMztcbiAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG4gIGggXj0gaCA+Pj4gMTU7XG4gIHJldHVybiAoaCA+Pj4gMCkudG9TdHJpbmcoMzYpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBtdXJtdXJoYXNoMl8zMl9nYztcbiIsIi8qIVxuICogYXJyYXktdW5pcXVlIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9hcnJheS11bmlxdWU+XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LTIwMTUsIEpvbiBTY2hsaW5rZXJ0LlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB1bmlxdWUoYXJyKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJyYXktdW5pcXVlIGV4cGVjdHMgYW4gYXJyYXkuJyk7XG4gIH1cblxuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIGkgPSAtMTtcblxuICB3aGlsZSAoaSsrIDwgbGVuKSB7XG4gICAgdmFyIGogPSBpICsgMTtcblxuICAgIGZvciAoOyBqIDwgYXJyLmxlbmd0aDsgKytqKSB7XG4gICAgICBpZiAoYXJyW2ldID09PSBhcnJbal0pIHtcbiAgICAgICAgYXJyLnNwbGljZShqLS0sIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxubW9kdWxlLmV4cG9ydHMuaW1tdXRhYmxlID0gZnVuY3Rpb24gdW5pcXVlSW1tdXRhYmxlKGFycikge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FycmF5LXVuaXF1ZSBleHBlY3RzIGFuIGFycmF5LicpO1xuICB9XG5cbiAgdmFyIGFyckxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBuZXdBcnIgPSBuZXcgQXJyYXkoYXJyTGVuKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyckxlbjsgaSsrKSB7XG4gICAgbmV3QXJyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIG1vZHVsZS5leHBvcnRzKG5ld0Fycik7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNodW5rIChjb2xsZWN0aW9uLCBzaXplKSB7XHJcbiAgICBcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZGVmYXVsdCBzaXplIHRvIHR3byBpdGVtXHJcbiAgICAgICAgc2l6ZSA9IHBhcnNlSW50KHNpemUpIHx8IDI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gYWRkIGVhY2ggY2h1bmsgdG8gdGhlIHJlc3VsdFxyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgTWF0aC5jZWlsKGNvbGxlY3Rpb24ubGVuZ3RoIC8gc2l6ZSk7IHgrKykge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0geCAqIHNpemU7XHJcbiAgICAgICAgICAgIHZhciBlbmQgPSBzdGFydCArIHNpemU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChjb2xsZWN0aW9uLnNsaWNlKHN0YXJ0LCBlbmQpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGV4cG9ydCBpbiBub2RlIG9yIGJyb3dzZXJcclxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICAgICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY2h1bms7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydHMuY2h1bmsgPSBjaHVuaztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jaHVuayA9IGNodW5rO1xyXG4gICAgfVxyXG5cclxufS5jYWxsKHRoaXMpKTtcclxuIiwiLy8gU2F2ZSBnbG9iYWwgb2JqZWN0IGluIGEgdmFyaWFibGVcbnZhciBfX2dsb2JhbF9fID1cbih0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsVGhpcykgfHxcbih0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZikgfHxcbih0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwpO1xuLy8gQ3JlYXRlIGFuIG9iamVjdCB0aGF0IGV4dGVuZHMgZnJvbSBfX2dsb2JhbF9fIHdpdGhvdXQgdGhlIGZldGNoIGZ1bmN0aW9uXG52YXIgX19nbG9iYWxUaGlzX18gPSAoZnVuY3Rpb24gKCkge1xuZnVuY3Rpb24gRigpIHtcbnRoaXMuZmV0Y2ggPSBmYWxzZTtcbnRoaXMuRE9NRXhjZXB0aW9uID0gX19nbG9iYWxfXy5ET01FeGNlcHRpb25cbn1cbkYucHJvdG90eXBlID0gX19nbG9iYWxfXzsgLy8gTmVlZGVkIGZvciBmZWF0dXJlIGRldGVjdGlvbiBvbiB3aGF0d2ctZmV0Y2gncyBjb2RlXG5yZXR1cm4gbmV3IEYoKTtcbn0pKCk7XG4vLyBXcmFwcyB3aGF0d2ctZmV0Y2ggd2l0aCBhIGZ1bmN0aW9uIHNjb3BlIHRvIGhpamFjayB0aGUgZ2xvYmFsIG9iamVjdFxuLy8gXCJnbG9iYWxUaGlzXCIgdGhhdCdzIGdvaW5nIHRvIGJlIHBhdGNoZWRcbihmdW5jdGlvbihnbG9iYWxUaGlzKSB7XG5cbnZhciBpcnJlbGV2YW50ID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXG4gIHZhciBnID1cbiAgICAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMpIHx8XG4gICAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmKSB8fFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwpIHx8XG4gICAge307XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBnLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBnICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6XG4gICAgICAnRmlsZVJlYWRlcicgaW4gZyAmJlxuICAgICAgJ0Jsb2InIGluIGcgJiZcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBnLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIGdcbiAgfTtcblxuICBmdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+IV0vaS50ZXN0KG5hbWUpIHx8IG5hbWUgPT09ICcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZTogXCInICsgbmFtZSArICdcIicpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fTtcblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICBpZiAoaGVhZGVyLmxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSGVhZGVycyBjb25zdHJ1Y3RvcjogZXhwZWN0ZWQgbmFtZS92YWx1ZSBwYWlyIHRvIGJlIGxlbmd0aCAyLCBmb3VuZCcgKyBoZWFkZXIubGVuZ3RoKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXTtcbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuX25vQm9keSkgcmV0dXJuXG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgdmFyIG1hdGNoID0gL2NoYXJzZXQ9KFtBLVphLXowLTlfLV0rKS8uZXhlYyhibG9iLnR5cGUpO1xuICAgIHZhciBlbmNvZGluZyA9IG1hdGNoID8gbWF0Y2hbMV0gOiAndXRmLTgnO1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IsIGVuY29kaW5nKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKTtcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKTtcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpO1xuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIC8qXG4gICAgICAgIGZldGNoLW1vY2sgd3JhcHMgdGhlIFJlc3BvbnNlIG9iamVjdCBpbiBhbiBFUzYgUHJveHkgdG9cbiAgICAgICAgcHJvdmlkZSB1c2VmdWwgdGVzdCBoYXJuZXNzIGZlYXR1cmVzIHN1Y2ggYXMgZmx1c2guIEhvd2V2ZXIsIG9uXG4gICAgICAgIEVTNSBicm93c2VycyB3aXRob3V0IGZldGNoIG9yIFByb3h5IHN1cHBvcnQgcG9sbHlmaWxscyBtdXN0IGJlIHVzZWQ7XG4gICAgICAgIHRoZSBwcm94eS1wb2xseWZpbGwgaXMgdW5hYmxlIHRvIHByb3h5IGFuIGF0dHJpYnV0ZSB1bmxlc3MgaXQgZXhpc3RzXG4gICAgICAgIG9uIHRoZSBvYmplY3QgYmVmb3JlIHRoZSBQcm94eSBpcyBjcmVhdGVkLiBUaGlzIGNoYW5nZSBlbnN1cmVzXG4gICAgICAgIFJlc3BvbnNlLmJvZHlVc2VkIGV4aXN0cyBvbiB0aGUgaW5zdGFuY2UsIHdoaWxlIG1haW50YWluaW5nIHRoZVxuICAgICAgICBzZW1hbnRpYyBvZiBzZXR0aW5nIFJlcXVlc3QuYm9keVVzZWQgaW4gdGhlIGNvbnN0cnVjdG9yIGJlZm9yZVxuICAgICAgICBfaW5pdEJvZHkgaXMgY2FsbGVkLlxuICAgICAgKi9cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWFzc2lnblxuICAgICAgdGhpcy5ib2R5VXNlZCA9IHRoaXMuYm9keVVzZWQ7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fbm9Cb2R5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcik7XG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICB2YXIgaXNDb25zdW1lZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAoaXNDb25zdW1lZCkge1xuICAgICAgICAgIHJldHVybiBpc0NvbnN1bWVkXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ1ZmZlci5zbGljZShcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQsXG4gICAgICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlT2Zmc2V0ICsgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgYXMgQXJyYXlCdWZmZXInKVxuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydDT05ORUNUJywgJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BBVENIJywgJ1BPU1QnLCAnUFVUJywgJ1RSQUNFJ107XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXF1ZXN0KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUGxlYXNlIHVzZSB0aGUgXCJuZXdcIiBvcGVyYXRvciwgdGhpcyBET00gb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi4nKVxuICAgIH1cblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5O1xuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybDtcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFscztcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2Q7XG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlO1xuICAgICAgdGhpcy5zaWduYWwgPSBpbnB1dC5zaWduYWw7XG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdDtcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dCk7XG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnc2FtZS1vcmlnaW4nO1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKTtcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpO1xuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbDtcbiAgICB0aGlzLnNpZ25hbCA9IG9wdGlvbnMuc2lnbmFsIHx8IHRoaXMuc2lnbmFsIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoJ0Fib3J0Q29udHJvbGxlcicgaW4gZykge1xuICAgICAgICB2YXIgY3RybCA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgcmV0dXJuIGN0cmwuc2lnbmFsO1xuICAgICAgfVxuICAgIH0oKSk7XG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGw7XG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpO1xuXG4gICAgaWYgKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSB7XG4gICAgICBpZiAob3B0aW9ucy5jYWNoZSA9PT0gJ25vLXN0b3JlJyB8fCBvcHRpb25zLmNhY2hlID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAgIC8vIFNlYXJjaCBmb3IgYSAnXycgcGFyYW1ldGVyIGluIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgICAgdmFyIHJlUGFyYW1TZWFyY2ggPSAvKFs/Jl0pXz1bXiZdKi87XG4gICAgICAgIGlmIChyZVBhcmFtU2VhcmNoLnRlc3QodGhpcy51cmwpKSB7XG4gICAgICAgICAgLy8gSWYgaXQgYWxyZWFkeSBleGlzdHMgdGhlbiBzZXQgdGhlIHZhbHVlIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICAgIHRoaXMudXJsID0gdGhpcy51cmwucmVwbGFjZShyZVBhcmFtU2VhcmNoLCAnJDFfPScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBhIG5ldyAnXycgcGFyYW1ldGVyIHRvIHRoZSBlbmQgd2l0aCB0aGUgY3VycmVudCB0aW1lXG4gICAgICAgICAgdmFyIHJlUXVlcnlTdHJpbmcgPSAvXFw/LztcbiAgICAgICAgICB0aGlzLnVybCArPSAocmVRdWVyeVN0cmluZy50ZXN0KHRoaXMudXJsKSA/ICcmJyA6ICc/JykgKyAnXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5XG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKTtcbiAgICAvLyBBdm9pZGluZyBzcGxpdCB2aWEgcmVnZXggdG8gd29yayBhcm91bmQgYSBjb21tb24gSUUxMSBidWcgd2l0aCB0aGUgY29yZS1qcyAzLjYuMCByZWdleCBwb2x5ZmlsbFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gvaXNzdWVzLzc0OFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy83NTFcbiAgICBwcmVQcm9jZXNzZWRIZWFkZXJzXG4gICAgICAuc3BsaXQoJ1xccicpXG4gICAgICAubWFwKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICByZXR1cm4gaGVhZGVyLmluZGV4T2YoJ1xcbicpID09PSAwID8gaGVhZGVyLnN1YnN0cigxLCBoZWFkZXIubGVuZ3RoKSA6IGhlYWRlclxuICAgICAgfSlcbiAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpO1xuICAgICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKCk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdSZXNwb25zZSAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNwb25zZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BsZWFzZSB1c2UgdGhlIFwibmV3XCIgb3BlcmF0b3IsIHRoaXMgRE9NIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uJylcbiAgICB9XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzO1xuICAgIGlmICh0aGlzLnN0YXR1cyA8IDIwMCB8fCB0aGlzLnN0YXR1cyA+IDU5OSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdSZXNwb25zZSc6IFRoZSBzdGF0dXMgcHJvdmlkZWQgKDApIGlzIG91dHNpZGUgdGhlIHJhbmdlIFsyMDAsIDU5OV0uXCIpXG4gICAgfVxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0ID09PSB1bmRlZmluZWQgPyAnJyA6ICcnICsgb3B0aW9ucy5zdGF0dXNUZXh0O1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdCk7XG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9O1xuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDIwMCwgc3RhdHVzVGV4dDogJyd9KTtcbiAgICByZXNwb25zZS5vayA9IGZhbHNlO1xuICAgIHJlc3BvbnNlLnN0YXR1cyA9IDA7XG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcic7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH07XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdO1xuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH07XG5cbiAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBnLkRPTUV4Y2VwdGlvbjtcbiAgdHJ5IHtcbiAgICBuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH07XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGV4cG9ydHMuRE9NRXhjZXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9O1xuICAgICAgICAvLyBUaGlzIGNoZWNrIGlmIHNwZWNpZmljYWxseSBmb3Igd2hlbiBhIHVzZXIgZmV0Y2hlcyBhIGZpbGUgbG9jYWxseSBmcm9tIHRoZSBmaWxlIHN5c3RlbVxuICAgICAgICAvLyBPbmx5IGlmIHRoZSBzdGF0dXMgaXMgb3V0IG9mIGEgbm9ybWFsIHJhbmdlXG4gICAgICAgIGlmIChyZXF1ZXN0LnVybC5pbmRleE9mKCdmaWxlOi8vJykgPT09IDAgJiYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+IDU5OSkpIHtcbiAgICAgICAgICBvcHRpb25zLnN0YXR1cyA9IDIwMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zLnN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgdGltZWQgb3V0JykpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBleHBvcnRzLkRPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIGZpeFVybCh1cmwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gdXJsID09PSAnJyAmJiBnLmxvY2F0aW9uLmhyZWYgPyBnLmxvY2F0aW9uLmhyZWYgOiB1cmxcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgZml4VXJsKHJlcXVlc3QudXJsKSwgdHJ1ZSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIpIHtcbiAgICAgICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc3VwcG9ydC5hcnJheUJ1ZmZlclxuICAgICAgICApIHtcbiAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5pdCAmJiB0eXBlb2YgaW5pdC5oZWFkZXJzID09PSAnb2JqZWN0JyAmJiAhKGluaXQuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMgfHwgKGcuSGVhZGVycyAmJiBpbml0LmhlYWRlcnMgaW5zdGFuY2VvZiBnLkhlYWRlcnMpKSkge1xuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaW5pdC5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICBuYW1lcy5wdXNoKG5vcm1hbGl6ZU5hbWUobmFtZSkpO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIG5vcm1hbGl6ZVZhbHVlKGluaXQuaGVhZGVyc1tuYW1lXSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICBpZiAobmFtZXMuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG5cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdCk7XG4gICAgfSlcbiAgfVxuXG4gIGZldGNoLnBvbHlmaWxsID0gdHJ1ZTtcblxuICBpZiAoIWcuZmV0Y2gpIHtcbiAgICBnLmZldGNoID0gZmV0Y2g7XG4gICAgZy5IZWFkZXJzID0gSGVhZGVycztcbiAgICBnLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICAgIGcuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgfVxuXG4gIGV4cG9ydHMuSGVhZGVycyA9IEhlYWRlcnM7XG4gIGV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIGV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgZXhwb3J0cy5mZXRjaCA9IGZldGNoO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0pKHt9KTtcbn0pKF9fZ2xvYmFsVGhpc19fKTtcbi8vIFRoaXMgaXMgYSBwb255ZmlsbCwgc28uLi5cbl9fZ2xvYmFsVGhpc19fLmZldGNoLnBvbnlmaWxsID0gdHJ1ZTtcbmRlbGV0ZSBfX2dsb2JhbFRoaXNfXy5mZXRjaC5wb2x5ZmlsbDtcbi8vIENob29zZSBiZXR3ZWVuIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiAoX19nbG9iYWxfXykgb3IgY3VzdG9tIGltcGxlbWVudGF0aW9uIChfX2dsb2JhbFRoaXNfXylcbnZhciBjdHggPSBfX2dsb2JhbF9fLmZldGNoID8gX19nbG9iYWxfXyA6IF9fZ2xvYmFsVGhpc19fO1xuZXhwb3J0cyA9IGN0eC5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuZGVmYXVsdCA9IGN0eC5mZXRjaCAvLyBGb3IgVHlwZVNjcmlwdCBjb25zdW1lcnMgd2l0aG91dCBlc01vZHVsZUludGVyb3AuXG5leHBvcnRzLmZldGNoID0gY3R4LmZldGNoIC8vIFRvIGVuYWJsZTogaW1wb3J0IHtmZXRjaH0gZnJvbSAnY3Jvc3MtZmV0Y2gnXG5leHBvcnRzLkhlYWRlcnMgPSBjdHguSGVhZGVyc1xuZXhwb3J0cy5SZXF1ZXN0ID0gY3R4LlJlcXVlc3RcbmV4cG9ydHMuUmVzcG9uc2UgPSBjdHguUmVzcG9uc2Vcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1xuIiwiLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4gKiBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4gKiBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAqIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuIFRoZSBmdW5jdGlvbiBhbHNvIGhhcyBhIHByb3BlcnR5ICdjbGVhcicgXG4gKiB0aGF0IGlzIGEgZnVuY3Rpb24gd2hpY2ggd2lsbCBjbGVhciB0aGUgdGltZXIgdG8gcHJldmVudCBwcmV2aW91c2x5IHNjaGVkdWxlZCBleGVjdXRpb25zLiBcbiAqXG4gKiBAc291cmNlIHVuZGVyc2NvcmUuanNcbiAqIEBzZWUgaHR0cDovL3Vuc2NyaXB0YWJsZS5jb20vMjAwOS8wMy8yMC9kZWJvdW5jaW5nLWphdmFzY3JpcHQtbWV0aG9kcy9cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmN0aW9uIHRvIHdyYXBcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lb3V0IGluIG1zIChgMTAwYClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2hldGhlciB0byBleGVjdXRlIGF0IHRoZSBiZWdpbm5pbmcgKGBmYWxzZWApXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpe1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gIGlmIChudWxsID09IHdhaXQpIHdhaXQgPSAxMDA7XG5cbiAgZnVuY3Rpb24gbGF0ZXIoKSB7XG4gICAgdmFyIGxhc3QgPSBEYXRlLm5vdygpIC0gdGltZXN0YW1wO1xuXG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBkZWJvdW5jZWQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBpZiAoIXRpbWVvdXQpIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGRlYm91bmNlZC5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIFxuICBkZWJvdW5jZWQuZmx1c2ggPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICAgIFxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWQ7XG59O1xuXG4vLyBBZGRzIGNvbXBhdGliaWxpdHkgZm9yIEVTIG1vZHVsZXNcbmRlYm91bmNlLmRlYm91bmNlID0gZGVib3VuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG4iLCJjb25zdCByZWdleENsb3NlU3F1YXJlQnJhY2tldCA9IC9dfF5cXFsvZ1xuY29uc3QgcmVnZXhPcGVuU3F1YXJlQnJhY2tldCA9IC9cXC4/XFxbL2dcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgLy8gSGFuZGxlIHRoZSBjYXNlIHRoYXQgdGhlIG9iamVjdCBpcyB1bmRlZmluZWQgb3Igbm90IGFuIG9iamVjdFxuICBpZiAoIW9iamVjdCB8fCBPYmplY3Qob2JqZWN0KSAhPT0gb2JqZWN0KSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxuICB9XG5cbiAgLy8gQSkgSWYgdGhlIHBhdGggaXMgYW4gYXJyYXksIHdlIGNhbiBqdXN0IHVzZSB0aGF0XG4gIC8vIEIpIElmIHRoZSBwYXRoIGlzIGEgc3RyaW5nLCBjb252ZXJ0IGl0IGludG8gYW4gYXJyYXkgYnkgbWlncmF0aW5nXG4gIC8vICAgIGFycmF5LXN0eWxlIGBbZm9vXWAgYWNjZXNzb3JzIGludG8gb2JqZWN0LXN0eWxlIGAuZm9vYCBhY2Nlc3NvcnNcbiAgY29uc3QgY2xlYW5QYXRoID0gQXJyYXkuaXNBcnJheShwYXRoKVxuICAgID8gcGF0aFxuICAgIDogcGF0aC5yZXBsYWNlKHJlZ2V4Q2xvc2VTcXVhcmVCcmFja2V0LCAnJykucmVwbGFjZShyZWdleE9wZW5TcXVhcmVCcmFja2V0LCAnLicpLnNwbGl0KCcuJylcblxuICByZXR1cm4gZ2V0KG9iamVjdCwgY2xlYW5QYXRoLCBkZWZhdWx0VmFsdWUpXG59XG5cbmZ1bmN0aW9uIGdldCAob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgbGV0IGN1cnJlbnQgPSBvYmplY3RcblxuICBmb3IgKGNvbnN0IHNlZ21lbnQgb2YgcGF0aCkge1xuICAgIGN1cnJlbnQgPSBjdXJyZW50W3NlZ21lbnRdXG5cbiAgICBpZiAoY3VycmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRcbn1cbiIsImNvbnN0IGRlYm91bmNlID0gcmVxdWlyZSgnZGVib3VuY2UnKVxuY29uc3QgaWRiS2V5dmFsID0gcmVxdWlyZSgnaWRiLWtleXZhbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24pIHtcbiAgY29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHN0b3JhZ2VLZXk6ICdndzJhcGktY2FjaGUnLFxuICAgIGdjVGljazogNSAqIDYwICogMTAwMCxcbiAgICBwZXJzaXN0RGVib3VuY2U6IDMgKiAxMDAwLFxuICAgIHN0b3JhZ2VFbmdpbmU6IGlkYktleXZhbFxuICB9LCBjb25maWd1cmF0aW9uKVxuXG4gIGxldCBfc3RvcmFnZSA9IHt9XG4gIGNvbnN0IHN0b3JhZ2VFbmdpbmUgPSBjb25maWd1cmF0aW9uLnN0b3JhZ2VFbmdpbmVcbiAgY29uc3Qgc3RvcmFnZUtleSA9IGNvbmZpZ3VyYXRpb24uc3RvcmFnZUtleVxuICBjb25zdCBwZXJzaXN0ID0gZGVib3VuY2UoX3BlcnNpc3QsIGNvbmZpZ3VyYXRpb24ucGVyc2lzdERlYm91bmNlKVxuXG4gIGZ1bmN0aW9uIGdldCAoa2V5KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfZ2V0KGtleSkpXG4gIH1cblxuICBmdW5jdGlvbiBzZXQgKGtleSwgdmFsdWUsIGV4cGlyeSkge1xuICAgIF9zZXQoa2V5LCB2YWx1ZSwgZXhwaXJ5KVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1nZXQgKGtleXMpIHtcbiAgICBsZXQgdmFsdWVzID0ga2V5cy5tYXAoa2V5ID0+IF9nZXQoa2V5KSlcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlcylcbiAgfVxuXG4gIGZ1bmN0aW9uIG1zZXQgKHZhbHVlcykge1xuICAgIHZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgX3NldCh2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdKVxuICAgIH0pXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0IChrZXkpIHtcbiAgICBsZXQgdmFsdWUgPSBfc3RvcmFnZVtrZXldXG4gICAgbGV0IG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuZXhwaXJ5ID4gbm93ID8gdmFsdWUudmFsdWUgOiBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBfc2V0IChrZXksIHZhbHVlLCBleHBpcnkpIHtcbiAgICBfc3RvcmFnZVtrZXldID0geyB2YWx1ZSwgZXhwaXJ5OiAobmV3IERhdGUoKSkuZ2V0VGltZSgpICsgZXhwaXJ5ICogMTAwMCB9XG4gICAgcGVyc2lzdCgpXG4gIH1cblxuICBmdW5jdGlvbiBfcGVyc2lzdCAoKSB7XG4gICAgc3RvcmFnZUVuZ2luZS5zZXQoc3RvcmFnZUtleSwgX3N0b3JhZ2UpXG4gICAgICAuY2F0Y2goLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gZXJyID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdGYWlsZWQgcGVyc2lzdGluZyBjYWNoZScsIGVycilcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoeWRyYXRlICgpIHtcbiAgICBzdG9yYWdlRW5naW5lLmdldChzdG9yYWdlS2V5KVxuICAgICAgLnRoZW4odmFsdWUgPT4ge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICBfc3RvcmFnZSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCAoKSB7XG4gICAgX3N0b3JhZ2UgPSB7fVxuICAgIHN0b3JhZ2VFbmdpbmUuZGVsZXRlKHN0b3JhZ2VLZXkpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gX2dldFN0b3JhZ2UgKCkge1xuICAgIHJldHVybiBfc3RvcmFnZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2FyYmFnZUNvbGxlY3Rpb24gKCkge1xuICAgIGNvbnN0IG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoX3N0b3JhZ2UpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSAhPT0ga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKF9zdG9yYWdlW2tleXNbaV1dLmV4cGlyeSA8IG5vdykge1xuICAgICAgICBkZWxldGUgX3N0b3JhZ2Vba2V5c1tpXV1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBwZXJzaXN0KClcbiAgfVxuXG4gIHNldEludGVydmFsKGdhcmJhZ2VDb2xsZWN0aW9uLCBjb25maWd1cmF0aW9uLmdjVGljaylcbiAgaHlkcmF0ZSgpXG4gIGdhcmJhZ2VDb2xsZWN0aW9uKClcblxuICByZXR1cm4geyBnZXQsIHNldCwgbWdldCwgbXNldCwgZmx1c2gsIF9nZXRTdG9yYWdlIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNvbmZpZ3VyYXRpb24pIHtcbiAgY29uZmlndXJhdGlvbiA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGdjVGljazogNSAqIDYwICogMTAwMFxuICB9LCBjb25maWd1cmF0aW9uKVxuXG4gIC8vIFNjb3BlIHRoZSBzdG9yYWdlIHRvIHRoZSBmdW5jdGlvbiwgc28gbXVsdGlwbGUgaW5zdGFuY2VzIGRvbid0IGludGVyZmVyZVxuICBsZXQgX3N0b3JhZ2UgPSB7fVxuXG4gIGZ1bmN0aW9uIGdldCAoa2V5KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfZ2V0KGtleSkpXG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0IChrZXkpIHtcbiAgICBsZXQgdmFsdWUgPSBfc3RvcmFnZVtrZXldXG4gICAgbGV0IG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKClcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuZXhwaXJ5ID4gbm93ID8gdmFsdWUudmFsdWUgOiBudWxsXG4gIH1cblxuICBmdW5jdGlvbiBzZXQgKGtleSwgdmFsdWUsIGV4cGlyeSkge1xuICAgIF9zZXQoa2V5LCB2YWx1ZSwgZXhwaXJ5KVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9zZXQgKGtleSwgdmFsdWUsIGV4cGlyeSkge1xuICAgIF9zdG9yYWdlW2tleV0gPSB7IHZhbHVlLCBleHBpcnk6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyBleHBpcnkgKiAxMDAwIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1nZXQgKGtleXMpIHtcbiAgICBsZXQgdmFsdWVzID0ga2V5cy5tYXAoa2V5ID0+IF9nZXQoa2V5KSlcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlcylcbiAgfVxuXG4gIGZ1bmN0aW9uIG1zZXQgKHZhbHVlcykge1xuICAgIHZhbHVlcy5tYXAodmFsdWUgPT4ge1xuICAgICAgX3NldCh2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdKVxuICAgIH0pXG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCAoKSB7XG4gICAgX3N0b3JhZ2UgPSB7fVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIF9nZXRTdG9yYWdlICgpIHtcbiAgICByZXR1cm4gX3N0b3JhZ2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGdhcmJhZ2VDb2xsZWN0aW9uICgpIHtcbiAgICBjb25zdCBub3cgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKF9zdG9yYWdlKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgIT09IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChfc3RvcmFnZVtrZXlzW2ldXS5leHBpcnkgPCBub3cpIHtcbiAgICAgICAgZGVsZXRlIF9zdG9yYWdlW2tleXNbaV1dXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0SW50ZXJ2YWwoZ2FyYmFnZUNvbGxlY3Rpb24sIGNvbmZpZ3VyYXRpb24uZ2NUaWNrKVxuICBnYXJiYWdlQ29sbGVjdGlvbigpXG5cbiAgcmV0dXJuIHsgZ2V0LCBzZXQsIG1nZXQsIG1zZXQsIGZsdXNoLCBfZ2V0U3RvcmFnZSB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHsgZ2V0LCBzZXQsIG1nZXQsIG1zZXQsIGZsdXNoIH1cbn1cblxuZnVuY3Rpb24gZ2V0ICgpIHtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKVxufVxuXG5mdW5jdGlvbiBzZXQgKCkge1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG59XG5cbmZ1bmN0aW9uIG1nZXQgKGtleXMpIHtcbiAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoeCA9PiBudWxsKVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlcylcbn1cblxuZnVuY3Rpb24gbXNldCAoKSB7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbn1cblxuZnVuY3Rpb24gZmx1c2ggKCkge1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG59XG4iLCJjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ2xldHMtZmV0Y2gnKVxuY29uc3QgbnVsbENhY2hlID0gcmVxdWlyZSgnLi9jYWNoZS9udWxsJylcbmNvbnN0IGVuZHBvaW50cyA9IHJlcXVpcmUoJy4vZW5kcG9pbnRzJylcbmNvbnN0IGZsb3cgPSByZXF1aXJlKCcuL2Zsb3cnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIENsaWVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnNjaGVtYVZlcnNpb24gPSAnMjAxOS0wMy0yMFQwMDowMDowMC4wMDBaJ1xuICAgIHRoaXMubGFuZyA9ICdlbidcbiAgICB0aGlzLmFwaUtleSA9IGZhbHNlXG4gICAgdGhpcy5mZXRjaCA9IGZldGNoXG4gICAgdGhpcy5jYWNoZXMgPSBbbnVsbENhY2hlKCldXG4gICAgdGhpcy5kZWJ1ZyA9IGZhbHNlXG4gICAgdGhpcy5jbGllbnQgPSB0aGlzXG4gIH1cblxuICAvLyBTZXQgdGhlIHNjaGVtYSB2ZXJzaW9uXG4gIHNjaGVtYSAoc2NoZW1hKSB7XG4gICAgdGhpcy5zY2hlbWFWZXJzaW9uID0gc2NoZW1hXG4gICAgdGhpcy5kZWJ1Z01lc3NhZ2UoYHNldCB0aGUgc2NoZW1hIHRvICR7c2NoZW1hfWApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgZm9yIGxvY2FsZS1hd2FyZSBlbmRwb2ludHNcbiAgbGFuZ3VhZ2UgKGxhbmcpIHtcbiAgICB0aGlzLmxhbmcgPSBsYW5nXG4gICAgdGhpcy5kZWJ1Z01lc3NhZ2UoYHNldCB0aGUgbGFuZ3VhZ2UgdG8gJHtsYW5nfWApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIFNldCB0aGUgYXBpIGtleSBmb3IgYXV0aGVudGljYXRlZCBlbmRwb2ludHNcbiAgYXV0aGVudGljYXRlIChhcGlLZXkpIHtcbiAgICB0aGlzLmFwaUtleSA9IGFwaUtleVxuICAgIHRoaXMuZGVidWdNZXNzYWdlKGBzZXQgdGhlIGFwaSBrZXkgdG8gJHthcGlLZXl9YClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gU2V0IHRoZSBjYWNoaW5nIHN0b3JhZ2UgbWV0aG9kKHMpXG4gIGNhY2hlU3RvcmFnZSAoY2FjaGVzKSB7XG4gICAgdGhpcy5jYWNoZXMgPSBbXS5jb25jYXQoY2FjaGVzKVxuICAgIHRoaXMuZGVidWdNZXNzYWdlKGB1cGRhdGVkIHRoZSBjYWNoZSBzdG9yYWdlYClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gU2V0IHRoZSBkZWJ1Z2dpbmcgZmxhZ1xuICBkZWJ1Z2dpbmcgKGZsYWcpIHtcbiAgICB0aGlzLmRlYnVnID0gZmxhZ1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBQcmludCBvdXQgYSBkZWJ1ZyBtZXNzYWdlIGlmIGRlYnVnZ2luZyBpcyBlbmFibGVkXG4gIGRlYnVnTWVzc2FnZSAoc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbZ3cyYXBpLWNsaWVudF0gJHtzdHJpbmd9YClcbiAgICB9XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgd2UgZ2V0IHRoZSBuZXcgY29udGVudCBpZiB0aGUgZ2FtZSB1cGRhdGVzXG4gIGZsdXNoQ2FjaGVJZkdhbWVVcGRhdGVkICgpIHtcbiAgICBjb25zdCBidWlsZEVuZHBvaW50ID0gdGhpcy5idWlsZCgpXG4gICAgY29uc3QgcHJvbWlzZXMgPSB7XG4gICAgICBjYWNoZUJ1aWxkSWQ6ICgpID0+IGJ1aWxkRW5kcG9pbnQuX2NhY2hlR2V0U2luZ2xlKCdjYWNoZUJ1aWxkSWQnKSxcbiAgICAgIGJ1aWxkSWQ6ICgpID0+IGJ1aWxkRW5kcG9pbnQubGl2ZSgpLmdldCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGZsb3cucGFyYWxsZWwocHJvbWlzZXMpLnRoZW4ocmVzcCA9PiB7XG4gICAgICBsZXQgZmx1c2hQcm9taXNlcyA9IFtdXG5cbiAgICAgIC8vIEZsdXNoIHRoZSBjYWNoZXMgaWYgdGhlIGNhY2hlZCBidWlsZCBpZCBpcyBzZXQgKGFzIGEgc2FmZXR5IG1lYXN1cmUpXG4gICAgICAvLyBhbmQgdGhlIGNhY2hlZCBidWlsZCBpZCBpcyBvbGRlciB0aGFuIHRoZSBjdXJyZW50IG9uZVxuICAgICAgaWYgKHJlc3AuY2FjaGVCdWlsZElkICYmIHJlc3AuY2FjaGVCdWlsZElkIDwgcmVzcC5idWlsZElkKSB7XG4gICAgICAgIHRoaXMuZGVidWdNZXNzYWdlKGBmbHVzaGluZyB0aGUgY2FjaGUgYmVjYXVzZSBvZiBhIG5ldyBidWlsZGApXG4gICAgICAgIGZsdXNoUHJvbWlzZXMgPSB0aGlzLmNhY2hlcy5tYXAoY2FjaGUgPT4gKCkgPT4gY2FjaGUuZmx1c2goKSlcbiAgICAgIH1cblxuICAgICAgLy8gRmx1c2ggdGhlIGNhY2hlcyAoaWYgbmVlZGVkKSBhbmQgc2F2ZSB0aGUgY3VycmVudCBidWlsZCBpZFxuICAgICAgcmV0dXJuIGZsb3cucGFyYWxsZWwoZmx1c2hQcm9taXNlcylcbiAgICAgICAgLnRoZW4oKCkgPT4gYnVpbGRFbmRwb2ludC5fY2FjaGVTZXRTaW5nbGUoJ2NhY2hlQnVpbGRJZCcsIHJlc3AuYnVpbGRJZCkpXG4gICAgfSlcbiAgfVxuXG4gIC8vIEFsbCB0aGUgZGlmZmVyZW50IEFQSSBlbmRwb2ludHNcbiAgYWNjb3VudCAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuQWNjb3VudEVuZHBvaW50KHRoaXMpXG4gIH1cblxuICBhY2hpZXZlbWVudHMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLkFjaGlldmVtZW50c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBiYWNrc3RvcnkgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLkJhY2tzdG9yeUVuZHBvaW50KHRoaXMpXG4gIH1cblxuICBidWlsZCAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuQnVpbGRFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgY2F0cyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuQ2F0c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBjaGFyYWN0ZXJzIChuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuQ2hhcmFjdGVyc0VuZHBvaW50KHRoaXMsIG5hbWUpXG4gIH1cblxuICBjb2xvcnMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLkNvbG9yc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBjb21tZXJjZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuQ29tbWVyY2VFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgY29udGluZW50cyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuQ29udGluZW50c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBjdXJyZW5jaWVzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5DdXJyZW5jaWVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGRhaWx5Y3JhZnRpbmcgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLkRhaWx5Y3JhZnRpbmdFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgZHVuZ2VvbnMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLkR1bmdlb25zRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGVtYmxlbSAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuRW1ibGVtRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGVtb3RlcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuRW1vdGVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGV2ZW50cyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuRXZlbnRzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGZpbGVzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5GaWxlc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBmaW5pc2hlcnMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLkZpbmlzaGVyc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBnbGlkZXJzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5HbGlkZXJzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGd1aWxkIChpZCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLkd1aWxkRW5kcG9pbnQodGhpcywgaWQpXG4gIH1cblxuICBob21lICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5Ib21lRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGhvbWVzdGVhZCAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuSG9tZXN0ZWFkRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGl0ZW1zICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5JdGVtc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBpdGVtc3RhdHMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLkl0ZW1zdGF0c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBqYWRlYm90cyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuSmFkZWJvdHNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgbGVnZW5kYXJ5YXJtb3J5ICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5MZWdlbmRhcnlhcm1vcnlFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgbGVnZW5kcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuTGVnZW5kc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBtYWlsY2FycmllcnMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLk1haWxjYXJyaWVyc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBtYXBjaGVzdHMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLk1hcGNoZXN0c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBtYXBzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5NYXBzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG1hc3RlcmllcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuTWFzdGVyaWVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG1hdGVyaWFscyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuTWF0ZXJpYWxzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG1pbmlzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5NaW5pc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBtb3VudHMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLk1vdW50c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBub2RlcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuTm9kZXNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgbm92ZWx0aWVzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5Ob3ZlbHRpZXNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgb3V0Zml0cyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuT3V0Zml0c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBwZXRzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5QZXRzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHByb2Zlc3Npb25zICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5Qcm9mZXNzaW9uc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBwdnAgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLlB2cEVuZHBvaW50KHRoaXMpXG4gIH1cblxuICBxdWFnZ2FucyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuUXVhZ2dhbnNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgcXVlc3RzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5RdWVzdHNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgcmFjZXMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLlJhY2VzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHJhaWRzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5SYWlkc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICByZWNpcGVzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5SZWNpcGVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHNraWZmcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuU2tpZmZzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHNraWxscyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuU2tpbGxzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHNraW5zICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5Ta2luc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBzcGVjaWFsaXphdGlvbnMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLlNwZWNpYWxpemF0aW9uc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBzdG9yaWVzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5TdG9yaWVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHRpdGxlcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuVGl0bGVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHRva2VuaW5mbyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuVG9rZW5pbmZvRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHRyYWl0cyAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuVHJhaXRzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHdpemFyZHN2YXVsdCAoKSB7XG4gICAgcmV0dXJuIG5ldyBlbmRwb2ludHMuV2l6YXJkc3ZhdWx0RW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHdvcmxkYm9zc2VzICgpIHtcbiAgICByZXR1cm4gbmV3IGVuZHBvaW50cy5Xb3JsZGJvc3Nlc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICB3b3JsZHMgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLldvcmxkc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICB3dncgKCkge1xuICAgIHJldHVybiBuZXcgZW5kcG9pbnRzLld2d0VuZHBvaW50KHRoaXMpXG4gIH1cbn1cbiIsImNvbnN0IHFzID0gcmVxdWlyZSgncXVlcnlzdHJpbmdpZnknKVxuY29uc3QgdW5pcXVlID0gcmVxdWlyZSgnYXJyYXktdW5pcXVlJylcbmNvbnN0IGNodW5rID0gcmVxdWlyZSgnY2h1bmsnKVxuY29uc3QgaGFzaFN0cmluZyA9IHJlcXVpcmUoJy4vaGFzaCcpXG5cbmNvbnN0IGNsb25lID0gKHgpID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoeCkpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChwYXJlbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IHBhcmVudC5jbGllbnRcbiAgICB0aGlzLnNjaGVtYVZlcnNpb24gPSBwYXJlbnQuc2NoZW1hVmVyc2lvbiB8fCAnMjAxOS0wMy0yMFQwMDowMDowMC4wMDBaJ1xuICAgIHRoaXMubGFuZyA9IHBhcmVudC5sYW5nXG4gICAgdGhpcy5hcGlLZXkgPSBwYXJlbnQuYXBpS2V5XG4gICAgdGhpcy5mZXRjaCA9IHBhcmVudC5mZXRjaFxuICAgIHRoaXMuY2FjaGVzID0gcGFyZW50LmNhY2hlc1xuICAgIHRoaXMuZGVidWcgPSBwYXJlbnQuZGVidWdcblxuICAgIHRoaXMuYmFzZVVybCA9ICdodHRwczovL2FwaS5ndWlsZHdhcnMyLmNvbSdcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gZmFsc2VcbiAgICB0aGlzLm1heFBhZ2VTaXplID0gMjAwXG4gICAgdGhpcy5pc0J1bGsgPSBmYWxzZVxuICAgIHRoaXMuYnVsa0lkID0gJ2lkJ1xuICAgIHRoaXMuc3VwcG9ydHNCdWxrQWxsID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSBmYWxzZVxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gZmFsc2VcbiAgICB0aGlzLmlzT3B0aW9uYWxseUF1dGhlbnRpY2F0ZWQgPSBmYWxzZVxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBmYWxzZVxuXG4gICAgdGhpcy5fc2tpcENhY2hlID0gZmFsc2VcbiAgfVxuXG4gIC8vIFNldCB0aGUgc2NoZW1hIHZlcnNpb25cbiAgc2NoZW1hIChzY2hlbWEpIHtcbiAgICB0aGlzLnNjaGVtYVZlcnNpb24gPSBzY2hlbWFcbiAgICB0aGlzLmRlYnVnTWVzc2FnZShgc2V0IHRoZSBzY2hlbWEgdG8gJHtzY2hlbWF9YClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIHNjaGVtYSB2ZXJzaW9uIGluY2x1ZGVzIGEgc3BlY2lmaWMgdmVyc2lvblxuICBfc2NoZW1hSW5jbHVkZXMgKGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWFWZXJzaW9uID49IGRhdGVcbiAgfVxuXG4gIC8vIFNldCB0aGUgbGFuZ3VhZ2UgZm9yIGxvY2FsZS1hd2FyZSBlbmRwb2ludHNcbiAgbGFuZ3VhZ2UgKGxhbmcpIHtcbiAgICB0aGlzLmxhbmcgPSBsYW5nXG4gICAgdGhpcy5kZWJ1Z01lc3NhZ2UoYHNldCB0aGUgbGFuZ3VhZ2UgdG8gJHtsYW5nfWApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIFNldCB0aGUgYXBpIGtleSBmb3IgYXV0aGVudGljYXRlZCBlbmRwb2ludHNcbiAgYXV0aGVudGljYXRlIChhcGlLZXkpIHtcbiAgICB0aGlzLmFwaUtleSA9IGFwaUtleVxuICAgIHRoaXMuZGVidWdNZXNzYWdlKGBzZXQgdGhlIGFwaSBrZXkgdG8gJHthcGlLZXl9YClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gU2V0IHRoZSBkZWJ1Z2dpbmcgZmxhZ1xuICBkZWJ1Z2dpbmcgKGZsYWcpIHtcbiAgICB0aGlzLmRlYnVnID0gZmxhZ1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBQcmludCBvdXQgYSBkZWJ1ZyBtZXNzYWdlIGlmIGRlYnVnZ2luZyBpcyBlbmFibGVkXG4gIGRlYnVnTWVzc2FnZSAoc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbZ3cyYXBpLWNsaWVudF0gJHtzdHJpbmd9YClcbiAgICB9XG4gIH1cblxuICAvLyBTa2lwIGNhY2hpbmcgYW5kIGdldCB0aGUgbGl2ZSBkYXRhXG4gIGxpdmUgKCkge1xuICAgIHRoaXMuX3NraXBDYWNoZSA9IHRydWVcbiAgICB0aGlzLmRlYnVnTWVzc2FnZShgc2tpcHBpbmcgY2FjaGVgKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBHZXQgYWxsIGlkc1xuICBpZHMgKCkge1xuICAgIHRoaXMuZGVidWdNZXNzYWdlKGBpZHMoJHt0aGlzLnVybH0pIGNhbGxlZGApXG5cbiAgICBpZiAoIXRoaXMuaXNCdWxrKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdcImlkc1wiIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBidWxrIGV4cGFuZGluZyBlbmRwb2ludHMnKSlcbiAgICB9XG5cbiAgICAvLyBUaGVyZSBpcyBubyBjYWNoZSB0aW1lIHNldCwgc28gYWx3YXlzIHVzZSB0aGUgbGl2ZSBkYXRhXG4gICAgaWYgKCF0aGlzLmNhY2hlVGltZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lkcygpXG4gICAgfVxuXG4gICAgLy8gR2V0IGFzIG11Y2ggYXMgcG9zc2libGUgb3V0IG9mIHRoZSBjYWNoZVxuICAgIGNvbnN0IGhhc2ggPSB0aGlzLl9jYWNoZUhhc2goJ2lkcycpXG4gICAgY29uc3QgaGFuZGxlQ2FjaGVDb250ZW50ID0gKGNhY2hlZCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICB0aGlzLmRlYnVnTWVzc2FnZShgaWRzKCR7dGhpcy51cmx9KSByZXNvbHZpbmcgZnJvbSBjYWNoZWApXG4gICAgICAgIHJldHVybiBjYWNoZWRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2lkcygpLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgIHRoaXMuX2NhY2hlU2V0U2luZ2xlKGhhc2gsIGNvbnRlbnQpXG4gICAgICAgIHJldHVybiBjb250ZW50XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY29udGVudCBlaXRoZXIgZnJvbSB0aGUgY2FjaGUgb3IgQVBJLCB3cml0ZSBpdCBpbnRvIHRoZSBjYWNoZSBhbmQgcmV0dXJuIGEgY2xvbmVcbiAgICBjb25zdCBjb250ZW50UHJvbWlzZSA9IHRoaXMuX3NraXBDYWNoZVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUoZmFsc2UpLnRoZW4oaGFuZGxlQ2FjaGVDb250ZW50KVxuICAgICAgOiB0aGlzLl9jYWNoZUdldFNpbmdsZShoYXNoKS50aGVuKGhhbmRsZUNhY2hlQ29udGVudClcblxuICAgIHJldHVybiBjb250ZW50UHJvbWlzZS50aGVuKGNsb25lKVxuICB9XG5cbiAgLy8gR2V0IGFsbCBpZHMgZnJvbSB0aGUgbGl2ZSBBUElcbiAgX2lkcyAoKSB7XG4gICAgdGhpcy5kZWJ1Z01lc3NhZ2UoYGlkcygke3RoaXMudXJsfSkgcmVxdWVzdGluZyBmcm9tIGFwaWApXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QodGhpcy51cmwpXG4gIH1cblxuICAvLyBHZXQgYSBzaW5nbGUgZW50cnkgYnkgaWRcbiAgZ2V0IChpZCwgdXJsID0gZmFsc2UpIHtcbiAgICB0aGlzLmRlYnVnTWVzc2FnZShgZ2V0KCR7dGhpcy51cmx9KSBjYWxsZWRgKVxuXG4gICAgaWYgKCFpZCAmJiB0aGlzLmlzQnVsayAmJiAhdXJsKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdcImdldFwiIHJlcXVpcmVzIGFuIGlkJykpXG4gICAgfVxuXG4gICAgLy8gVGhlcmUgaXMgbm8gY2FjaGUgdGltZSBzZXQsIHNvIGFsd2F5cyB1c2UgdGhlIGxpdmUgZGF0YVxuICAgIGlmICghdGhpcy5jYWNoZVRpbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9nZXQoaWQsIHVybClcbiAgICB9XG5cbiAgICAvLyBHZXQgYXMgbXVjaCBhcyBwb3NzaWJsZSBvdXQgb2YgdGhlIGNhY2hlXG4gICAgY29uc3QgaGFzaCA9IHRoaXMuX2NhY2hlSGFzaChpZClcbiAgICBjb25zdCBoYW5kbGVDYWNoZUNvbnRlbnQgPSAoY2FjaGVkKSA9PiB7XG4gICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgIHRoaXMuZGVidWdNZXNzYWdlKGBnZXQoJHt0aGlzLnVybH0pIHJlc29sdmluZyBmcm9tIGNhY2hlYClcbiAgICAgICAgcmV0dXJuIGNhY2hlZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fZ2V0KGlkLCB1cmwpLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgIHRoaXMuX2NhY2hlU2V0U2luZ2xlKGhhc2gsIGNvbnRlbnQpXG4gICAgICAgIHJldHVybiBjb250ZW50XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY29udGVudCBlaXRoZXIgZnJvbSB0aGUgY2FjaGUgb3IgQVBJLCB3cml0ZSBpdCBpbnRvIHRoZSBjYWNoZSBhbmQgcmV0dXJuIGEgY2xvbmVcbiAgICBjb25zdCBjb250ZW50UHJvbWlzZSA9IHRoaXMuX3NraXBDYWNoZVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUoZmFsc2UpLnRoZW4oaGFuZGxlQ2FjaGVDb250ZW50KVxuICAgICAgOiB0aGlzLl9jYWNoZUdldFNpbmdsZShoYXNoKS50aGVuKGhhbmRsZUNhY2hlQ29udGVudClcblxuICAgIHJldHVybiBjb250ZW50UHJvbWlzZS50aGVuKGNsb25lKVxuICB9XG5cbiAgLy8gR2V0IGEgc2luZ2xlIGVudHJ5IGJ5IGlkIGZyb20gdGhlIGxpdmUgQVBJXG4gIF9nZXQgKGlkLCB1cmwpIHtcbiAgICB0aGlzLmRlYnVnTWVzc2FnZShgZ2V0KCR7dGhpcy51cmx9KSByZXF1ZXN0aW5nIGZyb20gYXBpYClcblxuICAgIC8vIFJlcXVlc3QgdGhlIHNpbmdsZSBpZCBpZiB0aGUgZW5kcG9pbnQgYSBidWxrIGVuZHBvaW50XG4gICAgaWYgKHRoaXMuaXNCdWxrICYmICF1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KGAke3RoaXMudXJsfT9pZD0ke2lkfWApXG4gICAgfVxuXG4gICAgLy8gV2UgYXJlIGRlYWxpbmcgd2l0aCBhIGN1c3RvbSB1cmwgaW5zdGVhZFxuICAgIGlmICh1cmwpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KHRoaXMudXJsICsgaWQpXG4gICAgfVxuXG4gICAgLy8gSnVzdCByZXF1ZXN0IHRoZSBiYXNlIHVybFxuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KHRoaXMudXJsKVxuICB9XG5cbiAgLy8gR2V0IG11bHRpcGxlIGVudHJpZXMgYnkgaWRzXG4gIG1hbnkgKGlkcykge1xuICAgIHRoaXMuZGVidWdNZXNzYWdlKGBtYW55KCR7dGhpcy51cmx9KSBjYWxsZWQgKCR7aWRzLmxlbmd0aH0gaWRzKWApXG5cbiAgICBpZiAoIXRoaXMuaXNCdWxrKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdcIm1hbnlcIiBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgYnVsayBleHBhbmRpbmcgZW5kcG9pbnRzJykpXG4gICAgfVxuXG4gICAgLy8gRXhpdCBvdXQgZWFybHkgaWYgd2UgZG9uJ3QgcmVxdWVzdCBhbnkgaWRzXG4gICAgaWYgKGlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIG9ubHkgd29yayBvbiB1bmlxdWUgaWRzLCBzaW5jZSB0aGF0J3MgaG93IHRoZSBBUEkgd29ya3NcbiAgICBpZHMgPSB1bmlxdWUuaW1tdXRhYmxlKGlkcylcblxuICAgIC8vIFRoZXJlIGlzIG5vIGNhY2hlIHRpbWUgc2V0LCBzbyBhbHdheXMgdXNlIHRoZSBsaXZlIGRhdGFcbiAgICBpZiAoIXRoaXMuY2FjaGVUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWFueShpZHMpXG4gICAgfVxuXG4gICAgLy8gR2V0IGFzIG11Y2ggYXMgcG9zc2libGUgb3V0IG9mIHRoZSBjYWNoZVxuICAgIGNvbnN0IGhhc2hlcyA9IGlkcy5tYXAoaWQgPT4gdGhpcy5fY2FjaGVIYXNoKGlkKSlcbiAgICBjb25zdCBoYW5kbGVDYWNoZUNvbnRlbnQgPSAoY2FjaGVkKSA9PiB7XG4gICAgICBjYWNoZWQgPSBjYWNoZWQuZmlsdGVyKHggPT4geClcblxuICAgICAgaWYgKGNhY2hlZC5sZW5ndGggPT09IGlkcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kZWJ1Z01lc3NhZ2UoYG1hbnkoJHt0aGlzLnVybH0pIHJlc29sdmluZyBmdWxseSBmcm9tIGNhY2hlYClcbiAgICAgICAgcmV0dXJuIGNhY2hlZFxuICAgICAgfVxuXG4gICAgICB0aGlzLmRlYnVnTWVzc2FnZShgbWFueSgke3RoaXMudXJsfSkgcmVzb2x2aW5nIHBhcnRpYWxseSBmcm9tIGNhY2hlICgke2NhY2hlZC5sZW5ndGh9IGlkcylgKVxuICAgICAgY29uc3QgbWlzc2luZ0lkcyA9IGdldE1pc3NpbmdJZHMoaWRzLCBjYWNoZWQpXG4gICAgICByZXR1cm4gdGhpcy5fbWFueShtaXNzaW5nSWRzLCBjYWNoZWQubGVuZ3RoID4gMCkudGhlbihjb250ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGVDb250ZW50ID0gY29udGVudC5tYXAodmFsdWUgPT4gW3RoaXMuX2NhY2hlSGFzaCh2YWx1ZVt0aGlzLmJ1bGtJZF0pLCB2YWx1ZV0pXG4gICAgICAgIHRoaXMuX2NhY2hlU2V0TWFueShjYWNoZUNvbnRlbnQpXG5cbiAgICAgICAgLy8gTWVyZ2UgdGhlIG5ldyBjb250ZW50IHdpdGggdGhlIGNhY2hlZCBjb250ZW50IGFuZCBndWFyYW50ZWUgZWxlbWVudCBvcmRlclxuICAgICAgICBjb250ZW50ID0gY29udGVudC5jb25jYXQoY2FjaGVkKVxuICAgICAgICByZXR1cm4gdGhpcy5fc29ydEJ5SWRMaXN0KGNvbnRlbnQsIGlkcylcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gRmluZCB0aGUgaWRzIHRoYXQgYXJlIG1pc3NpbmcgaW4gdGhlIGNhY2hlZCBkYXRhXG4gICAgY29uc3QgZ2V0TWlzc2luZ0lkcyA9IChpZHMsIGNhY2hlZCkgPT4ge1xuICAgICAgY29uc3QgY2FjaGVkSWRzID0ge31cbiAgICAgIGNhY2hlZC5tYXAoeCA9PiB7XG4gICAgICAgIGNhY2hlZElkc1t4W3RoaXMuYnVsa0lkXV0gPSAxXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gaWRzLmZpbHRlcih4ID0+IGNhY2hlZElkc1t4XSAhPT0gMSlcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGNvbnRlbnQgZWl0aGVyIGZyb20gdGhlIGNhY2hlIG9yIEFQSSwgd3JpdGUgaXQgaW50byB0aGUgY2FjaGUgYW5kIHJldHVybiBhIGNsb25lXG4gICAgY29uc3QgY29udGVudFByb21pc2UgPSB0aGlzLl9za2lwQ2FjaGVcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKFtdKS50aGVuKGhhbmRsZUNhY2hlQ29udGVudClcbiAgICAgIDogdGhpcy5fY2FjaGVHZXRNYW55KGhhc2hlcykudGhlbihoYW5kbGVDYWNoZUNvbnRlbnQpXG5cbiAgICByZXR1cm4gY29udGVudFByb21pc2UudGhlbihjbG9uZSlcbiAgfVxuXG4gIC8vIEdldCBtdWx0aXBsZSBlbnRyaWVzIGJ5IGlkcyBmcm9tIHRoZSBsaXZlIEFQSVxuICBfbWFueSAoaWRzLCBwYXJ0aWFsUmVxdWVzdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5kZWJ1Z01lc3NhZ2UoYG1hbnkoJHt0aGlzLnVybH0pIHJlcXVlc3RpbmcgZnJvbSBhcGkgKCR7aWRzLmxlbmd0aH0gaWRzKWApXG5cbiAgICAvLyBDaHVuayB0aGUgcmVxdWVzdHMgdG8gdGhlIG1heCBwYWdlIHNpemVcbiAgICBjb25zdCBwYWdlcyA9IGNodW5rKGlkcywgdGhpcy5tYXhQYWdlU2l6ZSlcbiAgICBjb25zdCByZXF1ZXN0cyA9IHBhZ2VzLm1hcChwYWdlID0+IGAke3RoaXMudXJsfT9pZHM9JHtwYWdlLmpvaW4oJywnKX1gKVxuXG4gICAgLy8gSWYgd2UgYXJlIHBhcnRpYWxseSBjYWNoaW5nIGFuZCBhbGwgbm90LWNhY2hlZCBpZHMgYXJlIGFsbCBpbnZhbGlkLFxuICAgIC8vIHNpbXVsYXRlIHRoZSBBUEkgYmVoYXZpb3VyIGJ5IHNpbGVudGx5IHN3YWxsb3dpbmcgZXJyb3JzLlxuICAgIGxldCBoYW5kbGVNaXNzaW5nSWRzID0gKGVycikgPT4ge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwYXJ0aWFsUmVxdWVzdCAmJiBlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pXG4gICAgICB9XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgIH1cblxuICAgIC8vIFdvcmsgb24gYWxsIHJlcXVlc3RzIGluIHBhcmFsbGVsIGFuZCB0aGVuIGZsYXR0ZW4gdGhlIHJlc3BvbnNlcyBpbnRvIG9uZVxuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TWFueShyZXF1ZXN0cylcbiAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiByZXNwb25zZXMucmVkdWNlKCh4LCB5KSA9PiB4LmNvbmNhdCh5KSwgW10pKVxuICAgICAgLmNhdGNoKGhhbmRsZU1pc3NpbmdJZHMpXG4gIH1cblxuICAvLyBHZXQgYSBzaW5nbGUgcGFnZVxuICBwYWdlIChwYWdlLCBzaXplID0gdGhpcy5tYXhQYWdlU2l6ZSkge1xuICAgIHRoaXMuZGVidWdNZXNzYWdlKGBwYWdlKCR7dGhpcy51cmx9KSBjYWxsZWRgKVxuXG4gICAgaWYgKCF0aGlzLmlzQnVsayAmJiAhdGhpcy5pc1BhZ2luYXRlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignXCJwYWdlXCIgaXMgb25seSBhdmFpbGFibGUgZm9yIGJ1bGsgZXhwYW5kaW5nIG9yIHBhZ2luYXRlZCBlbmRwb2ludHMnKSlcbiAgICB9XG5cbiAgICBpZiAoc2l6ZSA+IHRoaXMubWF4UGFnZVNpemUgfHwgc2l6ZSA8PSAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBcInNpemVcIiBoYXMgdG8gYmUgYmV0d2VlbiAwIGFuZCAke3RoaXMubWF4UGFnZVNpemV9LCB3YXMgJHtzaXplfWApKVxuICAgIH1cblxuICAgIGlmIChwYWdlIDwgMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcigncGFnZSBoYXMgdG8gYmUgMCBvciBncmVhdGVyJykpXG4gICAgfVxuXG4gICAgLy8gVGhlcmUgaXMgbm8gY2FjaGUgdGltZSBzZXQsIHNvIGFsd2F5cyB1c2UgdGhlIGxpdmUgZGF0YVxuICAgIGlmICghdGhpcy5jYWNoZVRpbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYWdlKHBhZ2UsIHNpemUpXG4gICAgfVxuXG4gICAgLy8gR2V0IGFzIG11Y2ggYXMgcG9zc2libGUgb3V0IG9mIHRoZSBjYWNoZVxuICAgIGNvbnN0IGhhc2ggPSB0aGlzLl9jYWNoZUhhc2goJ3BhZ2UtJyArIHBhZ2UgKyAnLycgKyBzaXplKVxuICAgIGNvbnN0IGhhbmRsZUNhY2hlQ29udGVudCA9IChjYWNoZWQpID0+IHtcbiAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgdGhpcy5kZWJ1Z01lc3NhZ2UoYHBhZ2UoJHt0aGlzLnVybH0pIHJlc29sdmluZyBmcm9tIGNhY2hlYClcbiAgICAgICAgcmV0dXJuIGNhY2hlZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fcGFnZShwYWdlLCBzaXplKS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgICBsZXQgY2FjaGVDb250ZW50ID0gW1toYXNoLCBjb250ZW50XV1cblxuICAgICAgICBpZiAodGhpcy5pc0J1bGspIHtcbiAgICAgICAgICBjYWNoZUNvbnRlbnQgPSBjYWNoZUNvbnRlbnQuY29uY2F0KGNvbnRlbnQubWFwKHZhbHVlID0+IFt0aGlzLl9jYWNoZUhhc2godmFsdWVbdGhpcy5idWxrSWRdKSwgdmFsdWVdKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NhY2hlU2V0TWFueShjYWNoZUNvbnRlbnQpXG4gICAgICAgIHJldHVybiBjb250ZW50XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY29udGVudCBlaXRoZXIgZnJvbSB0aGUgY2FjaGUgb3IgQVBJLCB3cml0ZSBpdCBpbnRvIHRoZSBjYWNoZSBhbmQgcmV0dXJuIGEgY2xvbmVcbiAgICBjb25zdCBjb250ZW50UHJvbWlzZSA9IHRoaXMuX3NraXBDYWNoZVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUoZmFsc2UpLnRoZW4oaGFuZGxlQ2FjaGVDb250ZW50KVxuICAgICAgOiB0aGlzLl9jYWNoZUdldFNpbmdsZShoYXNoKS50aGVuKGhhbmRsZUNhY2hlQ29udGVudClcblxuICAgIHJldHVybiBjb250ZW50UHJvbWlzZS50aGVuKGNsb25lKVxuICB9XG5cbiAgLy8gR2V0IGEgc2luZ2xlIHBhZ2UgZnJvbSB0aGUgbGl2ZSBBUElcbiAgX3BhZ2UgKHBhZ2UsIHNpemUpIHtcbiAgICB0aGlzLmRlYnVnTWVzc2FnZShgcGFnZSgke3RoaXMudXJsfSkgcmVxdWVzdGluZyBmcm9tIGFwaWApXG4gICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoYCR7dGhpcy51cmx9P3BhZ2U9JHtwYWdlfSZwYWdlX3NpemU9JHtzaXplfWApXG4gIH1cblxuICAvLyBHZXQgYWxsIGVudHJpZXNcbiAgYWxsICgpIHtcbiAgICB0aGlzLmRlYnVnTWVzc2FnZShgYWxsKCR7dGhpcy51cmx9KSBjYWxsZWRgKVxuXG4gICAgaWYgKCF0aGlzLmlzQnVsayAmJiAhdGhpcy5pc1BhZ2luYXRlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignXCJhbGxcIiBpcyBvbmx5IGF2YWlsYWJsZSBmb3IgYnVsayBleHBhbmRpbmcgb3IgcGFnaW5hdGVkIGVuZHBvaW50cycpKVxuICAgIH1cblxuICAgIC8vIFRoZXJlIGlzIG5vIGNhY2hlIHRpbWUgc2V0LCBzbyBhbHdheXMgdXNlIHRoZSBsaXZlIGRhdGFcbiAgICBpZiAoIXRoaXMuY2FjaGVUaW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYWxsKClcbiAgICB9XG5cbiAgICAvLyBHZXQgYXMgbXVjaCBhcyBwb3NzaWJsZSBvdXQgb2YgdGhlIGNhY2hlXG4gICAgY29uc3QgaGFzaCA9IHRoaXMuX2NhY2hlSGFzaCgnYWxsJylcbiAgICBjb25zdCBoYW5kbGVDYWNoZUNvbnRlbnQgPSAoY2FjaGVkKSA9PiB7XG4gICAgICBpZiAoY2FjaGVkKSB7XG4gICAgICAgIHRoaXMuZGVidWdNZXNzYWdlKGBhbGwoJHt0aGlzLnVybH0pIHJlc29sdmluZyBmcm9tIGNhY2hlYClcbiAgICAgICAgcmV0dXJuIGNhY2hlZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5fYWxsKCkudGhlbihjb250ZW50ID0+IHtcbiAgICAgICAgbGV0IGNhY2hlQ29udGVudCA9IFtbaGFzaCwgY29udGVudF1dXG5cbiAgICAgICAgaWYgKHRoaXMuaXNCdWxrKSB7XG4gICAgICAgICAgY2FjaGVDb250ZW50ID0gY2FjaGVDb250ZW50LmNvbmNhdChjb250ZW50Lm1hcCh2YWx1ZSA9PiBbdGhpcy5fY2FjaGVIYXNoKHZhbHVlW3RoaXMuYnVsa0lkXSksIHZhbHVlXSkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYWNoZVNldE1hbnkoY2FjaGVDb250ZW50KVxuICAgICAgICByZXR1cm4gY29udGVudFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGNvbnRlbnQgZWl0aGVyIGZyb20gdGhlIGNhY2hlIG9yIEFQSSwgd3JpdGUgaXQgaW50byB0aGUgY2FjaGUgYW5kIHJldHVybiBhIGNsb25lXG4gICAgY29uc3QgY29udGVudFByb21pc2UgPSB0aGlzLl9za2lwQ2FjaGVcbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKS50aGVuKGhhbmRsZUNhY2hlQ29udGVudClcbiAgICAgIDogdGhpcy5fY2FjaGVHZXRTaW5nbGUoaGFzaCkudGhlbihoYW5kbGVDYWNoZUNvbnRlbnQpXG5cbiAgICByZXR1cm4gY29udGVudFByb21pc2UudGhlbihjbG9uZSlcbiAgfVxuXG4gIC8vIEdldCBhbGwgZW50cmllcyBmcm9tIHRoZSBsaXZlIEFQSVxuICBfYWxsICgpIHtcbiAgICB0aGlzLmRlYnVnTWVzc2FnZShgYWxsKCR7dGhpcy51cmx9KSByZXF1ZXN0aW5nIGZyb20gYXBpYClcblxuICAgIC8vIFVzZSBidWxrIGV4cGFuc2lvbiBpZiB0aGUgZW5kcG9pbnQgc3VwcG9ydHMgdGhlIFwiYWxsXCIga2V5d29yZFxuICAgIGlmICh0aGlzLmlzQnVsayAmJiB0aGlzLnN1cHBvcnRzQnVsa0FsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoYCR7dGhpcy51cmx9P2lkcz1hbGxgKVxuICAgIH1cblxuICAgIC8vIEdldCBldmVyeXRoaW5nIHZpYSBhbGwgcGFnZXMgaW5zdGVhZFxuICAgIGxldCB0b3RhbEVudHJpZXNcbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdChgJHt0aGlzLnVybH0/cGFnZT0wJnBhZ2Vfc2l6ZT0ke3RoaXMubWF4UGFnZVNpemV9YCwgJ3Jlc3BvbnNlJylcbiAgICAgIC50aGVuKGZpcnN0UGFnZSA9PiB7XG4gICAgICAgIC8vIEdldCB0aGUgdG90YWwgbnVtYmVyIG9mIGVudHJpZXMgb2ZmIHRoZSBmaXJzdCBwYWdlJ3MgaGVhZGVyc1xuICAgICAgICB0b3RhbEVudHJpZXMgPSBmaXJzdFBhZ2UuaGVhZGVycy5nZXQoJ1gtUmVzdWx0LVRvdGFsJylcbiAgICAgICAgcmV0dXJuIGZpcnN0UGFnZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAvLyBSZXR1cm4gZWFybHkgaWYgdGhlIGZpcnN0IHBhZ2UgYWxyZWFkeSBpbmNsdWRlcyBhbGwgZW50cmllc1xuICAgICAgICBpZiAodG90YWxFbnRyaWVzIDw9IHRoaXMubWF4UGFnZVNpemUpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXF1ZXN0IGFsbCBtaXNzaW5nIHBhZ2VzIGluIHBhcmFsbGVsXG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtdXG4gICAgICAgIGZvciAobGV0IHBhZ2UgPSAxOyBwYWdlIDwgTWF0aC5jZWlsKHRvdGFsRW50cmllcyAvIHRoaXMubWF4UGFnZVNpemUpOyBwYWdlKyspIHtcbiAgICAgICAgICByZXF1ZXN0cy5wdXNoKGAke3RoaXMudXJsfT9wYWdlPSR7cGFnZX0mcGFnZV9zaXplPSR7dGhpcy5tYXhQYWdlU2l6ZX1gKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RNYW55KHJlcXVlc3RzKS50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICAgICAgcmVzcG9uc2VzID0gcmVzcG9uc2VzLnJlZHVjZSgoeCwgeSkgPT4geC5jb25jYXQoeSksIFtdKVxuICAgICAgICAgIHJldHVybiByZXN1bHQuY29uY2F0KHJlc3BvbnNlcylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gIH1cblxuICAvLyBTZXQgYSBzaW5nbGUgY2FjaGUga2V5IGluIGFsbCBjb25uZWN0ZWQgY2FjaGUgc3RvcmFnZXNcbiAgX2NhY2hlU2V0U2luZ2xlIChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5jYWNoZXMubWFwKGNhY2hlID0+IHtcbiAgICAgIGNhY2hlLnNldChrZXksIHZhbHVlLCB0aGlzLmNhY2hlVGltZSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tndzJhcGktY2xpZW50XSBFcnJvcmVkIGR1cmluZyBfY2FjaGVTZXRTaW5nbGUnLCB7IGVycm9yLCBjYWNoZSwga2V5LCB2YWx1ZSB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8gU2V0IG11bHRpcGxlcyBjYWNoZSBrZXkgaW4gYWxsIGNvbm5lY3RlZCBjYWNoZSBzdG9yYWdlc1xuICBfY2FjaGVTZXRNYW55ICh2YWx1ZXMpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKHZhbHVlID0+IFt2YWx1ZVswXSwgdmFsdWVbMV0sIHRoaXMuY2FjaGVUaW1lXSlcbiAgICB0aGlzLmNhY2hlcy5tYXAoY2FjaGUgPT4ge1xuICAgICAgY2FjaGUubXNldCh2YWx1ZXMpLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbZ3cyYXBpLWNsaWVudF0gRXJyb3JlZCBkdXJpbmcgX2NhY2hlU2V0TWFueScsIHsgZXJyb3IsIGNhY2hlLCB2YWx1ZXMgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIEdldCBhIGNhY2hlZCB2YWx1ZSBvdXQgb2YgdGhlIGZpcnN0IHBvc3NpYmxlIGNvbm5lY3RlZCBjYWNoZSBzdG9yYWdlc1xuICBfY2FjaGVHZXRTaW5nbGUgKGtleSwgaW5kZXggPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVzW2luZGV4XS5nZXQoa2V5KS50aGVuKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSB8fCBpbmRleCA9PT0gdGhpcy5jYWNoZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlR2V0U2luZ2xlKGtleSwgKytpbmRleClcbiAgICB9KVxuICB9XG5cbiAgLy8gR2V0IG11bHRpcGxlIGNhY2hlZCB2YWx1ZXMgb3V0IG9mIHRoZSBmaXJzdCBwb3NzaWJsZSBjb25uZWN0ZWQgY2FjaGUgc3RvcmFnZXNcbiAgX2NhY2hlR2V0TWFueSAoa2V5cywgaW5kZXggPSAwKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVzW2luZGV4XS5tZ2V0KGtleXMpLnRoZW4odmFsdWVzID0+IHtcbiAgICAgIGNvbnN0IGNsZWFuVmFsdWVzID0gdmFsdWVzLmZpbHRlcih4ID0+IHgpXG5cbiAgICAgIC8vIFdlIGdvdCBhbGwgdGhlIHJlcXVlc3RlZCBrZXlzIG9yIGFyZSB0aHJvdWdoIGFsbCBzdG9yYWdlc1xuICAgICAgaWYgKGNsZWFuVmFsdWVzLmxlbmd0aCA9PT0ga2V5cy5sZW5ndGggfHwgaW5kZXggPT09IHRoaXMuY2FjaGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlc1xuICAgICAgfVxuXG4gICAgICAvLyBUcnkgdG8gYXNrIHRoZSBuZXh0IHN0b3JhZ2UgZm9yIHRoZSBrZXlzIHRoYXQgd2UgZGlkbid0IGdldFxuICAgICAgbGV0IG1pc3NpbmdLZXlzID0gdmFsdWVzXG4gICAgICAgIC5tYXAoKHZhbHVlLCBpKSA9PiB2YWx1ZSA/IGZhbHNlIDoga2V5c1tpXSlcbiAgICAgICAgLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSlcblxuICAgICAgLy8gVGhlbiBtZXJnZSB0aGUgdmFsdWVzIG9mIHRoZSBuZXh0IHN0b3JhZ2UgaW50byB0aGUgbWlzc2luZyBzbG90c1xuICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlR2V0TWFueShtaXNzaW5nS2V5cywgKytpbmRleCkudGhlbihtaXNzaW5nVmFsdWVzID0+IHtcbiAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgIHJldHVybiB2YWx1ZXMubWFwKHZhbHVlID0+IHZhbHVlIHx8IG1pc3NpbmdWYWx1ZXNbaSsrXSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8vIEdldCBhIGNhY2hlIGhhc2ggZm9yIGFuIGlkZW50aWZpZXJcbiAgX2NhY2hlSGFzaCAoaWQpIHtcbiAgICBsZXQgaGFzaCA9IGhhc2hTdHJpbmcodGhpcy5iYXNlVXJsICsgdGhpcy51cmwgKyAnOicgKyB0aGlzLnNjaGVtYVZlcnNpb24pXG5cbiAgICBpZiAoaWQpIHtcbiAgICAgIGhhc2ggKz0gJzonICsgaWRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0xvY2FsaXplZCkge1xuICAgICAgaGFzaCArPSAnOicgKyB0aGlzLmxhbmdcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdXNlc0FwaUtleSgpKSB7XG4gICAgICBoYXNoICs9ICc6JyArIGhhc2hTdHJpbmcodGhpcy5hcGlLZXkgKyAnJylcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzaFxuICB9XG5cbiAgLy8gRXhlY3V0ZSBhIHNpbmdsZSByZXF1ZXN0XG4gIF9yZXF1ZXN0ICh1cmwsIHR5cGUgPSAnanNvbicpIHtcbiAgICB1cmwgPSB0aGlzLl9idWlsZFVybCh1cmwpXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6IHVuZGVmaW5lZFxuXG4gICAgcmV0dXJuIHRoaXMuZmV0Y2guc2luZ2xlKHVybCwgeyB0eXBlLCBjcmVkZW50aWFscyB9KVxuICB9XG5cbiAgLy8gRXhlY3V0ZSBtdWx0aXBsZSByZXF1ZXN0cyBpbiBwYXJhbGxlbFxuICBfcmVxdWVzdE1hbnkgKHVybHMsIHR5cGUgPSAnanNvbicpIHtcbiAgICB1cmxzID0gdXJscy5tYXAodXJsID0+IHRoaXMuX2J1aWxkVXJsKHVybCkpXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gdGhpcy5jcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6IHVuZGVmaW5lZFxuXG4gICAgcmV0dXJuIHRoaXMuZmV0Y2gubWFueSh1cmxzLCB7IHR5cGUsIGNyZWRlbnRpYWxzIH0pXG4gIH1cblxuICAvLyBCdWlsZCB0aGUgaGVhZGVycyBmb3IgbG9jYWxpemF0aW9uIGFuZCBhdXRoZW50aWNhdGlvblxuICBfYnVpbGRVcmwgKHVybCkge1xuICAgIC8vIEFkZCB0aGUgYmFzZSB1cmxcbiAgICB1cmwgPSB0aGlzLmJhc2VVcmwgKyB1cmxcblxuICAgIC8vIFBhcnNlIGEgcG9zc2libHkgZXhpc3RpbmcgcXVlcnlcbiAgICBjb25zdCBwYXJzZWRVcmwgPSB1cmwuc3BsaXQoJz8nKVxuICAgIGxldCBwYXJzZWRRdWVyeSA9IHFzLnBhcnNlKHBhcnNlZFVybFsxXSB8fCAnJylcblxuICAgIGxldCBxdWVyeSA9IHt9XG5cbiAgICAvLyBTZXQgdGhlIHNjaGVtYSB2ZXJzaW9uXG4gICAgcXVlcnlbJ3YnXSA9IHRoaXMuc2NoZW1hVmVyc2lvblxuXG4gICAgLy8gT25seSBzZXQgdGhlIEFQSSBrZXkgZm9yIGF1dGhlbnRpY2F0ZWQgZW5kcG9pbnRzLFxuICAgIC8vIHdoZW4gaXQgaXMgcmVxdWlyZWQgb3Igb3B0aW9uYWwgYW5kIHNldCBvbiB0aGUgY2xpZW50XG4gICAgaWYgKHRoaXMuX3VzZXNBcGlLZXkoKSkge1xuICAgICAgcXVlcnlbJ2FjY2Vzc190b2tlbiddID0gdGhpcy5hcGlLZXlcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIGxhbmd1YWdlIGZvciBsb2NhbGl6ZWQgZW5kcG9pbnRzXG4gICAgaWYgKHRoaXMuaXNMb2NhbGl6ZWQpIHtcbiAgICAgIHF1ZXJ5WydsYW5nJ10gPSB0aGlzLmxhbmdcbiAgICB9XG5cbiAgICAvLyBNZXJnZSB0aGUgcGFyc2VkIHF1ZXJ5IHBhcnRzIG91dCBvZiB0aGUgdXJsXG4gICAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHF1ZXJ5LCBwYXJzZWRRdWVyeSlcblxuICAgIC8vIEJ1aWxkIHRoZSB1cmwgd2l0aCB0aGUgZmluaXNoZWQgcXVlcnlcbiAgICBxdWVyeSA9IHFzLnN0cmluZ2lmeShxdWVyeSwgdHJ1ZSkucmVwbGFjZSgvJTJDL2csICcsJylcbiAgICByZXR1cm4gcGFyc2VkVXJsWzBdICsgcXVlcnlcbiAgfVxuXG4gIC8vIEd1YXJhbnRlZSB0aGUgZWxlbWVudCBvcmRlciBvZiBidWxrIHJlc3VsdHNcbiAgX3NvcnRCeUlkTGlzdCAoZW50cmllcywgaWRzKSB7XG4gICAgLy8gSGFzaCBtYXAgb2YgdGhlIGluZGV4ZXMgZm9yIGJldHRlciB0aW1lIGNvbXBsZXhpdHkgb24gYmlnIGFycmF5c1xuICAgIGxldCBpbmRleE1hcCA9IHt9XG4gICAgaWRzLm1hcCgoeCwgaSkgPT4ge1xuICAgICAgaW5kZXhNYXBbeF0gPSBpXG4gICAgfSlcblxuICAgIC8vIFNvcnQgYnkgdGhlIGluZGV4ZXNcbiAgICBlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGluZGV4TWFwW2FbdGhpcy5idWxrSWRdXSAtIGluZGV4TWFwW2JbdGhpcy5idWxrSWRdXSlcbiAgICByZXR1cm4gZW50cmllc1xuICB9XG5cbiAgX3VzZXNBcGlLZXkgKCkge1xuICAgIHJldHVybiB0aGlzLmlzQXV0aGVudGljYXRlZCAmJiAoIXRoaXMuaXNPcHRpb25hbGx5QXV0aGVudGljYXRlZCB8fCB0aGlzLmFwaUtleSlcbiAgfVxufVxuIiwiY29uc3QgX2dldCA9IHJlcXVpcmUoJ2Zhc3QtZ2V0JylcbmNvbnN0IGZsb3cgPSByZXF1aXJlKCcuLi9mbG93LmpzJylcblxuZnVuY3Rpb24gYmxvYiAocGFyZW50KSB7XG4gIGNvbnN0IGNsaWVudCA9IHBhcmVudC5jbGllbnRcblxuICBjb25zdCByZXF1ZXN0cyA9IHtcbiAgICBhY2NvdW50OiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkuZ2V0KCkpLFxuICAgIGFjaGlldmVtZW50czogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmFjaGlldmVtZW50cygpLmdldCgpKSxcbiAgICBiYW5rOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkuYmFuaygpLmdldCgpKSxcbiAgICBjaGFyYWN0ZXJzOiB3cmFwKCgpID0+IGNsaWVudC5jaGFyYWN0ZXJzKCkuYWxsKCkpLFxuICAgICdjb21tZXJjZS5idXlzJzogd3JhcCgoKSA9PiBjbGllbnQuY29tbWVyY2UoKS50cmFuc2FjdGlvbnMoKS5jdXJyZW50KCkuYnV5cygpLmFsbCgpKSxcbiAgICAnY29tbWVyY2UuZGVsaXZlcnknOiB3cmFwKCgpID0+IGNsaWVudC5jb21tZXJjZSgpLmRlbGl2ZXJ5KCkuZ2V0KCkpLFxuICAgICdjb21tZXJjZS5zZWxscyc6IHdyYXAoKCkgPT4gY2xpZW50LmNvbW1lcmNlKCkudHJhbnNhY3Rpb25zKCkuY3VycmVudCgpLnNlbGxzKCkuYWxsKCkpLFxuICAgIGR1bmdlb25zOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkuZHVuZ2VvbnMoKS5nZXQoKSksXG4gICAgZHllczogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmR5ZXMoKS5nZXQoKSksXG4gICAgZW1vdGVzOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkuZW1vdGVzKCkuZ2V0KCkpLFxuICAgIGZpbmlzaGVyczogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmZpbmlzaGVycygpLmdldCgpKSxcbiAgICBnbGlkZXJzOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkuZ2xpZGVycygpLmdldCgpKSxcbiAgICBndWlsZHM6IHdyYXAoKCkgPT4gYWNjb3VudEd1aWxkcyhjbGllbnQpKSxcbiAgICAnaG9tZS5jYXRzJzogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmhvbWUoKS5jYXRzKCkuZ2V0KCkpLFxuICAgICdob21lLm5vZGVzJzogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmhvbWUoKS5ub2RlcygpLmdldCgpKSxcbiAgICAnaG9tZXN0ZWFkLmRlY29yYXRpb25zJzogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmhvbWVzdGVhZCgpLmRlY29yYXRpb25zKCkuZ2V0KCkpLFxuICAgICdob21lc3RlYWQuZ2x5cGhzJzogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmhvbWVzdGVhZCgpLmdseXBocygpLmdldCgpKSxcbiAgICBqYWRlYm90czogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmphZGVib3RzKCkuZ2V0KCkpLFxuICAgIGxlZ2VuZGFyeWFybW9yeTogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLmxlZ2VuZGFyeWFybW9yeSgpLmdldCgpKSxcbiAgICBsdWNrOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkubHVjaygpLmdldCgpKSxcbiAgICBtYWlsY2FycmllcnM6IHdyYXAoKCkgPT4gY2xpZW50LmFjY291bnQoKS5tYWlsY2FycmllcnMoKS5nZXQoKSksXG4gICAgbWFzdGVyaWVzOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkubWFzdGVyaWVzKCkuZ2V0KCkpLFxuICAgICdtYXN0ZXJ5LnBvaW50cyc6IHdyYXAoKCkgPT4gY2xpZW50LmFjY291bnQoKS5tYXN0ZXJ5KCkucG9pbnRzKCkuZ2V0KCkpLFxuICAgIG1hdGVyaWFsczogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLm1hdGVyaWFscygpLmdldCgpKSxcbiAgICBtaW5pczogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLm1pbmlzKCkuZ2V0KCkpLFxuICAgICdtb3VudHMuc2tpbnMnOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkubW91bnRzKCkuc2tpbnMoKS5nZXQoKSksXG4gICAgJ21vdW50cy50eXBlcyc6IHdyYXAoKCkgPT4gY2xpZW50LmFjY291bnQoKS5tb3VudHMoKS50eXBlcygpLmdldCgpKSxcbiAgICBub3ZlbHRpZXM6IHdyYXAoKCkgPT4gY2xpZW50LmFjY291bnQoKS5ub3ZlbHRpZXMoKS5nZXQoKSksXG4gICAgb3V0Zml0czogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLm91dGZpdHMoKS5nZXQoKSksXG4gICAgJ3B2cC5nYW1lcyc6IHdyYXAoKCkgPT4gY2xpZW50LmFjY291bnQoKS5wdnAoKS5nYW1lcygpLmFsbCgpKSxcbiAgICAncHZwLmhlcm9lcyc6IHdyYXAoKCkgPT4gY2xpZW50LmFjY291bnQoKS5wdnAoKS5oZXJvZXMoKS5nZXQoKSksXG4gICAgJ3B2cC5zdGFuZGluZ3MnOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkucHZwKCkuc3RhbmRpbmdzKCkuZ2V0KCkpLFxuICAgICdwdnAuc3RhdHMnOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkucHZwKCkuc3RhdHMoKS5nZXQoKSksXG4gICAgcmFpZHM6IHdyYXAoKCkgPT4gY2xpZW50LmFjY291bnQoKS5yYWlkcygpLmdldCgpKSxcbiAgICByZWNpcGVzOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkucmVjaXBlcygpLmdldCgpKSxcbiAgICBzaGFyZWQ6IHdyYXAoKCkgPT4gY2xpZW50LmFjY291bnQoKS5pbnZlbnRvcnkoKS5nZXQoKSksXG4gICAgc2tpZmZzOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkuc2tpZmZzKCkuZ2V0KCkpLFxuICAgIHNraW5zOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkuc2tpbnMoKS5nZXQoKSksXG4gICAgdGl0bGVzOiB3cmFwKCgpID0+IGNsaWVudC5hY2NvdW50KCkudGl0bGVzKCkuZ2V0KCkpLFxuICAgIHdhbGxldDogd3JhcCgoKSA9PiBjbGllbnQuYWNjb3VudCgpLndhbGxldCgpLmdldCgpKVxuICB9XG5cbiAgcmV0dXJuIGZsb3cucGFyYWxsZWwocmVxdWVzdHMpLnRoZW4oZGF0YSA9PiB7XG4gICAgZGF0YSA9IHVuZmxhdHRlbihkYXRhKVxuICAgIGRhdGEuY2hhcmFjdGVycyA9IGZpbHRlckJldGFDaGFyYWN0ZXJzKGRhdGEuY2hhcmFjdGVycylcbiAgICByZXR1cm4gZGF0YVxuICB9KVxufVxuXG4vLyBHZXQgdGhlIGd1aWxkIGRhdGEgYWNjZXNzaWJsZSBmb3IgdGhlIGFjY291bnRcbmZ1bmN0aW9uIGFjY291bnRHdWlsZHMgKGNsaWVudCkge1xuICByZXR1cm4gY2xpZW50LmFjY291bnQoKS5nZXQoKS50aGVuKGFjY291bnQgPT4ge1xuICAgIGlmICghYWNjb3VudC5ndWlsZF9sZWFkZXIpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIGxldCByZXF1ZXN0cyA9IGFjY291bnQuZ3VpbGRfbGVhZGVyLm1hcChpZCA9PiB3cmFwKCgpID0+IGd1aWxkRGF0YShpZCkpKVxuICAgIHJldHVybiBmbG93LnBhcmFsbGVsKHJlcXVlc3RzKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGd1aWxkRGF0YSAoaWQpIHtcbiAgICBsZXQgcmVxdWVzdHMgPSB7XG4gICAgICBkYXRhOiB3cmFwKCgpID0+IGNsaWVudC5ndWlsZCgpLmdldChpZCkpLFxuICAgICAgbWVtYmVyczogd3JhcCgoKSA9PiBjbGllbnQuZ3VpbGQoaWQpLm1lbWJlcnMoKS5nZXQoKSksXG4gICAgICByYW5rczogd3JhcCgoKSA9PiBjbGllbnQuZ3VpbGQoaWQpLnJhbmtzKCkuZ2V0KCkpLFxuICAgICAgc3Rhc2g6IHdyYXAoKCkgPT4gY2xpZW50Lmd1aWxkKGlkKS5zdGFzaCgpLmdldCgpKSxcbiAgICAgIHRlYW1zOiB3cmFwKCgpID0+IFByb21pc2UucmVzb2x2ZShudWxsKSksXG4gICAgICB0cmVhc3VyeTogd3JhcCgoKSA9PiBjbGllbnQuZ3VpbGQoaWQpLnRyZWFzdXJ5KCkuZ2V0KCkpLFxuICAgICAgdXBncmFkZXM6IHdyYXAoKCkgPT4gY2xpZW50Lmd1aWxkKGlkKS51cGdyYWRlcygpLmdldCgpKVxuICAgIH1cblxuICAgIHJldHVybiBmbG93LnBhcmFsbGVsKHJlcXVlc3RzKVxuICB9XG59XG5cbi8vIEZpbHRlciBvdXQgYmV0YSBjaGFyYWN0ZXJzIGZyb20gdGhlIHRvdGFsIGFjY291bnQgYmxvYiwgc2luY2UgdGhleSBhcmVcbi8vIHRlY2huaWNhbGx5IG5vdCBwYXJ0IG9mIHRoZSBhY3R1YWwgbGl2ZSBhY2NvdW50IGFuZCBsaXZlIG9uIGEgZGlmZmVyZW50IHNlcnZlclxuZnVuY3Rpb24gZmlsdGVyQmV0YUNoYXJhY3RlcnMgKGNoYXJhY3RlcnMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFjaGFyYWN0ZXJzKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBjaGFyYWN0ZXJzLmZpbHRlcih4ID0+ICF4LmZsYWdzIHx8ICF4LmZsYWdzLmluY2x1ZGVzKCdCZXRhJykpXG59XG5cbi8vIFdyYXAgYSBwcm9taXNlIGZ1bmN0aW9uIHNvIGFsbCBlcnJvcnMgdGhhdCBoYXZlIHRvIGRvIHdpdGggdGhlIEFQSVxuLy8ganVzdCByZXN1bHQgaW4gYW4gZW1wdHkgcmVzcG9uc2UgaW5zdGVhZCBvZiB0aHJvd2luZyBhbiBlcnJvclxuLy8gVGhpcyBwcmV2ZW50cyBBUEkgZXJyb3JzIC8gY2hhbmdlcyBicmVha2luZyB0aGUgZW50aXJlIGluZnJhc3RydWN0dXJlXG5mdW5jdGlvbiB3cmFwIChmdW5jKSB7XG4gIHJldHVybiAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZnVuYygpXG4gICAgICAudGhlbih4ID0+IHJlc29sdmUoeCkpXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgbGV0IHN0YXR1cyA9IF9nZXQoZXJyLCAncmVzcG9uc2Uuc3RhdHVzJylcbiAgICAgICAgbGV0IHRleHQgPSBfZ2V0KGVyciwgJ2NvbnRlbnQudGV4dCcpXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHN0YXR1cyB8fFxuICAgICAgICAgIHRleHQgfHxcbiAgICAgICAgICBbJ25ldHdvcmsnLCAnZmV0Y2gnXS5zb21lKHggPT4gZXJyLm1lc3NhZ2UudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh4KSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBBUEkgZXJyb3I6ICR7dGV4dH0gKCR7c3RhdHVzfSlgKVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKG51bGwpXG4gICAgICAgIH1cblxuICAgICAgICByZWplY3QoZXJyKVxuICAgICAgfSlcbiAgfSlcbn1cblxuLy8gVW5mbGF0dGVuIGFuIG9iamVjdCB3aXRoIGtleXMgZGVzY3JpYmluZyBhIG5lc3RlZCBzdHJ1Y3R1cmVcbmZ1bmN0aW9uIHVuZmxhdHRlbiAob2JqZWN0KSB7XG4gIGxldCByZXN1bHQgPSB7fVxuXG4gIGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcbiAgICBfc2V0KHJlc3VsdCwga2V5LCBvYmplY3Rba2V5XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy8gU2V0IHRoZSB2YWx1ZSBvZiBhbiBvYmplY3QgYmFzZWQgb24gYSBmbGF0IGtleSAoXCJhLmIuY1wiKVxuZnVuY3Rpb24gX3NldCAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IGtleVBhcnRzID0ga2V5LnNwbGl0KCcuJylcblxuICBsZXQgd2Fsa2luZyA9IG9iamVjdFxuICBrZXlQYXJ0cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgLy8gQ3JlYXRlIHRoZSBuZXN0ZWQgb2JqZWN0IGlmIGl0IGRvZXMgbm90IGV4aXN0XG4gICAgaWYgKCF3YWxraW5nW2tleV0pIHtcbiAgICAgIHdhbGtpbmdba2V5XSA9IHt9XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgbGFzdCBwYXJ0LCBzZXQgdGhlIHZhbHVlIGFuZCBleGl0IG91dFxuICAgIGlmIChpbmRleCA9PT0ga2V5UGFydHMubGVuZ3RoIC0gMSkge1xuICAgICAgd2Fsa2luZ1trZXldID0gdmFsdWVcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgbmV4dCBwYXJ0IG9mIHRoZSBrZXlcbiAgICB3YWxraW5nID0gd2Fsa2luZ1trZXldXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmxvYlxubW9kdWxlLmV4cG9ydHMud3JhcCA9IHdyYXBcbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5jb25zdCBDaGFyYWN0ZXJzRW5kcG9pbnQgPSByZXF1aXJlKCcuL2NoYXJhY3RlcnMnKVxuY29uc3QgUHZwRW5kcG9pbnQgPSByZXF1aXJlKCcuL3B2cCcpXG5jb25zdCBDb21tZXJjZUVuZHBvaW50ID0gcmVxdWlyZSgnLi9jb21tZXJjZScpXG5jb25zdCBXaXphcmRzdmF1bHRFbmRwb2ludCA9IHJlcXVpcmUoJy4vd2l6YXJkc3ZhdWx0JylcbmNvbnN0IGFjY291bnRCbG9iID0gcmVxdWlyZSgnLi9hY2NvdW50LWJsb2IuanMnKVxuY29uc3QgcmVzZXRUaW1lID0gcmVxdWlyZSgnLi4vaGVscGVycy9yZXNldFRpbWUnKVxuXG5jbGFzcyBBY2NvdW50RW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudCdcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG5cbiAgYWNoaWV2ZW1lbnRzICgpIHtcbiAgICByZXR1cm4gbmV3IEFjaGlldmVtZW50c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBiYW5rICgpIHtcbiAgICByZXR1cm4gbmV3IEJhbmtFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgY2hhcmFjdGVycyAobmFtZSkge1xuICAgIHJldHVybiBuZXcgQ2hhcmFjdGVyc0VuZHBvaW50KHRoaXMsIG5hbWUpXG4gIH1cblxuICBkYWlseWNyYWZ0aW5nICgpIHtcbiAgICByZXR1cm4gbmV3IERhaWx5Y3JhZnRpbmdFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgZGVsaXZlcnkgKCkge1xuICAgIHJldHVybiBuZXcgQ29tbWVyY2VFbmRwb2ludCh0aGlzKS5kZWxpdmVyeSgpXG4gIH1cblxuICBkdW5nZW9ucyAoKSB7XG4gICAgcmV0dXJuIG5ldyBEdW5nZW9uc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBkeWVzICgpIHtcbiAgICByZXR1cm4gbmV3IER5ZXNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgZW1vdGVzICgpIHtcbiAgICByZXR1cm4gbmV3IEVtb3Rlc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBmaW5pc2hlcnMgKCkge1xuICAgIHJldHVybiBuZXcgRmluaXNoZXJzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGdsaWRlcnMgKCkge1xuICAgIHJldHVybiBuZXcgR2xpZGVyc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBob21lICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2F0czogKCkgPT4gbmV3IEhvbWVDYXRzRW5kcG9pbnQodGhpcyksXG4gICAgICBub2RlczogKCkgPT4gbmV3IEhvbWVOb2Rlc0VuZHBvaW50KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgaG9tZXN0ZWFkICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVjb3JhdGlvbnM6ICgpID0+IG5ldyBIb21lc3RlYWREZWNvcmF0aW9uc0VuZHBvaW50KHRoaXMpLFxuICAgICAgZ2x5cGhzOiAoKSA9PiBuZXcgSG9tZXN0ZWFkR2x5cGhzRW5kcG9pbnQodGhpcylcbiAgICB9XG4gIH1cblxuICBpbnZlbnRvcnkgKCkge1xuICAgIHJldHVybiBuZXcgSW52ZW50b3J5RW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGphZGVib3RzICgpIHtcbiAgICByZXR1cm4gbmV3IEphZGVib3RzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGxlZ2VuZGFyeWFybW9yeSAoKSB7XG4gICAgcmV0dXJuIG5ldyBMZWdlbmRhcnlhcm1vcnlFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgbHVjayAoKSB7XG4gICAgcmV0dXJuIG5ldyBMdWNrRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG1haWxjYXJyaWVycyAoKSB7XG4gICAgcmV0dXJuIG5ldyBNYWlsY2FycmllcnNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgbWFzdGVyaWVzICgpIHtcbiAgICByZXR1cm4gbmV3IE1hc3Rlcmllc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBtYXBjaGVzdHMgKCkge1xuICAgIHJldHVybiBuZXcgTWFwY2hlc3RzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG1hc3RlcnkgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwb2ludHM6ICgpID0+IG5ldyBNYXN0ZXJ5UG9pbnRzRW5kcG9pbnQodGhpcylcbiAgICB9XG4gIH1cblxuICBtYXRlcmlhbHMgKCkge1xuICAgIHJldHVybiBuZXcgTWF0ZXJpYWxzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG1pbmlzICgpIHtcbiAgICByZXR1cm4gbmV3IE1pbmlzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG1vdW50cyAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNraW5zOiAoKSA9PiBuZXcgTW91bnRTa2luc0VuZHBvaW50KHRoaXMpLFxuICAgICAgdHlwZXM6ICgpID0+IG5ldyBNb3VudFR5cGVzRW5kcG9pbnQodGhpcylcbiAgICB9XG4gIH1cblxuICBub3ZlbHRpZXMgKCkge1xuICAgIHJldHVybiBuZXcgTm92ZWx0aWVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG91dGZpdHMgKCkge1xuICAgIHJldHVybiBuZXcgT3V0Zml0c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBwdnAgKCkge1xuICAgIHJldHVybiBuZXcgUHZwRW5kcG9pbnQodGhpcywgdHJ1ZSlcbiAgfVxuXG4gIHJhaWRzICgpIHtcbiAgICByZXR1cm4gbmV3IFJhaWRzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHJlY2lwZXMgKCkge1xuICAgIHJldHVybiBuZXcgUmVjaXBlc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBza2lmZnMgKCkge1xuICAgIHJldHVybiBuZXcgU2tpZmZzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHNraW5zICgpIHtcbiAgICByZXR1cm4gbmV3IFNraW5zRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHRpdGxlcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBUaXRsZXNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgdHJhbnNhY3Rpb25zICgpIHtcbiAgICByZXR1cm4gbmV3IENvbW1lcmNlRW5kcG9pbnQodGhpcykudHJhbnNhY3Rpb25zKClcbiAgfVxuXG4gIHdhbGxldCAoKSB7XG4gICAgcmV0dXJuIG5ldyBXYWxsZXRFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgd2l6YXJkc3ZhdWx0ICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlzdGluZ3M6ICgpID0+IG5ldyBXaXphcmRzdmF1bHRMaXN0aW5nc0VuZHBvaW50KHRoaXMpLFxuICAgICAgZGFpbHk6ICgpID0+IG5ldyBXaXphcmRzdmF1bHREYWlseUVuZHBvaW50KHRoaXMpLFxuICAgICAgd2Vla2x5OiAoKSA9PiBuZXcgV2l6YXJkc3ZhdWx0V2Vla2x5RW5kcG9pbnQodGhpcyksXG4gICAgICBzcGVjaWFsOiAoKSA9PiBuZXcgV2l6YXJkc3ZhdWx0U3BlY2lhbEVuZHBvaW50KHRoaXMpXG4gICAgfVxuICB9XG5cbiAgd29ybGRib3NzZXMgKCkge1xuICAgIHJldHVybiBuZXcgV29ybGRib3NzZXNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgLy8gQWxsIGRhdGEgYXZhaWxhYmxlIGZvciB0aGUgYWNjb3VudCBpbiBhIHNpbmdsZSBvYmplY3RcbiAgYmxvYiAoKSB7XG4gICAgcmV0dXJuIGFjY291bnRCbG9iKHRoaXMpXG4gIH1cbn1cblxuY2xhc3MgQWNoaWV2ZW1lbnRzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC9hY2hpZXZlbWVudHMnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG5cbiAgaWRzICgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdtZXRob2Qgbm90IHN1cHBvcnRlZCBmb3IgdGhpcyBlbmRwb2ludCcpKVxuICB9XG5cbiAgZ2V0IChpZCkge1xuICAgIGlmIChpZCkge1xuICAgICAgcmV0dXJuIHN1cGVyLmdldChpZClcbiAgICB9XG5cbiAgICAvLyBUaGlzIGVuZHBvaW50IHJldHVybnMgYWxsIGVudHJpZXMgaWYgdGhlIHVybCBnZXRzIHJlcXVlc3RlZFxuICAgIC8vIHdpdGhvdXQgYW55IHBhcmFtZXRlcnMsIGFuYWxvZ3VlIHRvIHRoZSBvdGhlciBhY2NvdW50IGVuZHBvaW50c1xuICAgIHJldHVybiB0aGlzLmFsbCgpXG4gIH1cblxuICBhbGwgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXQoJycsIHRydWUpXG4gIH1cbn1cblxuY2xhc3MgQmFua0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvYmFuaydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIERhaWx5Y3JhZnRpbmdFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L2RhaWx5Y3JhZnRpbmcnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGFzeW5jIGdldCAoKSB7XG4gICAgcmV0dXJuIGF3YWl0IGlzU3RhbGVEYWlseURhdGEodGhpcykgPyBbXSA6IHN1cGVyLmdldCgpXG4gIH1cbn1cblxuY2xhc3MgRHVuZ2VvbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L2R1bmdlb25zJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cblxuICBhc3luYyBnZXQgKCkge1xuICAgIHJldHVybiBhd2FpdCBpc1N0YWxlRGFpbHlEYXRhKHRoaXMpID8gW10gOiBzdXBlci5nZXQoKVxuICB9XG59XG5cbmNsYXNzIER5ZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L2R5ZXMnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBFbW90ZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L2Vtb3RlcydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIEZpbmlzaGVyc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvZmluaXNoZXJzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgR2xpZGVyc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvZ2xpZGVycydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIEhvbWVDYXRzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC9ob21lL2NhdHMnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBIb21lTm9kZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L2hvbWUvbm9kZXMnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBIb21lc3RlYWREZWNvcmF0aW9uc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvaG9tZXN0ZWFkL2RlY29yYXRpb25zJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgSG9tZXN0ZWFkR2x5cGhzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC9ob21lc3RlYWQvZ2x5cGhzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgSW52ZW50b3J5RW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC9pbnZlbnRvcnknXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBKYWRlYm90c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvamFkZWJvdHMnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBMZWdlbmRhcnlhcm1vcnlFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L2xlZ2VuZGFyeWFybW9yeSdcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIEx1Y2tFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L2x1Y2snXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGFzeW5jIGdldCAoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzdXBlci5nZXQoKVxuICAgIC8vIFtBUEkgUEFUQ0ggIzBdIElmIHRoZSBhY2NvdW50IGRvZXMgbm90IGhhdmUgYW55IGx1Y2ssIHRoZSBBUEkgZXJyb25lb3VzbHkgcmV0dXJucyBgW11gXG4gICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcbiAgICByZXR1cm4gcmVzcG9uc2VbMF0udmFsdWVcbiAgfVxufVxuXG5jbGFzcyBNYWlsY2FycmllcnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L21haWxjYXJyaWVycydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIE1hcGNoZXN0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvbWFwY2hlc3RzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cblxuICBhc3luYyBnZXQgKCkge1xuICAgIHJldHVybiBhd2FpdCBpc1N0YWxlRGFpbHlEYXRhKHRoaXMpID8gW10gOiBzdXBlci5nZXQoKVxuICB9XG59XG5cbmNsYXNzIE1hc3Rlcmllc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvbWFzdGVyaWVzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgTWFzdGVyeVBvaW50c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvbWFzdGVyeS9wb2ludHMnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBNYXRlcmlhbHNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L21hdGVyaWFscydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIE1pbmlzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC9taW5pcydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIE1vdW50U2tpbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L21vdW50cy9za2lucydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIE1vdW50VHlwZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L21vdW50cy90eXBlcydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIE5vdmVsdGllc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvbm92ZWx0aWVzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgT3V0Zml0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvb3V0Zml0cydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIFJhaWRzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC9yYWlkcydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG5cbiAgYXN5bmMgZ2V0ICgpIHtcbiAgICByZXR1cm4gYXdhaXQgaXNTdGFsZVdlZWtseURhdGEodGhpcykgPyBbXSA6IHN1cGVyLmdldCgpXG4gIH1cbn1cblxuY2xhc3MgUmVjaXBlc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvcmVjaXBlcydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIFNraWZmc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvc2tpZmZzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgU2tpbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L3NraW5zJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgVGl0bGVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC90aXRsZXMnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBXYWxsZXRFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L3dhbGxldCdcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIFdvcmxkYm9zc2VzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC93b3JsZGJvc3NlcydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG5cbiAgYXN5bmMgZ2V0ICgpIHtcbiAgICByZXR1cm4gYXdhaXQgaXNTdGFsZURhaWx5RGF0YSh0aGlzKSA/IFtdIDogc3VwZXIuZ2V0KClcbiAgfVxufVxuXG5jbGFzcyBXaXphcmRzdmF1bHRMaXN0aW5nc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvd2l6YXJkc3ZhdWx0L2xpc3RpbmdzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgV2l6YXJkc3ZhdWx0RGFpbHlFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2NvdW50L3dpemFyZHN2YXVsdC9kYWlseSdcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cblxuICBhc3luYyBnZXQgKCkge1xuICAgIGNvbnN0IFtyZXNwb25zZSwgaXNTdGFsZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBzdXBlci5nZXQoKSxcbiAgICAgIGlzU3RhbGVEYWlseURhdGEodGhpcylcbiAgICBdKVxuXG4gICAgaWYgKGlzU3RhbGUpIHtcbiAgICAgIHJlc3BvbnNlLm1ldGFfcHJvZ3Jlc3NfY3VycmVudCA9IDBcbiAgICAgIHJlc3BvbnNlLm1ldGFfcmV3YXJkX2NsYWltZWQgPSBmYWxzZVxuICAgICAgcmVzcG9uc2Uub2JqZWN0aXZlcyA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cbn1cblxuY2xhc3MgV2l6YXJkc3ZhdWx0V2Vla2x5RW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC93aXphcmRzdmF1bHQvd2Vla2x5J1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGFzeW5jIGdldCAoKSB7XG4gICAgY29uc3QgW3Jlc3BvbnNlLCBpc1N0YWxlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHN1cGVyLmdldCgpLFxuICAgICAgaXNTdGFsZVdlZWtseURhdGEodGhpcylcbiAgICBdKVxuXG4gICAgaWYgKGlzU3RhbGUpIHtcbiAgICAgIHJlc3BvbnNlLm1ldGFfcHJvZ3Jlc3NfY3VycmVudCA9IDBcbiAgICAgIHJlc3BvbnNlLm1ldGFfcmV3YXJkX2NsYWltZWQgPSBmYWxzZVxuICAgICAgcmVzcG9uc2Uub2JqZWN0aXZlcyA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cbn1cblxuY2xhc3MgV2l6YXJkc3ZhdWx0U3BlY2lhbEVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjY291bnQvd2l6YXJkc3ZhdWx0L3NwZWNpYWwnXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG5cbiAgYXN5bmMgZ2V0ICgpIHtcbiAgICBjb25zdCBzZWFzb24gPSBhd2FpdCBuZXcgV2l6YXJkc3ZhdWx0RW5kcG9pbnQodGhpcykuZ2V0KClcblxuICAgIGNvbnN0IFtyZXNwb25zZSwgaXNTdGFsZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBzdXBlci5nZXQoKSxcbiAgICAgIGlzU3RhbGVEYXRhKHRoaXMsIG5ldyBEYXRlKHNlYXNvbi5zdGFydCkpXG4gICAgXSlcblxuICAgIGlmIChpc1N0YWxlKSB7XG4gICAgICByZXNwb25zZS5vYmplY3RpdmVzID0gW11cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxufVxuXG4vLyBTdGFsZSBkYXRhIGNhbiBoYXBwZW4gaWYgdGhlIGxhc3QgYWNjb3VudCB1cGRhdGUgd2FzIGJlZm9yZSB0aGUgbGFzdCBkYWlseSByZXNldFxuYXN5bmMgZnVuY3Rpb24gaXNTdGFsZURhaWx5RGF0YSAoZW5kcG9pbnRJbnN0YW5jZSkge1xuICByZXR1cm4gaXNTdGFsZURhdGEoZW5kcG9pbnRJbnN0YW5jZSwgcmVzZXRUaW1lLmdldExhc3REYWlseVJlc2V0KCkpXG59XG5cbi8vIFN0YWxlIGRhdGEgY2FuIGhhcHBlbiBpZiB0aGUgbGFzdCBhY2NvdW50IHVwZGF0ZSB3YXMgYmVmb3JlIHRoZSBsYXN0IHdlZWtseSByZXNldFxuYXN5bmMgZnVuY3Rpb24gaXNTdGFsZVdlZWtseURhdGEgKGVuZHBvaW50SW5zdGFuY2UpIHtcbiAgcmV0dXJuIGlzU3RhbGVEYXRhKGVuZHBvaW50SW5zdGFuY2UsIHJlc2V0VGltZS5nZXRMYXN0V2Vla2x5UmVzZXQoKSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gaXNTdGFsZURhdGEgKGVuZHBvaW50SW5zdGFuY2UsIHJlc2V0RGF0ZSkge1xuICBjb25zdCBhY2NvdW50ID0gYXdhaXQgbmV3IEFjY291bnRFbmRwb2ludChlbmRwb2ludEluc3RhbmNlKS5zY2hlbWEoJzIwMTktMDMtMjYnKS5nZXQoKVxuICByZXR1cm4gbmV3IERhdGUoYWNjb3VudC5sYXN0X21vZGlmaWVkKSA8IHJlc2V0RGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjY291bnRFbmRwb2ludFxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBY2hpZXZlbWVudHNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9hY2hpZXZlbWVudHMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLnN1cHBvcnRzQnVsa0FsbCA9IGZhbHNlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG5cbiAgY2F0ZWdvcmllcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBDYXRlZ29yaWVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIGdyb3VwcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBHcm91cHNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgZGFpbHkgKCkge1xuICAgIHJldHVybiBuZXcgRGFpbHlFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgZGFpbHlUb21vcnJvdyAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYWlseVRvbW9ycm93RW5kcG9pbnQodGhpcylcbiAgfVxufVxuXG5jbGFzcyBDYXRlZ29yaWVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNoaWV2ZW1lbnRzL2NhdGVnb3JpZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cblxuY2xhc3MgR3JvdXBzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNoaWV2ZW1lbnRzL2dyb3VwcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBEYWlseUVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2FjaGlldmVtZW50cy9kYWlseSdcbiAgICB0aGlzLmNhY2hlVGltZSA9IDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBEYWlseVRvbW9ycm93RW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNoaWV2ZW1lbnRzL2RhaWx5L3RvbW9ycm93J1xuICAgIHRoaXMuY2FjaGVUaW1lID0gNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJhY2tzdG9yeUVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGFuc3dlcnMgKCkge1xuICAgIHJldHVybiBuZXcgQW5zd2Vyc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBxdWVzdGlvbnMgKCkge1xuICAgIHJldHVybiBuZXcgUXVlc3Rpb25zRW5kcG9pbnQodGhpcylcbiAgfVxufVxuXG5jbGFzcyBBbnN3ZXJzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYmFja3N0b3J5L2Fuc3dlcnMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLnN1cHBvcnRzQnVsa0FsbCA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cblxuY2xhc3MgUXVlc3Rpb25zRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYmFja3N0b3J5L3F1ZXN0aW9ucydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuc3VwcG9ydHNCdWxrQWxsID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBCdWlsZEVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2J1aWxkJ1xuICAgIHRoaXMuY2FjaGVUaW1lID0gNjBcbiAgfVxuXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldCgpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5pZClcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDYXRzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvY2F0cydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ2hhcmFjdGVyc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIG5hbWUpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMudXJsID0gJy92Mi9jaGFyYWN0ZXJzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5idWxrSWQgPSAnbmFtZSdcbiAgICB0aGlzLnN1cHBvcnRzQnVsa0FsbCA9IGZhbHNlXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGJhY2tzdG9yeSAoKSB7XG4gICAgcmV0dXJuIG5ldyBCYWNrc3RvcnlFbmRwb2ludCh0aGlzLCB0aGlzLm5hbWUpXG4gIH1cblxuICBjb3JlICgpIHtcbiAgICByZXR1cm4gbmV3IENvcmVFbmRwb2ludCh0aGlzLCB0aGlzLm5hbWUpXG4gIH1cblxuICBjcmFmdGluZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBDcmFmdGluZ0VuZHBvaW50KHRoaXMsIHRoaXMubmFtZSlcbiAgfVxuXG4gIGVxdWlwbWVudCAoKSB7XG4gICAgcmV0dXJuIG5ldyBFcXVpcG1lbnRFbmRwb2ludCh0aGlzLCB0aGlzLm5hbWUpXG4gIH1cblxuICBoZXJvcG9pbnRzICgpIHtcbiAgICByZXR1cm4gbmV3IEhlcm9wb2ludHNFbmRwb2ludCh0aGlzLCB0aGlzLm5hbWUpXG4gIH1cblxuICBpbnZlbnRvcnkgKCkge1xuICAgIHJldHVybiBuZXcgSW52ZW50b3J5RW5kcG9pbnQodGhpcywgdGhpcy5uYW1lKVxuICB9XG5cbiAgcXVlc3RzICgpIHtcbiAgICByZXR1cm4gbmV3IFF1ZXN0c0VuZHBvaW50KHRoaXMsIHRoaXMubmFtZSlcbiAgfVxuXG4gIHJlY2lwZXMgKCkge1xuICAgIHJldHVybiBuZXcgUmVjaXBlc0VuZHBvaW50KHRoaXMsIHRoaXMubmFtZSlcbiAgfVxuXG4gIHNhYiAoKSB7XG4gICAgcmV0dXJuIG5ldyBTYWJFbmRwb2ludCh0aGlzLCB0aGlzLm5hbWUpXG4gIH1cblxuICBza2lsbHMgKCkge1xuICAgIHJldHVybiBuZXcgU2tpbGxzRW5kcG9pbnQodGhpcywgdGhpcy5uYW1lKVxuICB9XG5cbiAgc3BlY2lhbGl6YXRpb25zICgpIHtcbiAgICByZXR1cm4gbmV3IFNwZWNpYWxpemF0aW9uc0VuZHBvaW50KHRoaXMsIHRoaXMubmFtZSlcbiAgfVxuXG4gIHRyYWluaW5nICgpIHtcbiAgICByZXR1cm4gbmV3IFRyYWluaW5nRW5kcG9pbnQodGhpcywgdGhpcy5uYW1lKVxuICB9XG59XG5cbmNsYXNzIEJhY2tzdG9yeUVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGNoYXJhY3Rlcikge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvY2hhcmFjdGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjaGFyYWN0ZXIpfS9iYWNrc3RvcnlgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldCgpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5iYWNrc3RvcnkpXG4gIH1cbn1cblxuY2xhc3MgQ29yZUVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGNoYXJhY3Rlcikge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvY2hhcmFjdGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjaGFyYWN0ZXIpfS9jb3JlYFxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgQ3JhZnRpbmdFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBjaGFyYWN0ZXIpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSBgL3YyL2NoYXJhY3RlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoY2hhcmFjdGVyKX0vY3JhZnRpbmdgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldCgpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5jcmFmdGluZylcbiAgfVxufVxuXG5jbGFzcyBFcXVpcG1lbnRFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBjaGFyYWN0ZXIpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSBgL3YyL2NoYXJhY3RlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoY2hhcmFjdGVyKX0vZXF1aXBtZW50YFxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cblxuICBnZXQgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXQoKS50aGVuKHJlc3VsdCA9PiByZXN1bHQuZXF1aXBtZW50KVxuICB9XG59XG5cbmNsYXNzIEhlcm9wb2ludHNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBjaGFyYWN0ZXIpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSBgL3YyL2NoYXJhY3RlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoY2hhcmFjdGVyKX0vaGVyb3BvaW50c2BcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIEludmVudG9yeUVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGNoYXJhY3Rlcikge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvY2hhcmFjdGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjaGFyYWN0ZXIpfS9pbnZlbnRvcnlgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldCgpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5iYWdzKVxuICB9XG59XG5cbmNsYXNzIFF1ZXN0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGNoYXJhY3Rlcikge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvY2hhcmFjdGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjaGFyYWN0ZXIpfS9xdWVzdHNgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBSZWNpcGVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCwgY2hhcmFjdGVyKSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gYC92Mi9jaGFyYWN0ZXJzLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGNoYXJhY3Rlcil9L3JlY2lwZXNgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldCgpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5yZWNpcGVzKVxuICB9XG59XG5cbmNsYXNzIFNhYkVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGNoYXJhY3Rlcikge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvY2hhcmFjdGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjaGFyYWN0ZXIpfS9zYWJgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBTa2lsbHNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBjaGFyYWN0ZXIpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSBgL3YyL2NoYXJhY3RlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoY2hhcmFjdGVyKX0vc2tpbGxzYFxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cblxuICBnZXQgKCkge1xuICAgIHJldHVybiBzdXBlci5nZXQoKS50aGVuKHJlc3VsdCA9PiByZXN1bHQuc2tpbGxzKVxuICB9XG59XG5cbmNsYXNzIFNwZWNpYWxpemF0aW9uc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGNoYXJhY3Rlcikge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvY2hhcmFjdGVycy8ke2VuY29kZVVSSUNvbXBvbmVudChjaGFyYWN0ZXIpfS9zcGVjaWFsaXphdGlvbnNgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldCgpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC5zcGVjaWFsaXphdGlvbnMpXG4gIH1cbn1cblxuY2xhc3MgVHJhaW5pbmdFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBjaGFyYWN0ZXIpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSBgL3YyL2NoYXJhY3RlcnMvJHtlbmNvZGVVUklDb21wb25lbnQoY2hhcmFjdGVyKX0vdHJhaW5pbmdgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIGdldCAoKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldCgpLnRoZW4ocmVzdWx0ID0+IHJlc3VsdC50cmFpbmluZylcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBDb2xvcnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9jb2xvcnMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ29tbWVyY2VFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICAvLyBDdXJyZW50IHRoaW5ncyB0byBncmFiIGluIHRoZSBkZWxpdmVyeSBib3hcbiAgZGVsaXZlcnkgKCkge1xuICAgIHJldHVybiBuZXcgRGVsaXZlcnlFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgLy8gQ3VycmVudCBnZW0vY29pbiBleGNoYW5nZSByYXRlc1xuICBleGNoYW5nZSAoKSB7XG4gICAgcmV0dXJuIG5ldyBFeGNoYW5nZUVuZHBvaW50KHRoaXMpXG4gIH1cblxuICAvLyBDdXJyZW50IHRyYWRpbmdwb3N0IGxpc3RpbmdzXG4gIGxpc3RpbmdzICgpIHtcbiAgICByZXR1cm4gbmV3IExpc3RpbmdzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIC8vIEN1cnJlbnQgdHJhZGluZ3Bvc3QgcHJpY2VzXG4gIHByaWNlcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcmljZXNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgLy8gQ3VycmVudCBhbmQgY29tcGxldGVkIHRyYW5zYWN0aW9uc1xuICB0cmFuc2FjdGlvbnMgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjdXJyZW50OiAoKSA9PiAoe1xuICAgICAgICBidXlzOiAoKSA9PiBuZXcgVHJhbnNhY3Rpb25zRW5kcG9pbnQodGhpcywgJ2N1cnJlbnQnLCAnYnV5cycpLFxuICAgICAgICBzZWxsczogKCkgPT4gbmV3IFRyYW5zYWN0aW9uc0VuZHBvaW50KHRoaXMsICdjdXJyZW50JywgJ3NlbGxzJylcbiAgICAgIH0pLFxuICAgICAgaGlzdG9yeTogKCkgPT4gKHtcbiAgICAgICAgYnV5czogKCkgPT4gbmV3IFRyYW5zYWN0aW9uc0VuZHBvaW50KHRoaXMsICdoaXN0b3J5JywgJ2J1eXMnKSxcbiAgICAgICAgc2VsbHM6ICgpID0+IG5ldyBUcmFuc2FjdGlvbnNFbmRwb2ludCh0aGlzLCAnaGlzdG9yeScsICdzZWxscycpXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBEZWxpdmVyeUVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSBgL3YyL2NvbW1lcmNlL2RlbGl2ZXJ5YFxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgRXhjaGFuZ2VFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9jb21tZXJjZS9leGNoYW5nZSdcbiAgICB0aGlzLmNhY2hlVGltZSA9IDEwICogNjBcbiAgfVxuXG4gIGdlbXMgKHF1YW50aXR5KSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldChgL2dlbXM/cXVhbnRpdHk9JHtxdWFudGl0eX1gLCB0cnVlKVxuICB9XG5cbiAgY29pbnMgKHF1YW50aXR5KSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldChgL2NvaW5zP3F1YW50aXR5PSR7cXVhbnRpdHl9YCwgdHJ1ZSlcbiAgfVxufVxuXG5jbGFzcyBMaXN0aW5nc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2NvbW1lcmNlL2xpc3RpbmdzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5zdXBwb3J0c0J1bGtBbGwgPSBmYWxzZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMiAqIDYwXG4gIH1cbn1cblxuY2xhc3MgUHJpY2VzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvY29tbWVyY2UvcHJpY2VzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5zdXBwb3J0c0J1bGtBbGwgPSBmYWxzZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNjBcbiAgfVxufVxuXG5jbGFzcyBUcmFuc2FjdGlvbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCB0eXBlLCBsaXN0KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gYC92Mi9jb21tZXJjZS90cmFuc2FjdGlvbnMvJHt0eXBlfS8ke2xpc3R9YFxuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAxMCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ29udGluZW50c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2NvbnRpbmVudHMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cblxuICBmbG9vcnMgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBGbG9vcnNFbmRwb2ludCh0aGlzLCBpZClcbiAgfVxufVxuXG5jbGFzcyBGbG9vcnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBjb250aW5lbnRJZCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvY29udGluZW50cy8ke2NvbnRpbmVudElkfS9mbG9vcnNgXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQ3VycmVuY2llc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2N1cnJlbmNpZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRGFpbHljcmFmdGluZ0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2RhaWx5Y3JhZnRpbmcnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRHVuZ2VvbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9kdW5nZW9ucydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRW1ibGVtRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgYmFja2dyb3VuZHMgKCkge1xuICAgIHJldHVybiBuZXcgTGF5ZXJzRW5kcG9pbnQodGhpcywgJ2JhY2tncm91bmRzJylcbiAgfVxuXG4gIGZvcmVncm91bmRzICgpIHtcbiAgICByZXR1cm4gbmV3IExheWVyc0VuZHBvaW50KHRoaXMsICdmb3JlZ3JvdW5kcycpXG4gIH1cbn1cblxuY2xhc3MgTGF5ZXJzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCwgbGF5ZXIpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSBgL3YyL2VtYmxlbS8ke2xheWVyfWBcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRW1vdGVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvZW1vdGVzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEV2ZW50c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YxL2V2ZW50X2RldGFpbHMuanNvbidcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG5cbiAgYWxsICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0KCkudGhlbih0cmFuc2Zvcm1WMUZvcm1hdClcbiAgfVxuXG4gIGdldCAoaWQpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0KGA/ZXZlbnRfaWQ9JHtpZH1gLCB0cnVlKS50aGVuKGpzb24gPT4gdHJhbnNmb3JtVjFGb3JtYXQoanNvbilbMF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVjFGb3JtYXQgKGpzb24pIHtcbiAgbGV0IGV2ZW50cyA9IGpzb24uZXZlbnRzXG4gIGxldCB0cmFuc2Zvcm1lZCA9IFtdXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgIT09IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB0cmFuc2Zvcm1lZC5wdXNoKE9iamVjdC5hc3NpZ24oeyBpZDoga2V5c1tpXSB9LCBldmVudHNba2V5c1tpXV0pKVxuICB9XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkXG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEZpbGVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvZmlsZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEZpbmlzaGVyc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2ZpbmlzaGVycydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHbGlkZXJzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvZ2xpZGVycydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHdWlsZEVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGlkKSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMudXJsID0gJy92Mi9ndWlsZCdcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzT3B0aW9uYWxseUF1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA2MCAqIDYwXG4gIH1cblxuICBnZXQgKGlkKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldChgLyR7aWR9YCwgdHJ1ZSlcbiAgfVxuXG4gIHBlcm1pc3Npb25zICgpIHtcbiAgICByZXR1cm4gbmV3IFBlcm1pc3Npb25zRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHNlYXJjaCAobmFtZSkge1xuICAgIHJldHVybiBuZXcgU2VhcmNoRW5kcG9pbnQodGhpcywgbmFtZSlcbiAgfVxuXG4gIHVwZ3JhZGVzICgpIHtcbiAgICBpZiAodGhpcy5pZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbmV3IEFsbFVwZ3JhZGVzRW5kcG9pbnQodGhpcylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFVwZ3JhZGVzRW5kcG9pbnQodGhpcywgdGhpcy5pZClcbiAgfVxuXG4gIGxvZyAoKSB7XG4gICAgcmV0dXJuIG5ldyBMb2dFbmRwb2ludCh0aGlzLCB0aGlzLmlkKVxuICB9XG5cbiAgbWVtYmVycyAoKSB7XG4gICAgcmV0dXJuIG5ldyBNZW1iZXJzRW5kcG9pbnQodGhpcywgdGhpcy5pZClcbiAgfVxuXG4gIHJhbmtzICgpIHtcbiAgICByZXR1cm4gbmV3IFJhbmtzRW5kcG9pbnQodGhpcywgdGhpcy5pZClcbiAgfVxuXG4gIHN0YXNoICgpIHtcbiAgICByZXR1cm4gbmV3IFN0YXNoRW5kcG9pbnQodGhpcywgdGhpcy5pZClcbiAgfVxuXG4gIHN0b3JhZ2UgKCkge1xuICAgIHJldHVybiBuZXcgU3RvcmFnZUVuZHBvaW50KHRoaXMsIHRoaXMuaWQpXG4gIH1cblxuICB0ZWFtcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBUZWFtc0VuZHBvaW50KHRoaXMsIHRoaXMuaWQpXG4gIH1cblxuICB0cmVhc3VyeSAoKSB7XG4gICAgcmV0dXJuIG5ldyBUcmVhc3VyeUVuZHBvaW50KHRoaXMsIHRoaXMuaWQpXG4gIH1cbn1cblxuY2xhc3MgUGVybWlzc2lvbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9ndWlsZC9wZXJtaXNzaW9ucydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBTZWFyY2hFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9ndWlsZC9zZWFyY2gnXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA2MCAqIDYwXG4gIH1cblxuICBuYW1lIChuYW1lKSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldChgP25hbWU9JHtlbmNvZGVVUklDb21wb25lbnQobmFtZSl9YCwgdHJ1ZSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiByZXN1bHRbMF0pXG4gIH1cbn1cblxuY2xhc3MgQWxsVXBncmFkZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9ndWlsZC91cGdyYWRlcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBMb2dFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBpZCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvZ3VpbGQvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfS9sb2dgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxuXG4gIHNpbmNlIChsb2dJZCkge1xuICAgIHJldHVybiBzdXBlci5nZXQoYD9zaW5jZT0ke2xvZ0lkfWAsIHRydWUpXG4gIH1cbn1cblxuY2xhc3MgTWVtYmVyc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGlkKSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gYC92Mi9ndWlsZC8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9L21lbWJlcnNgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBSYW5rc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGlkKSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gYC92Mi9ndWlsZC8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9L3JhbmtzYFxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgU3Rhc2hFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBpZCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvZ3VpbGQvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfS9zdGFzaGBcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIFN0b3JhZ2VFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBpZCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvZ3VpbGQvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfS9zdG9yYWdlYFxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgVGVhbXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBpZCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvZ3VpbGQvJHtlbmNvZGVVUklDb21wb25lbnQoaWQpfS90ZWFtc2BcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIFRyZWFzdXJ5RW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCwgaWQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSBgL3YyL2d1aWxkLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGlkKX0vdHJlYXN1cnlgXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBVcGdyYWRlc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGlkKSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gYC92Mi9ndWlsZC8ke2VuY29kZVVSSUNvbXBvbmVudChpZCl9L3VwZ3JhZGVzYFxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgSG9tZUVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNhdHMgKCkge1xuICAgIHJldHVybiBuZXcgQ2F0c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBub2RlcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBOb2Rlc0VuZHBvaW50KHRoaXMpXG4gIH1cbn1cblxuY2xhc3MgQ2F0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2hvbWUvY2F0cydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cblxuY2xhc3MgTm9kZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9ob21lL25vZGVzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBIb21lc3RlYWRFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBkZWNvcmF0aW9ucyAoKSB7XG4gICAgcmV0dXJuIG5ldyBEZWNvcmF0aW9uc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBnbHlwaHMgKCkge1xuICAgIHJldHVybiBuZXcgR2x5cGhzRW5kcG9pbnQodGhpcylcbiAgfVxufVxuXG5jbGFzcyBEZWNvcmF0aW9uc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2hvbWVzdGVhZC9kZWNvcmF0aW9ucydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5zdXBwb3J0c0J1bGtBbGwgPSBmYWxzZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cblxuICBjYXRlZ29yaWVzICgpIHtcbiAgICByZXR1cm4gbmV3IERlY29yYXRpb25zQ2F0ZWdvcmllc0VuZHBvaW50KHRoaXMpXG4gIH1cbn1cblxuY2xhc3MgR2x5cGhzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvaG9tZXN0ZWFkL2dseXBocydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cblxuY2xhc3MgRGVjb3JhdGlvbnNDYXRlZ29yaWVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvaG9tZXN0ZWFkL2RlY29yYXRpb25zL2NhdGVnb3JpZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBBY2NvdW50RW5kcG9pbnQ6IHJlcXVpcmUoJy4vYWNjb3VudCcpLFxuICBBY2hpZXZlbWVudHNFbmRwb2ludDogcmVxdWlyZSgnLi9hY2hpZXZlbWVudHMnKSxcbiAgQmFja3N0b3J5RW5kcG9pbnQ6IHJlcXVpcmUoJy4vYmFja3N0b3J5JyksXG4gIEJ1aWxkRW5kcG9pbnQ6IHJlcXVpcmUoJy4vYnVpbGQnKSxcbiAgQ2F0c0VuZHBvaW50OiByZXF1aXJlKCcuL2NhdHMnKSxcbiAgQ2hhcmFjdGVyc0VuZHBvaW50OiByZXF1aXJlKCcuL2NoYXJhY3RlcnMnKSxcbiAgQ29sb3JzRW5kcG9pbnQ6IHJlcXVpcmUoJy4vY29sb3JzJyksXG4gIENvbW1lcmNlRW5kcG9pbnQ6IHJlcXVpcmUoJy4vY29tbWVyY2UnKSxcbiAgQ29udGluZW50c0VuZHBvaW50OiByZXF1aXJlKCcuL2NvbnRpbmVudHMnKSxcbiAgQ3VycmVuY2llc0VuZHBvaW50OiByZXF1aXJlKCcuL2N1cnJlbmNpZXMnKSxcbiAgRGFpbHljcmFmdGluZ0VuZHBvaW50OiByZXF1aXJlKCcuL2RhaWx5Y3JhZnRpbmcnKSxcbiAgRHVuZ2VvbnNFbmRwb2ludDogcmVxdWlyZSgnLi9kdW5nZW9ucycpLFxuICBFbWJsZW1FbmRwb2ludDogcmVxdWlyZSgnLi9lbWJsZW0nKSxcbiAgRW1vdGVzRW5kcG9pbnQ6IHJlcXVpcmUoJy4vZW1vdGVzJyksXG4gIEV2ZW50c0VuZHBvaW50OiByZXF1aXJlKCcuL2V2ZW50cycpLFxuICBGaWxlc0VuZHBvaW50OiByZXF1aXJlKCcuL2ZpbGVzJyksXG4gIEZpbmlzaGVyc0VuZHBvaW50OiByZXF1aXJlKCcuL2ZpbmlzaGVycycpLFxuICBHbGlkZXJzRW5kcG9pbnQ6IHJlcXVpcmUoJy4vZ2xpZGVycycpLFxuICBHdWlsZEVuZHBvaW50OiByZXF1aXJlKCcuL2d1aWxkJyksXG4gIEhvbWVFbmRwb2ludDogcmVxdWlyZSgnLi9ob21lJyksXG4gIEhvbWVzdGVhZEVuZHBvaW50OiByZXF1aXJlKCcuL2hvbWVzdGVhZCcpLFxuICBJdGVtc0VuZHBvaW50OiByZXF1aXJlKCcuL2l0ZW1zJyksXG4gIEl0ZW1zdGF0c0VuZHBvaW50OiByZXF1aXJlKCcuL2l0ZW1zdGF0cycpLFxuICBKYWRlYm90c0VuZHBvaW50OiByZXF1aXJlKCcuL2phZGVib3RzJyksXG4gIExlZ2VuZGFyeWFybW9yeUVuZHBvaW50OiByZXF1aXJlKCcuL2xlZ2VuZGFyeWFybW9yeScpLFxuICBMZWdlbmRzRW5kcG9pbnQ6IHJlcXVpcmUoJy4vbGVnZW5kcycpLFxuICBNYWlsY2FycmllcnNFbmRwb2ludDogcmVxdWlyZSgnLi9tYWlsY2FycmllcnMnKSxcbiAgTWFwY2hlc3RzRW5kcG9pbnQ6IHJlcXVpcmUoJy4vbWFwY2hlc3RzJyksXG4gIE1hcHNFbmRwb2ludDogcmVxdWlyZSgnLi9tYXBzJyksXG4gIE1hc3Rlcmllc0VuZHBvaW50OiByZXF1aXJlKCcuL21hc3RlcmllcycpLFxuICBNYXRlcmlhbHNFbmRwb2ludDogcmVxdWlyZSgnLi9tYXRlcmlhbHMnKSxcbiAgTWluaXNFbmRwb2ludDogcmVxdWlyZSgnLi9taW5pcycpLFxuICBNb3VudHNFbmRwb2ludDogcmVxdWlyZSgnLi9tb3VudHMnKSxcbiAgTm9kZXNFbmRwb2ludDogcmVxdWlyZSgnLi9ub2RlcycpLFxuICBOb3ZlbHRpZXNFbmRwb2ludDogcmVxdWlyZSgnLi9ub3ZlbHRpZXMnKSxcbiAgT3V0Zml0c0VuZHBvaW50OiByZXF1aXJlKCcuL291dGZpdHMnKSxcbiAgUGV0c0VuZHBvaW50OiByZXF1aXJlKCcuL3BldHMnKSxcbiAgUHJvZmVzc2lvbnNFbmRwb2ludDogcmVxdWlyZSgnLi9wcm9mZXNzaW9ucycpLFxuICBQdnBFbmRwb2ludDogcmVxdWlyZSgnLi9wdnAnKSxcbiAgUXVhZ2dhbnNFbmRwb2ludDogcmVxdWlyZSgnLi9xdWFnZ2FucycpLFxuICBRdWVzdHNFbmRwb2ludDogcmVxdWlyZSgnLi9xdWVzdHMnKSxcbiAgUmFjZXNFbmRwb2ludDogcmVxdWlyZSgnLi9yYWNlcycpLFxuICBSYWlkc0VuZHBvaW50OiByZXF1aXJlKCcuL3JhaWRzJyksXG4gIFJlY2lwZXNFbmRwb2ludDogcmVxdWlyZSgnLi9yZWNpcGVzJyksXG4gIFNraWZmc0VuZHBvaW50OiByZXF1aXJlKCcuL3NraWZmcycpLFxuICBTa2lsbHNFbmRwb2ludDogcmVxdWlyZSgnLi9za2lsbHMnKSxcbiAgU2tpbnNFbmRwb2ludDogcmVxdWlyZSgnLi9za2lucycpLFxuICBTcGVjaWFsaXphdGlvbnNFbmRwb2ludDogcmVxdWlyZSgnLi9zcGVjaWFsaXphdGlvbnMnKSxcbiAgU3Rvcmllc0VuZHBvaW50OiByZXF1aXJlKCcuL3N0b3JpZXMnKSxcbiAgVGl0bGVzRW5kcG9pbnQ6IHJlcXVpcmUoJy4vdGl0bGVzJyksXG4gIFRva2VuaW5mb0VuZHBvaW50OiByZXF1aXJlKCcuL3Rva2VuaW5mbycpLFxuICBUcmFpdHNFbmRwb2ludDogcmVxdWlyZSgnLi90cmFpdHMnKSxcbiAgV2l6YXJkc3ZhdWx0RW5kcG9pbnQ6IHJlcXVpcmUoJy4vd2l6YXJkc3ZhdWx0JyksXG4gIFdvcmxkYm9zc2VzRW5kcG9pbnQ6IHJlcXVpcmUoJy4vd29ybGRib3NzZXMnKSxcbiAgV29ybGRzRW5kcG9pbnQ6IHJlcXVpcmUoJy4vd29ybGRzJyksXG4gIFd2d0VuZHBvaW50OiByZXF1aXJlKCcuL3d2dycpXG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEl0ZW1zRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvaXRlbXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLnN1cHBvcnRzQnVsa0FsbCA9IGZhbHNlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEl0ZW1zdGF0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2l0ZW1zdGF0cydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBKYWRlYm90c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2phZGVib3RzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIExlZ2VuZGFyeWFybW9yeUVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2xlZ2VuZGFyeWFybW9yeSdcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTGVnZW5kc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL2xlZ2VuZHMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIE1haWxjYXJyaWVyc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL21haWxjYXJyaWVycydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBNYXBjaGVzdHNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9tYXBjaGVzdHMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTWFwc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL21hcHMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTWFzdGVyaWVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvbWFzdGVyaWVzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIE1hdGVyaWFsc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL21hdGVyaWFscydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBNaW5pc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL21pbmlzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIE1vdW50c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIHNraW5zICgpIHtcbiAgICByZXR1cm4gbmV3IFNraW5zRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHR5cGVzICgpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVzRW5kcG9pbnQodGhpcylcbiAgfVxufVxuXG5jbGFzcyBTa2luc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL21vdW50cy9za2lucydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBUeXBlc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL21vdW50cy90eXBlcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBOb2Rlc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL25vZGVzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBOb3ZlbHRpZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9ub3ZlbHRpZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgT3V0Zml0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL291dGZpdHMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUGV0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3BldHMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUHJvZmVzc2lvbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9wcm9mZXNzaW9ucydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQdnBFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBmcm9tQWNjb3VudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLmZyb21BY2NvdW50ID0gZnJvbUFjY291bnRcbiAgfVxuXG4gIGFtdWxldHMgKCkge1xuICAgIHJldHVybiBuZXcgQW11bGV0c0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBnYW1lcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBHYW1lc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBoZXJvZXMgKCkge1xuICAgIGlmICh0aGlzLmZyb21BY2NvdW50KSB7XG4gICAgICByZXR1cm4gbmV3IEFjY291bnRIZXJvZXNFbmRwb2ludCh0aGlzKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgSGVyb2VzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHJhbmtzICgpIHtcbiAgICByZXR1cm4gbmV3IFJhbmtzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHNlYXNvbnMgKGlkKSB7XG4gICAgcmV0dXJuIG5ldyBTZWFzb25zRW5kcG9pbnQodGhpcywgaWQpXG4gIH1cblxuICBzdGFuZGluZ3MgKCkge1xuICAgIHJldHVybiBuZXcgU3RhbmRpbmdzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIHN0YXRzICgpIHtcbiAgICByZXR1cm4gbmV3IFN0YXRzRW5kcG9pbnQodGhpcylcbiAgfVxufVxuXG5jbGFzcyBBY2NvdW50SGVyb2VzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvYWNjb3VudC9wdnAvaGVyb2VzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgQW11bGV0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3B2cC9hbXVsZXRzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG5cbmNsYXNzIEdhbWVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvcHZwL2dhbWVzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA1ICogNjBcbiAgfVxufVxuXG5jbGFzcyBIZXJvZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9wdnAvaGVyb2VzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG5cbmNsYXNzIFJhbmtzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvcHZwL3JhbmtzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG5cbmNsYXNzIFNlYXNvbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBpZCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnVybCA9ICcvdjIvcHZwL3NlYXNvbnMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cblxuICBsZWFkZXJib2FyZHMgKCkge1xuICAgIHJldHVybiBuZXcgU2Vhc29uTGVhZGVyYm9hcmRFbmRwb2ludCh0aGlzLCB0aGlzLmlkKVxuICB9XG59XG5cbmNsYXNzIFNlYXNvbkxlYWRlcmJvYXJkRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCwgaWQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy51cmwgPSBgL3YyL3B2cC9zZWFzb25zLyR7aWR9L2xlYWRlcmJvYXJkc2BcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG5cbiAgaWRzICgpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0KCcnLCB0cnVlKVxuICB9XG5cbiAgYm9hcmQgKGJvYXJkLCByZWdpb24pIHtcbiAgICByZXR1cm4gbmV3IFNlYXNvbkxlYWRlcmJvYXJkQm9hcmRFbmRwb2ludCh0aGlzLCB0aGlzLmlkLCBib2FyZCwgcmVnaW9uKVxuICB9XG59XG5cbmNsYXNzIFNlYXNvbkxlYWRlcmJvYXJkQm9hcmRFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50LCBpZCwgYm9hcmQsIHJlZ2lvbikge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9IGAvdjIvcHZwL3NlYXNvbnMvJHtpZH0vbGVhZGVyYm9hcmRzLyR7Ym9hcmR9LyR7cmVnaW9ufWBcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cblxuY2xhc3MgU3RhbmRpbmdzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvcHZwL3N0YW5kaW5ncydcbiAgICB0aGlzLmlzQXV0aGVudGljYXRlZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDUgKiA2MFxuICB9XG59XG5cbmNsYXNzIFN0YXRzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvcHZwL3N0YXRzJ1xuICAgIHRoaXMuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNSAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUXVhZ2dhbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9xdWFnZ2FucydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUXVlc3RzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvcXVlc3RzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFJhY2VzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvcmFjZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUmFpZHNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9yYWlkcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgUmVjaXBlc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3JlY2lwZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLnN1cHBvcnRzQnVsa0FsbCA9IGZhbHNlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxuXG4gIHNlYXJjaCAoKSB7XG4gICAgcmV0dXJuIG5ldyBTZWFyY2hFbmRwb2ludCh0aGlzKVxuICB9XG59XG5cbmNsYXNzIFNlYXJjaEVuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3JlY2lwZXMvc2VhcmNoJ1xuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cblxuICBpbnB1dCAoaWQpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0KGA/aW5wdXQ9JHtpZH1gLCB0cnVlKVxuICB9XG5cbiAgb3V0cHV0IChpZCkge1xuICAgIHJldHVybiBzdXBlci5nZXQoYD9vdXRwdXQ9JHtpZH1gLCB0cnVlKVxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNraWZmc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3NraWZmcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTa2lsbHNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9za2lsbHMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgU2tpbnNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9za2lucydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuc3VwcG9ydHNCdWxrQWxsID0gZmFsc2VcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgU3BlY2lhbGl6YXRpb25zRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvc3BlY2lhbGl6YXRpb25zJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFN0b3JpZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi9zdG9yaWVzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG5cbiAgc2Vhc29ucyAoKSB7XG4gICAgcmV0dXJuIG5ldyBTZWFzb25zRW5kcG9pbnQodGhpcylcbiAgfVxufVxuXG5jbGFzcyBTZWFzb25zRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvc3Rvcmllcy9zZWFzb25zJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRpdGxlc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3RpdGxlcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBUb2tlbmluZm9FbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi90b2tlbmluZm8nXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFRyYWl0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3RyYWl0cydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiY29uc3QgQWJzdHJhY3RFbmRwb2ludCA9IHJlcXVpcmUoJy4uL2VuZHBvaW50JylcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBXaXphcmRzdmF1bHRFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi93aXphcmRzdmF1bHQnXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDYwICogNjBcbiAgfVxuXG4gIGxpc3RpbmdzICgpIHtcbiAgICByZXR1cm4gbmV3IExpc3RpbmdzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG9iamVjdGl2ZXMgKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0aXZlc0VuZHBvaW50KHRoaXMpXG4gIH1cbn1cblxuY2xhc3MgTGlzdGluZ3NFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi93aXphcmRzdmF1bHQvbGlzdGluZ3MnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gZmFsc2VcbiAgICB0aGlzLmNhY2hlVGltZSA9IDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBPYmplY3RpdmVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvd2l6YXJkc3ZhdWx0L29iamVjdGl2ZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFdvcmxkYm9zc2VzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvd29ybGRib3NzZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmlzTG9jYWxpemVkID0gdHJ1ZVxuICAgIHRoaXMuY2FjaGVUaW1lID0gMjQgKiA2MCAqIDYwXG4gIH1cbn1cbiIsImNvbnN0IEFic3RyYWN0RW5kcG9pbnQgPSByZXF1aXJlKCcuLi9lbmRwb2ludCcpXG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgV29ybGRzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvd29ybGRzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5pc0xvY2FsaXplZCA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDI0ICogNjAgKiA2MFxuICB9XG59XG4iLCJjb25zdCBBYnN0cmFjdEVuZHBvaW50ID0gcmVxdWlyZSgnLi4vZW5kcG9pbnQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFd2d0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGFiaWxpdGllcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBBYmlsaXRpZXNFbmRwb2ludCh0aGlzKVxuICB9XG5cbiAgbWF0Y2hlcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRjaGVzRW5kcG9pbnQodGhpcylcbiAgfVxuXG4gIG9iamVjdGl2ZXMgKCkge1xuICAgIHJldHVybiBuZXcgT2JqZWN0aXZlc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICB1cGdyYWRlcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBVcGdyYWRlc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICByYW5rcyAoKSB7XG4gICAgcmV0dXJuIG5ldyBSYW5rc0VuZHBvaW50KHRoaXMpXG4gIH1cbn1cblxuY2xhc3MgQWJpbGl0aWVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvd3Z3L2FiaWxpdGllcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBNYXRjaGVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvd3Z3L21hdGNoZXMnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDMwXG4gIH1cblxuICB3b3JsZCAod29ybGRJZCkge1xuICAgIHJldHVybiBzdXBlci5nZXQoYD93b3JsZD0ke3dvcmxkSWR9YCwgdHJ1ZSlcbiAgfVxuXG4gIG92ZXJ2aWV3ICgpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoZXNPdmVydmlld0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBzY29yZXMgKCkge1xuICAgIHJldHVybiBuZXcgTWF0Y2hlc1Njb3Jlc0VuZHBvaW50KHRoaXMpXG4gIH1cblxuICBzdGF0cyAoaWQpIHtcbiAgICByZXR1cm4gbmV3IE1hdGNoZXNTdGF0c0VuZHBvaW50KHRoaXMsIGlkKVxuICB9XG59XG5cbmNsYXNzIFRlYW1zRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCwgaWQsIHRlYW0pIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy50ZWFtID0gdGVhbVxuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMudXJsID0gYC92Mi93dncvbWF0Y2hlcy9zdGF0cy8ke2lkfS90ZWFtc2BcbiAgfVxuXG4gIHRvcCAod2hpY2gpIHtcbiAgICByZXR1cm4gbmV3IFRvcFN0YXRzRW5kcG9pbnQodGhpcywgdGhpcy5pZCwgdGhpcy50ZWFtLCB3aGljaClcbiAgfVxufVxuXG5jbGFzcyBUb3BTdGF0c0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQsIGlkLCB0ZWFtLCB3aGljaCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLndoaWNoID0gd2hpY2hcbiAgICB0aGlzLnVybCA9IGAvdjIvd3Z3L21hdGNoZXMvc3RhdHMvJHtpZH0vdGVhbXMvJHt0ZWFtfS90b3AvJHt3aGljaH1gXG4gIH1cbn1cblxuY2xhc3MgTWF0Y2hlc092ZXJ2aWV3RW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvd3Z3L21hdGNoZXMvb3ZlcnZpZXcnXG4gICAgdGhpcy5pc1BhZ2luYXRlZCA9IHRydWVcbiAgICB0aGlzLmlzQnVsayA9IHRydWVcbiAgICB0aGlzLmNhY2hlVGltZSA9IDMwXG4gIH1cblxuICB3b3JsZCAod29ybGRJZCkge1xuICAgIHJldHVybiBzdXBlci5nZXQoYD93b3JsZD0ke3dvcmxkSWR9YCwgdHJ1ZSlcbiAgfVxufVxuXG5jbGFzcyBNYXRjaGVzU2NvcmVzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCkge1xuICAgIHN1cGVyKGNsaWVudClcbiAgICB0aGlzLnVybCA9ICcvdjIvd3Z3L21hdGNoZXMvc2NvcmVzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAzMFxuICB9XG5cbiAgd29ybGQgKHdvcmxkSWQpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0KGA/d29ybGQ9JHt3b3JsZElkfWAsIHRydWUpXG4gIH1cbn1cblxuY2xhc3MgTWF0Y2hlc1N0YXRzRW5kcG9pbnQgZXh0ZW5kcyBBYnN0cmFjdEVuZHBvaW50IHtcbiAgY29uc3RydWN0b3IgKGNsaWVudCwgaWQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy51cmwgPSAnL3YyL3d2dy9tYXRjaGVzL3N0YXRzJ1xuICAgIHRoaXMuaXNQYWdpbmF0ZWQgPSB0cnVlXG4gICAgdGhpcy5pc0J1bGsgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAzMFxuICB9XG5cbiAgd29ybGQgKHdvcmxkSWQpIHtcbiAgICByZXR1cm4gc3VwZXIuZ2V0KGA/d29ybGQ9JHt3b3JsZElkfWAsIHRydWUpXG4gIH1cblxuICB0ZWFtcyAodGVhbSkge1xuICAgIHJldHVybiBuZXcgVGVhbXNFbmRwb2ludCh0aGlzLCB0aGlzLmlkLCB0ZWFtKVxuICB9XG59XG5cbmNsYXNzIE9iamVjdGl2ZXNFbmRwb2ludCBleHRlbmRzIEFic3RyYWN0RW5kcG9pbnQge1xuICBjb25zdHJ1Y3RvciAoY2xpZW50KSB7XG4gICAgc3VwZXIoY2xpZW50KVxuICAgIHRoaXMudXJsID0gJy92Mi93dncvb2JqZWN0aXZlcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBVcGdyYWRlc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3d2dy91cGdyYWRlcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuXG5jbGFzcyBSYW5rc0VuZHBvaW50IGV4dGVuZHMgQWJzdHJhY3RFbmRwb2ludCB7XG4gIGNvbnN0cnVjdG9yIChjbGllbnQpIHtcbiAgICBzdXBlcihjbGllbnQpXG4gICAgdGhpcy51cmwgPSAnL3YyL3d2dy9yYW5rcydcbiAgICB0aGlzLmlzUGFnaW5hdGVkID0gdHJ1ZVxuICAgIHRoaXMuaXNCdWxrID0gdHJ1ZVxuICAgIHRoaXMuaXNMb2NhbGl6ZWQgPSB0cnVlXG4gICAgdGhpcy5jYWNoZVRpbWUgPSAyNCAqIDYwICogNjBcbiAgfVxufVxuIiwiYXN5bmMgZnVuY3Rpb24gcGFyYWxsZWwgKHByb21pc2VzKSB7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBPYmplY3QudmFsdWVzKHByb21pc2VzKS5tYXAoZnVuYyA9PiBmdW5jKCkpXG4gIClcblxuICAvLyBJZiB0aGUgaW5pdGlhbCBzdHJ1Y3R1cmUgd2FzIGFuIGFycmF5LCBqdXN0IHJldHVybiB0aGUgYXJyYXkgb2YgcmVzdWx0c1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICByZXR1cm4gcmVzdWx0c1xuICB9XG5cbiAgLy8gSWYgdGhlIGluaXRpYWwgc3RydWN0dXJlIHdhcyBhbiBvYmplY3QsIHJlYnVpbGQgYW4gb2JqZWN0IHdpdGggdGhlIHJlc3VsdHNcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb21pc2VzKVxuICByZXR1cm4gcmVzdWx0cy5yZWR1Y2UoKG9iamVjdCwgcmVzdWx0UGFydCwgaW5kZXgpID0+IHtcbiAgICBvYmplY3Rba2V5c1tpbmRleF1dID0gcmVzdWx0UGFydFxuICAgIHJldHVybiBvYmplY3RcbiAgfSwge30pXG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBwYXJhbGxlbCB9XG4iLCJjb25zdCBlbW90aW9uSGFzaCA9IHJlcXVpcmUoJ0BlbW90aW9uL2hhc2gvZGlzdC9oYXNoLmJyb3dzZXIuY2pzLmpzJykuZGVmYXVsdFxuXG5sZXQgY2FjaGUgPSB7fVxuXG5mdW5jdGlvbiBoYXNoIChzdHJpbmcpIHtcbiAgaWYgKCFjYWNoZVtzdHJpbmddKSB7XG4gICAgY2FjaGVbc3RyaW5nXSA9IGVtb3Rpb25IYXNoKHN0cmluZylcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtzdHJpbmddXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFxuIiwiY29uc3QgREFZX01TID0gMjQgKiA2MCAqIDYwICogMTAwMFxuXG5mdW5jdGlvbiBnZXREYXRlQXRUaW1lIChkYXRlLCB0aW1lKSB7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlLnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvVC4qWi8sIGBUJHt0aW1lfS4wMDBaYCkpXG59XG5cbmZ1bmN0aW9uIGdldERhaWx5UmVzZXQgKGRhdGUpIHtcbiAgZGF0ZSA9IGRhdGUgPyBuZXcgRGF0ZShkYXRlKSA6IG5ldyBEYXRlKClcblxuICBkYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBEQVlfTVMpXG4gIHJldHVybiBnZXREYXRlQXRUaW1lKGRhdGUsICcwMDowMDowMCcpXG59XG5cbmZ1bmN0aW9uIGdldExhc3REYWlseVJlc2V0IChkYXRlKSB7XG4gIHJldHVybiBuZXcgRGF0ZShnZXREYWlseVJlc2V0KGRhdGUpLmdldFRpbWUoKSAtIERBWV9NUylcbn1cblxuZnVuY3Rpb24gZ2V0V2Vla2x5UmVzZXQgKGRhdGUpIHtcbiAgZGF0ZSA9IGRhdGUgPyBuZXcgRGF0ZShkYXRlKSA6IG5ldyBEYXRlKClcblxuICBjb25zdCB3ZWVrZGF5ID0gZGF0ZS5nZXRVVENEYXkoKVxuICBjb25zdCBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKVxuICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRVVENNaW51dGVzKClcbiAgbGV0IGRheURpZmYgPSAwXG5cbiAgc3dpdGNoICh3ZWVrZGF5KSB7XG4gICAgY2FzZSAwOlxuICAgICAgLy8gMCAtPiAxIHN1bmRheVxuICAgICAgZGF5RGlmZiA9IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAxOlxuICAgICAgLy8gMSAtPiAwIG1vbmRheSAoaWYgYmVmb3JlIHJlc2V0KVxuICAgICAgLy8gMSAtPiA3IG1vbmRheSAoaWYgYWZ0ZXIgcmVzZXQpXG4gICAgICBjb25zdCBwYXN0UmVzZXQgPSBob3VycyA+IDcgfHwgKGhvdXJzID09PSA3ICYmIG1pbnV0ZXMgPj0gMzApXG4gICAgICBkYXlEaWZmID0gcGFzdFJlc2V0ID8gNyA6IDBcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIDIgLT4gNiB0dWVzZGF5XG4gICAgICAvLyAzIC0+IDUgd2VkbmVzZGF5XG4gICAgICAvLyA0IC0+IDQgdGh1cnNkYXlcbiAgICAgIC8vIDUgLT4gMyBmcmlkYXlcbiAgICAgIC8vIDYgLT4gMiBzYXR1cmRheVxuICAgICAgZGF5RGlmZiA9IDggLSB3ZWVrZGF5XG4gICAgICBicmVha1xuICB9XG5cbiAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgZGF5RGlmZiAqIERBWV9NUylcbiAgcmV0dXJuIGdldERhdGVBdFRpbWUoZGF0ZSwgJzA3OjMwOjAwJylcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFdlZWtseVJlc2V0IChkYXRlKSB7XG4gIHJldHVybiBuZXcgRGF0ZShnZXRXZWVrbHlSZXNldChkYXRlKS5nZXRUaW1lKCkgLSA3ICogREFZX01TKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0RGF0ZUF0VGltZSxcbiAgZ2V0RGFpbHlSZXNldCxcbiAgZ2V0TGFzdERhaWx5UmVzZXQsXG4gIGdldFdlZWtseVJlc2V0LFxuICBnZXRMYXN0V2Vla2x5UmVzZXRcbn1cbiIsImNvbnN0IENsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50JylcblxuLy8gRWFjaCB0aW1lIHRoZSBhcGkgd3JhcHBlciBpcyBjYWxsZWQsIHdlIGdpdmUgYmFjayBhIG5ldyBpbnN0YW5jZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgQ2xpZW50KClcbn1cbiIsImNsYXNzIFN0b3JlIHtcclxuICAgIGNvbnN0cnVjdG9yKGRiTmFtZSA9ICdrZXl2YWwtc3RvcmUnLCBzdG9yZU5hbWUgPSAna2V5dmFsJykge1xyXG4gICAgICAgIHRoaXMuc3RvcmVOYW1lID0gc3RvcmVOYW1lO1xyXG4gICAgICAgIHRoaXMuX2RicCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3BlbnJlcSA9IGluZGV4ZWREQi5vcGVuKGRiTmFtZSwgMSk7XHJcbiAgICAgICAgICAgIG9wZW5yZXEub25lcnJvciA9ICgpID0+IHJlamVjdChvcGVucmVxLmVycm9yKTtcclxuICAgICAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSAoKSA9PiByZXNvbHZlKG9wZW5yZXEucmVzdWx0KTtcclxuICAgICAgICAgICAgLy8gRmlyc3QgdGltZSBzZXR1cDogY3JlYXRlIGFuIGVtcHR5IG9iamVjdCBzdG9yZVxyXG4gICAgICAgICAgICBvcGVucmVxLm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9wZW5yZXEucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlTmFtZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfd2l0aElEQlN0b3JlKHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RicC50aGVuKGRiID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbih0aGlzLnN0b3JlTmFtZSwgdHlwZSk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSAoKSA9PiByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHRyYW5zYWN0aW9uLmVycm9yKTtcclxuICAgICAgICAgICAgY2FsbGJhY2sodHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGhpcy5zdG9yZU5hbWUpKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxubGV0IHN0b3JlO1xyXG5mdW5jdGlvbiBnZXREZWZhdWx0U3RvcmUoKSB7XHJcbiAgICBpZiAoIXN0b3JlKVxyXG4gICAgICAgIHN0b3JlID0gbmV3IFN0b3JlKCk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0KGtleSwgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSkge1xyXG4gICAgbGV0IHJlcTtcclxuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkb25seScsIHN0b3JlID0+IHtcclxuICAgICAgICByZXEgPSBzdG9yZS5nZXQoa2V5KTtcclxuICAgIH0pLnRoZW4oKCkgPT4gcmVxLnJlc3VsdCk7XHJcbn1cclxuZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUsIHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpIHtcclxuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XHJcbiAgICAgICAgc3RvcmUucHV0KHZhbHVlLCBrZXkpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZGVsKGtleSwgc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSkge1xyXG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWR3cml0ZScsIHN0b3JlID0+IHtcclxuICAgICAgICBzdG9yZS5kZWxldGUoa2V5KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyKHN0b3JlID0gZ2V0RGVmYXVsdFN0b3JlKCkpIHtcclxuICAgIHJldHVybiBzdG9yZS5fd2l0aElEQlN0b3JlKCdyZWFkd3JpdGUnLCBzdG9yZSA9PiB7XHJcbiAgICAgICAgc3RvcmUuY2xlYXIoKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGtleXMoc3RvcmUgPSBnZXREZWZhdWx0U3RvcmUoKSkge1xyXG4gICAgY29uc3Qga2V5cyA9IFtdO1xyXG4gICAgcmV0dXJuIHN0b3JlLl93aXRoSURCU3RvcmUoJ3JlYWRvbmx5Jywgc3RvcmUgPT4ge1xyXG4gICAgICAgIC8vIFRoaXMgd291bGQgYmUgc3RvcmUuZ2V0QWxsS2V5cygpLCBidXQgaXQgaXNuJ3Qgc3VwcG9ydGVkIGJ5IEVkZ2Ugb3IgU2FmYXJpLlxyXG4gICAgICAgIC8vIEFuZCBvcGVuS2V5Q3Vyc29yIGlzbid0IHN1cHBvcnRlZCBieSBTYWZhcmkuXHJcbiAgICAgICAgKHN0b3JlLm9wZW5LZXlDdXJzb3IgfHwgc3RvcmUub3BlbkN1cnNvcikuY2FsbChzdG9yZSkub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBrZXlzLnB1c2godGhpcy5yZXN1bHQua2V5KTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQuY29udGludWUoKTtcclxuICAgICAgICB9O1xyXG4gICAgfSkudGhlbigoKSA9PiBrZXlzKTtcclxufVxuXG5leHBvcnQgeyBTdG9yZSwgZ2V0LCBzZXQsIGRlbCwgY2xlYXIsIGtleXMgfTtcbiIsImFzeW5jIGZ1bmN0aW9uIHNlcmllcyAoYXJyYXkpIHtcbiAgbGV0IHJlc3VsdHMgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpICE9PSBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdHMucHVzaChhd2FpdCBhcnJheVtpXSgpKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHNcbn1cblxuZnVuY3Rpb24gcGFyYWxsZWwgKGFycmF5KSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChhcnJheS5tYXAoZnVuYyA9PiBmdW5jKCkpKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2VyaWVzLFxuICBwYXJhbGxlbFxufVxuIiwiY29uc3QgZmV0Y2ggPSByZXF1aXJlKCdjcm9zcy1mZXRjaCcpXG5jb25zdCBmbG93ID0gcmVxdWlyZSgnLi9mbG93LmpzJylcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIHR5cGU6ICdqc29uJyxcbiAgbWV0aG9kOiAnR0VUJyxcbiAgaGVhZGVyczoge30sXG4gIGJvZHk6IHVuZGVmaW5lZFxufVxuXG5sZXQgaW50ZXJuYWxSZXRyeSA9ICgpID0+IGZhbHNlXG5sZXQgaW50ZXJuYWxSZXRyeVdhaXQgPSAoKSA9PiBmYWxzZVxuXG4vLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxubGV0IGludGVybmFsTG9nZ2VyID0gKCkgPT4gZmFsc2VcblxubW9kdWxlLmV4cG9ydHMgPSB7IHJldHJ5LCByZXRyeVdhaXQsIGxvZ2dlciwgc2luZ2xlLCBtYW55IH1cblxuLy8gU2V0IGEgY3VzdG9tIGRlY2lkZXIgZnVuY3Rpb24gdGhhdCBkZWNpZGVzIHRvIHJldHJ5XG4vLyBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHRyaWVzIGFuZCB0aGUgcHJldmlvdXMgZXJyb3JcbmZ1bmN0aW9uIHJldHJ5IChkZWNpZGVyKSB7XG4gIGludGVybmFsUmV0cnkgPSBkZWNpZGVyXG59XG5cbi8vIFNldCBhIGN1c3RvbSBmdW5jdGlvbiB0aGF0IHNldHMgaG93IGxvbmcgd2Ugc2hvdWxkXG4vLyBzbGVlcCBiZXR3ZWVuIGVhY2ggZmFpbGVkIHJlcXVlc3RcbmZ1bmN0aW9uIHJldHJ5V2FpdCAoY2FsbGJhY2spIHtcbiAgaW50ZXJuYWxSZXRyeVdhaXQgPSBjYWxsYmFja1xufVxuXG4vLyBTZXQgYSBjdXN0b20gZnVuY3Rpb24gdGhhdCBsb2dzIG91dCBpbmZvcm1hdGlvbiBhYm91dCBlYWNoIHJlcXVlc3RcbmZ1bmN0aW9uIGxvZ2dlciAoY2FsbGJhY2spIHtcbiAgaW50ZXJuYWxMb2dnZXIgPSBjYWxsYmFja1xufVxuXG4vLyBSZXF1ZXN0IGEgc2luZ2xlIHVybFxuZnVuY3Rpb24gc2luZ2xlICh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICBsZXQgdHJpZXMgPSAxXG5cbiAgLy8gRXhlY3V0ZSB0aGUgcmVxdWVzdCBhbmQgcmV0cnkgaWYgdGhlcmUgYXJlIGVycm9ycyAoYW5kIHRoZVxuICAvLyByZXRyeSBkZWNpZGVyIGRlY2lkZWQgdGhhdCB3ZSBzaG91bGQgdHJ5IG91ciBsdWNrIGFnYWluKVxuICBjb25zdCBjYWxsUmVxdWVzdCA9ICgpID0+IHtcbiAgICBsZXQgc3RhcnQgPSBuZXcgRGF0ZSgpXG5cbiAgICByZXR1cm4gcmVxdWVzdCh1cmwsIG9wdGlvbnMpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBpbnRlcm5hbExvZ2dlcih7IHVybCwgZHVyYXRpb246IG5ldyBEYXRlKCkgLSBzdGFydCwgc3RhdHVzOiAyMDAsIHJldHJpZXM6IHRyaWVzIC0gMSB9KVxuXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGludGVybmFsTG9nZ2VyKHsgdXJsLCBkdXJhdGlvbjogbmV3IERhdGUoKSAtIHN0YXJ0LCBzdGF0dXM6IGVyciAmJiBlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLnN0YXR1cywgcmV0cmllczogdHJpZXMgLSAxIH0pXG5cbiAgICAgICAgaWYgKGludGVybmFsUmV0cnkoKyt0cmllcywgZXJyKSkge1xuICAgICAgICAgIHJldHVybiB3YWl0KGNhbGxSZXF1ZXN0LCBpbnRlcm5hbFJldHJ5V2FpdCh0cmllcykpXG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cblxuICByZXR1cm4gY2FsbFJlcXVlc3QoKVxufVxuXG4vLyBTZW5kIGEgcmVxdWVzdCB1c2luZyB0aGUgdW5kZXJseWluZyBmZXRjaCBBUElcbmZ1bmN0aW9uIHJlcXVlc3QgKHVybCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpXG4gIGxldCBzYXZlZENvbnRlbnRcbiAgbGV0IHNhdmVkUmVzcG9uc2VcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZldGNoKHVybCwgb3B0aW9ucylcbiAgICAgIC50aGVuKGhhbmRsZVJlc3BvbnNlKVxuICAgICAgLnRoZW4oaGFuZGxlQm9keSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlIChyZXNwb25zZSkge1xuICAgICAgLy8gU2F2ZSB0aGUgcmVzcG9uc2UgZm9yIGNoZWNraW5nIHRoZSBzdGF0dXMgbGF0ZXJcbiAgICAgIHNhdmVkUmVzcG9uc2UgPSByZXNwb25zZVxuXG4gICAgICAvLyBEZWNvZGUgdGhlIHJlc3BvbnNlIGJvZHlcbiAgICAgIHN3aXRjaCAob3B0aW9ucy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgY2FzZSAnanNvbic6XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVCb2R5IChjb250ZW50KSB7XG4gICAgICAvLyBCdWJibGUgYW4gZXJyb3IgaWYgdGhlIHJlc3BvbnNlIHN0YXR1cyBpcyBub3Qgb2theVxuICAgICAgaWYgKHNhdmVkUmVzcG9uc2UgJiYgc2F2ZWRSZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgIHNhdmVkQ29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZXNwb25zZSBzdGF0dXMgaW5kaWNhdGVzIGVycm9yYClcbiAgICAgIH1cblxuICAgICAgLy8gQWxsIGlzIHdlbGwhXG4gICAgICByZXNvbHZlKGNvbnRlbnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IgKGVycikge1xuICAgICAgLy8gT3ZlcndyaXRlIHBvdGVudGlhbCBkZWNvZGluZyBlcnJvcnMgd2hlbiB0aGUgYWN0dWFsIHByb2JsZW0gd2FzIHRoZSByZXNwb25zZVxuICAgICAgaWYgKHNhdmVkUmVzcG9uc2UgJiYgc2F2ZWRSZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgIGVyciA9IG5ldyBFcnJvcihgU3RhdHVzICR7c2F2ZWRSZXNwb25zZS5zdGF0dXN9YClcbiAgICAgIH1cblxuICAgICAgLy8gRW5yaWNoIHRoZSBlcnJvciBtZXNzYWdlIHdpdGggdGhlIHJlc3BvbnNlIGFuZCB0aGUgY29udGVudFxuICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKGVyci5tZXNzYWdlKVxuICAgICAgZXJyb3IucmVzcG9uc2UgPSBzYXZlZFJlc3BvbnNlXG4gICAgICBlcnJvci5jb250ZW50ID0gc2F2ZWRDb250ZW50XG4gICAgICByZWplY3QoZXJyb3IpXG4gICAgfVxuICB9KVxufVxuXG4vLyBSZXF1ZXN0IG11bHRpcGxlIHBhZ2VzXG5mdW5jdGlvbiBtYW55ICh1cmxzLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGZsb3dNZXRob2QgPSAob3B0aW9ucy53YWl0VGltZSkgPyBmbG93LnNlcmllcyA6IGZsb3cucGFyYWxsZWxcblxuICAvLyBDYWxsIHRoZSBzaW5nbGUgbWV0aG9kIHdoaWxlIHJlc3BlY3RpbmcgdGhlIHdhaXQgdGltZSBpbiBiZXR3ZWVuIHRhc2tzXG4gIGNvbnN0IGNhbGxTaW5nbGUgPSAodXJsKSA9PiBzaW5nbGUodXJsLCBvcHRpb25zKVxuICAgIC50aGVuKGNvbnRlbnQgPT4gd2FpdCgoKSA9PiBjb250ZW50LCBvcHRpb25zLndhaXRUaW1lKSlcblxuICAvLyBNYXAgb3ZlciB0aGUgdXJscyBhbmQgY2FsbCB0aGVtIHVzaW5nIHRoZSBtZXRob2QgdGhlIHVzZXIgY2hvc2VcbiAgbGV0IHByb21pc2VzID0gdXJscy5tYXAodXJsID0+ICgpID0+IGNhbGxTaW5nbGUodXJsKSlcbiAgcmV0dXJuIGZsb3dNZXRob2QocHJvbWlzZXMpXG59XG5cbi8vIFdhaXQgYSBzcGVjaWZpYyB0aW1lIGJlZm9yZSBleGVjdXRpbmcgYSBjYWxsYmFja1xuZnVuY3Rpb24gd2FpdCAoY2FsbGJhY2ssIG1zKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoY2FsbGJhY2soKSksIG1zIHx8IDApXG4gIH0pXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgdW5kZWY7XG5cbi8qKlxuICogRGVjb2RlIGEgVVJJIGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgVVJJIGVuY29kZWQgc3RyaW5nLlxuICogQHJldHVybnMge1N0cmluZ3xOdWxsfSBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dC5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGVuY29kZSBhIGdpdmVuIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZW5jb2RlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd8TnVsbH0gVGhlIGVuY29kZWQgc3RyaW5nLlxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShpbnB1dCkge1xuICB0cnkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBTaW1wbGUgcXVlcnkgc3RyaW5nIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIHBhcnNlZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeSkge1xuICB2YXIgcGFyc2VyID0gLyhbXj0/IyZdKyk9PyhbXiZdKikvZ1xuICAgICwgcmVzdWx0ID0ge31cbiAgICAsIHBhcnQ7XG5cbiAgd2hpbGUgKHBhcnQgPSBwYXJzZXIuZXhlYyhxdWVyeSkpIHtcbiAgICB2YXIga2V5ID0gZGVjb2RlKHBhcnRbMV0pXG4gICAgICAsIHZhbHVlID0gZGVjb2RlKHBhcnRbMl0pO1xuXG4gICAgLy9cbiAgICAvLyBQcmV2ZW50IG92ZXJyaWRpbmcgb2YgZXhpc3RpbmcgcHJvcGVydGllcy4gVGhpcyBlbnN1cmVzIHRoYXQgYnVpbGQtaW5cbiAgICAvLyBtZXRob2RzIGxpa2UgYHRvU3RyaW5nYCBvciBfX3Byb3RvX18gYXJlIG5vdCBvdmVycmlkZW4gYnkgbWFsaWNpb3VzXG4gICAgLy8gcXVlcnlzdHJpbmdzLlxuICAgIC8vXG4gICAgLy8gSW4gdGhlIGNhc2UgaWYgZmFpbGVkIGRlY29kaW5nLCB3ZSB3YW50IHRvIG9taXQgdGhlIGtleS92YWx1ZSBwYWlyc1xuICAgIC8vIGZyb20gdGhlIHJlc3VsdC5cbiAgICAvL1xuICAgIGlmIChrZXkgPT09IG51bGwgfHwgdmFsdWUgPT09IG51bGwgfHwga2V5IGluIHJlc3VsdCkgY29udGludWU7XG4gICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIGEgcXVlcnkgc3RyaW5nIHRvIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIE9iamVjdCB0aGF0IHNob3VsZCBiZSB0cmFuc2Zvcm1lZC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcmVmaXggT3B0aW9uYWwgcHJlZml4LlxuICogQHJldHVybnMge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5naWZ5KG9iaiwgcHJlZml4KSB7XG4gIHByZWZpeCA9IHByZWZpeCB8fCAnJztcblxuICB2YXIgcGFpcnMgPSBbXVxuICAgICwgdmFsdWVcbiAgICAsIGtleTtcblxuICAvL1xuICAvLyBPcHRpb25hbGx5IHByZWZpeCB3aXRoIGEgJz8nIGlmIG5lZWRlZFxuICAvL1xuICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiBwcmVmaXgpIHByZWZpeCA9ICc/JztcblxuICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YWx1ZSA9IG9ialtrZXldO1xuXG4gICAgICAvL1xuICAgICAgLy8gRWRnZSBjYXNlcyB3aGVyZSB3ZSBhY3R1YWxseSB3YW50IHRvIGVuY29kZSB0aGUgdmFsdWUgdG8gYW4gZW1wdHlcbiAgICAgIC8vIHN0cmluZyBpbnN0ZWFkIG9mIHRoZSBzdHJpbmdpZmllZCB2YWx1ZS5cbiAgICAgIC8vXG4gICAgICBpZiAoIXZhbHVlICYmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWYgfHwgaXNOYU4odmFsdWUpKSkge1xuICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSBlbmNvZGUoa2V5KTtcbiAgICAgIHZhbHVlID0gZW5jb2RlKHZhbHVlKTtcblxuICAgICAgLy9cbiAgICAgIC8vIElmIHdlIGZhaWxlZCB0byBlbmNvZGUgdGhlIHN0cmluZ3MsIHdlIHNob3VsZCBiYWlsIG91dCBhcyB3ZSBkb24ndFxuICAgICAgLy8gd2FudCB0byBhZGQgaW52YWxpZCBzdHJpbmdzIHRvIHRoZSBxdWVyeS5cbiAgICAgIC8vXG4gICAgICBpZiAoa2V5ID09PSBudWxsIHx8IHZhbHVlID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgIHBhaXJzLnB1c2goa2V5ICsnPScrIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFpcnMubGVuZ3RoID8gcHJlZml4ICsgcGFpcnMuam9pbignJicpIDogJyc7XG59XG5cbi8vXG4vLyBFeHBvc2UgdGhlIG1vZHVsZS5cbi8vXG5leHBvcnRzLnN0cmluZ2lmeSA9IHF1ZXJ5c3RyaW5naWZ5O1xuZXhwb3J0cy5wYXJzZSA9IHF1ZXJ5c3RyaW5nO1xuIiwiaW1wb3J0IGNsaWVudCBmcm9tICdndzJhcGktY2xpZW50JztcclxuaW1wb3J0IGNhY2hlTWVtb3J5IGZyb20gJ2d3MmFwaS1jbGllbnQvc3JjL2NhY2hlL21lbW9yeS5qcyc7XHJcbmltcG9ydCBjYWNoZUJyb3dzZXJTdG9yYWdlIGZyb20gJ2d3MmFwaS1jbGllbnQvc3JjL2NhY2hlL2Jyb3dzZXIuanMnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KGtleSkge1xyXG4gICAgY29uc3QgYyA9IGNsaWVudCgpO1xyXG4gICAgYy5zY2hlbWEoXCIyMDI0LTA3LTIwVDAxOjAwOjAwLjAwMFpcIik7XHJcbiAgICBjLmxhbmd1YWdlKFwiZW5cIik7XHJcbiAgICBpZihrZXkpIGMuYXV0aGVudGljYXRlKGtleSk7XHJcbiAgICBjLmNhY2hlU3RvcmFnZShbXHJcbiAgICAgICAgY2FjaGVNZW1vcnkoeyBnY1RpY2s6IDUgKiA2MCAqIDEwMDAgfSksXHJcbiAgICAgICAgY2FjaGVCcm93c2VyU3RvcmFnZSh7XHJcbiAgICAgICAgICAgIHN0b3JhZ2VLZXk6IGBndzJhcGktY2FjaGVfJHtrZXl9YCxcclxuICAgICAgICAgICAgZ2NUaWNrOiAzICogNjAgKiAxMDAwXHJcbiAgICAgICAgfSlcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIGM7XHJcbn1cclxuXHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBhcGk7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBlbW9qaSwgaWNvblVybCwga2V5KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmVtb2ppID0gZW1vamk7XHJcbiAgICAgICAgdGhpcy5pY29uVXJsID0gaWNvblVybDtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgICAgICBcclxuICAgICAgICBpZighbmFtZSkgdGhyb3cgXCJQbGVhc2UgbmFtZSB0aGUgcGxheWVyc1wiO1xyXG4gICAgICAgIGlmKCFlbW9qaSkgdGhyb3cgYCR7bmFtZX0gbmVlZHMgZW1vamlgO1xyXG4gICAgICAgIGlmKCFrZXkpIHRocm93IGAke25hbWV9IG5lZWRzIGtleWA7XHJcblxyXG4gICAgICAgIHRoaXMuYXBpID0gY3JlYXRlQ2xpZW50KGtleSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwaUhvbGRlcigpIHtcclxuICAgIGlmKCF3aW5kb3cuYXBpSG9sZGVyKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVycyA9IHJlYWRQbGF5ZXJzKCk7XHJcbiAgICAgICAgd2luZG93LmFwaUhvbGRlciA9IHtcclxuICAgICAgICAgICAgcGxheWVyczogcGxheWVycyxcclxuICAgICAgICAgICAgYXBpOiBjcmVhdGVDbGllbnQobnVsbClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvdy5hcGlIb2xkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRQbGF5ZXJzKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0b2RvIHJlYWRwbGF5ZXJzXCIpO1xyXG4gICAgdmFyIHBsYXllcnMgPSBbXTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZm9yKHZhciBwIG9mIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndzItbm8tbnVhbmNlLXBsYXllcnNcIikpKSB7XHJcbiAgICAgICAgICAgIHBsYXllcnMucHVzaChuZXcgUGxheWVyKHAubmFtZSwgcC5lbW9qaSwgcC5pY29uVXJsLCBwLmtleSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGFsZXJ0KGUpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocGxheWVycyk7XHJcbiAgICByZXR1cm4gcGxheWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gd3JpdGVQbGF5ZXJzKHBsYXllcnMpIHtcclxuICAgIGNvbnNvbGUubG9nKFwic2F2ZXBsYXllcnMgdG9kb1wiKTtcclxuICAgIGNvbnNvbGUubG9nKHBsYXllcnMpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndzItbm8tbnVhbmNlLXBsYXllcnNcIiwgSlNPTi5zdHJpbmdpZnkocGxheWVycykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcGlIb2xkZXJTZXR1cEh0bWwoZWxlbWVudElkKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgIC8vY29uc3QgdGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZGVyXCIpO1xyXG4gICAgY29uc3QgdGhlYWRlclJvdyA9ICB0YWJsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIikpO1xyXG4gICAgdGhlYWRlclJvdy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIikpLmlubmVyVGV4dCA9IFwiUGxheWVyIG5hbWVcIjtcclxuICAgIHRoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpKS5pbm5lclRleHQgPSBcIkVtb2ppXCI7XHJcbiAgICB0aGVhZGVyUm93LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKSkuaW5uZXJUZXh0ID0gXCJJY29uIFVSTFwiO1xyXG4gICAgdGhlYWRlclJvdy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIikpLmlubmVyVGV4dCA9IFwiQVBJIEtleVwiO1xyXG4gICAgdGhlYWRlclJvdy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIikpLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAvL3RhYmxlLmFwcGVuZENoaWxkKHRoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBidXR0b25BZGQuaW5uZXJUZXh0ID0gXCJBZGQgcm93XCI7XHJcbiAgICBjb25zdCBidXR0b25TYXZlPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYnV0dG9uU2F2ZS5pbm5lclRleHQgPSBcIlNhdmVcIjtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkFkZCk7XHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvblNhdmUpO1xyXG5cclxuICAgIGNvbnN0IGFkZFJvdyA9IGZ1bmN0aW9uKHBsYXllcikge1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IHRhYmxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyByb3cgZm9yIHBsYXllcjpcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyKTtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlID0gcGxheWVyPy5uYW1lICAgID8/IFwiXCI7XHJcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS52YWx1ZSA9IHBsYXllcj8uZW1vamkgICA/PyBcIlwiO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIikpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWUgPSBwbGF5ZXI/Lmljb25VcmwgPz8gXCJcIjtcclxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlID0gcGxheWVyPy5rZXkgICAgID8/IFwiXCI7XHJcbiAgICAgICAgY29uc3QgZGVsID0gcm93LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSk7XHJcbiAgICAgICAgZGVsLmlubmVyVGV4dCA9IFwi4p2MXCJcclxuICAgICAgICBkZWwub25jbGljayA9ICgpID0+IHsgcm93LnJlbW92ZSgpOyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZvcih2YXIgcGxheWVyIG9mIHJlYWRQbGF5ZXJzKCkpIHtcclxuICAgICAgICBhZGRSb3cocGxheWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b25BZGQub25jbGljayA9ICgpID0+IHsgYWRkUm93KG51bGwpOyB9O1xyXG4gICAgYnV0dG9uU2F2ZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcnMgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGFibGUucm93cykge1xyXG4gICAgICAgICAgICBpZihpPT0wKSBjb250aW51ZTtcclxuICAgICAgICAgICAgY29uc3QgdHIgPSB0YWJsZS5yb3dzW2ldO1xyXG4gICAgICAgICAgICBpZih0ci5sb2NhbE5hbWUhPVwidHJcIikgY29udGludWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGkwID0gdHIuY2VsbHNbMF0uY2hpbGRyZW5bMF0udmFsdWVcclxuICAgICAgICAgICAgY29uc3QgaTEgPSB0ci5jZWxsc1sxXS5jaGlsZHJlblswXS52YWx1ZVxyXG4gICAgICAgICAgICBjb25zdCBpMiA9IHRyLmNlbGxzWzJdLmNoaWxkcmVuWzBdLnZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IGkzID0gdHIuY2VsbHNbM10uY2hpbGRyZW5bMF0udmFsdWVcclxuICAgICAgICAgICAgcGxheWVycy5wdXNoKG5ldyBQbGF5ZXIoaTAsaTEsaTIsaTMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3JpdGVQbGF5ZXJzKHBsYXllcnMpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0QXBpSG9sZGVyOiBnZXRBcGlIb2xkZXIsXHJcbiAgICBhcGlIb2xkZXJTZXR1cEh0bWw6IGFwaUhvbGRlclNldHVwSHRtbFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcclxuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xyXG5cclxuaW1wb3J0ICcuL2FwaS1ob2xkZXIuanMnO1xyXG5pbXBvcnQgYXBpSG9sZGVyIGZyb20gJy4vYXBpLWhvbGRlci5qcyc7XHJcblxyXG5jb25zb2xlLmxvZyhcIkhFTExPIVwiKTtcclxuXHJcbmZ1bmN0aW9uIGhlbGxvKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIGZ1bmN0aW9uIVwiKTtcclxufVxyXG5cclxud2luZG93Lmd3MiA9IHtcclxuICAgIGhlbGxvOiBwcmludE1lLFxyXG4gICAgYXBpSG9sZGVyOiBhcGlIb2xkZXIsXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaGVsbG86IGhlbGxvLFxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==