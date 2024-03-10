import { useContext, useEffect } from 'react';

import { InvalidFormMessage } from 'src/components/errors';
import { EduErrMsgContext } from 'src/hooks/Contexts';

function InvalidEduFormMsg() {
  const { showEduErrMessage, setShowEduErrMessage } =
    useContext(EduErrMsgContext);

  useEffect(() => {
    let timeout;
    if (showEduErrMessage) {
      timeout = setTimeout(() => setShowEduErrMessage(false), 5000);
    }
    return () => clearTimeout(timeout);
  }, [showEduErrMessage, setShowEduErrMessage]);

  return showEduErrMessage && <InvalidFormMessage />;
}

export default InvalidEduFormMsg;
