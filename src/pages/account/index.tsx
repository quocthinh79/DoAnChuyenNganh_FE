import {
  AccountLeftContent,
  AccountRightContent,
  LeftRightLayout,
} from "@compositions";

export function Account() {
  return (
    <LeftRightLayout
      leftChildren={<AccountLeftContent />}
      rightChildren={<AccountRightContent />}
    />
  );
}

export default Account;
