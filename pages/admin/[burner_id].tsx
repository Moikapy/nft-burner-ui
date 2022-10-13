import type {NextPage} from 'next';
import {useRouter} from 'next/router';

const Admin_Burner_Id: NextPage = () => {
  const router = useRouter();
  const {burner_id} = router.query;
  return (
    <>
      {typeof burner_id === 'string' && `burner_id: ${burner_id}`}
      <br />
      You can Change the 1337 path to any number to see the burner_id
      <br />
      Same form as the “Admin” page but pre-filled so that the user who created
      the burner can update the fields
    </>
  );
};

export default Admin_Burner_Id;
