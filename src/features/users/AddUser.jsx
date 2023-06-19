import { useState } from "react";
import { useDispatch } from "react-redux";

import { userAdded } from "./usersSlice";


const AddUser = () => {
  const dispatch = useDispatch();

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onPhoneChange = (e) => setPhone(e.target.value);

  const onFormClick = () => {
    if (Name && email) {
      dispatch(userAdded(Name, email, phone));
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  const canSave = Boolean(Name) && Boolean(email) && Boolean(phone);

  return (
    <form>
      <label>Name</label>
      <input type="text" value={Name} onChange={onNameChange} />
      <label>Phone:</label>
      <input value={phone} onChange={onPhoneChange} />
      <label>email</label>
      <input type="test" value={email} onChange={onEmailChange} />
      <button onClick={onFormClick} type="button" disabled={!canSave}>
        submit
      </button>
    </form>
  );
};

export default AddUser;
