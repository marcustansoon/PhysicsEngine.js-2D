(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
const git2json = require('@fabien0102/git2json');



//console.log(git2json);
},{"@fabien0102/git2json":4}],4:[function(require,module,exports){
(function (process){
const parsers = require('./parsers');

// Default fields
// see https://git-scm.com/docs/pretty-formats for placeholder codes
const defaultFields = {
  refs: { value: '%d', parser: parsers.refs },
  hash: { value: '%H' },
  hashAbbrev: { value: '%h' },
  tree: { value: '%T' },
  treeAbbrev: { value: '%t' },
  parents: { value: '%P', parser: parsers.parents },
  parentsAbbrev: { value: '%p', parser: parsers.parents },
  'author.name': { value: '%an' },
  'author.email': { value: '%ae' },
  'author.timestamp': { value: '%at', parser: parsers.timestamp },
  'committer.name': { value: '%cn' },
  'committer.email': { value: '%ce' },
  'committer.timestamp': { value: '%ct', parser: parsers.timestamp },
  subject: { value: '%s' },
  body: { value: '%b' },
  notes: { value: '%N' }
};

/**
 * Execute git log on current folder and return a pretty object
 *
 * @param {object} [options]
 * @param {object} [options.fields] - fields to exports
 * @param {string} [options.path] - path of target git repo
 * @return {Promise}
 */
function git2json({ fields = defaultFields, path = process.cwd() } = {}) {
  // this require can't be global for mocking issue
  const { spawn } = require('child_process');
  const keys = Object.keys(fields);
  const prettyKeys = keys.map(a => fields[a].value).join('%x00');
  const args = ['-C', path, 'log', `--pretty=format:%x01${prettyKeys}%x01`, '--numstat', '--date-order', '--all']

  return new Promise((resolve, reject) => {
    let stderr = '';
    let stdout = '';
    const cp = spawn('git', args);

    cp.stdout.on('data', data => {
      stdout += data;
    });

    cp.stderr.on('data', data => {
      stderr += data;
    });

    cp.on('error', reject)
      .on('close', code => {
        if (code !== 0) {
          reject(stderr);
        }

        const data = stdout.split('\u0001');
        const stats = data.filter((a, i) => (i + 1) % 2);

        let json = data.filter((a, i) => i % 2).map((raw, k) => {
          return Object.assign(
            raw.split('\u0000').reduce((mem, field, j) => {
              const value = fields[keys[j]].parser
                ? fields[keys[j]].parser(field)
                : field.trim();
              // Deal with nested key format (eg: 'author.name')
              if (/\./.exec(keys[j])) {
                let nameParts = keys[j].split('.');
                mem[nameParts[0]] = Object.assign({}, mem[nameParts[0]], {
                  [nameParts[1]]: value
                });
              } else {
                mem[keys[j]] = value;
              }
              return mem;
            }, {}),
            {
              // Add parsed stats of each commit
              stats: stats[k + 1].split('\n').filter(a => a).map(a => {
                let b = a.split('\t');
                return {
                  additions: isNaN(b[0]) ? null : +b[0],
                  deletions: isNaN(b[1]) ? null : +b[1],
                  file: b[2]
                };
              })
            }
          );
        });
        resolve(json);
    });
  });
}

module.exports = {
  run: git2json,
  defaultFields,
  parsers
};

}).call(this,require('_process'))
},{"./parsers":5,"_process":2,"child_process":1}],5:[function(require,module,exports){
module.exports = {
  /**
   * Transform git timestamp to unix timestamp
   */
  timestamp: a => +a * 1000,

  /**
   * Transform parents string to a clean array
   */
  parents: a => a.split(' ').filter(b => b),

  /**
   * Transform refs string to a clean array
   */
  refs: a => a.replace(/[\(\)]/g, '')
    .replace('->', ',')
    .split(', ')
    .map(a => a.trim())
    .filter(a => a)
};
},{}]},{},[3]);
