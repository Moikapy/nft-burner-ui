import type {NextPage} from 'next';

const Admin: NextPage = () => {
  return (
    <>
      This page shows a form that the user creating the burner can fill. For now
      there are only 3 fields: - Whitelisted NFT creator ID - Amount of SPL
      token received upon burn completion - Number of NFT to burn to get one
      unit of amount of this burner’s SPL token - Amount of SPL token to be
      deposited for this burner (will then trigger a transaction). Can be
      triggered multiple times to add more SPL token if needed. - Withdraw a
      certain amount of the SPL token from the burner.
    </>
  );
};

export default Admin;
