import React, { useCallback, useState } from 'react'
import { Box, Button, TextField, Typography } from '@material-ui/core'
import styled from '@emotion/styled'
import { isValidUrl } from '@/lib'
import { ShortUrlModal } from './ShortUrlModal'
import axios from 'axios'

const StyledBox = styled(Box)`
  background-color: white;
  margin: 3rem 5rem;
  max-width: 30rem;
  padding: 1.5rem;
  @media (max-width: 40em) {
    margin: 2rem 3rem;
  }

  button {
    margin-top: 1rem;
  }
`

const StyledInput = styled(TextField)`
  width: 100%;
`

export const Form: React.FC = () => {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [shortUrl, setShortUrl] = useState('')

  const handleSubmit = useCallback(
    (ev) => {
      ev.preventDefault()
      if (!isValidUrl(url)) {
        setError('Please enter a valid URL')
      } else if (!loading) {
        setLoading(true)
        void axios
          .post('/api', { url })
          .then((res) => setShortUrl(res.data))
          .catch((e) => {
            console.error(e)
            setError('Something went wrong')
          })
          .finally(() => setLoading(false))
      }
    },
    [url, loading],
  )

  const resetError = useCallback(() => setError(''), [])

  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      resetError()
      setUrl(ev.currentTarget.value)
    },
    [resetError],
  )

  return (
    <>
      <StyledBox
        boxShadow={4}
        component="form"
        onSubmit={handleSubmit}
        onFocus={resetError}
        onBlur={resetError}
      >
        <Typography variant="subtitle1" gutterBottom>
          Paste the URL you want to shorten
        </Typography>
        <StyledInput
          id="urlInput"
          placeholder="https://example.com"
          value={url}
          onChange={handleChange}
          error={!!error}
          helperText={error}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Shorten
        </Button>
      </StyledBox>

      <ShortUrlModal shortUrl={shortUrl} onClose={() => setShortUrl('')} />
    </>
  )
}
