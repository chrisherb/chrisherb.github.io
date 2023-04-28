import { Box, Button, Layer, Markdown } from "grommet";
import { FormClose } from "grommet-icons";
import React, { useState } from "react";

export const TrnrCookieBanner = () => {
  const [open, setOpen] = useState(true);
  const onClose = () => setOpen(false);

  return (
    <>
      {open && (
        <Layer
          position="bottom"
          background="status-warning"
          full="horizontal"
          modal={false}
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box
            align="center"
            justify="between"
            direction="row"
            gap="small"
            pad="medium"
          >
            <Markdown>
              ** This site uses cookies to guarantee users the employment of its
              site features. By continuing to browse the site you're agreeing to
              our use of cookies. ** [More information on our use of
              cookies](https://nocookielaw.com/)
            </Markdown>
            <Button icon={<FormClose />} onClick={onClose} />
          </Box>
        </Layer>
      )}
    </>
  );
};
