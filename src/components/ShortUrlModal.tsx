import styled from '@emotion/styled'
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from '@material-ui/core'
import { useCallback, useRef } from 'react'
import copy from 'clipboard-copy'

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const StyledBox = styled(Box)`
  background-color: white;
  width: 30rem;
  max-width: calc(100vw - 6rem);
  margin-top: 5rem;
  padding: 1.5rem;
  position: relative;
`

const StyledInput = styled(TextField)`
  width: 100%;
`

const StyledButton = styled(Button)`
  min-width: unset;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export interface ShortUrlModalProps {
  shortUrl: string
  onClose: () => void
}

export const ShortUrlModal: React.FC<ShortUrlModalProps> = ({
  shortUrl,
  onClose,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const selectUrl = useCallback(() => {
    inputRef.current?.setSelectionRange(0, 0) // reset selection first
    inputRef.current?.setSelectionRange(0, shortUrl.length)
  }, [shortUrl])

  const onCopy = useCallback(
    () => copy(shortUrl).then(() => onClose()),
    [shortUrl, onClose],
  )

  return (
    <StyledModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={!!shortUrl}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={!!shortUrl}>
        <StyledBox boxShadow={10}>
          <Typography
            id="transition-modal-title"
            variant="subtitle1"
            gutterBottom
          >
            Here’s your shortened url:
          </Typography>
          <StyledButton onClick={onClose}>
            <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24">
              <path
                d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
                fill="black"
              />
            </svg>
          </StyledButton>
          <div style={{ display: 'flex' }}>
            <StyledInput
              id="shortUrl"
              value={shortUrl}
              variant="outlined"
              onClick={selectUrl}
              inputRef={inputRef}
              inputProps={{ readOnly: true }}
            />
            <Button onClick={onCopy}>
              <svg width="1.5rem" height="1.5rem" viewBox="0 0 210.107 210.107">
                <path
                  fill="black"
                  d="M168.506 0H80.235C67.413 0 56.981 10.432 56.981 23.254v2.854h-15.38c-12.822 0-23.254 10.432-23.254 23.254v137.492c0 12.822 10.432 23.254 23.254 23.254h88.271c12.822 0 23.253-10.432 23.253-23.254V184h15.38c12.822 0 23.254-10.432 23.254-23.254V23.254C191.76 10.432 181.328 0 168.506 0zm-30.38 186.854c0 4.551-3.703 8.254-8.253 8.254H41.601c-4.551 0-8.254-3.703-8.254-8.254V49.361c0-4.551 3.703-8.254 8.254-8.254h88.271c4.551 0 8.253 3.703 8.253 8.254v137.493zm38.634-26.108c0 4.551-3.703 8.254-8.254 8.254h-15.38V49.361c0-12.822-10.432-23.254-23.253-23.254H71.981v-2.854c0-4.551 3.703-8.254 8.254-8.254h88.271c4.551 0 8.254 3.703 8.254 8.254v137.493z"
                />
              </svg>
            </Button>
          </div>
        </StyledBox>
      </Fade>
    </StyledModal>
  )
}
