/*
 * nconf.js: Top-level include for the nconf module
 *
 * (C) 2011, Nodejitsu Inc.
 *
 */

var fs = require('fs'),
    async = require('async'),
    common = require('./nconf/common'),
    Provider = require('./nconf/provider').Provider,
    nconf = module.exports = new Provider();

//
// Expose the version from the package.json using `pkginfo`.
//
require('pkginfo')(module, 'version');

nconf.Argv    = require('./nconf/stores/argv').Argv;
nconf.Env     = require('./nconf/stores/env').Env;
nconf.File    = require('./nconf/stores/file').File;
nconf.Literal = require('./nconf/stores/literal').Literal;
nconf.Memory  = require('./nconf/stores/memory').Memory;

//
// Expose the various components included with nconf
//
nconf.key           = common.key;
nconf.path          = common.path;
nconf.loadFiles     = common.loadFiles;
nconf.loadFilesSync = common.loadFilesSync;
nconf.formats       = require('./nconf/formats');
nconf.Provider      = Provider;
