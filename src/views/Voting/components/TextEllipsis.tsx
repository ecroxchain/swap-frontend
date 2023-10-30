import styled from 'styled-components'
import { Text } from '@ecrox/uikit'

const TextEllipsis = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default TextEllipsis
