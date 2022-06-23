
import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";


export default function HookForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form style={{backgroundColor: "lightblue", padding: "100px"}} onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
     
      <label>First Name </label><input {...register("firstName")} placeholder="First name" />
      <br></br>
      <br></br>
      <select {...register("option")}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <br></br>
      <br></br>
    <textarea {...register("about")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
}
