import { setErrorLevel, generate } from 'qrcode-terminal';
import { getHref } from './utils';

const localIP = require('internal-ip')();

export default {
  'server.after'() {
    const { log, query } = this;
    const href = getHref(query, localIP);

    setErrorLevel('Q');
    log.info(`${href}`);
    generate(`${href}`);
  },
};
