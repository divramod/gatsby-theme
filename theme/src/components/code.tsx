import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import dracula from 'prism-react-renderer/themes/dracula'
import Confetti from 'react-dom-confetti'

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const copyToClipboard = str => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

const Wrapper = props => <div style={{ position: 'relative' }} {...props} />

const ConfettiWrapper = props => (
  <div style={{ position: 'absolute', top: 0, right: 0 }} {...props} />
)

const Text = props => (
  <p
    style={{
      color: '#E2E8F0',
      fontSize: '14px',
      fontFamily: 'sans-serif',
      lineHeight: '1',
      margin: 0,
    }}
    {...props}
  />
)

const Button = props => (
  <button
    style={{
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      margin: '0px',
      paddingRight: '3px',
      paddingLeft: '3px',
      cursor: 'pointer',
      fontFamily: 'sans-serif',
      lineHeight: '2',
      display: 'inline-block',
      backgroundColor: '#F9E79F',
      borderBottomLeftRadius: '5px',
      borderTopRightRadius: '5px',
    }}
    {...props}
  />
)

export const Code = ({ codeString, children, language, ...props }) => {
  const splittedCodeDescription = language.split(':')
  language = splittedCodeDescription[0]
  let showFile = false
  let file = ''
  if (splittedCodeDescription.length > 1) {
    file = splittedCodeDescription[1].split('=')[1]
  }
  const [isCopied, setIsCopied] = React.useState(false)
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Wrapper>
        <Highlight
          {...defaultProps}
          code={codeString}
          language={language}
          theme={dracula}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                paddingTop: '2.5rem',
                position: 'relative',
                borderRadius: '5px',
              }}
            >
            <div style={{
              width: '100%',
              textAlign: 'center',
              top: 0,
              left: 0,
              position: 'absolute',
              marginBottom: '20px',
            }}>
              <div style={{
                display: 'inline-block',
                borderTopLeftRadius: '5px',
                padding: '0px',
              }}>
                <Button
                  style={{
                    top: -2,
                    left: -2,
                    paddingLeft: '3px',
                    paddingRight: '3px',
                    position: 'absolute',
                    margin: '0px',
                    backgroundColor: '#F9E79F',
                    borderBottomRightRadius: '5px',
                    borderTopLeftRadius: '5px',
                    lineHeight: '2',
                  }}
                  dangerouslySetInnerHTML={ { __html: language }}
                ></Button>
                <Button
                  style={{
                    position: 'absolute',
                    top: -2,
                    left: 350,
                    paddingLeft: '3px',
                    paddingRight: '3px',
                    marginTop: '0px',
                    backgroundColor: '#F9E79F',
                    borderBottomRightRadius: '5px',
                    borderBottomLeftRadius: '5px',
                    lineHeight: '2',
                  }}
                  dangerouslySetInnerHTML={ { __html: file }}
                ></Button>
              </div>
              <div style={{ display: 'inline-block'}}>
                <Button
                  onClick={() => {
                    copyToClipboard(codeString)
                    setIsCopied(true)
                    setTimeout(() => setIsCopied(false), 3000)
                  }}
                >
                  {isCopied ? '🎉 Copied!' : 'Copy'}
                </Button>
              </div>
            </div>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })} style={style}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <ConfettiWrapper>
          <Confetti active={isCopied} config={config} />
        </ConfettiWrapper>
      </Wrapper>
    )
  }
}
