console.log('Itee.Database.MySQL v1.0.2 - CommonJs')
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var MySQLDriver = require('mysql');
var iteeDatabase = require('itee-database');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () {
						return e[k];
					}
				});
			}
		});
	}
	n['default'] = e;
	return Object.freeze(n);
}

var MySQLDriver__namespace = /*#__PURE__*/_interopNamespace(MySQLDriver);

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TMySQLDatabase extends iteeDatabase.TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: MySQLDriver__namespace
            }
        };

        super( _parameters );

    }

    close ( /*onCloseCallback*/ ) {}

    connect () {

        const connection = this._driver.createConnection( {
            host:     'localhost',
            user:     'dbuser',
            password: 's3kreee7',
            database: 'my_db'
        } );

        connection.connect();

        connection.query( 'SELECT 1 + 1 AS solution', function ( err, rows, fields ) {
            if ( err ) {
                throw err
            }

            this.logger.log( 'The solution is: ', rows[ 0 ].solution );
            this.logger.log( 'The fields is: ', fields );
        } );

        connection.end();

    }

    on ( /*eventName, callback*/ ) {}

    _initDatabase () {
        super._initDatabase();

    }

}

exports.TMySQLDatabase = TMySQLDatabase;
//# sourceMappingURL=itee-mysql.cjs.js.map
