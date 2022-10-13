import type {NextPage} from 'next';
import {useRouter} from 'next/router';
const Burner_Id: NextPage = () => {
  const router = useRouter();
  const {burner_id} = router.query;
  return (
    <>
      {typeof burner_id === 'string' && `burner_id: ${burner_id}`}
      <br />
      You can Change the 1337 path to any number to see the burner_id
      <br/>
      On this page, users can select the NFTs whitelisted by the burner and burn
      them. The NFTs are displayed on a grid and can be selected one by one or
      get selected all at once (through a button). User can also deselect all. A
      button gets activated once the minimum number of NFTs needed for the burn
      is reached (can be 1 or more). Once burn is complete, a toast tells the
      user all went good (or bad) and the UI is refreshed.
    </>
  );
};

export default Burner_Id;
