import { styled } from "styled-components";
import { Form, FormTitle, Group, Input, Label, Submit } from "./Form";
import { FormEvent, useRef, useState } from "react";
import useCalculate, { useCalculatorReturn } from "../hooks/useCalculate";
export default function Calculator({ onClick }: { onClick: () => void }) {
  const length = useRef<HTMLInputElement | null>(null);
  const width = useRef<HTMLInputElement | null>(null);
  const height = useRef<HTMLInputElement | null>(null);
  const weight = useRef<HTMLInputElement | null>(null);
  const [data, setData] = useState<null | useCalculatorReturn>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (length.current && width.current && height.current && weight.current) {
      const data = useCalculate(parseFloat(width.current.value), parseFloat(length.current.value), parseFloat(height.current.value), parseFloat(weight.current.value));
      setData(data);
    }
  }

  return (
    <Form id="calculator" onSubmit={submit} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", background: "#F1F1F1", rowGap: "20px" }}>
      <Close onClick={onClick}>x</Close>
      <FormTitle style={{ width: "100%", marginBottom: "20px" }}>Calculator</FormTitle>
      <Group style={{ width: "44%", margin: 0 }}>
        <Label>Length in CM</Label>
        <Input ref={length} type="text" placeholder="0" />
      </Group>
      <Group style={{ width: "44%", margin: 0 }}>
        <Label>Width in CM</Label>
        <Input ref={width} type="text" placeholder="0" />
      </Group>
      <Group style={{ width: "44%", margin: 0 }}>
        <Label>Height in CM</Label>
        <Input ref={height} type="text" placeholder="0" />
      </Group>
      <Group style={{ width: "44%", margin: 0 }}>
        <Label>Weight in KG</Label>
        <Input ref={weight} type="text" placeholder="0" />
      </Group>
      <Submit style={{ marginBottom: "20px" }}>Calculate</Submit>
      {data && (
        <>
          <Title>Calculation type </Title>
          <Value>{data?.type}</Value>
          <Title>{data?.type} Weight</Title>
          <Value>{data?.weight} KG</Value>
          <Title>Approximate Price</Title>
          <Value>{data?.priceInGEL} ₾</Value>
        </>
      )}
    </Form>
  );
}

const Title = styled.p`
  width: 48%;
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;

const Value = styled.p`
  text-align: right;
  width: 48%;

  color: #000;
  font-size:28px;
  font-weight: 500;
`;

const Close = styled(Submit)`
  background: none;
  color: black;
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: -50px;
  right: 20px;
  font-size: 26px;
  padding: 4px;
  @media (max-width: 480px) {
    top: -30px;
    right: 12px;
  }
`;
