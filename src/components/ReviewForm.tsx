"use client";
import { FormValues } from "@/interface";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 50px;
  
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 0.5px solid;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 0.5px solid;
  border-radius: 8px;
  height: 120px;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100px;
  border-radius: 9px;
`;
export default function ReviewForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    name: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`message successfully sent`);
    console.log("Form values:", formValues);
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          required
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />

        <Label htmlFor="message">Message:</Label>
        <TextArea
          id="message"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Sent</SubmitButton>
      </FormContainer>
    </div>
  );
}