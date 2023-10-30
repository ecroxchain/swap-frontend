import { Link, Text } from '@ecrox/uikit'
import { getBscScanLink } from 'utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from 'contexts/Localization'
import truncateHash from 'utils/truncateHash'

interface DescriptionWithTxProps {
  description?: string
  txHash?: string
}

const DescriptionWithTx: React.FC<DescriptionWithTxProps> = ({ txHash, children }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  return (
    <>
      {typeof children === 'string' ? <Text as="p" color="contrast">{children}</Text> : children}
      {txHash && (
        <Link external href={getBscScanLink(txHash, 'transaction', chainId)}>
          {t('View on Explorer')}: {truncateHash(txHash, 8, 0)}
        </Link>
      )}
    </>
  )
}

export default DescriptionWithTx
