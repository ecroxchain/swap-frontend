import { Button } from '@ecrox/uikit'

import { useTranslation } from 'contexts/Localization'

const StakeVaultButton = (props) => {
  const { t } = useTranslation()

  return (
    <Button {...props} disabled>
      {t('Stake SECROX in IFO pool')}
    </Button>
  )
}

export default StakeVaultButton
