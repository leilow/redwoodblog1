import { Loading, Empty, Failure, Success } from './ArticlesCell'
import { standard } from './ArticlesCell.mock'

const meta = {
  title: 'Cells/ArticlesCell',
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
