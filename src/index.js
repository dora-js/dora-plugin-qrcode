import { setErrorLevel, generate } from 'qrcode-terminal';
import { getHref } from './util';

export default {
  'server.after'() {
    const { log, localIP, query } = this;
    const href = getHref(query, localIP);

    setErrorLevel('Q');
    log.info(`${href}`);
    generate(`${href}`);
  },
};
