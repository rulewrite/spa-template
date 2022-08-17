import { useRecoilValue } from 'recoil';
import countState from '../state/count';

export default () => {
  const count = useRecoilValue(countState);

  return <div>hello Bpage {count}</div>;
};
