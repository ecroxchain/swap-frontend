import styled from 'styled-components'
import { Box } from '@secrox/uikit'
import Container from '../Layout/Container'
import { PageHeaderProps } from './types'

const Outer = styled(Box)<{ background?: string }>`
  background: ${({ theme, background }) => background || theme.colors.gradients.bubblegum};
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const PageHeader: React.FC<PageHeaderProps> = ({ 
  // background, 
  children, ...props }) => (
  <Outer background='#141414' {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
