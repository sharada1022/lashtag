import React, {useForm} from "react";


function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" name="name" ref={register} />
      <input
        type="text"
        placeholder="Email Address"
        name="email"
        ref={register}
      />
      <input
        type="text"
        placeholder="Phone Number"
        name="number"
        ref={register}
      />
      <input type="submit" />
    </form>
  );
}

export default Form;
