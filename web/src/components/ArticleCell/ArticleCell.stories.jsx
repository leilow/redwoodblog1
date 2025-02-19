import { Loading, Empty, Failure, Success } from './ArticleCell'
import { standard } from './ArticleCell.mock'

const meta = {
  title: 'Cells/ArticleCell',
  tags: ['autodocs'],
}

export default meta

export const loading = {
  render: () => {
    return Loading ? <Loading /> : <></>
  },
}

export const empty = {
  render: () => {
    return Empty ? <Empty /> : <></>
  },
}

export const failure = {
  render: (args) => {
    return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
  },
}

export const Success = {
  render: (args) => {
    return Success ? <Success {...standard()} {...args} /> : <></>
  },
}
