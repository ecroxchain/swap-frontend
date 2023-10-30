import { Flex, Text } from '@ecrox/uikit'
import { useTranslation } from 'contexts/Localization'

const LockDurationRow = ({ weekDuration }) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text  textTransform="uppercase" bold fontSize="12px">
        {t('Lock Duration')}
      </Text>
      <Text  bold fontSize="16px">
        {weekDuration}
      </Text>
    </Flex>
  )
}

export default LockDurationRow
