import React from 'react'
import {
  ForegroundWrapper,
  Hash,
  HexWrapper,
  ColourControlWrapper,
  ColourHeader,
} from './styled'
import { Config } from './config'
import { SmallText } from '../typography'
import chroma from 'chroma-js'

export const Foreground = ({
  color,
  getForegroundTextColor,
  colorText,
  setForeground,
  onClick,
  fontSize,
  bold,
  setBold,
  maxFontSize,
  minFontSize,
  setFontSize,
}) => {
  const [fontDragInfo, setFontDragInfo] = React.useState(null)

  const mouseMove = React.useCallback(
    e => {
      if (!fontDragInfo) {
        return
      }
      const diff = fontDragInfo.x - e.clientX
      if (diff === 0) {
        return
      }

      const newFont = Math.round(Number(fontDragInfo.fontSize) + -diff / 10)
      if (newFont > maxFontSize) {
        setFontSize(maxFontSize.toString())
      } else if (newFont < minFontSize) {
        setFontSize(minFontSize.toString())
      } else {
        setFontSize(newFont.toString())
      }
    },
    [fontDragInfo, maxFontSize, minFontSize, setFontSize],
  )

  const mouseUp = React.useCallback(() => {
    setFontDragInfo(null)
  }, [])

  React.useEffect(() => {
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
    return () => {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }
  })

  return (
    <ColourControlWrapper>
      <ColourHeader>
        <SmallText>Text</SmallText>
        <Config
          fontSize={fontSize}
          setFontDragInfo={setFontDragInfo}
          setFontSize={setFontSize}
          maxFontSize={maxFontSize}
          minFontSize={minFontSize}
          bold={bold}
          setBold={setBold}
        />
      </ColourHeader>
      <ForegroundWrapper
        color={color}
        onClick={e => {
          if (e.target === e.currentTarget) {
            onClick()
          }
        }}
      >
        <Hash textColour={getForegroundTextColor}>#</Hash>
        <HexWrapper
          type="text"
          name="foreground"
          autocomplete="off"
          textColour={getForegroundTextColor}
          value={colorText}
          onKeyPress={e => {
            if (e.key.match(/[^0-9a-fA-F]/) && !e.metaKey) {
              e.preventDefault()
            }
          }}
          onPaste={e => {
            const text = e.clipboardData.getData('Text')
            e.preventDefault()
            if (chroma.valid(text)) {
              setForeground(
                chroma(text)
                  .alpha(1)
                  .hex()
                  .replace('#', ''),
              )
            }
          }}
          onChange={e => {
            setForeground(e.target.value)
          }}
        />
      </ForegroundWrapper>
    </ColourControlWrapper>
  )
}
