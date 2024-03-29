console.log('Itee.Database.MySQL v1.0.3 - EsModule')
import * as MySQLDriver from 'mysql';
import { TAbstractDatabase } from 'itee-database';

/**
 * @author [Ahmed DCHAR]{@link https://github.com/dragoneel}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 *
 * @file Todo
 *
 * @example Todo
 *
 */

class TMySQLDatabase extends TAbstractDatabase {

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{},
            ...parameters,
            ...{
                driver: MySQLDriver
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

export { TMySQLDatabase };
//# sourceMappingURL=itee-mysql.esm.js.map
