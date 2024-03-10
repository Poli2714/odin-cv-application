import { useContext, useEffect } from 'react';

import { InvalidFormMessage } from 'src/components/errors';
import { ExpErrMsgContext } from 'src/hooks/Contexts';

function InvalidExpFormMsg() {
  const { showExpErrMessage, setShowExpErrMessage } =
    useContext(ExpErrMsgContext);

  useEffect(() => {
    let timeout;
    if (showExpErrMessage) {
      timeout = setTimeout(() => setShowExpErrMessage(false), 5000);
    }
    return () => clearTimeout(timeout);
  }, [showExpErrMessage, setShowExpErrMessage]);

  return showExpErrMessage && <InvalidFormMessage />;
}

export default InvalidExpFormMsg;
