import { CardHeader, Flex, Heading, Text } from '@ecrox/uikit'
import { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  background: #f2f2f2;
  border-radius: ${({ theme }) => `${theme.radii.card} ${theme.radii.card} 0 0`};
`

const PoolCardHeader: React.FC<{
  isFinished?: boolean
  isStaking?: boolean
}> = ({ isFinished = false, isStaking = false, children }) => {
  const background = isStaking ? 'bubblegum' : 'cardHeader'

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="space-between">
        {children}
      </Flex>
    </Wrapper>
  )
}

export const PoolCardHeaderTitle: React.FC<{ isFinished?: boolean; title: ReactNode; subTitle: ReactNode }> = ({
  isFinished,
  title,
  subTitle,
}) => {
  return (
    <Flex flexDirection="column">
      <Heading color={isFinished ? 'textDisabled' : '#EC233B'} scale="lg">
        {title}
      </Heading>
      <Text fontSize="14px" color={isFinished ? 'textDisabled' : '#000000'}>
        {subTitle}
      </Text>
    </Flex>
  )
}

export default PoolCardHeader
